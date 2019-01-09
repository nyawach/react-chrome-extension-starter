// require modules
var fs = require('fs');
var archiver = require('archiver');
var path = require('path');

// create a file to stream archive data to.
var output = fs.createWriteStream(path.resolve(__dirname , '../publish.zip'));
var archive = archiver.create('zip', {
  zlib: { level: 9 }
});

output.on('close', () => {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

output.on('end', () => {
    console.log('Data has been drained');
});

archive.on('warning', (err) => {
  if (err.code === 'ENOENT') return
  throw err;
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

archive.glob('dist/**/*', {
  dot: false
})

archive.finalize();
