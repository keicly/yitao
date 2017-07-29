function init() {
    $(".ht-login").click(function () {
        new Login(function (user) {
            $(".header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>");
        });
    });
    
    $(".ht-register").click(function () {
        new Register(function (user) {
            $(".header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>");
        });
    });

//初始化一个导航对象
	new Navigater().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav-container"),function(event){
		console.log(event);
		 $(".goods-container>div").remove();
        new Good("http://h6.duchengjiu.top/shop/api_goods.php/?cat_id= "+event.data.id ,null,$(".goods-container"),function(event){
           
            location.href="shop-news.html?goods_id="+event.data.des.goods_id;
        });
    });


	new corouselView.Corouse("#left-course",[{imagePath:"img/header/hot1.jpg"},{imagePath:"img/header/hot2.jpg"}],200,400).putSuperView().startTimer(3*1000);
	
	new corouselView.Corouse("#center-course",[{imagePath:"img/header/3-1.jpg"},{imagePath:"img/header/meibai.jpg"}],750,400).putSuperView().createControlButton().startTimer(3*1000);
	
	new corouselView.Corouse("#right-course",[{imagePath:"img/header/hot1.jpg"},{imagePath:"img/header/hot2.jpg"}],200,400).putSuperView().startTimer(3*1000);
	
	//url,parm
	new Good(PRODUCT_HOST+GOODS,null,$(".goods-container"),function (event) {
       	console.log(event.data.des)	     
        location.href="shop-news.html?goods_id="+event.data.des.goods_id;
    });
};

init();
