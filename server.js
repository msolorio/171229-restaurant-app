const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

const staticFileTypes = [
  'css',
  'js',
  'img'
];

function serveStaticFiles(dirNames) {
  dirNames.forEach((dirName) => {
    app.use(`/${dirName}`, express.static(`${__dirname}/public/${dirName}`));
  });
};

serveStaticFiles(staticFileTypes);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3001, () => console.log('your app is listening on port 3001'));
