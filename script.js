$(function() {
	$("#bubble2").delay(1000).fadeIn("slow");
});

$(function() {
	$("#byline").delay(2000).fadeIn("slow");
});

$(function() {
	$("#teaser").delay(2000).fadeIn("slow");
});

$(function() {
	$("#button").delay(2000).fadeIn("slow");
});

$(function () {
	$("button").on("click", function() {
		$.scrollTo(".container", 800);
	});
});

// use this for nav bar changes
// $(function() {
// 	$('.container').waypoint(function(direction) {
// 	  alert('Top of thing hit top of viewport.');
// 	});
// });