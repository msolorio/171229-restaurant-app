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

app.listen(3001, () => console.log('your app is listening on port 3001'));
