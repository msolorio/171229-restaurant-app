jest.mock('deasync', () => {
  return jest.fn((func) => {
    return func;
  });
});
const deasync = require('deasync');

const { registerPartials } = require('./registerPartials');

const hbs = {
  registerPartials: jest.fn()
};

const partialDirectories = [
  'directoryA',
  'directoryB',
  'directoryC'
];

describe('registerPartials', () => {
  beforeEach(() => {
    deasync.mockClear();
    hbs.registerPartials.mockClear();
  });

  it('should call deasync with registerPartials', () => {
    registerPartials(hbs, partialDirectories);

    expect(deasync).toHaveBeenCalledTimes(1);
    expect(deasync).toHaveBeenCalledWith(hbs.registerPartials);
  });

  it('should call hbs.registerPartials for each partial in partialDirectories', () => {
    registerPartials(hbs, partialDirectories);

    expect(hbs.registerPartials)
      .toHaveBeenCalledTimes(partialDirectories.length);

    partialDirectories.forEach((directory) => {
      expect(hbs.registerPartials).toHaveBeenCalledWith(directory);
    });
  });
});
