const express = require('express');
const router = express.Router();

const refreshTokensHandler = require('./handler/refresh-tokens');
// /* GET users listing. */
// router.get('/', function(req, res, next) {

// });

router.post('/', refreshTokensHandler.refreshToken);


module.exports = router;
