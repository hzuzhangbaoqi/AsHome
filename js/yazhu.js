var banner=document.getElementById('banner');
var lis=banner.children[0].children;
console.log(lis);
var liArr=banner.getElementsByTagName('a');
var point=banner.children[1];

var points=point.children;
var index=0;

for(var i=0;i<liArr.length;i++){
	liArr[i].style.backgroundImage="url(img/banneryazhu"+(i+1)+".jpeg)";
	liArr[i].style.display="inline";
	var li=document.createElement('li');
	point.appendChild(li);
}
console.log(liArr.length);

light();


$(".banner ul.points li").click(function () {
    index=$(this).index();
    console.log(index);
    $(this).addClass("active").siblings().removeClass();
    $(".banner .banner_img li").eq(index).fadeIn().siblings().fadeOut();
    light();
})
function light() {
    for(var i=0;i<points.length;i++){
        points[i].className="";
    }
    if(index>6){
    	points[0].className="now";
    }
    	points[index].className="now";
    
}

function autoplay() {
        index++;
        if(index>6)
        {index=0};
        $(".banner .banner_img li").eq(index).fadeIn().siblings().fadeOut();
        light();
}

banner.timer=setInterval(autoplay,2000);
banner.onmouseover=function () {
    clearInterval(banner.timer)
}
banner.onmouseout=function () {
    banner.timer=setInterval(autoplay,2000);
}