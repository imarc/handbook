$(function() {

	$.fn.appendTOC = function(contentSelector, headingSelector) {
		var html = '', baseNum = 1;

		$(contentSelector).find(headingSelector).each(function() {
			var heading = $(this);
			var tagNum  = parseInt(heading.prop('tagName').replace('H', ''));
			var id      = heading.text().replace(/[^a-z0-9]/gi, '');
			var link    = window.location.pathname;

			heading.attr('id', id);

			heading.attr('data-foo', tagNum);

			if (tagNum == baseNum) {
				html += '</li><li class="nav__item">';
			} else if (tagNum < baseNum) {
				for (var i = tagNum; i < baseNum; i++) {
					html += '</li></ul><li class="nav__item">';
				}
			} else if (tagNum > baseNum) {
				for (var i = baseNum; i < tagNum; i++) {
					html += '<ul class="nav__list"><li class="nav__item">';
				}
			}

			baseNum = tagNum;

			link += '#' + id;

			html += '<a class="nav__link" href="' + link + '">' + heading.text() + '</a>';
		});

		for (var i = 1; i < baseNum; i++) {
			html += '</li></ul>';
		}

		this.append(html);

		return this;
	};

	$('.nav--toc').appendTOC('.torso__main', 'h2, h3');
});
