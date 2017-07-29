
(function(){
	//现在导航上面的每一个按钮
	function NavigaterItem(obj){
		var obj=obj||{};
		this.name=obj.cat_name;
		this.id=obj.cat_id;
		this.item=$("<li>"+this.name+"</li>");
		
	}
	//itemclick->是NavigaterItem上面的click,名字随便起
	NavigaterItem.prototype.itemClick=function(callback){
		//cilick->是this.item调用的 是jquery对象里面的click
		this.item.on("click",this,callback);
		return this;//准备链式函数调用
	};
	
	
	function Navigater(){
		
	}
	
	//点击导航图按钮的时候,需要知道点击按钮的商品类型id
	Navigater.prototype.createView=function(url,superView,callback){//superView 传的形参,用于放列表
		$.get(url,function(result){//请求数据
			console.log(result)
			if(result.code==0){
				result.data.forEach(function(obj){
					//创建导航列表
					superView.append(new NavigaterItem(obj).itemClick(callback).item);
				});
			}
		});
		return this;//后续可能有链式函数
	};
	
	window.Navigater=Navigater;//在window上公开,可以随意调用
})();
