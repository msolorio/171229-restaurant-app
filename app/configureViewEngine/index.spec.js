const configureViewEngine = require('./index');

jest.mock('./registerPartials', () => {
  return {
    registerPartials: jest.fn(),
    partialDirectories: [
      'directory/a',
      'directory/b',
      'directory/c'
    ]
  }
});
const {
  registerPartials,
  partialDirectories
} = require('./registerPartials');

jest.mock('./registerHelpers', () => {
  return {
    registerHelpers: jest.fn(),
    helpers: [{
      name: 'fakeName0',
      method: 'fakeMethod0'
    },
    {
      name: 'fakeName1',
      method: 'fakeMethod1'
    }]
  };
});
const {
  registerHelpers,
  helpers
} = require('./registerHelpers');

const app = { set: jest.fn() };
const hbs = 'handlebarsInstance';

describe('configureViewEngine', () => {

  beforeEach(() => {
    registerPartials.mockClear();
    registerHelpers.mockClear();
    app.set.mockClear();
  });

  it('should call registerHelpers with proper arguments', () => {
    configureViewEngine(app, hbs, helpers, partialDirectories);

    expect(registerHelpers).toHaveBeenCalledTimes(1);
    expect(registerHelpers).toHaveBeenCalledWith(hbs, helpers);
  });

  it('should call registerPartials with proper arguments', () => {
    configureViewEngine(app, hbs, helpers, partialDirectories);

    expect(registerPartials).toHaveBeenCalledTimes(1);
    expect(registerPartials).toHaveBeenCalledWith(hbs, partialDirectories);
  });

  it('should call app.set with proper arguments', () => {
    configureViewEngine(app, hbs, helpers, partialDirectories);

    expect(app.set).toHaveBeenCalledTimes(1);
    expect(app.set).toHaveBeenCalledWith('view engine', 'hbs');
  });
});
