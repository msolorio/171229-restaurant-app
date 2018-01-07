const express = require('express');
const hbs = require('hbs');
const configureViewEngine = require('../app/configureViewEngine');
const serveStatic = require('../app/serveStatic');
const logger = require('../middleware/logger');
const indexRouter = require('../routes');

const app = express();

configureViewEngine(app, hbs);

serveStatic(app);

app.use(logger);

app.use(indexRouter);

function CreateServer(app, PORT = 3003) {
  return {
    startServer: () => {
      return new Promise((resolve, reject) => {
        server = app.listen(PORT, () => {
          console.log(`server listening on port ${PORT}`);
          resolve();
        });
      })
    },

    closeServer: () => {
      return new Promise((resolve, reject) => {
        server.close(() => {
          console.log(`server closed on port ${PORT}`);
          resolve();
        });
      });
    }
  }
}

let server = new CreateServer(app, 3003);

// check if file is run directly
// server started manually for unit tests
if (require.main === module) {
  server.startServer();
}

module.exports = { app, server, CreateServer };
