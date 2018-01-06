const { app, init } = require('./server');

jest.mock('../app/configureViewEngine');
const configureViewEngine = require('../app/configureViewEngine');

jest.mock('../app/serveStatic');
const serveStatic = require('../app/serveStatic');

jest.mock('hbs');
const hbs = require('hbs');

jest.mock('../middleware/logger');
const logger = require('../middleware/logger');

jest.mock('../routes');
const indexRouter = require('../routes');

app.use = jest.fn();

describe('init', () => {
  init();

  test('should call configureViewEngine with app and hbs', () => {
    expect(configureViewEngine).toHaveBeenCalled();
    expect(configureViewEngine).toHaveBeenCalledWith(app, hbs);
  });

  test('should call serveStatic with app', () => {
    expect(serveStatic).toHaveBeenCalled();
    expect(serveStatic).toHaveBeenCalledWith(app);
  });

  test('should call app.use with logger', () => {
    expect(app.use).toHaveBeenCalled();
    expect(app.use).toHaveBeenCalledWith(logger);
  });

  test('should call app.use with indexRouter', () => {
    expect(app.use).toHaveBeenCalledWith(indexRouter);
  });
});
