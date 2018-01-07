const request = require('supertest');
const expect = require('expect');

module.exports = function(app, route) {
  return (
    describe('GET to unknown path', () => {
      it('should redirect', (done) => {
        request(app)
          .get(`${route}`)
          .expect(302)
          .expect('Content-Type', 'text/plain; charset=utf-8')
          .end(done);
      });
    })
  );
}
