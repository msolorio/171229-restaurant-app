const fs = require('fs');
const express = require('express');
const router = express.Router({mergeParams: true});

function getPhotoUrls(location) {
  return new Promise((resolve, reject) => {
    fs.readdir(`${__dirname}/../public/img/locations/${location}`, (error, files) => {

      if (error) reject(error);

      else {
        const filesArray = files.map((file, index) => ({
          file,
          index,
          locationName: location
        }));

        resolve(filesArray);
      }
    });
  });
}

router.get('/', (req, res) => {
  getPhotoUrls(req.params.location)
    .then((files) => {
      res.render('photos', {
        locationName: req.params.location,
        photos: files
      });
    })
    .catch((error) => {
      console.error(error);

      res.render('photos', {
        locationName: req.params.location,
        photos: ['There was an error retrieving photos']
      });
    });
});

router.use('/:photo_id', (req, res) => {
  res.render('photo', {
    photoId: req.params.photo_id
  });
});

module.exports = router;
