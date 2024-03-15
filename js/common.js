// 每个页面都要进行的操作

//给通过haishi.cool加载本文件的用户颁发session令牌
//综合session和cookie判定登录状态，并创建userinfo和islogin全局变量
//userinfo用法:userinfo['UID'],userinfo['username']
$.ajax({url:rooturl+'/php/api/server/log_state_ini.php',async:false,success:function(result){
    userinfo=JSON.parse(result);
    if(userinfo['islogin']=='1')
    {
        islogin=true;
    }
    else
    {
        islogin=false;
    }
}});

window.localStorage.wmUserInfo = JSON.stringify({ userId: userinfo['UID'], userTag: userinfo['userstate'], projectVersion: '1.0.1' })
