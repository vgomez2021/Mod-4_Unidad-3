var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('http://www.instagram.com');
});

module.exports = router;