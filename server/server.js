const express = require('express');
const hbs = require('hbs');
const { helpers } = require('../app/configureViewEngine/registerHelpers');
const partialDirectories = require('../app/configureViewEngine/partialDirectories');
const configureViewEngine = require('../app/configureViewEngine');
const serveStatic = require('../app/serveStatic');
const logger = require('../middleware/logger');
const indexRouter = require('../routes');

const app = express();

function init() {
  configureViewEngine(app, hbs, helpers, partialDirectories);

  serveStatic(app);

  app.use(logger);

  app.use(indexRouter);
}

function CreateServer(app, PORT = 3003) {
  let server;

  return {
    startServer: (message) => {
      return new Promise((resolve, reject) => {
        server = app.listen(PORT, () => {
          if (message) {
            console.log(`Your server is listening on port: ${PORT}`);
          }
          resolve();
        });
      })
    },

    closeServer: () => {
      return new Promise((resolve, reject) => {
        server.close(() => {
          resolve();
        });
      });
    }
  }
}

// check if file is run directly
// server started manually for unit tests
if (require.main === module) {
  init();
  let server = new CreateServer(app, 3000);
  server.startServer(true);
}

module.exports = { app, CreateServer, init };
