const fs = require('fs');
const path = require('path');

const cppFilesDir = path.join(__dirname, "/docs/public/c++");
const outputBaseDir = path.join(__dirname, 'docs/cpp'); // 保存 Markdown 文件的基础目录

const files = fs.readdirSync(cppFilesDir);

files.forEach(file => {
  if (file.endsWith('.cpp')) {
    const filePath = path.join(cppFilesDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const fileStats = fs.statSync(filePath);
    const fileCreationDate = fileStats.birthtime.toISOString().split('T')[0].slice(0, 7); // 获取文件创建时间，精确到日

    const outputDir = path.join(outputBaseDir, fileCreationDate); // 根据文件创建时间创建文件夹
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const markdownContent = `# ${file.split('.')[0]}

<style scoped>
@import '/public/css/cpp.css';
</style>


\`\`\`cpp\n${fileContent}\n\`\`\`
    `;

    // 保存为 Markdown 文件
    const markdownFileName = file.replace('.cpp', '.md');
    fs.writeFileSync(path.join(outputDir, markdownFileName), markdownContent);
  }
});
