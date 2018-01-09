const request = require('supertest');
const expect = require('expect');
const { app, CreateServer, init } = require('../server/server');
const redirectTest = require('../testUtils/redirectTest');
const { standardLocationsRouteTest } = require('../testUtils/standardRouteTest');
const checkHandlebarsParams = require('../testUtils/checkHandlebarsParams');

describe('locationsRouter', () => {
  let server;
  init();

  beforeEach(() => {
    server = new CreateServer(app);
    server.startServer();
  });

  afterEach(() => {
    server.closeServer();
  });

  standardLocationsRouteTest(app, '/locations/zanzibar');
  standardLocationsRouteTest(app, '/locations/zurich');
  standardLocationsRouteTest(app, '/locations/zacatecas');
  redirectTest(app, '/locations/asdf');
  checkHandlebarsParams(app, '/locations/zanzibar', 'locations', {
    locationName: 'zanzibar',
    locationContent: () => 'location_zanzibar'
  });
});
