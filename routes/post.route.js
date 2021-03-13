const router = require('express').Router();
const { getData, post } = require('../controllers/post.controller');
const verify = require('../util/verify.token');

router.get('/', verify, getData);

router.post('/', post);

module.exports = router;
