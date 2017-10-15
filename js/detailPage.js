$(function(){
	//放大镜的自运行函数
	(function(){
		var oSpan=$(".oldpic span");
		$(".oldpic").mousemove(function(ev){
			oSpan.show();
			$(".bigpic").show();
			var disX=ev.pageX-$(this).offset().left-oSpan.width()/2;
			var disY=ev.pageY-$(this).offset().top-oSpan.height()/2;
			if(disX<0){
				disX=0;
			}
			if(disY<0){
				disY=0;
			}
			var max_disX=$(this).width()-oSpan.width();
			var max_disY=$(this).height()-oSpan.height();
			if(disX>max_disX){
				disX=max_disX;
			}
			if(disY>max_disY){
				disY=max_disY;
			}
			oSpan.css({"left":disX,"top":disY});
			//移动大图片
			$(".bigpic img").css({"left":-2*disX,"top":-2*disY});
		});
		$(".oldpic").mouseleave(function(){
			oSpan.hide();
			$(".bigpic").hide();
			
		});
	})();
	//图标悬停的切换效果
	(function(){
		var arr=["images/57d0d400Nfd249af4.jpg","images/57d0d44dN17f4d25b4.jpg","images/57d0d44dN3431a3315.jpg","images/57d0d44dNca5bfdd12.jpg","images/57d0d44eN5d4b64043.jpg","images/57d0d44eN195e2e5f1.jpg"];
		var arr1=["images/57d0d44dN8cddf5c5(2).jpg","images/57d0d44dN17f4d25b2.jpg","images/57d0d44dN3431a3312.jpg","images/57d0d44dNca5bfdd1(1).jpg","images/57d0d44eN5d4b64042.jpg","images/57d0d44eN195e2e5f2.jpg"]
		var li_num=$(".picshow li").length;
		var li_width=58+14;//获取宽度  获取到的是0？？？
		$(".picshow ul").css({"width":li_num*li_width});
		//console.log($(".picshow ul").width())
		$(".picshow li").mouseover(function(){
			$(this).addClass("ac");
			$(this).siblings().removeClass("ac");
			var i=$(this).index();
			$(".oldpic").find("img:eq(0)").prop({"src":arr[i]});
			$(".oldpic").find("img:eq(1)").prop({"src":arr1[i]});
		});
		//尖括号的点击事件
		$(".picList a:eq(0)").click(function(){
			$(".picshow ul").animate({"left":0});
		});
		$(".picList a:eq(1)").click(function(){
			$(".picshow ul").animate({"left":-72});
		});
	})();
	//购买款式选项
	(function(){
		$(".style dl").children("dd").click(function(){
			$(this).addClass("ac");
			$(this).siblings("dd").removeClass("ac");
		});
	})();
	//购买数量控制
	(function(){
		var input_val=$(".buyNum input").val();
		var i=1;
		$(".buyNum span:eq(0)").click(function(){
			i++;
			$(".buyNum input").val(i);
		});
		$(".buyNum span:eq(1)").click(function(){
			i--;
			if(i<=1){
				i=1;
			}
			$(".buyNum input").val(i);
		});
	})();
	//邮寄地址
	(function(){
		//移入事件 enter手子元素影响
		$(".mailing_address a").mouseenter(function(){
			$(".address_selector").show();
			$(this).addClass("border");
			$(".mailing_address a").mouseleave(function(){
				$(".address_selector").hide();
				$(this).removeClass("border");
			});
			$(".address_selector").mouseover(function(){
				$(this).show();
				$(".mailing_address a").addClass("border");
				$(".address_tab li").click(function(){
					$(this).addClass("ac");
					$(this).siblings().removeClass("ac");
					var i=$(this).index();
					$(".dizhi:eq("+i+")").removeClass("hide");
					$(".dizhi:eq("+i+")").siblings().addClass("hide");
				});
				$(".address_selector").mouseout(function(){
					$(".address_selector").hide();
					$(".mailing_address a").removeClass("border");
				});
			});
		});
	})();
	//选项卡
	(function(){
		$(".navgator li").click(function(){
			$(this).addClass("nav_ac");
			$(this).siblings().removeClass("nav_ac");
			var i=$(this).index();
			$(".chooseBuy:eq("+i+")").css({"display":"block"});
			$(".chooseBuy:eq("+i+")").siblings(".chooseBuy").css({"display":"none"});
		});
	})();
	
	
	
	
});
