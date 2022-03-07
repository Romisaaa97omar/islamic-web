$(document).ready(function(){

	$('.counter').counterUp({
    delay: 20,
    time: 1100
});

	$(window).scroll(function(){

		var scrollVal = $(window).scrollTop();
		if(scrollVal >= 300){
			$("#navid").addClass("top");
			$("#navid").addClass("navbar-fixed-top");
			$(".navbar-nav").css("float","right");
			$(".navbar-nav li").css("float","right");
			$("body").css("padding-top","70px");	
			$("#logoid").addClass("logoclass");
			$(".navbar-nav li a").hover( function(){
				$(this).css("color","#eee");
			},function(){
				$(this).css("color","#127110");
			}
			);
		}
		else {
			$("#navid").removeClass("top");
			$("#navid").removeClass("navbar-fixed-top");
			$(".navbar-nav").css("float","none");
			$(".navbar-nav li").css("float","none");	
			$("body").css("padding-top","0");	
			$("#logoid").removeClass("logoclass");
			$(".navbar-nav li a").hover( function(){
				$(this).css("color","#fff");
			},function(){
				$(this).css("color","#127110");
			}
			);

		}
	});
    

  

});