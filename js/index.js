'use strict';
function rOn(n){
	return n<10?'0'+n:''+n;
};
function rnd(m,n){
	return Math.floor(Math.random()*(m-n))+n;
};
function d2a(n){
	return n*Math.PI/180;
};
window.onload=function(){
	var oNav=document.getElementById('nav');
	var oUl=document.getElementById('ul1');
	var oInner=document.getElementById('inner');
	var oCon=document.getElementById('content');
	var oButton=document.getElementById('button');
	var oBanner=document.getElementById('banner');
	var aA=oUl.getElementsByTagName('a');
	var aB=oUl.getElementsByTagName('b');
	var oWrapp=document.querySelector('.wrapper');
	var oMusicbtn=document.querySelector('.musicbtn');
	/*time===============================================*/
	var oC=document.querySelector('#c1');
	var gd=oC.getContext('2d');
	var rx=150;
	var ry=150;
	function oClock(start, end, r ,color){
		start=start-90;
		end=end-90;
		gd.lineWidth=18;
		gd.beginPath();
		gd.strokeStyle=color;
		gd.arc(rx, ry,r,d2a(start), d2a(end),false);
		gd.stroke();
	};
	function time(){
		gd.textAlign='center';
		gd.font='16px 微软雅黑'
		//擦画布
		gd.clearRect(0,0,oC.width,oC.height)
		var oDate=new Date();
		var h=oDate.getHours();
		var m=oDate.getMinutes();
		var s=oDate.getSeconds();
		var ms=oDate.getMilliseconds()
		oClock(0 ,(h%12)*30+m/60,60,'#000');
		oClock(0 ,m*6+s/60*6,80,'#666');
		oClock(0 ,(s*6)+ms/1000*6,100,'#09c');
		gd.fillText(rOn(h)+':'+rOn(m)+':'+rOn(s), 150, 150)
	}
	time();
	
	setInterval(time, 16);
	
	/*music==============================================*/
	var bOk=false
	oMusicbtn.onclick=function(){
		if (bOk==true) {
			oAudio.pause();
			oMusicbtn.style.color='#000';
		}else{
			oAudio.play();
			oMusicbtn.style.color='#F70758';
		}
		if (oWrapp.style.display =='block') {
			oWrapp.style.display ='none'
		}else {
			oWrapp.style.display ='block'
		};
		bOk=!bOk;
	};
	var oAudio=document.querySelector('#banner audio');
		oAudio.src='vid/1.mp3'
	
	/*nav=====================================*/
	for (var i = 0; i < aA.length; i++) {
		aA[i].index=i;
		aA[i].onmouseover=function(){
			for (var i = 0; i < aA.length; i++) {
				aB[i].style.width=0+'px';
			}
			aB[this.index].style.width=aB[this.index].parentNode.offsetWidth+'px';
		};
		aA[i].onmouseout=function(){
			for (var i = 0; i < aA.length; i++) {
				aB[i].style.width=0+'px';
			}
		};
	};
	
	oCon.onmouseover=oInner.onmouseover=function(){
		startMove(oNav,{top:0},{duration:600,essing:"ease-out"});
		if (document.documentElement.scrollTop||document.body.scrollTop>=701) {
			startMove(oNav,{top:-51},{duration:600,essing:"ease-out"});
		};
	};
	
/*scroll============================*/
	oButton.onclick=function (){
		var start=document.documentElement.scrollTop||document.body.scrollTop;
		var iTarget=650;
		var dis=iTarget-start;
		var count=Math.floor(1000/30);
		
		var n=0;
		clearInterval(oButton.timer);
		oButton.timer=setInterval(function (){
			n++;
			var a=1-n/count;
			var cur=start+dis*(1-Math.pow(a,3));
			document.documentElement.scrollTop=document.body.scrollTop=cur;
			if(n==count){
				clearInterval(oButton.timer);
			}
		},30);
	};
	/*翻转===========================================*/
	/*var oBox=document.querySelector('#card2box');
        var R=5;
        var C=6;
        for(var r=0; r<R; r++){
            for(var c=0; c<C; c++){
                var oSpan=document.createElement('span');
                oSpan.style.width=oBox.offsetWidth/C+'px';
                oSpan.style.height=oBox.offsetHeight/R+'px';
                oBox.appendChild(oSpan);
                oSpan.style.left=oSpan.offsetWidth*c+'px';
                oSpan.style.top=oSpan.offsetHeight*r+'px';

                oSpan.innerHTML='<em class="front"></em><em class="back"></em>';
                oSpan.children[0].style.backgroundPosition=-oSpan.offsetWidth*c+'px -'+oSpan.offsetHeight*r+'px';
                oSpan.children[1].style.backgroundPosition=-oSpan.offsetWidth*c+'px -'+oSpan.offsetHeight*r+'px';

                oSpan.r=r;
                oSpan.c=c;
            }
        }

		var aSpan=oBox.children;
		var iNow=0;
		var bReady=false;
		oBox.onclick=function(){
		    if(bReady)return;
		    bReady=true;
		    iNow++;
		    for(var i=0; i<aSpan.length; i++){
		        aSpan[i].style.transition='1s all ease '+(aSpan[i].r+aSpan[i].c)*200+'ms';
		        aSpan[i].style.transform='perspective(800px) rotateY(-180deg)';
		    }

		    aSpan[aSpan.length-1].addEventListener('transitionend', function(){
		        for(var i=0; i<aSpan.length; i++){
		            aSpan[i].style.transition='none';
		            aSpan[i].style.transform='perspective(800px) rotateY(0deg)';
		            aSpan[i].children[0].style.backgroundImage='url(img/'+iNow%3+'.jpg)';
		            aSpan[i].children[1].style.backgroundImage='url(img/'+(iNow+1)%3+'.jpg)';
		        }
		        bReady=false;
		}, false);
    };*/
	
};





























































