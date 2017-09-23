var winHeight;
function getHeightSize(){
    //获取窗口高度
    if(window.innerHeight){
        winHeight=window.innerHeight;
    }
    else if((document.body)&&(document.body.clientHeight)){
        winHeight=document.body.clientHeight;
    }
    return winHeight;
}
/*alert(getHeightSize());*/
var winWidth;
function getWidthSize(){
    //获取窗口宽度
    if(window.innerWidth){
        winWidth=window.innerWidth;
    }
    else if((document.body)&&(document.body.clientWidth)){
        winWidth=document.body.clientWidth;
    }
    return winWidth;
}

var map_side=document.getElementById('map_side');
var listbtn=document.getElementById('listbtn');
var mapside_height=getHeightSize()-80;
map_side.style.height=mapside_height+'px';
listbtn.style.width=map_side.offsetWidth+'px';
var hotel_list=map_side.children[1];
hotel_list.style.overflow="auto";
var mapgaode=document.getElementById('container');
mapgaode.style.width=getWidthSize()+'px';
mapgaode.style.height=getHeightSize()-110+'px';
mapgaode.style.position="absolute";
	mapgaode.style.top=110+'px';
	mapgaode.style.left=0;
	/*mapgaode.style.background="yellow";*/

(window.onresize=function () {
    getHeightSize();
    console.log(getHeightSize());
    var mapside_height=getHeightSize()-80;
    var hotel_list_height=mapside_height-130;
    map_side.style.height=mapside_height+'px';
    hotel_list.style.height=hotel_list_height+'px';
	mapgaode.style.width=getWidthSize()-map_side.offsetWidth+'px';
	mapgaode.style.height=getHeightSize()+'px';
	mapgaode.style.position="absolute";
	mapgaode.style.top=110+'px';
	mapgaode.style.left=0;
	/*mapgaode.style.background="yellow";*/
	
})


var map = new AMap.Map("container", {
        resizeEnable: true,
        center: [113.33209, 23.118479],
        zoom: 13
    });
    /*AMap.event.addDomListener(document.getElementById('clearMarker'), 'click', function() {
        markers[0].setMap(null);
        markers[2].setMap(null);
    }, false);*/
    var markers = [], positions = [[113.315536, 23.086176], [113.243149, 23.129567], [113.228520, 23.090025], [113.322386, 23.181712], [113.289084, 23.208849],[113.399244, 22.799017],[113.314641, 23.12595],[113.282885, 23.117638]];
    for (var i = 0, marker; i < positions.length; i++) {
        marker = new AMap.Marker({
            map: map,
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b'+(i+1)+'.png',
            position: positions[i]
        });
        /*markers.push(marker);*/
    }
    console.log(i);
	marker.setAnimation('AMAP_ANIMATION_BOUNCE');
	console.log(marker);

/*
地图*/


