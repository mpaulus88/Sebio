(function(a){var j,q,z,k,A,r,m,f,g=!1,e=!1,s=!1,B=!1,u,l,C,D,E,F,n,p,h=!1,b,v,w,t,G,d=1,x,K=function(c){c.preventDefault();c.returnValue=!1;a('a[name="objets panier"]').text("2 objets");B=!0},H=function(c){c.preventDefault();c.returnValue=!1;sessionStorage.getItem("bConnected")||(n.fadeOut(400),a("#toConnect").text("SE CONNECTER"),!1==e?(!0==g&&(k.fadeOut(400),console.log("clicked"),m.attr("src",b+"icon/down.png"),g=!1),!0==h&&(p.fadeOut(400),console.log("clicked"),h=!1),j.fadeIn(400),console.log("clicked"),
f.attr("src",b+"icon/up.png"),e=!0):(j.fadeOut(400),console.log("clicked"),f.attr("src",b+"icon/down.png"),e=!1),console.log("aie"));return!1},L=function(a){a.preventDefault();a.returnValue=!1;!1==s&&(n.fadeIn(400),console.log("clicked"),f.attr("src",b+"icon/up.png"),s=!0,q.text("Cr\u00e9er un compte"),!0==s&&(k.fadeOut(400),console.log("clicked"),g=!1));!0==e?(j.fadeOut(400),console.log("clicked"),f.attr("src",b+"icon/down.png"),e=!1):(n.fadeOut(400),console.log("clicked"),f.attr("src",b+"icon/down.png"),
s=!1);return!1},M=function(a){a.preventDefault();a.returnValue=!1;!1==h?(p.fadeIn(400),h=!0,console.log("clicked"),!0==e&&(j.fadeOut(400),console.log("clicked"),f.attr("src",b+"icon/down.png"),e=!1),!0==g&&(k.fadeOut(400),console.log("clicked"),m.attr("src",b+"icon/down.png"),g=!1)):(p.fadeOut(400),console.log("clicked"),h=!1);return!1},y=function(a){a.preventDefault();a.returnValue=!1;!1==g&&!0==B?(!0==e&&(j.fadeOut(400),console.log("clicked"),f.attr("src",b+"icon/down.png"),e=!1),!0==h&&(p.fadeOut(400),
console.log("clicked"),h=!1),k.fadeIn(400),console.log("clicked"),m.attr("src",b+"icon/up.png"),g=!0):(k.fadeOut(400),console.log("clicked"),m.attr("src",b+"icon/down.png"),g=!1);return!1},N=function(c){c.preventDefault();c.returnValue=!1;console.log("ok1");console.log("ok2");sessionStorage.setItem("bConnected",!0);sessionStorage.setItem("name",u.val());q.text(u.val());a("#connect").remove();r.remove();console.log(sessionStorage.name)},I=function(){var c=sessionStorage.getItem("bConnected");console.log("connect");
c&&(a("#toConnect").text(sessionStorage.getItem("name")),a("#connect").remove(),console.log("martinpaulus"),r.remove())},J=function(){l.removeAttr("style").removeClass("tab_active");var c={background:'url("'+b+'/tab_active.png") no-repeat right',position:"relative","z-index":2};console.log("slider start");l.first().css(c).addClass("tab_active");D=setInterval(function(){a(".tab:eq("+d+")").css(c).addClass("tab_active");a(".tab:eq("+d+")+a.pict").fadeIn(400);if(0==!d){var b=d-1;console.log(b);a(".tab:eq("+
b+")").removeAttr("style").removeClass("tab_active");a(".tab:eq("+b+")+a.pict").removeAttr("style");console.log(a(".tab:eq("+b+")+a.pict").attr("href"))}0==d&&(a(".tab:eq(3)").removeAttr("style").removeClass("tab_active"),a(".tab:eq(3)+a.pict").removeAttr("style"));d=++d;3<d&&(d=0)},5E3)},O=function(){l.removeAttr("style").css({background:'url("'+b+'tab.png") no-repeat'});a(this).css({background:"url("+b+'"tab_active.png") no-repeat right'});a("a.pict").removeAttr("style");clearInterval(D)},P=function(){console.log("autocomplete");
var c=a(this).val();a(".searchedArticle").remove();a.getJSON(x+"autocomplete.json",function(e){for(var d=0;d<e.article.length;d++)RegExp(c,"i").exec(e.article[d].name)&&0==!c&&(console.log(c),a("#autocomplete").append("<div class=searchedArticle><p>"+e.article[d].name+'</p><img alt="'+e.article[d].name+'"src="'+b+e.article[d].src+'"/></img></div>').fadeIn(400))})},Q=function(){console.log("cleared");a("#autocomplete").fadeOut(400);a(".searchedArticle").remove();a(this).val("")},R=function(){a(this).next("div").animate({top:"50px"}).css("display",
"block")},S=function(){a(this).animate({top:"50px"}).css("display","block");t=!0;console.log(t);a(this).prev(".nav").css({background:"white",color:"#11c639","-webkit-border-radius":"5px","border-radius":"5px"})},T=function(){var b=a(this);setTimeout(function(){t||(b.next("div").css({top:"50px"}).fadeOut(200),console.log("hide"))},200);a(".nav").removeAttr("style")},U=function(){var b=a(this);setTimeout(function(){b.css({top:"50px"}).fadeOut(200);console.log("undisplay");t=!1},200);a(".nav").removeAttr("style")};
a(function(){j=a("#connect");k=a("#basketSlide");q=a("#toConnect");z=a("#basket");A=a("#down1");r=a("#down2");m=a("#down1 img");f=a("#down2 img");C=a("#connexion");u=a("#name");a(".promo a.pict");l=a(".tab");E=a("#basket+a");F=a("#connect a");n=a("#register");p=a("#newsLetter");v=a(".navDown");w=a("nav a");G=a(".smallBasket");"mainBody"==a("body").attr("id")?(b="img/",x=""):(x="../",b="../img/");G.on("click",K);v.on("mouseover",S);w.on("mouseover",R);w.on("mouseleave",T);v.on("mouseleave",U);I();
n.hide();J();a("#search").keyup(P);a("#search").focusout(Q);I();q.on("click",H);r.on("click",H);F.on("click",L);z.on("click",y);A.on("click",y);C.on("click",N);l.on("mouseover",O);l.on("mouseleave",J);E.on("click",y);a("#newsL").on("click",M)})})(jQuery);