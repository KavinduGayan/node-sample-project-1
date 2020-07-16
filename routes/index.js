var express = require('express');
var router = express.Router()

router.get('/', function (req, res, next) {
    res.send('hello from router');
});
router.get('/home', function (req, res, next) {
    res.render('home', null);
});

router.get('/json', function (req, res, next) {
    const data = {
        'greeting': 'Hello'
    }
    res.send(data);
});
module.exports = router