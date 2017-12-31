const partialDirectories = [
  `${__dirname}/../../views/partials/location_content`,
  `${__dirname}/../../views/partials/menu_content/zanzibar`,
  `${__dirname}/../../views/partials/menu_content/zurich`,
  `${__dirname}/../../views/partials/menu_content/zacatecas`,
  `${__dirname}/../../views/partials/menu_content/menu_items`,
  `${__dirname}/../../views/partials`
];

module.exports = function registerPartials(hbs) {
  partialDirectories.forEach((directory) => {
    hbs.registerPartials(directory);
  });
}
