const expect = require('expect');
const {
  checkParams,
  checkLocationParams,
  checkMenuParams
} = require('./checkParams');


let fakeNext = jest.fn();
let fakeRes = { redirect: jest.fn() };
let fakeValidParams = [1, 2, 3, 4];
let fakeValidParam = 3;
let fakeInvalidParam = 10;

describe('checkParams', () => {
  beforeEach(() => {
    fakeNext.mockClear();
    fakeRes.redirect.mockClear();
  });

  it('should call next if given param is valid', () => {
    checkParams(fakeValidParams, fakeValidParam, fakeRes, fakeNext);

    expect(fakeNext).toHaveBeenCalledTimes(1);
  });

  it('should call res.redirect if param is not valid', () => {
    checkParams(fakeValidParams, fakeInvalidParam, fakeRes, fakeNext);

    expect(fakeRes.redirect).toHaveBeenCalledTimes(1);
    expect(fakeRes.redirect).toHaveBeenCalledWith('/');
  });
});

describe('checkLocationParams', () => {
  it('should call next if given param is valid', () => {
    const validLocations = [
      'zanzibar',
      'zurich',
      'zacatecas'
    ];

    validLocations.forEach((location) => {
      let fakeNext = jest.fn();
      let fakeReq = {
        params: {
          location: location
        }
      };
      let fakeRes = {
        redirect: jest.fn()
      };
      checkLocationParams(fakeReq, fakeRes, fakeNext);

      expect(fakeNext).toHaveBeenCalledTimes(1);
    });
  });
});

describe('checkMenuParams', () => {
  it('should call next if given param is valid', () => {
    const validMenus = [
      'breakfast',
      'lunch',
      'dinner'
    ];

    validMenus.forEach((menu) => {
      let fakeNext = jest.fn();
      let fakeReq = {
        params: {
          menu: menu
        }
      };
      let fakeRes = {
        redirect: jest.fn()
      };
      checkMenuParams(fakeReq, fakeRes, fakeNext);

      expect(fakeNext).toHaveBeenCalledTimes(1);
    });
  });
});
