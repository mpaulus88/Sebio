
/* JS Document - Sebio/script/script.js
 * november 2012
 */

/*jslint regexp: true, vars: true, white: true, browser: true */
/*jshint nonstandard: true, browser: true, boss: true */
/*global jQuery */

( function ( $ ) {
	"use strict";
	// -- globals
	var $connectSlide,
		$connect,
		$basket,
		$basketSlide,
		$down1,
		$down2,
		$down1img,
		$down2img,
		$bBasket=false,
		$bConnect=false,
		$bConnected=true,
		$bSign=false,
		$bObject=false,
		$name,
		$promo,
		$tab,
		$connexion,
		interval,
		$object,
		$notYet,
		$register,
		$newsLetter,
		$bNewsL=false,
		$img,
		$navDown,
		$navA,
		$bDisplay,
		$smallBasket,
		nI=1;

		
	

	// -- methods
	var setImg=function()
	{
		var bodyId=$('body').attr('id');
			if(bodyId=='mainBody')
			{
				$img='img/';
			}
			else
			{
				$img='../img/';
			}
		};
	var addObject=function(e)
	{
		e.preventDefault();
		e.returnValue = false;
		$('a[name="objets panier"]').text('2 objets');
		$bObject=true;

	}
	var showConnect=function(e)
	{
		e.preventDefault();
		e.returnValue = false;
		var connect=sessionStorage.getItem('bConnected');
		if(!connect)
		{
			$register.fadeOut(400);
			$('#toConnect').text("SE CONNECTER");
			if($bConnect==false)
			{
				if ($bBasket==true){

					$basketSlide.fadeOut(400);
					console.log("clicked");
					$down1img.attr('src',$img+'icon/down.png');
					$bBasket=false;
				}
				if ($bNewsL==true){
					$newsLetter.fadeOut(400);
					console.log("clicked");
					$bNewsL=false;
				}
				$connectSlide.fadeIn(400);
				console.log("clicked");
				$down2img.attr('src',$img+'icon/up.png');
				$bConnect=true;
			}
			else{
				$connectSlide.fadeOut(400);
				console.log("clicked");
				$down2img.attr('src',$img+'icon/down.png');
				$bConnect=false;
			}
			console.log('aie');
		}


		return false;
	};

	var showSign=function(e)
	{
		e.preventDefault();
		e.returnValue = false;
		if($bSign==false)
		{
			$register.fadeIn(400);
			console.log("clicked");
			$down2img.attr('src',$img+'icon/up.png');
			$bSign=true;
			$connect.text('Créer un compte');
			if($bSign==true){
				$basketSlide.fadeOut(400);
				console.log("clicked");
				$bBasket=false;
			}
			}
			if($bConnect==true){
				$connectSlide.fadeOut(400);
				console.log("clicked");
				$down2img.attr('src',$img+'icon/down.png');
				$bConnect=false;
			}
		else{
			$register.fadeOut(400);
			console.log("clicked");
			$down2img.attr('src',$img+'icon/down.png');
			$bSign=false;
		}


		return false;
	};
	var showNewsLetter=function(e)
	{
		e.preventDefault();
		e.returnValue = false;
		if($bNewsL==false){
			$newsLetter.fadeIn(400);
			$bNewsL=true;
			console.log('clicked');
			if($bConnect==true){
				$connectSlide.fadeOut(400);
				console.log("clicked");
				$down2img.attr('src',$img+'icon/down.png');
				$bConnect=false;
			}
			if($bBasket==true){
				$basketSlide.fadeOut(400);
				console.log("clicked");
				$down1img.attr('src',$img+'icon/down.png');
				$bBasket=false;
		}
		}
		else
		{
			$newsLetter.fadeOut(400);
			console.log('clicked');
			$bNewsL=false;
		}
		return false;
	};
		var showBasket=function(e)
	{
		e.preventDefault();
		e.returnValue = false;

		if($bBasket==false && $bObject==true){
			if($bConnect==true){
				$connectSlide.fadeOut(400);
				console.log("clicked");
				$down2img.attr('src',$img+'icon/down.png');
				$bConnect=false;
			}
			if ($bNewsL==true){
				$newsLetter.fadeOut(400);
				console.log("clicked");
				$bNewsL=false;
			};
			$basketSlide.fadeIn(400);
			console.log("clicked");
			$down1img.attr('src',$img+'icon/up.png');
			$bBasket=true;
			
		}
		else{
			$basketSlide.fadeOut(400);
			console.log("clicked");
			$down1img.attr('src',$img+'icon/down.png');
			$bBasket=false;
		}


		return false;
	};
	var setConnexion=function(e){
		e.preventDefault();
		e.returnValue = false;

		console.log('ok1');
		
			console.log('ok2');
			sessionStorage.setItem('bConnected',true);
			sessionStorage.setItem('name',$name.val());
			
			$connect.text($name.val());
			$('#connect').remove();
			$down2.remove();
			$bConnected=false;
			console.log(sessionStorage.name);
	};
	var checkConnected=function(){
		var connect=sessionStorage.getItem('bConnected');
		console.log('connect');
		if(connect)
		{
			$('#toConnect').text(sessionStorage.getItem('name'));
			$('#connect').remove();
			console.log('martinpaulus');
			$down2.remove();
		}
	};
	var slider=function(){
		$tab.removeAttr("style").removeClass('tab_active');;
		var cssTab={'background':'url("img/tab_active.png") no-repeat right','position':'relative','z-index':2};
		console.log('slider start');
			$tab.first().css(cssTab).addClass('tab_active');

		//$promo.first().animate({opacity:1},400).delay(5000).fadeOut(400).next().animate({opacity:1},400).delay(5000).fadeOut(400).next().animate({opacity:1},400).delay(5000).fadeOut(400).next().animate({opacity:1},400).delay(5000).fadeOut(400);
		interval=setInterval(function(){
			$(".tab:eq("+nI+")").css(cssTab).addClass('tab_active');
			$(".tab:eq("+nI+")+a.pict").fadeIn(400);
			if(!nI==0)
			{
				var nI2=nI-1;
				console.log(nI2);
				$(".tab:eq("+nI2+")").removeAttr("style").removeClass('tab_active');
				$(".tab:eq("+nI2+")+a.pict").removeAttr("style");
				console.log($(".tab:eq("+nI2+")+a.pict").attr("href"));
			}
			if (nI==0)
				{
					$(".tab:eq(3)").removeAttr("style").removeClass('tab_active');
					$(".tab:eq(3)+a.pict").removeAttr("style");
				};
			nI=++nI;
			if(nI>3)
			{
				nI=0;
			}
			

		},5000);
		
	};
	var removeSlider=function(e){
		$tab.removeAttr("style").css({'background':'url("img/tab.png") no-repeat'});
		$(this).css({'background':'url("img/tab_active.png") no-repeat right'});
		$("a.pict").removeAttr("style");
		clearInterval(interval);
	};
	var autocomplete=function(e){
		console.log('autocomplete')
		var txt=$(this).val();
		$('.searchedArticle').remove();
		$.getJSON("autocomplete.json", function(json){
	   		for(var y=0;y<json.article.length;y++)
	   		{
	   			var reg=new RegExp(txt,'i');
	   			
	   			var match=reg.exec(json.article[y].name);
	   			if(match && !txt==0)
	   			{
	   				console.log(txt);

	   				$('#autocomplete').append('<div class=searchedArticle><p>'+json.article[y].name+'</p><img alt="'+json.article[y].name+'"src="'+$img+json.article[y].src+'"/></img></div>').fadeIn(400);
	   				//alert(json.article[i].src);
	   			}
	   		}
 		});
	};
	var clearAutocomplete=function(e)
	{
		console.log('cleared');
		$('#autocomplete').fadeOut(400);
		$('.searchedArticle').remove();
		$(this).val('');
	};
	var showNav=function(){
		$(this).next('div').animate({'top':'50px'}).css('display','block');
	};
	var displayNav=function(){
		$(this).animate({'top':'50px'}).css('display','block');
		$bDisplay=true;
		console.log($bDisplay);
		$(this).prev('.nav').css({background:'white',
	color:'#11c639',
	'-webkit-border-radius': '5px',
	'border-radius': '5px'})
	};
	var hideNav=function(){
		var thisNav= $(this);
		setTimeout(function(){
			if(!$bDisplay){
			thisNav.next('div').css({'top':'50px'}).fadeOut(200);
			console.log('hide');}
		},200);
		$('.nav').removeAttr('style'); 
	};
	var undisplayNav=function(){
		var thisNav= $(this);
		setTimeout(function(){
			thisNav.css({'top':'50px'}).fadeOut(200);
			console.log('undisplay');
			$bDisplay=false;
		},200);
		$('.nav').removeAttr('style'); 
	};
	/*.css('background:','url("../img/tab_active.png")')

	animate({opacity:1},400)
	var storeImg=function(e){
		if (localStorage) {}

		 Le navigateur supporte le localStorage
		localStorage.setItem('backgroundImg',e.target.result);
		} 
		else{

		alert('Votre navigateur ne supporte pas le localStorage');

		$mainZone.css({
						background:'url('+localStorage.getItem('backgroundImg')+')no-repeat'});
		};
		*/

	$( function () {
		$connectSlide=$('#connect');
		$basketSlide=$('#basketSlide');
		$connect=$('#toConnect');
		$basket=$("#basket");
		$down1=$("#down1");
		$down2=$("#down2");
		$down1img=$("#down1 img");
		$down2img=$("#down2 img");;
		$connexion=$("#connexion");
		$name=$("#name");
		$promo=$(".promo a.pict");
		$tab=$(".tab");
		$object=$('#basket+a');
		$notYet=$('#connect a');
		$register=$('#register');
		$newsLetter=$('#newsLetter');
		$navDown=$('.navDown');
		$navA=$('nav a');
		$smallBasket=$('.smallBasket');
		// -- onload routines
		setImg();
		$smallBasket.on('click',addObject);
		$navDown.on('mouseover',displayNav);
		$navA.on('mouseover',showNav);
		$navA.on('mouseleave',hideNav);
		$navDown.on('mouseleave',undisplayNav);
		checkConnected();
		$register.hide();
		slider();
		$('#search').keyup(autocomplete);
		$('#search').focusout(clearAutocomplete);
		checkConnected();
		$connect.on('click',showConnect);
		$down2.on('click',showConnect);
		$notYet.on('click',showSign);
		$basket.on('click',showBasket);
		$down1.on('click',showBasket);
		$connexion.on('click',setConnexion);
		$tab.on('mouseover',removeSlider);
		$tab.on('mouseleave',slider);
		$object.on('click',showBasket);
		$("#newsL").on('click',showNewsLetter);



	} );

}( jQuery ) );

