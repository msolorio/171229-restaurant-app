function getRestaurantName() {
  return 'Lupita\'s Mexican Cuisine';
}

const helpers = [{
  name: 'getRestaurantName',
  method: getRestaurantName
}];

function registerHelpers(hbs, helpers) {
  helpers.forEach((helper) => {
    hbs.registerHelper(helper.name, helper.method);
  });
}

module.exports = {
  helpers,
  registerHelpers,
  getRestaurantName
};
