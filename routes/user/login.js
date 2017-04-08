var express = require('express');
var co = require('co');
var router = express.Router();

var loginService = require('../../service/user/loginService');


/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('user/login', { title: 'Hello world!' });
});

/*POST login page*/
router.post('/login', function (req, res, next) {
  loginService.login(req, res.next);
})

/*登录成功页面*/
router.get('/loginSuccess', function (req, res, next) {
  res.render('user/loginSuccess');
});


module.exports = router;