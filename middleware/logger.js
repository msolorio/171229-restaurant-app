module.exports = function(req, res, next) {
  const date = new Date().toString();
  const log = `[${date}] "${req.method} ${req.path}"`
  console.log(log);

  next();
}
