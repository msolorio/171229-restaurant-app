const registerPartials = require('./registerPartials');
const registerHelper = require('./registerHelpers');

function configureViewEngine(app, hbs) {
  registerHelper(hbs);
  registerPartials(hbs);
  app.set('view engine', 'hbs');
}

module.exports = configureViewEngine;
