$(document).ready(function () {

  $("#loginForm").validate({
    rules: {
      user_name: {
        required: true,
        maxlength: 20,
        minlength: 2
      },
      password: {
        required: true
      }
    },
    messages: {
      user_name: {
        required: "请输入帐号",
        maxlength: "最长不能超过20个字",
        minlength: "最少不能少于2个字"
      },
      password: {
        required: "请输入密码"
      }
    }
  })

  $("#btn-login").on("click", function () {

    if (!$("#loginForm").valid()) {
      return;
    }
    else {
      console.log("验证通过！");
      var formDataObj = $("#loginForm").serialize();
      console.log(formDataObj);
      $.ajax({
        url: 'u/login',
        type: 'POST',
        data: formDataObj,
        dataType: 'json',
        success: function (d) {
          console.log(d);
          if(d.success==true){
            alert(d.resDesc);
            setTimeout(function(){
              location.href = 'loginSuccess';
            },200);
          }else{
            alert(d.resDesc);
          }
        },
        error: function (d) {
          console.log(d);
        }
      })
    }

  })

})