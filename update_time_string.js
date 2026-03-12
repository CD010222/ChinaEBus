const fs = require('fs');
const path = require('path');

const cityDir = path.join(__dirname, 'docs', 'src', 'components', 'city');

// 读取目录下的所有Vue文件
const files = fs.readdirSync(cityDir).filter(file => file.endsWith('.vue'));

files.forEach(file => {
  const filePath = path.join(cityDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // 查找并替换updateTimeString函数
  const updatedContent = content
    .replace(/return time_convert_reverse\(currentTime\)\.toUTCString\(\)\s*\+\s*' UTC\+8'\s*;/g, 'return time_convert_reverse(currentTime).toUTCString().replace(\' GMT\', \'\') + \' UTC+8\';');
  
  // 写入修改后的内容
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log(`Updated ${file}`);
});

console.log('All files updated successfully!');