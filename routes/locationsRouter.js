const express = require('express');
const router = express.Router();
const menusRouter = require('./menusRouter');
const photosRouter = require('./photosRouter');
const { checkLocationParams } = require('../middleware/checkParams');

router.get('/:location', checkLocationParams, (req, res, next) => {
  res.render('location', {
    locationName: req.params.location,
    // returns name of the partial pulled in for location main content
    locationContent: () => `location_${req.params.location}`
  });
});

router.use('/:location/menus', menusRouter);
router.use('/:location/photos', photosRouter);

module.exports = router;
