const router = require('express').Router();
const { getData } = require('../controllers/post.controller');
const verify = require('../util/verify.token');

router.get('/', verify, getData);

module.exports = router;
