const express = require('express');
const hbs = require('hbs');
const configureViewEngine = require('../app/configureViewEngine');
const serveStatic = require('../app/serveStatic');
const logger = require('../middleware/logger');
const indexRouter = require('../routes');

const app = express();

function init() {
  configureViewEngine(app, hbs);

  serveStatic(app);

  app.use(logger);

  app.use(indexRouter);
};

init();

// if file is run directly start server
// wont start server for unit tests
if (require.main === module) {
  app.listen(3001, () => {
    console.log('your app is listening on port 3001');
  });
}

module.exports = { app, init };
