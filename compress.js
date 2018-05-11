const fs = require('fs');
const gzipAll = require('gzip-all');

const root = 'build/**/*.';
const extensions = ['html', 'js', 'js.map', 'json', 'css'];

extensions.forEach(extension => {
  return gzipAll(`${root}${extension}`).then(files => {
    files.forEach(file => {
      console.log(`Compressing ${file.slice(0, -3)}`);
      fs.renameSync(file, file.slice(0, -3));
    });
    console.log(`Compressed ${files.length}`);
  });
});
