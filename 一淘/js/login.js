//为防止$跟其他插件冲突
//var $$=jQuery.noConflict();//通过noConflict()将jquery符号变化为其他字符
(function(){
	
	function Login(success){
		this.showLogin(success);
	};
	Login.prototype.showLogin=function(success){
		var loginContainer=$("<div class='loginContainer'></div>");
		var closeButton=$("<button>关闭</button>");
		var usernameInput=$("<p><input type='text' placeholder='用户名'></p>");
		var passwordInput=$("<p><input type='text' placeholder='密码'></p>")	;
		var loginButton=$("<p><button>登录</button></p>");
		
		loginContainer.css({width:"400px",
		height:"300px",
		"background-color":"#66ccff",
		border:"5px solid #ffd42e",
		position:"absolute",
		top:"50%",
		left:"50%",
		"box-sizing":"border-box",
		margin:"-150px 0 0 -200px "
	});

		closeButton.css({
			float:"right",
			color:"white",
			padding:"5px"
		})
		
		var inputCSS={
			padding:"30px 40px",
			width:"310px",
			margin:"0 atuo",
			"text-align":"center"
		};
		
		usernameInput.css(inputCSS);
		passwordInput.css(inputCSS);
		loginButton.css(inputCSS);
		
		
		closeButton.click(function () {
			loginContainer.fadeOut(500,function(){
				loginContainer.remove();
			});
		});
		
		loginButton.click(function(){
			$.post(PRODUCT_HOST+LOGIN,{status:"login",username:usernameInput.children().val(),password:passwordInput.children().val()},function(data){
					console.log(data);
					if(data.code == 0){
						
						loginContainer.slideUp(500,function(){
							loginContainer.remove();
							//执行外面传入的方法
							success(data.data);
						});
					}else{
						alert(data.message);
					}
				}
			);
		});
		
		loginContainer.append(closeButton);
		loginContainer.append(usernameInput);
		loginContainer.append(passwordInput);
		loginContainer.append(loginButton);
		
		$(document.body).append(loginContainer);
	};
	
	window.Login=Login;
	
})();














