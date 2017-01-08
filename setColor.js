/*
 * Created by h on 2017/1/8.
 */
window.onload=function(){
    var oControl=document.getElementById("control");
    var aControl=oControl.getElementsByTagName("li");
    var oNav=document.getElementById("nav");
    var a_nav_color=["red","green","black"];
    var a_body_color=["pink","#A3C5A8","#fff"]
    var len=aControl.length;
    for(var i=0;i<len;i++){
        (function(i) {
            aControl[i].onclick = function () {
                for (var j = 0; j < len; j++) { //先将所有的control的class设置为空；
                    aControl[j].className = "";
                }
                this.className = "current"; //再将当前control的class设置为current；
                oNav.style.backgroundColor = a_nav_color[i];
                document.body.style.backgroundColor = a_body_color[i];
            }
        }(i))
    }
   /* 写法2：
   for(var i=0;i<len;i++){
        aControl[i].onclick=function(i){
            return function(){
                for(var j=0;j<len;j++){
                    aControl[j].className="";
                }
                this.className="current";
                oNav.style.backgroundColor=a_nav_color[i];
                document.body.style.backgroundColor=a_body_color[i];
            }
        }(i)
    }*/
   /* 写法3：
   for(var i=0;i<len;i++){
        aControl[i].index=i;
        aControl[i].onclick=function(){
            for(var j=0;j<len;j++){
                aControl[j].className="";
            };
            this.className="current";
            oNav.style.backgroundColor=a_nav_color[this.index];
            document.body.style.backgroundColor=a_body_color[this.index];
        }
    }*/
}

