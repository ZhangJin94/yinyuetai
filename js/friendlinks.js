window.onload=function () {
        var oDiv = document.getElementsByClassName("cycleimages");
        var oSlide=document.getElementById("slide");
        var aImg=oSlide.getElementsByTagName("img");
        var oTb=document.getElementById("tb");
        var aA=oTb.getElementsByTagName("a");
        for(var i=0;i<aA.length;i++){
            aA[i].index=i;
            aA[i].onclick=function () {
                for(var i=0;i<aA.length;i++){
                    aA[i].className="";
                    aImg[i].style.display="none";
                }
                aA[this.index].className="now";
                aImg[this.index].style.display="block";
            };
            aA[i].onmouseover=function () {
                for(var i=0;i<aA.length;i++){
                    aA[i].className="";
                }
                aA[this.index].className="active";
            };
        }
}