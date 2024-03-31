// Wait for the DOM to be fully loaded
$(document).ready(function () {
	// Add click event listener to navbar toggler button
	$('.navbar-toggler').on('click', function () {
		// Toggle the collapse class on the navbar collapse
		$('#navbarSupportedContent').toggleClass('collapse');
	});
});
