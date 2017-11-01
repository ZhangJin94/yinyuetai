$(document).ready(function(){
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
		})