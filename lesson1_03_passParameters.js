/**
 * Created by h on 2017/1/9.
 */
window.onload=function(){
    var abtn=document.getElementsByTagName("input");
   /* 第一版写法
        abtn[2].onclick=function(){
        alert(abtn[0].value);
        alert(abtn[1].value);
    }*/
   //写法2：
    function doalert(obj1,obj2){
        alert(obj1.value);
        alert(obj2.value);
    }
    abtn[2].onclick=function(){
        doalert(abtn[0],abtn[1])
    }
}