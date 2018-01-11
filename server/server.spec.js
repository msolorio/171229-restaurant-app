const { app, init } = require('./server');

jest.mock('../app/configureViewEngine');
const configureViewEngine = require('../app/configureViewEngine');

jest.mock('../app/serveStatic');
const serveStatic = require('../app/serveStatic');

jest.mock('hbs', () => {
  return {};
});
const hbs = require('hbs');

jest.mock('../middleware/logger');
const logger = require('../middleware/logger');

jest.mock('../routes', () => {
  return {};
});
const indexRouter = require('../routes');

jest.mock('../app/configureViewEngine/registerHelpers', () => {
  return { helpers: 'fakeHelpers' };
});
const { helpers } = require('../app/configureViewEngine/registerHelpers');

jest.mock('../app/configureViewEngine/registerPartials', () => {
  return { partialDirectories: 'fakePartialDirectories' };
});
const { partialDirectories } = require('../app/configureViewEngine/registerPartials');

app.use = jest.fn();

describe('init', () => {

  beforeEach(() => {
    configureViewEngine.mockClear();
    serveStatic.mockClear();
    logger.mockClear();

    init();
  });

  it('should call configureViewEngine with app and hbs', () => {
    expect(configureViewEngine).toHaveBeenCalled();
    expect(configureViewEngine).toHaveBeenCalledWith(app, hbs, helpers, partialDirectories);
  });

  it('should call serveStatic with app', () => {
    expect(serveStatic).toHaveBeenCalled();
    expect(serveStatic).toHaveBeenCalledWith(app);
  });

  it('should call app.use with logger', () => {
    expect(app.use).toHaveBeenCalled();
    expect(app.use).toHaveBeenCalledWith(logger);
  });

  it('should call app.use with indexRouter', () => {
    expect(app.use).toHaveBeenCalledWith(indexRouter);
  });
});
