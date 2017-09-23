var nav=document.getElementById("nav").children;
for(var i=0;i<nav.length;i++){
	if(nav[i].className=="menu"){
		nav[i].index=i;
		nav[i].onmouseover = function(){
				fnNav(this,"block");
				console.log(this.index);
			};
  		nav[i].onmouseout = function(){
  			fnNav(this,"none")
  			};
	}
}
function fnNav(obj,flag)
{
 	obj.getElementsByTagName("div")[0].style.display = flag;
}

var app_download=document.getElementById('app_download');
var app_download_block=document.getElementById('app_download_block');
console.log(app_download.children);
app_download.onmouseenter=function(){
	
	app_download_block.className="app_download_block now";
}

app_download.onmouseleave=function(){
	
	app_download_block.className="app_download_block";
}

var login=document.getElementById('login');
var login_block=document.getElementById('login_block');
login.onmouseenter=function(){
	console.log("enter");
	login_block.style.display="block";
}

login.onmouseleave=function(){
	console.log("leave");
	login_block.style.display="none";
}