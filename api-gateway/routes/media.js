const express = require('express');
const router = express.Router();

const mediaHandler = require('./handler/media');
// /* GET users listing. */
// router.get('/', function(req, res, next) {

// });

router.post('/', mediaHandler.create);
router.get('/', mediaHandler.getAll);
router.delete('/:id', mediaHandler.destroy);

module.exports = router;
