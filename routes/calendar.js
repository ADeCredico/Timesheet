var db = require('../bin/database');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send(`respond with ${'ditto'}`);
});

router.post('/send/', function(req, res, next){
	db.pushToDb(req.body);
});

module.exports = router;