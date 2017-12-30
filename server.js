const express = require('express');
const hbs = require('hbs');
const configureViewEngine = require('./app/configureViewEngine');
const serveStatic = require('./app/serveStatic');
const logger = require('./middleware/logger');

const app = express();
app.use(logger);

configureViewEngine(app, hbs);
serveStatic(app);

app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));

app.listen(3001, () => console.log('your app is listening on port 3001'));
