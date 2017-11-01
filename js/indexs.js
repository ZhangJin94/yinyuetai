var hot,num=0
	function  carousel(){
		hot.css({"background":"url(images/index/hot"+(num+1)+".jpg) no-repeat","transition":"all 0.5s"})
		menu.find("li").find("a").css("color","#fff")
		menu.find("li").eq(num).find("a").css("color","#52e2c0")
		num=num+1;
		if (num==10) 
		{
			num=0;
		}
	}
	$(document).ready(function(){
		hot=$(".hot")
		menu=$(".menu")
		menu.find("li").eq(0).find("a").css("color","#52e2c0")
		rotate=setInterval("carousel()",5000)
		menu.find("a").mouseover(function(){
			menu.find("li").find("a").css("color","#fff")
			$(this).css("color","#52e2c0")
			clearInterval(rotate)
			num=$(this).parent("li").index()
			hot.css({"background":"url(images/index/hot"+(num+1)+".jpg) no-repeat","transition":"all 0.5s"})

		})
		menu.find("a").mouseout(function(){
			rotate=setInterval("carousel()",5000)
		})
		a=1;
		$(document).scroll(function(){
			if ($("body").scrollTop()==0) 
			{
				a=1
			}
			if ($(".returntop").css("bottom")=="1000px") 
			{
				$(".returntop").hide()
				$(".returntop").css("bottom","-100px")
			}
			if ($(".returntop").css("bottom")=="-100px")
			{
				$(".returntop").show()
			} 
			if ($("body").scrollTop()>$(window).height()&&a==1) 
			{
				$(".returntop").css({"bottom":"50px","transition":"all 1.5s"})
				a=0;
			}
		})
		$(".returntop").click(function(){
			$(this).css({
				"bottom":"1000px",
				"transition":"all 1.5s"})
			$("body,html").animate({scrollTop: '0px'},1500)
		})
		$(".showpct").children("li").find("a").mouseover(function(){
			$(this).parents(".showpct").children("li").find("img").hide()
			$(this).parents(".showpct").find("a").css("height","50px")
			$(this).find("img").show()
			$(this).css("height","160px")
		})

	})