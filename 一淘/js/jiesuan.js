function loadData(){
	console.log(location.search)
	var parm=location.search.replace("?","");
	var parm2=parm.split("&")
	console.log(parm2)
	var request=new XMLHttpRequest();
	var goods_id=parm2[0];
	request.open("GET",PRODUCT_HOST+GOODS+"?"+goods_id);
	request.onload=function(){
		console.log(request)
		var result=JSON.parse(request.response);
		console.log(result.data);
		var datas=result.data;
		
		var num=document.querySelector(".number");
		var op=document.querySelector(".one-p");
		var ap=document.querySelector(".all-p")
		var zj=document.querySelector(".zongjia")
		num.innerHTML=parm2[1];
		datas.forEach(function(item){
			$(".shangpin").append("<img src="+item.goods_thumb+">");
			$(".shangpin").append("<p>"+item.goods_desc+"</p>")
			op.innerHTML=item.price;
			ap.innerHTML=parm2[1]*item.price;
			zj.innerHTML="总价是:"+parm2[1]*item.price+"元";
		})
		
		
		
		
		
		
		
		
	}
	request.send();
};	

loadData();

















