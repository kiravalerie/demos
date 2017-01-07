/**
 * Created by h on 2017/1/7.
 */

window.onload=function() {
    var abtn = document.getElementsByTagName("input");
    var odiv = document.getElementById("inner");
    var astyle = ["width", "height", "backgroundColor", "display", "display"];
    var avalue = ["200px", "200px", "red", "none", "block"]
    function changeStyle(obj, attr, value) {
        obj.style[attr] = value;
    };
    /* 错误写法
     for (var i = 0; i < abtn.length; i++) {
        abtn[i].onclick = (function (i) {
                 console.log(i); //可以依次取到i的值;此函数体中的代码在页面加载时就已经全部执行完毕了
                i== abtn.length - 1 && (odiv.style.cssText = "");
                changeStyle(odiv, astyle[i], avalue[i]);
        })(i)
    }*/ //匿名函数自执行没有返回值，默认会返回undefined，所以onclick事件属性获取的是undefined.

   //正确写法一
   for (var i = 0; i < abtn.length; i++) {
     abtn[i].onclick = function (i){
           return function() {
              i== abtn.length - 1 && (odiv.style.cssText = "");
               changeStyle(odiv, astyle[i], avalue[i]);
                }
            }(i) //自执行匿名函数表达式可以不写在()里;
      }

   /*正确写法二
   for(var i=0;i<abtn.length;i++){
        (function(i){
            abtn[i].onclick=function(){
                i==abtn.length-1&&(odiv.style.cssText="");
                changeStyle(odiv,astyle[i],avalue[i]);
            }
        })(i);
    }*/
   /* 正确写法三
   for(var i=0;i<abtn.length;i++){
        abtn[i].index=i;  //给第i个btn添加自定义属性index且将i值赋给index；
        abtn[i].onclick=function(){
            i==abtn.length-1&&(odiv.style.cssText="");
            changeStyle(odiv,astyle[this.index],avalue[this.index]);//this代表当前btn,也就是第i个btn
        }；
    }*/
}

