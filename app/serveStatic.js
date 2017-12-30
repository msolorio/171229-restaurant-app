const express = require('express');

const staticFileTypes = [
  'css',
  'js',
  'img'
];

// __dirname is the directory of the currently running file
function serveStaticFiles(app, dirNames) {
  dirNames.forEach((dirName) => {
    app.use(`/${dirName}`, express.static(`${__dirname}/../public/${dirName}`));
  });
};

module.exports = function(app) {
  serveStaticFiles(app, staticFileTypes);
}
