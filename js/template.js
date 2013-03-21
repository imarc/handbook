$(function() {

	$.fn.appendTOC = function(contentSelector, headingSelector) {
		var html = '', baseNum = 1;

		$(contentSelector).find(headingSelector).each(function() {
			var heading = $(this);
			var tagNum  = parseInt(heading.prop('tagName').replace('H', ''));
			var id      = heading.text().replace(/[^a-z0-9]/gi, '');
			heading.attr('id', id);

			if (tagNum == baseNum) {
				html += '</li><li>';
			} else if (tagNum < baseNum) {
				for (var i = tagNum; i < baseNum; i++) {
					html += '</li></ul><li>';
				}
			} else if (tagNum > baseNum) {
				for (var i = baseNum; i < tagNum; i++) {
					html += '<ul><li>';
				}
			}

			baseNum = tagNum;

			html += '<a href="#' + id + '">' + heading.text() + '</a>';
		});

		for (var i = 1; i < baseNum; i++) {
			html += '</li></ul>';
		}
		
		this.append(html);

		return this;
	};

	$('.toc').appendTOC('.main', 'h2, h3');
	$('.toc').addClass('sticky').stickToTop('.torso', { minWidth: 770 });
});
