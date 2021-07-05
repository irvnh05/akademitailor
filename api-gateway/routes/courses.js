// var express = require('express');
// var router = express.Router();
// const { APP_NAME } = process.env;

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('courses');
// });

// module.exports = router;
const express = require('express');
const router = express.Router();


const coursesHandler = require('./handler/courses');
// /* GET users listing. */
// router.get('/', function(req, res, next) {

// });


router.post('/', coursesHandler.create);
router.put('/:id', coursesHandler.update);
router.delete('/:id', coursesHandler.destroy);
router.get('/', coursesHandler.getAll);

module.exports = router;

