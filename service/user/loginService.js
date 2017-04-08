var db = require('../../config/db');
var pool = db.pool;

module.exports = {
    login: function (req, res) {
        console.log("数据库链接开始！");
        let user_name = req.body.user_name;
        let password = req.body.password;
        pool.getConnection(function (err) {
            if (err) {
                console.log("数据库链接失败！" + err);
            } else {
                console.log("数据库链接成功！");
                var sqlStr = `select * 
                    from user
                    where user_name = `
                    + pool.escape(user_name)
                    + ` and password=` + pool.escape(password);
                console.log("查询语句为:::" + sqlStr);
                pool.query(sqlStr, (err, result) => {
                    var resDatas = {
                        datas: null,
                        success: false,
                        resDesc: null
                    }
                    if (err) {
                        resDatas.resDesc = err.code;
                    } else if (result.length == 1) {
                        resDatas.datas = result,
                            resDatas.success = true,
                            resDatas.resDesc = "登录成功！"
                    } else {
                        resDatas.resDesc = "登录失败！";
                    }
                    res.json(resDatas);
                });
            }
        });
    }
}