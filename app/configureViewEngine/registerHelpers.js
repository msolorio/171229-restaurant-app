function getRestaurantName() {
  return 'Lupita\'s Mexican Cuisine';
}

const helpers = [{
  name: 'getRestaurantName',
  method: getRestaurantName
}];

module.exports = function registerHelpers(hbs) {
  helpers.forEach((helper) => {
    hbs.registerHelper(helper.name, helper.method);
  });
}
