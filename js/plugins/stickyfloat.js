/*
 * stickyfloat - jQuery plugin for verticaly floating anything in a constrained area
 * 
 * Example: jQuery('#menu').stickyfloat({duration: 400});
 * parameters:
 * 		duration 	- the duration of the animation
 *		startOffset - the amount of scroll offset after it the animations kicks in
 *		offsetY		- the offset from the top when the object is animated
 *		lockBottom	- 'true' by default, set to false if you don't want your floating box to stop at parent's bottom
 * $Version: 05.16.2009 r1
 * Copyright (c) 2009 Yair Even-Or
 * vsync.design@gmail.com
 */

$.fn.stickyfloat = function(options, lockBottom) {
	var $obj 				= this;
	var parentPaddingTop 	= parseInt($obj.parent().css('padding-top'));
	var startOffset 		= $obj.parent().offset().top;
	var opts 				= $.extend({ startOffset: startOffset, offsetY: parentPaddingTop, duration: 200, lockBottom:true }, options);
	
	$obj.css({ position: 'absolute' });
	
	if(opts.lockBottom){
		var bottomPos = $obj.parent().height() - $obj.height() + parentPaddingTop; //get the maximum scrollTop value
		if( bottomPos < 0 )
			bottomPos = 0;
	}
	
	$(window).scroll(function () { 
		$obj.stop(); // stop all calculations on scroll event

		var pastStartOffset			= $(document).scrollTop() > opts.startOffset;	// check if the window was scrolled down more than the start offset declared.
		var objFartherThanTopPos	= $obj.offset().top > startOffset;	// check if the object is at it's top position (starting point)
		var objBiggerThanWindow 	= $obj.outerHeight() < $(window).height();	// if the window size is smaller than the Obj size, then do not animate.
		
		// if window scrolled down more than startOffset OR obj position is greater than
		// the top position possible (+ offsetY) AND window size must be bigger than Obj size
		if( (pastStartOffset || objFartherThanTopPos) && objBiggerThanWindow ){ 
			var newpos = ($(document).scrollTop() -startOffset + opts.offsetY );
			if ( newpos > bottomPos )
				newpos = bottomPos;
			if ( $(document).scrollTop() < opts.startOffset ) // if window scrolled < starting offset, then reset Obj position (opts.offsetY);
				newpos = parentPaddingTop;

			$obj.animate({ top: newpos }, opts.duration );
		}
	});
};