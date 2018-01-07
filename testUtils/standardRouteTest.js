const request = require('supertest');
const expect = require('expect');

module.exports = function(app, route) {
  return (
    describe(`GET to ${route}`, () => {
      it('should return html', (done) => {
        request(app)
          .get(`${route}`)
          .expect(200)
          .expect('Content-Type', 'text/html; charset=utf-8')
          .end(done);
      });
    })
  );
}
