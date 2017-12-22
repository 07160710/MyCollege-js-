/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-06 22:55:19
 * @version $Id$
 */
function haveuser(){
	var a = document.getElementById('name').value;
	if(!a){
		document.getElementById('t1').innerHTML="输入姓名";
	}else if(a != "黄凯锋"){
		document.getElementById('t1').innerHTML="输入正确的姓名";
	}else{
		document.getElementById('t1').innerHTML="";
	}
	//alert(a);
}
function havenumber(){
	var b = document.getElementById('number').value;
	if(!b){
		document.getElementById('t2').innerHTML="输入学号";
	}else if(b != "07160710"){
		document.getElementById('t2').innerHTML="输入正确的学号";
	}else{
		document.getElementById('t2').innerHTML="";
	}
	//alert(b);
}
function loginyz(){
	var a = document.getElementById('name').value;
	var b = document.getElementById('number').value;
	if(!a && !b){
		document.getElementById('t1').innerHTML="输入姓名";
		document.getElementById('t2').innerHTML="输入学号";
		return false;
	}else if(!a){
		document.getElementById('t1').innerHTML="输入姓名";
		return false;
	}else if(!b){
		document.getElementById('t2').innerHTML="输入学号";
		return false;
	}else if(a=="黄凯锋" && b=="07160710"){
		alert("登录成功，即将前往主页");
		return true;
	}else{
		alert("请输入正确的姓名学号");
		return false;
	}
}
function regis(){
	window.open("register.html");
	//window.location="register.html";
}