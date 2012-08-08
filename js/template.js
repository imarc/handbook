$(function() {

	var html = '',
		baseNum = 1;

	// will only capture h2 and h3 headers
	var headers = ['h2', 'h3'];

	$('.main').find(headers.join(', ')).each(function(){
		var tagNum = parseInt($(this).prop('tagName').replace('H', ''));
		var name   = $(this).text().replace(/[^a-z0-9]/gi, '');
		$(this).attr('id', name);

		if (tagNum < baseNum) {
			html += '</ul>';	
		} else if (tagNum > baseNum) {
			html += '<ul>';
		}
		
		html += '<li><a href="#' + name + '">';
		html += $(this).text();
		html += '</li></a>';

		baseNum = tagNum;
	});

	
	$('.toc').append($(html));

	$('.toc').addClass('sticky').stickToTop('#torso');

})
