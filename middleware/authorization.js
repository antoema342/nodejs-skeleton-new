var apiResponse = require('../helper/response');
var jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  var authorizationToken = req.headers.authorization;

  jwt.verify(authorizationToken, process.env.SECRETKEY, function(err, encoded) {
      
    if (!err) {
      req.jwtData = encoded;
      next();
    }
    else {
        console.log(process.env.SECRETKEY + err)
      res.json(apiResponse(401, 'Invalid authorization token.'));
    }
  });
}