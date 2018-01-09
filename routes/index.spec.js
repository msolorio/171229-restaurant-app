const request = require('supertest');
const expect = require('expect');
const { app, CreateServer } = require('../server/server');
const { standardRouteTest } = require('../testUtils/standardRouteTest');
const redirectTest = require('../testUtils/redirectTest');

describe('indexRouter', () => {
  let server;

  beforeEach(() => {
    server = new CreateServer(app);
    server.startServer();
  });

  afterEach(() => {
    server.closeServer();
  });

  standardRouteTest(app, '/', 'home');
  standardRouteTest(app, '/about', 'about');
  redirectTest(app, '/asdf');
});
