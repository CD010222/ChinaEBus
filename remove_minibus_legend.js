const fs = require('fs');
const path = require('path');

const cityDir = path.join(__dirname, 'docs', 'src', 'components', 'city');

// 读取目录下的所有Vue文件
const files = fs.readdirSync(cityDir).filter(file => file.endsWith('.vue'));

files.forEach(file => {
  const filePath = path.join(cityDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // 查找并删除Minibus图例部分
  const updatedContent = content.replace(/\s*<div class="legend-item">\s*<div class="legend-color" style="background-color: rgb\(253, 128, 93\);"><\/div>\s*<span>Minibus<\/span>\s*<\/div>\s*/g, '');
  
  // 写入修改后的内容
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log(`Updated ${file}`);
});

console.log('All files updated successfully!');