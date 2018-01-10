const deasync = require('deasync');

const partialDirectories = [
  `views/partials/location_content`,
  `views/partials/menu_content/zanzibar`,
  `views/partials/menu_content/zurich`,
  `views/partials/menu_content/zacatecas`,
  `views/partials/menu_content/menu_items`,
  `views/partials`
];

// registerPartials is async by default
// we make synchronous and then register our partials
// allowing the app to be unit tested
module.exports = function registerPartials(hbs) {
  hbs.registerPartials = deasync(hbs.registerPartials);
  partialDirectories.forEach((directory) => {
    hbs.registerPartials(directory);
  });
}
