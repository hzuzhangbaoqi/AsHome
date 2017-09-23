var screenWidth=document.body.offsetWidth;
var shop_banner=document.getElementById('shop_banner');
var banner_pic=shop_banner.children[0];
var banner_pic_ul=banner_pic.children[0];
var banner_pic_img=banner_pic.getElementsByTagName('img');
for(var i=0;i<banner_pic_img.length;i++){
	banner_pic_img[i].style.width=screenWidth+'px';
}
banner_pic_ul.style.width=screenWidth*4+'px';//动态获取屏幕宽度


//轮播图开始
var shop_banner=document.getElementById('shop_banner');
var banner_pic=shop_banner.children[0];
var banner_pic_ul=banner_pic.children[0];
/*console.log(banner_pic_ul);*/
var point=shop_banner.children[1];
var arrow=shop_banner.children[2];

var leftbtn=arrow.children[0].children[0];
var rightbtn=arrow.children[0].children[1];



var index=0;

var newLi=banner_pic_ul.children[0].cloneNode(true);
banner_pic_ul.appendChild(newLi);

var liS=banner_pic_ul.children;
/*console.log(liS.length);*/

for(var i=0;i<liS.length-1;i++){
	var li=document.createElement('li');
	point.appendChild(li);
}


var points=point.children;
light();
/*点亮*/
	function light(){
		for(var p=0;p<points.length;p++){
			points[p].className="";
		}
		if(index>points.length-1){
			points[0].className="now";
		}
		else{
			points[index].className="now";
		}
	}
		
	for(var j=0;j<points.length;j++){
		points[j].index=j;
		points[j].onmouseenter=function(){
			console.log(this.index);
			index=this.index;
			anmiation(banner_pic_ul,{"left":-index*shop_banner.offsetWidth});
			light();
		}
	}
	
	rightbtn.onclick=autoplay;
	
	function autoplay(){
		index++;
		if(index>liS.length-1){
			banner_pic_ul.style.left=0;
			index=1;
		}
		anmiation(banner_pic_ul,{"left":-index*shop_banner.offsetWidth});
		light();
	}

	leftbtn.onclick=function(){
		index--;
		if(index<0){
			banner_pic_ul.style.left=-(liS.length-1)*shop_banner.offsetWidth+'px';
			index=liS.length-2;
		}
		anmiation(banner_pic_ul,{"left":-index*shop_banner.offsetWidth});
		light();
	}
	
	
	shop_banner.timer=setInterval(autoplay,2000);
	shop_banner.onmouseover=function(){
		clearInterval(shop_banner.timer);
	}
	shop_banner.onmouseout=function(){
		clearInterval(shop_banner.timer);
		shop_banner.timer=setInterval(autoplay,2000);
	}
//运动函数

/*多属性缓动开始*/

function anmiation(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var flag=true;
		var target=0;
		var leader=0;
		var speed=0;
		for(var key in json){
			if(key=="opacity"){
				target = Math.round(json['opacity']*100)//0-100
				leader = getStyle(obj,'opacity')*100//0-100
			}else{
				target=parseInt(json[key]);
				leader=parseInt(getStyle(obj,key));
			}
			speed=(target-leader)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			leader=leader+speed;
			if(key=="opacity"){
				obj.style.opacity=leader/100;
				obj.style.filter="alpha(opacity="+leader+")";
			}
			else if(key=="zIndex"){
				obj.style.zIndex=json["zIndex"];
			}
			else{
				obj.style[key]=leader+'px';
			}
			
			if(leader!=target){
				flag=false;
			}
			
		}		
			if(flag){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
	},30)
}
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return window.getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}


var recruitNav=document.getElementById('recruitNav');
var recruitNavLis=recruitNav.children;
var two=document.getElementById('two');
console.log(two);
for(var i=0;i<recruitNavLis.length;i++){
	recruitNavLis[i].index=i;
	recruitNavLis[i].onclick=function(){
		for(var i=0;i<recruitNavLis.length;i++){
			recruitNavLis[i].className="";
		}
		this.className="now";
		if(this.index==3){
			two.style.display="block";
			console.log(1);
		}
		
	}
	recruitNavLis[i].onmouseover=function(){
        recruitNavLis[i].index=i;
		for(var i=0;i<recruitNavLis.length;i++){
			recruitNavLis[i].className="";
            if(this.index==2){
                two.style.display="block";
                console.log(1);
            }
	}
}
}

var header_wrap=document.getElementById('header_wrap');
var recruitNav_wrap=document.getElementById('recruitNav_wrap');
console.log(header_wrap.offsetHeight);
window.onscroll=function(){
	if(scroll().top>header_wrap.offsetHeight){
		anmiation(header_wrap,{"height":"0"});
		/*header_wrap.style.marginBottom=75+'px';*/
		recruitNav_wrap.style.position="fixed";
		recruitNav_wrap.style.top=0;
		recruitNav_wrap.style.left=0;
		recruitNav_wrap.style.zIndex=100;
		shop_banner.style.paddingTop=recruitNav_wrap.offsetHeight+'px';

		console.log(shop_banner.style.paddingTop);
	}
	else{
        recruitNav_wrap.style.zIndex=10;
		recruitNav_wrap.style.position="relative";
		header_wrap.style.display="block";
		shop_banner.style.paddingTop=0;
		anmiation(header_wrap,{"height":"70"});
	}
}







function scroll(){
	return {
		"top":document.body.scrollTop+document.documentElement.scrollTop,		
		"left":document.body.scrollLeft+document.documentElement.scrollLeft
	}
}