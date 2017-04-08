//引入两个有用的第三方库
var request = require('request');
var cheerio = require('cheerio');

var express = require('express');
var router = express.Router();

var options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    },
    url: 'http://www.alloyteam.com/2015/03/sexpressmysql/'
}

//请求函数
function callback(err, res, body) {
    if (!err && res.statusCode == 200) {
        var $ = cheerio.load(body);
        console.log("我已经拿到请求回来的数据了。");
        console.log($(body).toString());
        return $(body);
    }
}


router.get('/', function (err, res, next) {
    res.render('spider/index');
});


router.get('/run/', function (err, res, next) {
    console.log('Spider开始工作===>>>');
    try{
        request(options,callback);
    }catch(e){
        throw e;
    }
    res.json({ "msg": '启动成功！'});
});

module.exports = router;
