function getRestaurantName() {
  return 'Lupita\'s';
}

function configureViewEngine(app, hbs) {
  hbs.registerHelper('getRestaurantName', getRestaurantName);
  hbs.registerPartials(`${__dirname}/../views/partials`);
  app.set('view engine', 'hbs');
}

module.exports = configureViewEngine;
