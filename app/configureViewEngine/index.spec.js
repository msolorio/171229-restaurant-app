const configureViewEngine = require('./index');

jest.mock('./registerPartials', () => {
  return jest.fn();
});
const registerPartials = require('./registerPartials');

jest.mock('./registerHelpers', () => {
  return jest.fn();
});
const registerHelpers = require('./registerHelpers');

const app = { set: jest.fn() };
const hbs = 'handlebarsInstance';

describe('configureViewEngine', () => {

  beforeEach(() => {
    registerPartials.mockClear();
    registerHelpers.mockClear();
    app.set.mockClear();
  });

  it('should call registerHelpers with proper arguments', () => {
    configureViewEngine(app, hbs);

    expect(registerHelpers).toHaveBeenCalledTimes(1);
    expect(registerHelpers).toHaveBeenCalledWith(hbs);
  });

  it('should call registerPartials with proper arguments', () => {
    configureViewEngine(app, hbs);

    expect(registerPartials).toHaveBeenCalledTimes(1);
    expect(registerPartials).toHaveBeenCalledWith(hbs);
  });

  it('should call app.set with proper arguments', () => {
    configureViewEngine(app, hbs);

    expect(app.set).toHaveBeenCalledTimes(1);
    expect(app.set).toHaveBeenCalledWith('view engine', 'hbs');
  });
});
