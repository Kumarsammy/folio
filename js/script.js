/* Template: Syntac | Author: eriktailor | Version: 1.0 */
/*--------------------------------------------------------------------- */

$(document).ready(function(){
/*--------------------------- Start Document ---------------------------*/


/*--------------------------------------------------------------------- */
/* # Navigation / Menu Items */
/*--------------------------------------------------------------------- */

	/* Highlight Active */
	$(function(){

		var menuItem = $('#menu a');
		
		menuItem.click(function(){
			menuItem.removeClass('active');
			$(this).addClass('active');
		});

	});

/*--------------------------------------------------------------------- */
/* # Navigation / Mobile Menu */
/*--------------------------------------------------------------------- */

	/* Sticky Nav */
	$("#navbar").waypoint('sticky', {
	  offset: -500
	});


	/* Mobile Menu */
	$(function() {
		
		var mobileMenu 	= $('.mobile-menu');
			menu 		= $('.menu');
			menuHeight	= menu.height();

		$(mobileMenu).on('click', function(e) {
			e.stopPropagation();
			e.preventDefault();
			menu.slideToggle();
		});
			
		$(window).resize(function(){
			var w = $(window).width();
			if(w > 760 && menu.is(':hidden')) {
				menu.removeAttr('style');
			}
		});
			
	});

/*--------------------------------------------------------------------- */
/* # My Profile / Profile Tabs */
/*--------------------------------------------------------------------- */

$(function(){

	var pContent = $('.profile-tabs-content div'),
		pTabs = $('.profile-tabs li');

	pContent.hide();
	pContent.eq(0).show();
		
	pTabs.click(function(){
		pTabs.removeClass('active animated bounceIn');
		$(this).addClass('active animated bounceIn');
		pContent.hide();
		
		var indexer = $(this).index(),
		pShown = $('.profile-tabs-content div:eq(' + indexer + ')');
		
		pShown.fadeIn(500);
	});

});

/*--------------------------------------------------------------------- */
/* # Resume / Skill Bars */
/*--------------------------------------------------------------------- */

$(function(){
	
	var skillBar = $('.skill-bar');
		
	var createBar =	function(math){
		
		skillBar.each(function(){
				
			var percent = $(this).data('percent'),
				skillBarWidth = percent * math + 'px';
				
			$(this).css('width', skillBarWidth);
					
		});	
	};
	
	var math = 4.0;
	
	var loadBar = function(){
	
		var w = $(window).width();
		
		if(w < 479) {
			createBar(math / 1.8);
		} else if(w < 959) {
			createBar(math /1.35);
		} else {
			createBar(math);
		};	
		
	};
	
	$(window).load(function(){loadBar();});	
	$(window).resize(function(){loadBar();});		
		
});

/*--------------------------------------------------------------------- */
/* # Animation Effects */
/*--------------------------------------------------------------------- */

	// Page Titles
	$('#header').waypoint(function() {
	
	  $('.page-title').addClass('animated fadeInUp');
	  
	}, { offset: -100 });
	
	
	// My Profile / Profile infos
	$('#profile').waypoint(function(){
	
		var $items = $('.profile-info p');
		
		$items.each(function(i){
			$(this).css({
				'-webkit-animation-delay': (i*0.4)+"s",
				'-moz-animation-delay': (i*0.4)+"s",
				'-ms-animation-delay': (i*0.4)+"s",	
				'-o-animation-delay': (i*0.4)+"s",	
				'animation-delay': (i*0.4)+"s"				
			});
		});
		
		$items.addClass('animated fadeInLeftBig');
		
	}, {offset: 300});	
	
	
	// Services / Process Parts
	$('#process').waypoint(function(){
		
		$('.process-part').addClass('animated fadeInUp');
		
	}, {offset: 800});		


	// Portfolio / Filters
	$('#portfolio').waypoint(function(){
		
		$('.filter').addClass('animated bounceIn');
		
	}, {offset: 800});	

	
	// Portfolio / Portfolio Items
	$('#portfolio-wrapper').waypoint(function(){
	
		$('#portfolio-wrapper').addClass('animated fadeInDown');
		
	}, {offset: 600});


	// Resume / Skill Bars
	$('#resume').waypoint(function(){
	
		var $items = $('.skill');
		
		$items.each(function(i){
			$(this).css({
				'-webkit-animation-delay': (i*0.3)+"s",
				'-moz-animation-delay': (i*0.3)+"s",
				'-ms-animation-delay': (i*0.3)+"s",	
				'-o-animation-delay': (i*0.3)+"s",	
				'animation-delay': (i*0.3)+"s"				
			});
		});
		
		$items.addClass('animated fadeInRightBig');	
		
	}, {offset: 800});
	
	
	// Button Bar / Button
	$('.button').hover(function(){
		$(this).addClass('animated flipInX').css('animation-duration','1.3s');
	});
	
	// Contact / Input Fields
	$('#contact').waypoint(function(){
	
		var $items = $('.contact-details li');
		
		$items.each(function(i){
			$(this).css({
				'-webkit-animation-delay': (i*0.3)+"s",
				'-moz-animation-delay': (i*0.3)+"s",
				'-ms-animation-delay': (i*0.3)+"s",	
				'-o-animation-delay': (i*0.3)+"s",	
				'animation-delay': (i*0.3)+"s"				
			});
		});
		
		$items.addClass('animated fadeInRightBig');	
		
	}, {offset: 800});




/*--------------------------- End Document ---------------------------*/
});

































