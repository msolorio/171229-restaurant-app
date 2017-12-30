const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/:menu', (req, res) => {
  // TODO: call method to get menu content
  // call res.render only if menu exists and content comes back
  // otherwise should redirect home

  res.render('menu', {
    locationName: req.params.location,
    menuType: req.params.menu
  });
});

module.exports = router;
