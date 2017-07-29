function init() {
		    $(".ht-login").click(function () {
		        new Login(function (user) {
		            $(".header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>");
		        });
		    });
		    new Navigater().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav-container"),function(event){console.log(event)});
			
		};
init();



















