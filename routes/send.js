var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    res.send('Nos contactaremos a la brevedad');
});

module.exports = router;