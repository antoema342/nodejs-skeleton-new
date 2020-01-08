var express = require('express');
var router = express.Router();
const userRepo = require('../repositories/users');
const apiResponse = require('../helper/response');
const middleware = require('../middleware/authorization');

/* GET users listing. */
router.get('/', middleware, async function (req, res, next) {

  userRepo.getAllUsers()
    .then(users => {
      if (users.length > 0) {
        res.json(apiResponse(200, 'Users found.', users));
      }
      else {
        res.json(apiResponse(200, 'Users is empty.', users));
      }
    });

});
router.post('/', middleware, async function (req, res, next) {

  userRepo.getAllUsers()
    .then(users => {
      if (users.length > 0) {
        res.json(apiResponse(200, 'Users found.', users));
      }
      else {
        res.json(apiResponse(200, 'Users is empty.', users));
      }
    });

});

router.get('/:userid', async function (req, res, next) {

  let userid = req.params.userid;
  userRepo.getOneUser(userid)
    .then(users => {
      if (users) {
        res.json(apiResponse(200, 'Users found.', users));
      }
      else {
        res.json(apiResponse(200, 'Users is empty.', {}));
      }
    });

});

module.exports = router;
