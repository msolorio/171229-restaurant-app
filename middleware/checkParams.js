const {
  validLocationParams,
  validMenuParams
} = require('../app/validParams');

function checkParams(validParams, givenParam, res, next) {
  validParams.indexOf(givenParam) > -1
    ? next()
    : res.redirect('/');
}

function checkLocationParams(req, res, next) {
  checkParams(validLocationParams, req.params.location, res, next);
}

function checkMenuParams(req, res, next) {
  checkParams(validMenuParams, req.params.menu, res, next);
}

module.exports = {
  checkParams,
  checkLocationParams,
  checkMenuParams
};
