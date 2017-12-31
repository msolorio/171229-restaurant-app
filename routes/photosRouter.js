const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  getPhotosInfo,
  getPhotoInfoById
} = require('../app/getPhotoUrls');

router.get('/', (req, res) => {
  const location = req.params.location;

  getPhotosInfo(location)
    .then((photosInfo) => {
      res.render('photos', {
        locationName: location,
        photos: photosInfo
      });
    })
    .catch((error) => console.error(error));
});

router.use('/:photo_id', (req, res) => {
  const { location, photo_id } = req.params;

  getPhotoInfoById(location, photo_id)
    .then((photoInfo) => {
      res.render('photo', {
        locationName: location,
        photo: photoInfo
      });
    })
    .catch((error) => console.error(error));
});

module.exports = router;
