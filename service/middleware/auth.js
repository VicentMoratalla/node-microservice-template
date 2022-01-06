const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied no token provided');

    jwt.verify(token, 'secret', (err, decoded)=> {
      if(err) return res.status(400).send('Invalid Token');
      return next();
    });
}

module.exports = auth;