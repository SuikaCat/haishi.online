// 该函数返回url中的倒数第几个参数
function getParams(key) {
    var str = window.location.href;
    var arr = str.split('/').reverse();
    return arr[key];
}

//定义一个对象构造函数，这个对象用于检验传入值
function Checker(str){
    
    let error={
        blank:'此项不能为空',
        length:'位数错误'
    };
    
    String(str);
    str.trim();
    
    this.text=str;
    this.msg='';
    
    //检测空值
    this.is_blank=function(){
        return this.text=='';
    }
    
    //检测到特殊字符返回true
    this.is_notspecil=function(){
        var reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]");
        return reg.test(this.text);
    }

    //检测到汉字返回true
    this.have_Chinese=function(){
        var reg = new RegExp("[\\u4E00-\\u9FFF]");
        return reg.test(this.text);
    }
    
    //检测邮箱格式
    this.is_email=function(){
        var reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
        return reg.test(this.text);
    }
    
    //检测长度,仅支持<=,>=,=号
    this.is_length=function(symbol,number){
        if(symbol=='<='){
            return this.text.length<=number;
        }
        if(symbol=='>='){
            return this.text.length>=number;
        }
        if(symbol=='='){
            return this.text.length==number;
        }
    }
}

//查询学校代号对应的学校名称
function find_university_name(school_id){
    let university_name={
        '10254':'上海海事大学'
    }
    return university_name[school_id]
}

//提取html标签中的文本
function HtmlToText(htmlStr) {
    let theConvertDiv = document.createElement("div")
    theConvertDiv.innerHTML = htmlStr
    return theConvertDiv.textContent || theConvertDiv.innerText || ""
}

//限制文本长度然后加省略号
function lengthLimit(str, length) {
    let sign='';
    if(str.length>length){
        sign='...';
    }
    return str.slice(0,length)+sign;
}