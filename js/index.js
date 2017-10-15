$(function(){
	//banner轮播图
	(function(){
		var i=0;
		var timer;
		//创建ul 插入
		var oUl=$("<ul>");
		$(".pic_index").append(oUl);
		
		for(var k=0;k<$(".banner_pic li").length;k++){
			//创建li 插入
			var oLi=$("<li>");
			oUl.append(oLi);
		}
		$(".pic_index li:eq(0)").addClass("pic_ac");
		//找到li 并绑定事件
		$(".pic_index li").click(function(){
			$(this).addClass("pic_ac")
			$(this).siblings().removeClass("pic_ac");
			var n=$(this).index();
			i=n;
			$(".banner_pic li:eq("+n+")").removeClass("hide");
			$(".banner_pic li:eq("+n+")").siblings().addClass("hide");
		});
		function aoto_tabs(){
			clearInterval(timer);
			timer=setInterval(function(){
				$(".pic_index li:eq("+i+")").addClass("pic_ac")
				$(".pic_index li:eq("+i+")").siblings().removeClass("pic_ac");
				$(".banner_pic li:eq("+i+")").removeClass("hide");
				$(".banner_pic li:eq("+i+")").siblings().addClass("hide");
				i++;
				if(i==5){
					i=0;
				}
			},1000);
		}
		aoto_tabs();
		$(".banner_pic li").mouseenter(function(){
			clearInterval(timer);
			$(".banner_pic li").mouseleave(function(){
				aoto_tabs();
				});
		});
	})();
	//二级菜单
	(function(){
		//鼠标移入事件
		$(".firstMenu li").mouseenter(function(){
			$(".popup").show();
			$(this).addClass("menu_ac");
			$(this).siblings("li").removeClass("menu_ac");
			var i=$(this).index();
			$(".selaction:eq("+i+")").show();
			$(".selaction:eq("+i+")").siblings(".selaction").hide();
			//移出事件
			$(".firstMenu li").mouseleave(function(){
				$(".popup").hide();
				$(this).removeClass("menu_ac");
				//移出后 进入非子盒的事件
				$(".popup").mouseover(function(){
					$(".popup").show();
					$(".firstMenu li:eq("+i+")").addClass("menu_ac");
					$(".firstMenu li:eq("+i+")").siblings("li").removeClass("menu_ac");
					//移出非子盒的事件
					$(".popup").mouseout(function(){
						$(".popup").hide();
						$(".firstMenu li:eq("+i+")").removeClass("menu_ac");
					});
				});
			});
		});
	})();
	//京东十二格
	(function(){
		var show=true;
		$(".changeIcon").hover(
			function(){
				if(show){
					$(".changeIcon").animate({"top":-45});
					var i=$(this).index();
					$(".show_content li").eq(i).removeClass("hide");
					$(".show_content li").eq(i).siblings().addClass("hide");
					$(".show_content").animate({"top":23});
				}
			},
			function(){
				show=true;
			}
		);
		$(".closeBtn").click(function(){
			$(".changeIcon").animate({"top":0});
			$(".show_content li").addClass("hide");
			show=false;
		});
	})();
	//京东十二楼
	(function(){
		//鼠标悬停在侧边导航时
		$(".nav-list li").mouseover(function(){
			$(this).addClass("ac").siblings().removeClass("ac");
			$(".nav-list li").mouseout(function(){
				$(this).removeClass("ac");
			});
		});
		//鼠标点击楼层快捷键的事件
		$(".nav-list li").click(function(){
			var i=$(this).index();
			var top=$(".scrollPosition").eq(i).offset().top;
			$('html,body').animate({ "scrollTop": top});
		});
		//文档滚动的事件
		$(window).scroll(function(){
			if($(window).scrollTop()>1000){
				$(".nav-list").show();
			}else{
				$(".nav-list").hide();
			}
		});
		//滚屏时对应的楼层快捷键点亮
		$(window).scroll(function(){
			for(var i=0; i<$(".scrollPosition").length;i++){
				var top=$(".scrollPosition:eq("+i+")").offset().top-$(window).scrollTop();
				if(top<0){
					$(".nav-list li:eq("+(i+1)+")").addClass("ac").siblings().removeClass("ac");
				}
			}
		});
	})();
	//返回顶部和右侧快捷图标
	(function(){
		$(".short_right span").mouseover(function(){
			$(this).css({"background-color":"#c81623"});
			var i=$(this).parent().parent("li").index();//此时要去找对应的li的索引值  如果直接找a的索引  则返回a在li中的索引值
			//console.log(i);
			$(".short_left").eq(i).removeClass("hide").css({"left":-58});
			$(".short_right").mouseout(function(){
				$(this).children("span").css({"background-color":"#7a6e6e"});
				$(".short_left").eq(i).addClass("hide").css({"left":0});
			});
		});
		$(".short_right span:eq(7)").click(function(){
			$("html,body").animate({'scrollTop':0});
		});
	})();
	//选项卡
	(function(){
		$(".changeTab li").click(function(){
			$(this).addClass("active").siblings("li").removeClass("active");
		});
		
	})();
	
	
})
