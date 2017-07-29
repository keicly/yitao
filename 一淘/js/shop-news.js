function init() {
		    $(".ht-login").click(function () {
		        new Login(function (user) {
		            $(".header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>");
		        });
		    });
		    new Navigater().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav-container"),function(event){console.log(event)});
			
		};
init();

//获取数据
function loadData(){
	console.log(location.search)
	var parm=location.search.replace("?","");
	var request=new XMLHttpRequest();
	var goods_id=parm;
	request.open("GET",PRODUCT_HOST+GOODS+"?"+goods_id);
	request.onload=function(){
		console.log(request)
		var result=JSON.parse(request.response);
		console.log(result.data);
		var datas=result.data;
		
		
	//将引过来的数据,放入网页中
		var h3=document.querySelector(".biaoti");
		var price=document.querySelector(".price");
		var desc=document.querySelector(".desc");
		var st=document.querySelector("shop-tu");
		var now=document.querySelector(".buy-now");
		var wait=document.querySelector(".buy-wait");
		datas.forEach(function(item){
			console.log(item)
			h3.innerHTML=item.goods_name;
			price.innerHTML="￥"+item.price;
			desc.innerHTML=item.goods_desc;
			$(".news-left").append("<img src="+item.goods_thumb+">")
			now.onclick=function(){
				location.href="jiesuan.html?"+parm+"&"+shuliang.value
			}
		});
	};
request.send();	
};
loadData();


var less=document.querySelector(".less");
var more=document.querySelector(".more");
var shuliang=document.querySelector(".shuliang"); 


less.onclick=function(){
	if (shuliang.value>1) {
		--shuliang.value;
	}
}
more.onclick=function(){
	if (shuliang.value<=8) {
		++shuliang.value;
	}
}












