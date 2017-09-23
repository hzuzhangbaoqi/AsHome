function animate(obj,target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var speed = (obj.offsetTop>target?-730:730);
        if(Math.abs(obj.offsetTop-target)<730){
            obj.style.top = target+"px";
            clearInterval(obj.timer);
        }else{
            obj.style.top = obj.offsetTop+speed+"px";
        }
    },10)
}

function scroll(){
	return {
		"top":document.body.scrollTop+document.documentElement.scrollTop,		
		"left":document.body.scrollLeft+document.documentElement.scrollLeft
	}
}

function client(){
	return{
		"width":window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
		"height":window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight
	}
}

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
			speed=(target-leader)/8;
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

