const { execSync } = require('child_process');
const fs = require('fs');

try {
  const pyCode = `
import zipfile, xml.etree.ElementTree as ET

docx_path = r"C:/Users/Gabriel/.gemini/antigravity/brain/db0ea64a-0c3d-4f2c-93aa-450b75385891/.user_uploaded/media_1793981921708_1c81290a.docx"
with zipfile.ZipFile(docx_path) as z:
    xml_content = z.read("word/document.xml")
    tree = ET.fromstring(xml_content)
    text = "".join(tree.itertext())
    with open("C:/Users/Gabriel/.gemini/antigravity/scratch/lingo-world/docx_extracted.txt", "w", encoding="utf-8") as out:
        out.write(text)
    print("Success! Total chars:", len(text))
`;
  fs.writeFileSync('extract.py', pyCode, 'utf8');
  execSync('python extract.py', { stdio: 'inherit' });
  fs.unlinkSync('extract.py');
} catch (e) {
  console.error(e);
}

