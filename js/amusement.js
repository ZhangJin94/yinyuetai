var t,v,g,i=0;
function stopnum(p)
{
// a=a+10
    p.prev("img").before(p)
	p.css({"top":"0","opacity":"1"})
	p.css({"left":"0","opacity":"1"})
	p.css({"right":"0","opacity":"1"})
	p.css({"bottom":"0","opacity":"1"})
// t=setTimeout("stopnum()",10)
// if(a>=600)
// {
// 	clearTimeout(t)
// }
}

$(document).ready(function(){
	$(".star-chat").find("li").eq(0).find("img").show();
	$(".star-chat").find("li").mouseover(function() {
		$(".star-chat").find("li").find("img").hide();
		$(this).find("img").show()
	})


a=600

	$(".taige-hd").find("a").mouseleave(function(){
if(a==600){
	var up=$(this).find("img").eq(1)
		direction=Math.round(Math.random()*100)
		if(direction<=25){
			$(this).find("img").eq(1).animate({top:"-100%",opacity:"0"},500,function(){
stopnum(up)
			})
          
     }
		if(direction>25&&direction<=50){
			$(this).find("img").eq(1).animate({left:"-100%",opacity:"0"},500,function(){
stopnum(up)
			})
			
		}
		if(direction>50&&direction<=75){
			$(this).find("img").eq(1).animate({right:"100%",opacity:"0"},500,function(){
stopnum(up)
			})
			
		}
		if(direction>75&&direction<=100){
			$(this).find("img").eq(1).animate({bottom:"100%",opacity:"0"},500,function(){
stopnum(up)
			})
			
		}
	}

	})

})
