const jwt = require('jsonwebtoken');

/**
 * Authorisation method.
 * @param {any} req The request.
 * @param {any} res The response.
 * @param {any} next The continue method.
 * @return {any} The status of the response or continue with the request.
 */
function auth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied no token provided');

  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) return res.status(400).send('Invalid Token.');
    return next();
  });
}

module.exports = auth;
