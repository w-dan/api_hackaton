/* eslint-disable consistent-return */
const services = require('./service');

function tokenAuth(req, res, next) {
  if (!req.headers.authorization) return res.status(403).send({ message: 'You are not authorized' });

  const token = req.headers.authorization;

  services.decodeToken(token)
    .then((response) => {
      req.user = response;
      next();
    }).catch((response) => {
      res.status(response.status);
    });
}

module.exports = tokenAuth;
