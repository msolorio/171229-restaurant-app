const { registerPartials, partialDirectories } = require('./registerPartials');
const { registerHelpers, helpers } = require('./registerHelpers');


function configureViewEngine(app, hbs, helper, partialDirectories) {
  registerHelpers(hbs, helpers);
  registerPartials(hbs, partialDirectories);
  app.set('view engine', 'hbs');
}

module.exports = configureViewEngine;
