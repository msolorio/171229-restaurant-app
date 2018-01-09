const request = require('supertest');
const expect = require('expect');
const { app, CreateServer } = require('../server/server');
const { standardMenusRouteTest } = require('../testUtils/standardRouteTest');
const checkHandlebarsParams = require('../testUtils/checkHandlebarsParams');
const redirectTest = require('../testUtils/redirectTest');

describe('menuRouter', () => {
  let server;

  beforeEach(() => {
    server = new CreateServer(app);
    server.startServer();
  });

  afterEach(() => {
    server.closeServer();
  });

  standardMenusRouteTest(app, '/locations/zanzibar/menus/breakfast');
  standardMenusRouteTest(app, '/locations/zanzibar/menus/lunch');
  standardMenusRouteTest(app, '/locations/zanzibar/menus/dinner');
  standardMenusRouteTest(app, '/locations/zurich/menus/breakfast');
  standardMenusRouteTest(app, '/locations/zurich/menus/lunch');
  standardMenusRouteTest(app, '/locations/zurich/menus/dinner');
  standardMenusRouteTest(app, '/locations/zacatecas/menus/breakfast');
  standardMenusRouteTest(app, '/locations/zacatecas/menus/lunch');
  standardMenusRouteTest(app, '/locations/zacatecas/menus/dinner');

  checkHandlebarsParams(app, '/locations/zanzibar/menus/breakfast', 'menu', {
    locationName: 'zanzibar',
    menuType: 'breakfast',
    locationContent: () => 'menu_zanzibar_breakfast'
  });
});
