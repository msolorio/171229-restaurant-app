const request = require('supertest');
const expect = require('expect');
const { app, server } = require('../server/server');

describe('API', function() {
  before(function() {
    return server.startServer();
  });

  after(function() {
    return server.closeServer();
  })

  describe('GET to /', function() {
    it('should return proper response', function(done) {
      request(app)
        .get('/')
        .expect((res) => {
          expect(res.status).toBe(200);
        })
        .end(done);
    });
  });
});
