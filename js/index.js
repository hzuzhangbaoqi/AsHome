var banner=document.getElementById('banner');
var imgUl=banner.children;
var arrow=document.getElementById('arrow');
var leftbtn=arrow.children[0];
var rightbtn=arrow.children[1];
var points=document.getElementById('point').children;
var index=0;
$(".banner .point li").click(function () {
    index=$(this).index();
    console.log(index);
    $(this).addClass("active").siblings().removeClass();
    $("ul.img li").eq(index).fadeIn().siblings().fadeOut();
    light();
})
function  autoplay() {
        index++;
        if(index>13)
        {index=0};
        $("ul.img li").eq(index).fadeIn().siblings().fadeOut();
        light();
}
rightbtn.onclick=autoplay;

function light() {
    for(var i=0;i<points.length;i++){
        points[i].className="";
    }
    if(index>13){
    	points[0].className="now";
    }
    	points[index].className="now";
    
}
leftbtn.onclick=function () {
    index--;
    if(index<0){
        index=13;
    }
    $("ul.img li").eq(index).fadeIn().siblings().fadeOut();
    light();
}
banner.timer=setInterval(autoplay,4000);
banner.onmouseover=function () {
    leftbtn.style.display="block";
    rightbtn.style.display="block";
    clearInterval(banner.timer)
}
banner.onmouseout=function () {

    banner.timer=setInterval(autoplay,4000);
}
/*以上为轮播图*/
/*book部分，预订酒店表单*/
var book_tab=document.getElementById('book_tab');
var book_content=document.getElementById('book_content');
var booktabclick=book_tab.children;
var bookcontentdiv=book_content.children;
for(var j=0;j<booktabclick.length;j++){
    booktabclick[j].index=j;
    booktabclick[j].onclick=function () {
        for(var i=0;i<booktabclick.length;i++){
            booktabclick[i].className="";
            bookcontentdiv[i].style.display="none";
        }
        booktabclick[this.index].className='now';
        bookcontentdiv[this.index].style.display="block";
    }
}


var tab=document.getElementById('tab');
var tabLis=tab.getElementsByTagName('li');
var indicator=tab.children[6];
var indicatorNum=[77,354,581,764,936,1108];
var home_logo_nav=document.getElementById('home_logo_nav');
var home_logo_nav_div=home_logo_nav.getElementsByTagName('div');
console.log(home_logo_nav_div);
for(var tab=0;tab<tabLis.length;tab++){
	tabLis[tab].index=tab;
	
	tabLis[tab].onclick=function(){
		for(var i=0;i<tabLis.length;i++){
			tabLis[i].className="";
			home_logo_nav_div[i].style.display="none";
		}
		this.className='nameon';
		home_logo_nav_div[this.index].style.display='block';
		console.log(this.index);
		
		indicator.style.left=indicatorNum[this.index]+'px';
	}
}
















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

/*var perfer=document.getElementById('prefer');
var perferImg=perfer.getElementsByTagName('img');
for(var m=0;m<perferImg.length;m++){
	perferImg[m].onmouseenter=function(){
		perferImg[m].className="preferImg";
	}
}*/


/*var hot_hotel=document.getElementById('hot_hotel');
var ul*/





