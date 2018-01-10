const fs = require('fs');

module.exports = function(req, res, next) {
  const date = new Date().toString();
  const log = `[${date}] "${req.method} ${req.path}"`
  console.log(log);

  fs.appendFileSync('server.log', `${log}\n`);

  next();
}
