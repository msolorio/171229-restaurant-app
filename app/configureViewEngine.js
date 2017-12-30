function configureViewEngine(app, hbs) {
  hbs.registerPartials(`${__dirname}/../views/partials`);
  app.set('view engine', 'hbs');
}

module.exports = configureViewEngine;
