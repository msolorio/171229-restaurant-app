const deasync = require('deasync');

// registerPartials is async by default
// we make synchronous and then register our partials
// allowing the app to be unit tested
function registerPartials(hbs, partialDirectories) {
  hbs.registerPartials = deasync(hbs.registerPartials);
  partialDirectories.forEach((directory) => {
    hbs.registerPartials(directory);
  });
}

module.exports = {
  registerPartials
};
