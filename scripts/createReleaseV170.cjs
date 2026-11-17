const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const token = process.env.GITHUB_TOKEN;
const repo = 'thiagothomazolli-prog/lingo-world';
const tag = 'v1.17.0';
const releaseName = 'Lingo World v1.17.0 - Pronomes Associativos (Pessoais a Relativos), Explicação p/ 5 Anos e Voz Meiga da Professora';

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
    const latestRun = data.workflow_runs && data.workflow_runs.find(r => r.head_commit?.message?.startsWith('v1.17.0'));
    if (!latestRun) {
      console.log('Waiting for v1.17.0 workflow run to appear...');
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
  const apkOutPath = path.join(rootDir, 'LingoWorld-v1.17.0.apk');

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
  console.log(`Found APK: LingoWorld-v1.17.0.apk (${(apkStats.size / (1024 * 1024)).toFixed(2)} MB)`);

  console.log('4. Creating GitHub Release', tag);
  const body = `## 🚀 Lingo World v1.17.0 — Pronomes Associativos (Pessoais a Relativos), Explicação p/ Criança de 5 Anos e Voz Meiga da Professora

### ✨ Principais Melhorias desta Versão:
- **👩‍🏫 Cabeçalho Explicativo com Voz Meiga da Professora:**
  - Cada exercício traz no topo uma explicação curta, carinhosa e fácil de entender até para uma criança de 5 anos.
  - Botão **🔊 Ouvir Professora** (e reprodução automática nos exercícios de pronomes) com voz feminina meiga, calma e acolhedora em português brasileiro (\`pt-BR\`), explicando o conceito como uma mãe bondosa antes da prática.
- **🤝 Exercícios Associativos de Pares para as 8 Famílias de Pronomes (Inseridos Entre os Exercícios):**
  - O usuário toca no pronome em inglês na esquerda (ouvindo a pronúncia nativa americana) e conecta ao seu par correspondente em português na direita, recebendo um reforço carinhoso da professora a cada par conectado!
  - Segue rigorosamente a sequência pedagógica solicitada:
    1. **Pronomes Pessoais:** *I, You, He, She, It, We, They*
    2. **Pronomes de Tratamento:** *Mr., Mrs., Miss, Sir, Ma'am*
    3. **Pronomes Possessivos:** *My, Your, His, Her, Our, Their*
    4. **Pronomes Demonstrativos:** *This, That, These, Those*
    5. **Pronomes Reflexivos:** *Myself, Yourself, Himself, Herself*
    6. **Pronomes Interrogativos:** *Who?, What?, Where?, When?*
    7. **Pronomes Indefinidos:** *Someone, Something, Everyone, Nothing*
    8. **Pronomes Relativos:** *Who, Which, That, Whose*`;

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

  console.log('5. Uploading LingoWorld-v1.17.0.apk to release...');
  const apkBuffer = fs.readFileSync(apkOutPath);
  const uploadUrl = `https://uploads.github.com/repos/${repo}/releases/${releaseData.id}/assets?name=LingoWorld-v1.17.0.apk`;

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
  console.log('DOWNLOAD LINK:', `https://github.com/${repo}/releases/download/${tag}/LingoWorld-v1.17.0.apk`);
  console.log('=======================================\n');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

