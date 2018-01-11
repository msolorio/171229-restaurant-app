const logger = require('./logger');

jest.mock('fs', () => {
  return { appendFileSync: jest.fn() };
});
const fs = require('fs');

let req = {
  method: 'GET',
  path: '/doggy'
};

let next = jest.fn();

global.console = {
  log: jest.fn()
};

describe('logger', () => {
  beforeEach(() => {
    fs.appendFileSync.mockClear();
    next.mockClear();
    global.console.log.mockClear();
  });

  it('should call fs.appendFile with proper argument', () => {
    logger(req, 'res', next);

    expect(fs.appendFileSync).toHaveBeenCalledTimes(1);
    expect(fs.appendFileSync.mock.calls[0][0]).toBe('server.log');
  });

  it('should call next one time', () => {
    logger(req, 'res', next);

    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should call console.log', () => {
    logger(req, 'res', next);

    expect(global.console.log).toHaveBeenCalledTimes(1);
  });
});
