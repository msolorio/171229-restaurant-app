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
  it('should call registerHelpers with proper arguments', () => {
    configureViewEngine(app, hbs);

    expect(registerHelpers).toHaveBeenCalledWith(hbs);
  });

  it('should call registerPartials with proper arguments', () => {
    configureViewEngine(app, hbs);

    expect(registerPartials).toHaveBeenCalledWith(hbs);
  });

  it('should call app.set with proper arguments', () => {
    configureViewEngine(app, hbs);

    expect(app.set).toHaveBeenCalledWith('view engine', 'hbs');
  });
});
