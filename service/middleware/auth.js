const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied no token provided');

    jwt.verify(token, 'shhhhh', (err, decoded)=> {
      if (err) {
        console.log('err',err);
      }
    });

    next();

}

module.exports = auth;