const fs = require('fs');
const path = require('path');

const cppFilesDir = path.join(__dirname, "/docs/public/c++");
const outputDir = path.join(__dirname, 'docs/cpp'); // 保存 Markdown 文件的目录

const files = fs.readdirSync(cppFilesDir);

files.forEach(file => {
  if (file.endsWith('.cpp')) {
    const filePath = path.join(cppFilesDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const markdownContent = `# ${file.split('.')[0]}

<link rel="stylesheet" href="./_index.css">

\`\`\`cpp\n${fileContent}\n\`\`\`
    `;

    // // 保存为 Markdown 文件
    const markdownFileName = file.replace('.cpp', '.md');
    // console.log(path.join(outputDir, markdownFileName))
    fs.writeFileSync(path.join(outputDir, markdownFileName), markdownContent);
  }
});
