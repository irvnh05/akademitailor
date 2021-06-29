// const router = require('../../../../service-media/routes/media');
const create = require('./create');
const getAll = require('./getAll');
const destroy = require('./destroy')

module.exports = {
    create,
    getAll,
    destroy
};

// module.exports = ('/', function(req,res, next) {

// });

// module.exports = router;