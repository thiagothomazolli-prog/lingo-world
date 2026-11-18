const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const token = process.env.GITHUB_TOKEN;
const repo = 'thiagothomazolli-prog/lingo-world';
const tag = 'v1.18.0';
const releaseName = 'Lingo World v1.18.0 - Imagens Contextuais Específicas, Módulos de Pronomes Separados (1 a cada 3) e Voz Humana Real da Professora';

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
    const latestRun = data.workflow_runs && data.workflow_runs.find(r => r.head_commit?.message?.startsWith('v1.18.0'));
    if (!latestRun) {
      console.log('Waiting for v1.18.0 workflow run to appear...');
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
  const apkOutPath = path.join(rootDir, 'LingoWorld-v1.18.0.apk');

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
  console.log(`Found APK: LingoWorld-v1.18.0.apk (${(apkStats.size / (1024 * 1024)).toFixed(2)} MB)`);

  console.log('4. Creating GitHub Release', tag);
  const body = `## 🚀 Lingo World v1.18.0 — Imagens Contextuais Completas (Calçada, Telhado na Casa, etc.), Módulos de Pronomes Separados (1 a cada 3 de Vocabulário) e Voz Humana Real da Professora

### ✨ Principais Melhorias desta Versão:
- **🏠 Imagens Contextuais Completas e Específicas:**
  - Atualizadas todas as imagens estruturais e de ambientes (*Calçada completa na rua, Telhado na casa focado no telhado, Muro de tijolos, Cerca na frente da casa, Capacho na porta, Maçaneta e Fechadura na porta, Parede pintada, Rack de TV na sala, Tomada e Interruptor na parede, Piso cerâmico no chão, Armários, Gaveta aberta, Pia, Torneira, Pedra/Bancada e Ilha na cozinha, Coifa e Depurador sobre o fogão, Faixa de pedestres na rua, Sala de aula, Interior da Igreja, Altar, Bancos da igreja*, etc.) para mostrarem o elemento completo em seu contexto real em vez de blocos soltos recortados.
- **📚 Módulos de Pronomes Separados (1 Módulo de Pronomes a cada 3 de Vocabulário) e Explicação Apenas Onde Houver Pronomes:**
  - Os 12 módulos de vocabulário agora são 100% focados no vocabulário visual (sem quadro de explicação da professora nos itens de vocabulário).
  - A cada **3 módulos de vocabulário**, entra **1 Módulo Exclusivo de Pronomes** (Fases 4, 8, 12 e 16):
    - **Fase 4 (após Vocabulário 1, 2 e 3):** *Lição de Pronomes I • Pessoais & De Tratamento*
    - **Fase 8 (após Vocabulário 4, 5 e 6):** *Lição de Pronomes II • Possessivos & Demonstrativos*
    - **Fase 12 (após Vocabulário 7, 8 e 9):** *Lição de Pronomes III • Reflexivos & Interrogativos*
    - **Fase 16 (após Vocabulário 10, 11 e 12):** *Lição de Pronomes IV • Indefinidos & Relativos*
- **👩‍🏫 Voz Humana Real e Meiga da Professora (Zero Voz do Google Maps):**
  - Substituído o sintetizador do Google Translate/Maps por **8 gravações de voz humana neural real (Gemini 2.5 Human Voice — Aoede)** embutidas diretamente no APK (\`/audio/teacher/pronoun_1.wav\` a \`pronoun_8.wav\`), com entonação meiga, doce, calma e acolhedora de mãe bondosa explicando cada família de pronomes!`;

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

  console.log('5. Uploading LingoWorld-v1.18.0.apk to release...');
  const apkBuffer = fs.readFileSync(apkOutPath);
  const uploadUrl = `https://uploads.github.com/repos/${repo}/releases/${releaseData.id}/assets?name=LingoWorld-v1.18.0.apk`;

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
  console.log('DOWNLOAD LINK:', `https://github.com/${repo}/releases/download/${tag}/LingoWorld-v1.18.0.apk`);
  console.log('=======================================\n');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

