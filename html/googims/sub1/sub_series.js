$(window).on("scroll", function() {
	var scrollBottom = $(window).scrollTop() + $(window).height();
	if (scrollBottom>=1740&& scrollBottom<=1932) {
		$('.sec2wrap>p').animate({'opacity': '1'},500);
	}
