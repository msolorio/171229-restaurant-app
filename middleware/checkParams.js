const {
  validLocationParams,
  validMenuParams
} = require('../app/validParams');

function checkParams(validParams, givenParam, req, res, next) {
  validParams.indexOf(givenParam) > -1
    ? next()
    : res.redirect('/');
}

function checkLocationParams(req, res, next) {
  checkParams(validLocationParams, req.params.location, req, res, next);
}

function checkMenuParams(req, res, next) {
  checkParams(validMenuParams, req.params.menu, req, res, next);
}

module.exports = {
  checkLocationParams,
  checkMenuParams
};
