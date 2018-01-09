const request = require('supertest');
const expect = require('expect');

function standardRouteTest(app, route, template) {
  return (
    describe(`GET to ${route}`, () => {
      it('should return html', (done) => {
        request(app)
          .get(`${route}`)
          .expect(200)
          .expect('Content-Type', 'text/html; charset=utf-8')
          .end(done);
      });

      it('should call res.render with proper template name', () => {
        request(app)
          .get(`${route}`)
          .expect((res) => {
            expect(res.render).toHaveBeenCalledWith(template);
          });
      });
    })
  );
}

function standardMenusRouteTest(app, route) {
  return standardRouteTest(app, route, 'menu');
}

function standardLocationsRouteTest(app, route) {
  return standardRouteTest(app, route, 'location');
}

module.exports = {
  standardRouteTest,
  standardMenusRouteTest,
  standardLocationsRouteTest
};
