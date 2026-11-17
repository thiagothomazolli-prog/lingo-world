const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const token = process.env.GITHUB_TOKEN;
const repo = 'thiagothomazolli-prog/lingo-world';
const tag = 'v1.16.0';
const releaseName = 'Lingo World v1.16.0 - Imersão Completa por Ambientes (Casa, Rua, Escola, Mercado, Igreja) e Prova Escolar (Mínimo 70 Pontos)';

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
    const latestRun = data.workflow_runs && data.workflow_runs.find(r => r.head_commit?.message?.startsWith('v1.16.0'));
    if (!latestRun) {
      console.log('Waiting for v1.16.0 workflow run to appear...');
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
  const apkOutPath = path.join(rootDir, 'LingoWorld-v1.16.0.apk');

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
  console.log(`Found APK: LingoWorld-v1.16.0.apk (${(apkStats.size / (1024 * 1024)).toFixed(2)} MB)`);

  console.log('4. Creating GitHub Release', tag);
  const body = `## 🚀 Lingo World v1.16.0 — Imersão Completa por Ambientes (Da Entrada da Casa à Rua, Escola, Supermercado, Igreja e Cidade) + Prova Escolar com Nota Mínima 70

### ✨ Principais Melhorias desta Versão:
- **🏠 Parte 1 — Explorando a Residência Completa (Ambientes 1 a 7, Cômodo por Cômodo):**
  1. **Entrada da Casa, Calçada & Porta:** Calçada, portão, muro de tijolos, cerca, caixa de correio, campainha, interfone, jardim, vaso, capacho, degraus, porta de entrada, madeira, maçaneta, fechadura, metal, chave, chaveiro, cadeado, dobradiça, parede, tinta na parede, rolo de pintura, janela, vidro, telhado, telha, luminária externa, garagem e casa.
  2. **Sala de Estar, TV, Internet & Iluminação:** Sofá, almofadas, poltrona, rack de TV, televisão, controle remoto, modem/roteador de internet, porta-retrato, videogame, controle de videogame, caixa de som, mesa de centro, tapete, cortina, persiana, notebook, tomada, plugue, interruptor, lâmpada no teto, lustre/plafon, abajur, ventilador, ventilador de teto, ar-condicionado, piso cerâmico, estante, relógio de parede, vaso e telefone.
  3. **Cozinha I — Armários, Pia, Ilha, Fogão & Eletros:** Armário, porta do armário, gaveta, geladeira, freezer, mesa, cadeira, pia da cozinha, torneira, pedra/bancada de granito, ilha, banqueta, fogão, coifa, depurador de ar, luminária pendente, micro-ondas, forno elétrico, torradeira, cafeteira, liquidificador, batedeira, Air Fryer, sanduicheira, purificador de água, chaleira, balança, esponja, avental e lixeira.
  4. **Cozinha II — Panelas, Talheres, Utensílios & Dentro da Geladeira:** Panela, frigideira, panela de pressão, assadeira, garfo, faca, colher, concha, espátula, ralador, peneira, tábua de corte, rolo de massa, prato, tigela, copo, xícara, pote, saleiro, guardanapo e no interior da geladeira: garrafa de água, leite, manteiga, queijo, iogurte, ovos, suco, presunto, alface e maçã.
  5. **Quarto de Dormir & Guarda-Roupa:** Cama, colchão, travesseiro, cobertor, criado-mudo, guarda-roupa, cabide, espelho e todas as roupas, calçados e acessórios.
  6. **Banheiro & Higiene Pessoal:** Vaso sanitário, papel higiênico, pia do banheiro, chuveiro, banheira, toalha, sabonete em barra/líquido, shampoo, escova e pasta de dentes, fio dental, pente, escova de cabelo, secador, barbeador e partes do corpo.
  7. **Área de Serviço, Lavanderia, Quintal & Ferramentas:** Máquina de lavar, cesto de roupa, sabão líquido, pregador, ferro e tábua de passar, vassoura, pá de lixo, esfregão, balde, aspirador de pó, mangueira, regador, escada, martelo, chave de fenda, chave inglesa, alicate, serrote, trena, furadeira e pets no quintal.
- **🌆 Parte 2 — Explorando o Cotidiano ao Redor (Ambientes 8 a 12):**
  8. **Na Rua, Calçada, Trânsito & Vizinhança**
  9. **Na Escola, Sala de Aula & Material Escolar**
  10. **No Supermercado, Hortifrúti, Padaria & Caixa**
  11. **Na Igreja, Música, Comunidade & Celebração**
  12. **Restaurante, Hospital, Farmácia, Banco, Segurança & Viagem**
- **🎓 Sistema de Prova Escolar (Nota Mínima 70 Pontos):**
  - Ao concluir o ambiente, o aluno recebe seu **Boletim da Prova (0 a 100 pontos)**.
  - Só avança para o próximo cômodo/ambiente se atingir **70 pontos ou mais**.
  - Se tirar menos de 70 pontos, vê a **lista completa com foto, inglês, português e áudio de todos os exercícios que errou** e deve clicar em **"Refazer Toda a Prova Agora"** para tentar novamente!`;

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

  console.log('5. Uploading LingoWorld-v1.16.0.apk to release...');
  const apkBuffer = fs.readFileSync(apkOutPath);
  const uploadUrl = `https://uploads.github.com/repos/${repo}/releases/${releaseData.id}/assets?name=LingoWorld-v1.16.0.apk`;

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
  console.log('DOWNLOAD LINK:', `https://github.com/${repo}/releases/download/${tag}/LingoWorld-v1.16.0.apk`);
  console.log('=======================================\n');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

