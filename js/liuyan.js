var count=1;
window.onload = function(){
    var Msg = document.getElementById("msg");
    var Btn = document.getElementById("btn");
    var Msgs = document.getElementById("msgs");
    var Ul = document.createElement("ul");
    Msgs.appendChild(Ul);
    Btn.onclick = function(){
        var MsgValue = Msg.value;
        var Li = document.createElement("li");
        Li.innerHTML = count+"、"+MsgValue + " <span>&nbsp;&nbsp;删除</span>";
        var arrayLi = Ul.getElementsByTagName("li");
        if(arrayLi.length>0){
            Ul.appendChild(Li,arrayLi[0]);
            count++;
        }else{
            Ul.appendChild(Li);
            count++;
        }
        Msg.value='';
        var Span = document.getElementsByTagName("span");
        for(var i=0; i<Span.length; i++){
            Span[i].onclick = function(){
                Ul.removeChild(this.parentNode);
                count--;
            }
        }
    }
}
function totalMessage(){
    alert("一共有"+(count-1)+"条留言");
}
