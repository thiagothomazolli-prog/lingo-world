const fs = require('fs');
const { execSync } = require('child_process');

require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const token = process.env.GITHUB_TOKEN;
const repo = 'thiagothomazolli-prog/lingo-world';
const runId = '42410996100';
const tag = 'v1.6.0';
const releaseName = 'Lingo World v1.6.0 - Expansão Pedagógica Massiva (2.160+ Exercícios)';

async function run() {
  console.log('1. Fetching artifacts for run', runId);
  const artifactsRes = await fetch(`https://api.github.com/repos/${repo}/actions/runs/${runId}/artifacts`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'User-Agent': 'Node-LingoWorld'
    }
  });
  const artifactsData = await artifactsRes.json();
  console.log('Artifacts:', artifactsData);

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
  fs.writeFileSync('app-debug.zip', buffer);
  console.log('Downloaded app-debug.zip, size:', buffer.length);

  // Extract using PowerShell .NET ZipFile
  console.log('3. Extracting APK...');
  if (fs.existsSync('extracted_apk')) {
    fs.rmSync('extracted_apk', { recursive: true, force: true });
  }
  fs.mkdirSync('extracted_apk');

  execSync(`powershell -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::ExtractToDirectory('app-debug.zip', 'extracted_apk')"`, { stdio: 'inherit' });

  // Locate the apk
  const files = fs.readdirSync('extracted_apk');
  console.log('Extracted files:', files);
  const apkName = files.find(f => f.endsWith('.apk'));
  if (!apkName) throw new Error('No .apk found in zip!');

  fs.copyFileSync(`extracted_apk/${apkName}`, 'LingoWorld-v1.6.0.apk');
  const apkStats = fs.statSync('LingoWorld-v1.6.0.apk');
  console.log(`Found APK: LingoWorld-v1.6.0.apk (${(apkStats.size / (1024 * 1024)).toFixed(2)} MB)`);

  // 4. Create Release
  console.log('4. Creating GitHub Release', tag);
  const body = `## 🚀 Lingo World v1.6.0 — Expansão Pedagógica Massiva (Mais de 2.160 Exercícios)

Nesta versão **v1.6.0**, todas as fases de todos os 7 mundos foram profundamente expandidas para garantir que o estudante realmente assimile e pratique cada conteúdo:

### ✨ Principais Melhorias desta Versão:
- **8 a 10 Exercícios por Fase Normal:** Cada uma das 210 fases do curso agora conta com um conjunto completo de exercícios diversificados (introdução visual, ordenação de palavras, escuta ativa com áudio oculto, preenchimento de lacunas, tradução contextual e prática oral de pronúncia com microfone).
- **11 a 12 Exercícios nos Baús de Sabedoria:** Fases de baú (Fases 10 e 20) com consolidação e revisão multidisciplinar das 9 fases anteriores.
- **15 a 16 Exercícios nas Batalhas de Chefe (Boss):** O grande desafio final de cada mundo (Fase 30) conta com 15 a 16 desafios épicos integrando escuta, fala, leitura, escrita e gramática.
- **Mais de 2.160 Exercícios Autênticos no Total:** Todo o conteúdo foi gerado e estruturado pedagogicamente sem opções genéricas de placeholder.
- **Feedback Visual Instantâneo em "Fill-in-the-Blank":** Ao verificar, o botão correto se destaca imediatamente em verde e a seleção errada em vermelho.
- **Áudio com Velocidade Normal e Lenta (0.65x):** Prática auditiva de alta precisão.
- **Transcrições Ocultas:** No modo Listening, a frase em inglês só é revelada após responder.

### 📱 Como Instalar no Android:
1. Baixe o arquivo **LingoWorld-v1.6.0.apk** abaixo.
2. Abra no seu dispositivo Android e toque em "Instalar" (ou "Atualizar").
3. Bons estudos no Lingo World!`;

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
  console.log('Release created:', releaseData.id, releaseData.html_url);

  // 5. Upload APK
  console.log('5. Uploading LingoWorld-v1.6.0.apk to release...');
  const apkBuffer = fs.readFileSync('LingoWorld-v1.6.0.apk');
  const uploadUrl = `https://uploads.github.com/repos/${repo}/releases/${releaseData.id}/assets?name=LingoWorld-v1.6.0.apk`;

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
  console.log('DOWNLOAD LINK:', `https://github.com/${repo}/releases/download/${tag}/LingoWorld-v1.6.0.apk`);
  console.log('=======================================\n');
}

run().catch(console.error);
