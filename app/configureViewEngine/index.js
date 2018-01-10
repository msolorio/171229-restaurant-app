const registerPartials = require('./registerPartials');
const registerHelpers = require('./registerHelpers');

function configureViewEngine(app, hbs) {
  registerHelpers(hbs);
  registerPartials(hbs);
  app.set('view engine', 'hbs');
}

module.exports = configureViewEngine;
