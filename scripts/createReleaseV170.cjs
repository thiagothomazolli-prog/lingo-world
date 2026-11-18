const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const token = process.env.GITHUB_TOKEN;
const repo = 'thiagothomazolli-prog/lingo-world';
const tag = 'v1.21.0';
const releaseName = 'Lingo World v1.21.0 - 6 Temas x 4 Módulos por Frequência (8 Palavras Genéricas), Imagens Sempre Visíveis, Card da Resposta Completo e Professora Didática';

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getLatestCompletedRun() {
  let retriedQueued = false;
  while (true) {
    const res = await fetch(`https://api.github.com/repos/${repo}/actions/runs?per_page=3`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'Node-LingoWorld'
      }
    });
    const data = await res.json();
    const latestRun = data.workflow_runs && data.workflow_runs.find(r => r.head_commit?.message?.startsWith('v1.21.0'));
    if (!latestRun) {
      console.log('Waiting for v1.21.0 workflow run to appear...');
      await sleep(5000);
      continue;
    }
    console.log(`Run #${latestRun.run_number} (ID: ${latestRun.id}): ${latestRun.status} / ${latestRun.conclusion || 'running'} - Commit: ${latestRun.head_commit?.message?.slice(0, 60)}`);

    if (latestRun.status === 'queued' && !retriedQueued) {
      const ageMs = Date.now() - new Date(latestRun.created_at).getTime();
      if (ageMs > 90000) {
        console.log(`Run #${latestRun.run_number} was stuck in queued for ${(ageMs/1000).toFixed(0)}s. Cancelling and dispatching a fresh run...`);
        retriedQueued = true;
        await fetch(`https://api.github.com/repos/${repo}/actions/runs/${latestRun.id}/cancel`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}`, 'User-Agent': 'Node-LingoWorld' }
        });
        await sleep(3000);
        await fetch(`https://api.github.com/repos/${repo}/actions/workflows/build-apk.yml/dispatches`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'User-Agent': 'Node-LingoWorld',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ref: 'main' })
        });
        await sleep(8000);
        continue;
      }
    }

    if (latestRun.status === 'completed') {
      if (latestRun.conclusion === 'cancelled' && retriedQueued) {
        await sleep(5000);
        continue;
      }
      if (latestRun.conclusion !== 'success') {
        throw new Error(`Workflow run #${latestRun.run_number} finished with conclusion: ${latestRun.conclusion}`);
      }
      return latestRun.id;
    }
    await sleep(10000);
  }
}

async function run() {
  console.log('0. Waiting for GitHub Actions build for v1.7.0 to finish...');
  const runId = await getLatestCompletedRun();

  console.log('1. Fetching artifacts for run', runId);
  const artifactsRes = await fetch(`https://api.github.com/repos/${repo}/actions/runs/${runId}/artifacts`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'User-Agent': 'Node-LingoWorld'
    }
  });
  const artifactsData = await artifactsRes.json();
  const artifact = artifactsData.artifacts.find(a => a.name === 'LingoWorld-APK' || a.name === 'app-debug') || artifactsData.artifacts[0];
  if (!artifact) {
    throw new Error('No artifact found!');
  }

  console.log(`2. Downloading artifact ${artifact.id}...`);
  const downloadRes = await fetch(artifact.archive_download_url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'User-Agent': 'Node-LingoWorld'
    }
  });

  const arrayBuffer = await downloadRes.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const rootDir = path.resolve(__dirname, '..');
  const zipPath = path.join(rootDir, 'app-debug.zip');
  const extractDir = path.join(rootDir, 'extracted_apk');
  const apkOutPath = path.join(rootDir, 'LingoWorld-v1.21.0.apk');

  fs.writeFileSync(zipPath, buffer);
  console.log('Downloaded app-debug.zip, size:', buffer.length);

  console.log('3. Extracting APK...');
  if (fs.existsSync(extractDir)) {
    fs.rmSync(extractDir, { recursive: true, force: true });
  }
  fs.mkdirSync(extractDir);

  execSync(`powershell -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::ExtractToDirectory('${zipPath}', '${extractDir}')"`, { stdio: 'inherit' });

  const files = fs.readdirSync(extractDir);
  console.log('Extracted files:', files);
  const apkName = files.find(f => f.endsWith('.apk'));
  if (!apkName) throw new Error('No .apk found in zip!');

  fs.copyFileSync(path.join(extractDir, apkName), apkOutPath);
  const apkStats = fs.statSync(apkOutPath);
  console.log(`Found APK: LingoWorld-v1.21.0.apk (${(apkStats.size / (1024 * 1024)).toFixed(2)} MB)`);

  console.log('4. Creating GitHub Release', tag);
  const body = `## 🚀 Lingo World v1.21.0 — 6 Temas × 4 Módulos por Frequência (8 Palavras Genéricas), Imagens dos Cards Sempre Visíveis, Card da Resposta 100% Completo e Professora Didática

### ✨ Principais Melhorias desta Versão:
- **📚 6 Temas Divididos em 4 Módulos por Frequência de Uso (8 Palavras Genéricas por Módulo):**
  - Mantendo o formato da trilha atual (\`v1.18\`), cada tema (**1. A Casa, 2. Comida, 3. Corpo Humano, 4. Transporte, 5. Roupas e 6. Trabalho**) está organizado em 4 módulos progressivos:
    - **Módulo 1:** Palavras essenciais e mais comuns
    - **Módulo 2:** Palavras comuns
    - **Módulo 3:** Palavras intermediárias
    - **Módulo 4:** Palavras menos comuns ou específicas
  - **8 palavras genéricas por módulo** (entre 6 e 10 palavras, para não sobrecarregar o aluno), usando termos genéricos (ex.: \`Wall\`, \`Door\`, \`Roof\`).
- **🖼️ Imagens dos Cards Sempre Visíveis:**
  - Corrigida a altura determinística dos 4 cards da grade (\`h-[148px] sm:h-[205px] block\`) e removido o \`opacity-0\` das imagens em \`VocabIllustration.tsx\`, garantindo que as 4 imagens fiquem **sempre 100% visíveis na tela** ocupando o card inteiro.
- **✅ Card da Resposta Aparece por Completo ao Confirmar:**
  - Ao tocar em **Verificar**, o título da pergunta e o botão de dúvida recolhem-se para que o **Card da Resposta apareça 100% por completo na tela (sem cortes)**, indicando claramente a resposta correta, a foto completa, a palavra em inglês, a tradução em português, a pronúncia simplificada e a frase curta de exemplo.
- **👩‍🏫 Explicação dos Pronomes Didática, Clara e Menos Infantil (Texto + Voz Humana Regravada):**
  - Reescritas todas as explicações de pronomes e regravados os 8 áudios de voz humana da professora (\`pronoun_1.wav\` a \`pronoun_8.wav\`) com linguagem **didática, clara, objetiva e sem termos infantilizados**.`;

  const releaseRes = await fetch(`https://api.github.com/repos/${repo}/releases`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'User-Agent': 'Node-LingoWorld',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      tag_name: tag,
      target_commitish: 'main',
      name: releaseName,
      body: body,
      draft: false,
      prerelease: false
    })
  });

  const releaseData = await releaseRes.json();
  if (!releaseData.id) {
    console.error('Failed to create release:', releaseData);
    throw new Error('Release creation failed');
  }
  console.log('Release created:', releaseData.id, releaseData.html_url);

  console.log('5. Uploading LingoWorld-v1.21.0.apk to release...');
  const apkBuffer = fs.readFileSync(apkOutPath);
  const uploadUrl = `https://uploads.github.com/repos/${repo}/releases/${releaseData.id}/assets?name=LingoWorld-v1.21.0.apk`;

  const uploadRes = await fetch(uploadUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'User-Agent': 'Node-LingoWorld',
      'Content-Type': 'application/vnd.android.package-archive',
      'Content-Length': apkBuffer.length
    },
    body: apkBuffer
  });

  const assetData = await uploadRes.json();
  console.log('Asset uploaded successfully!', assetData.browser_download_url);
  console.log('\n=======================================');
  console.log('DOWNLOAD LINK:', `https://github.com/${repo}/releases/download/${tag}/LingoWorld-v1.21.0.apk`);
  console.log('=======================================\n');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

