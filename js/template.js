$(function() {

	var html = '', baseNum = 1;

	$.fn.addListItem = function () {
		$(this).each(function(){
			html += '<li><a href="#">';
			html += $(this).text();
			html += '</li></a>';
		});
	};

	$('.main').find('h2, h3, h4, h5, h6').each(function(){
		var tagNum = parseInt($(this).prop('tagName').replace('H', ''));

		if (tagNum < baseNum) {
			html += '</ul>';	
		} else if (tagNum > baseNum) {
			html += '<ul>';
		}
		
		html += '<li><a href="#">';
		html += $(this).text();
		html += '</li></a>';

		baseNum = tagNum;
	});

	
	$('.toc').append($(html));

	$('.toc').addClass('sticky').stickToTop('#torso');

})
