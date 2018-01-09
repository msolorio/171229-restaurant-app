const request = require('supertest');
const expect = require('expect');

module.exports = function checkHandlebarsParams(app, route, template, handlebarParams) {
  describe(`${template} router`, () => {
    it('should call res.render passing in proper handlebars params from route params', () => {
      request(app)
        .get(`${route}`)
        .expect((res) => {
          expect(res.render).toHaveBeenCalledWith(handlebarParams)
        });
    });
  });
}
