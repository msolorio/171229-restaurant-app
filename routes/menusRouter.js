const express = require('express');
const router = express.Router({mergeParams: true});
const {
  checkLocationParams,
  checkMenuParams
} = require('../middleware/checkParams');

router.get('/:menu', checkLocationParams, checkMenuParams, (req, res) => {
  res.render('menu', {
    locationName: req.params.location,
    menuType: req.params.menu
  });
});

module.exports = router;
