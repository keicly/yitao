(function(){
	
	function GoodItem(obj){
		this.des=obj;
		var space=20;
		var colume=5
		var width=(1200-space*(colume-1))/colume;
		this.item = $("<div class='good-box'><p class='good-name'>"+obj.goods_name+"</p><p><img src='"+obj.goods_thumb+"' alt='' width='"+width+"px'></p><h3>￥"+obj.price+"</h3><p>"+obj.goods_desc+"</p></div>");	
		this.item.css({
			width:width+"px",
			border:"2px solid #ff4411",
			"box-sizing":"border-box",
			float:"left",
			overflow:"hidden",
			position:"relative",
			height:"384px"
		});
		$(".good-name").css({
            position: "absolute",
            height: "20px",
            "line-height": "20px",
            display: "none"
        });
         this.item.hover(function () {
            $(".good-name").css({
                display: "block"
            });
        },function () {
            $(".good-name").css({
                display: "none"
            });
        })
        
	};
	
	GoodItem.prototype.click=function(callback){
		this.item.on("click",this,callback);
		return this;
	}
	
	function Good(url,parm,superView,action){
		this.loadData(url,parm,superView,action);
	}
	
	Good.prototype.loadData=function(url,parm,superView,action){
		$.get(url,parm,function(result){
			if(result.code==0){
				this.showGoodsView(result.data,superView,action);
			}
		}.bind(this));
	};
	
	Good.prototype.showGoodsView=function(goods,superView,action){//goods->获取商品列表数据的形参    superView->父元素
		goods.forEach(function(data){
			superView.append(new GoodItem(data).click(action).item)
		});
	};
	
	window.Good=Good;//对外公开Good
	
})();
