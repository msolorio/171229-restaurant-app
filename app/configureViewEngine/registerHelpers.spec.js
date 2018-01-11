const {
  getRestaurantName,
  registerHelpers,
  helpers
} = require('./registerHelpers');

jest.mock('hbs', () => {
  return {
    registerHelper: jest.fn()
  };
});
const hbs = require('hbs');

const restuarantName = 'Lupita\'s Mexican Cuisine';

describe('registerHelpers files', () => {

  describe('getRestaurantName', () => {
    it('should return the restuarant name', () => {
      expect(getRestaurantName()).toBe(restuarantName);
    });
  });

  describe('registerHelpers', () => {
    it('should call hbs.registerHelper', () => {
      registerHelpers(hbs, helpers);

      expect(hbs.registerHelper)
        .toHaveBeenCalledTimes(helpers.length);
    });
  });
});
