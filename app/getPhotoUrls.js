const fs = require('fs');

function getPhotoUrlsByLocation(location) {
  return new Promise((resolve, reject) => {
    fs.readdir(`${__dirname}/../public/img/locations/${location}`, (error, files) => {
      if (error) reject(error);

      else resolve(files);
    });
  });
}

function getPhotosInfo(location) {
  return getPhotoUrlsByLocation(location)
    .then((photoUrls) => {
      const filesInfo = photoUrls.map((file, index) => ({
        file,
        photoId: index,
        locationName: location
      }));

      return filesInfo;
    })
    .catch((error) => error);
}

function getPhotoInfoById(location, photoId) {
  return getPhotoUrlsByLocation(location)
    .then((photoUrls) => {
      const url = photoUrls.find((url, index) => index === parseInt(photoId));

      return {
        file: url,
        photoId,
        locationName: location
      }
    })
    .catch((error) => error);
}

module.exports = {
  getPhotoUrlsByLocation,
  getPhotosInfo,
  getPhotoInfoById
};
