const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/', (req, res) => {
  res.render('photos', {
    locationName: req.params.location,
    photos: ['photo1', 'photo2', 'photo3']
  });
});

router.use('/:photo_id', (req, res) => {
  // TODO: call method to get photo content
  // call res.render only if photo exists and content comes back
  // otherwise should redirect home

  res.render('photo', {
    photoId: req.params.photo_id
  });
});

module.exports = router;
