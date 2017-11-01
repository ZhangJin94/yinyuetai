/**
 * Created by zhangj on 2017/7/25.
 */
function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj,false)[name];
    }
}
var timer=null;
function move(obj,iTarget,time,name){
    var cont=Math.round(time/30);//总次数
    var start=parseInt(getStyle(obj,name));//起始位置
    var dis=iTarget-start;//运动距离
    var n=0;
    clearInterval(timer);
    timer=setInterval(function(){
        n++;
//var cur = 起始位置+移动距离*当前运动次数/运动总次数
        var cur=start+dis*n/cont;
        obj.style[name]=cur+"px";
        if(n==cont){
            clearInterval(timer);
        }
    },30);
}
window.onload=function(){
    var oUlf=document.getElementById("img_warp");
    var oLi=oUlf.children[0];
    var oUls=document.getElementById("img_desc");
    var oBtn=oUls.getElementsByTagName("li");
    var oSlide=document.getElementById("slider");
    oUlf.style.height=oLi.offsetHeight*oBtn.length+'px';
    var iNow=0;
    var bigTime=null;
    function automatic(index){
        for(var i=0;i<oBtn.length;i++){
            oBtn[i].className="";
        }
        oBtn[index].className="active";
        move(oUlf,-index*oLi.offsetHeight,500,"marginTop");
    }
    for(var i=0;i<oBtn.length;i++){
        (function(index){
            oBtn[i].onmouseover=function(){
                iNow=index;
                automatic(iNow)
            }
        })(i)
    }
    oSlide.onmouseover=function(){
        clearInterval(bigTime);
    }
    oSlide.onmouseover=function(){
        show()
    }
    function show(){
        bigTime=setInterval(function(){
            iNow++;
            if(iNow==oBtn.length){
                iNow=0;
            }
            automatic(iNow)
        },8000);
    }
    show();
      var arrtitle=[
        "V榜TOP10",
        "V榜看音乐",
        "V榜密室谈",
        "V榜有话说",
        "V榜特别企划"
    ];
    var arrprcnt=[
        "全球音乐最IN指标！Global TOP10 MV Countdown",
        "为你推荐全球美妙好音乐，我的音乐我做主",
        "全明星顶配阵容，最音乐的解读，最有趣的回应，创造全新的化学效果，再度掀起狂潮",
        "海纳百川，带你看尽天下！这里有最诚恳的称赞也有最毒舌的吐槽！史上最爆笑“调侃”旋风来袭",
        "这里有最前沿的音乐动脉和MV时尚潮流，奇特巧妙的独家盘点，打造最新鲜，最好玩，最有范的特别节目"
    ];
    var arrvimg=[
        "../images/vchart/host01.jpg",
        "../images/vchart/host02.jpg",
        "../images/vchart/host03.jpg",
        "../images/vchart/host04.jpg",
        "../images/vchart/host05.jpg"

    ];
    var arrpvtitle=[
        "V榜TOP10 第30期 TFBOYS&王....",
        "暑期档电视剧OST友情大放送 V榜看",
        "徐良.十国十色 V榜密谈室EP21",
        "2017上半年男团评价排行榜 V榜有话",
        "夏日女团清凉回归 V榜特别企划EP1"
    ];
    var arrpvcnt=[
        "2017年第30期V榜TOP10,带你全面掌握五地榜单!本周内地TFBOYS、港台#王嘉尔# 、欧美#Linkin Park# 、韩国#T-ara# 、日本#CodomoDragon# 强势夺冠!更多精彩节目里见!",
        "七月过去一半啦,各位上学的小仙女们是不是终于全都放假了!说话间想到了曾一度被还珠格格所支配的恐惧。现在的暑期档电视剧简直不要太多,然而V榜君这么正直的官博当然是要推荐好听的插曲给各位小仙女们,顺便呼吁大家来V榜君这里打个榜呀~才没有在套路你们!",
        "音乐作家徐良时隔不到一年,携全新专辑《东西世界》来做客音悦V榜啦!将近一年环游十国,创作十种音色不同的作品,展现徐良蜕变之后的新鲜样貌",
        "上一集我的好基友蛋黄酱为大家介绍了今年上半年女团品牌评价排行,各色小姐姐看的土妹真是口水都要留下来了!但是,粉丝大大们真的看清楚看明白了吗!此评价来自于韩国企业评价研究所!不要再问为什么不介绍你家小姐姐啦!这一集当然是预告中的小哥哥们啦!",
        "夏天夏天已经来啦,快要热死啦。没错,就是这么热的夏天,泡菜的小姐姐们一个个的都带着清凉到不行的歌曲回归,活泼少女、帅气girl和性感大姐姐神马的,简直就是宅男福利大放送!这种火上浇油以毒攻毒的事情,嘿嘿,V榜君还是很喜欢哒~"
    ];
    var oHostlist=document.getElementById("hostlist");
    var aLi=oHostlist.getElementsByTagName("li");
    var aA=oHostlist.getElementsByTagName("a");
    var oPrtitle=document.getElementById("pr-title");
    var oPrcnt=document.getElementById("prcnt");
    var oImg=document.getElementById("vimg");
    var oPvtitle=document.getElementById("pvtitle");
    var oPvcnt=document.getElementById("pvcnt");
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onclick=function () {
            for(var i=0;i<aLi.length;i++){
                aLi[i].className="hostli hostH";
            }

            aLi[this.index].className="hostli hostH lihover";
            oPrtitle.innerHTML=arrtitle[this.index];
            oPrcnt.innerHTML=arrprcnt[this.index];
            oImg['src']=arrvimg[this.index];
            oPvtitle.innerHTML=arrpvtitle[this.index];
            oPvcnt.innerHTML=arrpvcnt[this.index];
        }
    }
}
