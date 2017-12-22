/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-06 22:55:19
 * @version $Id$
 */
 function check(){
 	var xieyi=document.getElementById('xieyi');
 	var ts7=document.getElementById('ts7');
 	if(checkName()&&checkNumber()&&checkBirth()&&checkPassword()&&affirmPassword()&&checkEmail()&&checkPhone()){
 		if(xieyi!= null && !xieyi.checked){
        alert("请先阅读并勾选注册协议！");
        ts7.innerHTML="请先阅读并勾选注册协议！";
        return false;
    }else{
    	alert("注册成功！！");
    	return true;
    }
 	}else{
 		return false;
 	}
}
 function checkName(){
 	var username = document.getElementById('username').value;
 	//alert(username);
 	var reg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
 	var ts=document.getElementById('ts');
 	if(!reg.test(username)){
 		ts.innerHTML="网名必须是4-16位，且第一个必须是字母";
 		return false;
 	}else{
 		ts.innerHTML="";
 		return true;
 	}
 }
 function checkNumber(){
 	var number = document.getElementById('number').value;
 	var reg = /^\d{7}$/;
 	var ts1 = document.getElementById('ts1');
 	if(!reg.test(number)){
 		ts1.innerHTML="学号必须是7位";
 		return false;
 	}else{
 		ts1.innerHTML="";
 		return true;
 	}
 }
 function checkBirth(){
	var birth=document.getElementById('birth').value;
	var reg=/^(\d{4})-(\d{1,2})-(\d{1,2})$/;
	var ts2=document.getElementById('ts2');
	var arr=reg.exec(birth);
	if(!reg.test(birth)){
		ts2.innerHTML="年份格式必须为1980-05-12或者1988-05-04";
		return false;
	}else if(arr[1]<1900||arr[1]>2020){
		ts2.innerHTML="年份必须在1900到2020之间";
		return false;
	}else if(arr[2]<1||arr[2]>12){
		ts2.innerHTML="月份必须在1-12月之间";
		return false;
	}else if(arr[3]<1||arr[3]>31){
		ts2.innerHTML="日期必须在1-31号之间";
		return false;
	}else{
		ts2.innerHTML="";
		return true;
	}
}

 function checkPassword(){
 	var password = document.getElementById('password').value;
 	var reg=/^[a-zA-Z0-9]{6,13}$/;
	var ts3=document.getElementById('ts3');
	if(!reg.test(password)){
		ts3.innerHTML="密码必须是6-13位";
		return false;
	}else{
		ts3.innerHTML="";
		return true;
	}

 }
 function affirmPassword(){
 	var password = document.getElementById('password').value;
 	var repass = document.getElementById('affirmpwd').value;
 	var reg=/^[a-zA-Z0-9]{6,13}$/;
	var ts4=document.getElementById('ts4');
	if(!reg.test(repass)){
		ts4.innerHTML="重复密码必须为6-13位";
		return false;
	}else if(password != repass){
		ts4.innerHTML="重复密码必须与原密码相同";
		return false;
	}
	else{
		ts4.innerHTML="";
		return true;
	}
 }
 function checkEmail(){
 	var email = document.getElementById('email').value;
 	var reg=/^[a-zA-Z]+[a-zA-Z0-9]*@([a-zA-Z0-9]+\.)+([a-zA-Z0-9]+\.)+(com|cn)$/;
	var ts5=document.getElementById('ts5');
	if(!reg.test(email)){
		ts5.innerHTML="邮箱地址必须是字母开始且为***@***.***.com或***@***.***.cn这种格式";
		return false;
	}else{
		ts5.innerHTML="";
		return true;
	}
}
function checkPhone(){
	var phone = document.getElementById('phone').value;
	var reg=/^1\d{10}$/;
	var ts6=document.getElementById('ts6');
	if(!reg.test(phone)){
		ts6.innerHTML="手机号不正确且必须为11位";
		return false;
	}else{
		ts6.innerHTML="";
		return true;
	}
}