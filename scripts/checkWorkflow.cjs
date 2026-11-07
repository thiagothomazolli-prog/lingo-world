require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const token = process.env.GITHUB_TOKEN;

async function check() {
  const res = await fetch('https://api.github.com/repos/thiagothomazolli-prog/lingo-world/actions/runs?per_page=3', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'User-Agent': 'Node-LingoWorld'
    }
  });
  const data = await res.json();
  if (data.workflow_runs) {
    data.workflow_runs.forEach(r => {
      console.log(`Run #${r.run_number} (ID: ${r.id}): ${r.status} / ${r.conclusion} - Created: ${r.created_at} - Commit: ${r.head_commit?.message?.slice(0, 50)}`);
    });
  } else {
    console.log(data);
  }
}

check().catch(console.error);

