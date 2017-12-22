/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-06 22:55:19
 * @version $Id$
 */
 window.onload = function(){
 	showPic();
 	disptime();
 }
 var picsArr = new Array();
 picsArr[0] = "images/lb1.jpg";
 picsArr[1] = "images/lb2.jpg";
 picsArr[2] = "images/lb3.jpg";
 picsArr[3] = "images/lb4.jpg";
 picsArr[4] = "images/lb5.jpg";
 picsArr[5] = "images/lb6.jpg";
 var timer,index = 0;
// window.onload = showPic;
function showPic(){
	document.getElementById("pic").src=picsArr[index];
	if(index<(picsArr.length-1))
		index++;
	else
		index=(index+1)%picsArr.length;
	timer=setTimeout("showPic()",2000);
}
function showPrepic(){
	if(index>0){
		index--;
	}else{
		index=5;
	}
	document.getElementById("pic").src=picsArr[index];
	timer=setTimeout("showPrepic()",2000);
}
function showPre(){
	clearTimeout(timer);
	showPic();
}
function showNext(){
	clearTimeout(timer);
	showPrepic();
}
// window.onload = disptime;
function disptime(){
	var time = new Date();
	var hour = time.getHours();
	var minutes = time.getMinutes();
	var second = time.getSeconds();
	if(minutes<10){
		minutes="0"+minutes;
	}
	if(second<10){
		second="0"+second;
	}
	document.getElementById("time").innerHTML="当前系统时间："+hour+":"+minutes+":"+second;
	setTimeout("disptime()",1000);
}
$(function(){
	$('#container').fadeIn(2000);
	$('#sc').animate({left:'100px'},2000);
	$('#sc1').animate({top:'30px'},2000);
	$('#sc2').animate({left:'900px'},2000);
});
$(function(){
	$("#leftContent a").mouseover(function(event){
		var path=$(this).attr("href");
		var title=$(this).attr("title");
		var $li=$("<div id='ss'><img src='"+path+"' alt=''><div>"+title+"</div></div>");
		$("body").append($li);
		$("#ss").show();
		$("#ss").css("left",event.pageX+10+"px");
		$("#ss").css("top",event.pageY+10+"px");
	}).mouseout(function(event){
		$("#ss").remove();
	}).mousemove(function(event){
		$("#ss").css("left",event.pageX+10+"px");
		$("#ss").css("top",event.pageY+10+"px");
	}).click(function(event){
			//event.preventDefault();
			return false;
		});;
});
$(function(){
	$("#top a").mouseover(function(event){
		var path=$(this).attr("href");
		var title=$(this).attr("title");
		var $li=$("<div id='ss'><img src='"+path+"' alt=''><div>"+title+"</div></div>");
		$("body").append($li);
		$("#ss").show();
		$("#ss").css("left",event.pageX+10+"px");
		$("#ss").css("top",event.pageY+10+"px");
	}).mouseout(function(event){
		$("#ss").remove();
	}).mousemove(function(event){
		$("#ss").css("left",event.pageX+10+"px");
		$("#ss").css("top",event.pageY+10+"px");
	}).click(function(event){
			//event.preventDefault();
			return false;
		});;
});
function show(){
	$('.p1').animate({width:'300px'},1000,function(){
		$('.p2').animate({height:'200px'},1000,function(){
			$('.p3').animate({width:'300px',height:'200px'},1000,function(){
				$('.p4').animate({left:'320px'},1000,function(){
					$('.p5').animate({top:'290px'},1000,function(){
						$('.p6').animate({left:'1000px'},1000,function(){
							$('.next').fadeIn(1000);
						});
					});
				});
			});
		});
	});
}
function next(){
	$('.p1,.p2,.p3,.p4,.p5,.p6').fadeOut(1000,function(){
		$('.p7').animate({width:'300px'},1000,function(){
			$('.p8').animate({height:'200px'},1000,function(){
				$('.next').hide(1000,function(){
					$('.last').show(1000);
				});
			});
		});
	});
}
function last(){
	$('.p7').animate({width:"0px"},1000,function(){
		$('.p8').animate({height:"0px"},1000,function(){
			$('.p1,.p2,.p3,.p4,.p5,.p6').fadeIn(1000,function(){
				$('.last').hide(1000,function(){
					$('.next').show(1000);
				})
			});
		});
	});
}
$(function(){
	$('.airplan').animate({left:'670px',top:'7px'},2000,function(){
		$('.daxue').animate({top:'-60px'},1500);
	});
	showstar();
 });
function showstar(){
	$('.star').fadeIn(1000,function(){
		$('.star').fadeOut(1000);
	});
	setTimeout("showstar()",2100);
}