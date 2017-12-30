const express = require('express');
const router = express.Router();
const menusRouter = require('./menusRouter');
const photosRouter = require('./photosRouter');

router.get('/:location', (req, res) => {
  // TODO: call method to get location content
  // call res.render only if location exists and content comes back
  // otherwise should redirect home

  res.render('location', {
    locationName: req.params.location
  });
});

router.use('/:location/menus', menusRouter);
router.use('/:location/photos', photosRouter);

module.exports = router;
