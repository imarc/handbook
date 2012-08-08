/**
 * Provides ability to have an element stick to the top of the page.
 * This plugin should be called on an element that is either position:static or position:relative.
 * 
 * == Method Signature ==
 * 
 * Passing in a container into the plugin restricts the sticky element from 
 * moving down along the page farther than the bottom of it.
 * 
 *	$('.create_sidebar').stickToTop('#torso');
 * 
 * @copyright 2009-2011, iMarc <info@imarc.net>
 * @author	Craig Ruksznis [cr] <craigruks@imarc.net>
 * @author	Will Bond [wb] <will@imarc.net>
 *
 * @changes  2.0.0  Refactored the plugin to not require the widthContainer parameter, simplified internals [wb, 2011-09-18]
 * @changes  1.2.1  Fixed some bugs with positioning [wb, 2011-09-18]
 * @changes  1.2.0  Fixed handling browsers that return 0px for the CSS right property, updated documentation [wb, 2011-06-14]
 * @changes  1.1.0  Added heightContainer element to restrict an element top to bottom [cr, 2010-08-02]
 * @changes  1.0.0  Initial implementation [cr, 2009-12-31]
 */
(function($) {
	/**
	 * An instance of the stick to top plugin
	 *
	 * @param  jQuery object  element          The element to stick to the top when scrolling
	 * @param  jQuery object  heightContainer  Container to keep element within for height purposes
	 * @return void
	 **/
	$.stickToTop = function(element, heightContainer) {
		// set defaults first for setting back to original positioning
		var originalCSSPosition = element.css('position');
		var originalCSSLeft     = element.css('left');
		var originalCSSRight    = element.css('right');

		// set initial offets before moving the position
		var absoluteLeft = element.position().left;
		var fixedLeft    = element.offset().left;
		var containerTop = heightContainer.offset().top;
		var topOffset    = element.offset().top;
		
		element.css({
			width: element.width(),
			height: element.height()
		});

		function determinePosition() {
			var position   = element.css('position');
			var isFixed    = position == 'fixed';
			var isAbsolute = position == 'absolute';
			var scrollTop  = $(document).scrollTop();
			var tallEnough = $(window).height() >= element.outerHeight();

			if (tallEnough && scrollTop > containerTop && scrollTop >= containerTop + heightContainer.outerHeight() - element.outerHeight()) {
				setPositionAbsolute();
			
			// if the element is not viewable
			} else if (tallEnough && topOffset - scrollTop <= 0) {
				setPositionFixed();
			
			// if the element is viewable or the window is smaller than the element
			} else if (!tallEnough || ((isFixed || isAbsolute) && topOffset - scrollTop > 0)) {
				resetPosition();
			}
		}
		
		function resetPosition() {
			element.css({
				position: originalCSSPosition,
				left: originalCSSLeft,
				right: originalCSSRight,
				top: 'auto',
				bottom: 'auto'
			});
		}

		function setPositionFixed() {
			fixedLeft = element.offset().left
			element.css({
				position: 'fixed',
				left: fixedLeft,
				right: 'auto',
				top: 0,
				bottom: 'auto'
			});
		}

		function setPositionAbsolute() {
			element.css({
				position: 'absolute',
				left: absoluteLeft,
				right: 'auto',
				top: 'auto',
				bottom: 0
			});
		}

		$(window).resize(function() {
			if (element.css('position') == 'fixed') {
				resetPosition();
				setPositionFixed();
			}
		}).scroll(determinePosition);
	}
	
	$.fn.stickToTop = function(heightContainer) {
		this.each(function() {
			new $.stickToTop($(this), $(heightContainer));
		});
		return this;
	};
})(jQuery);