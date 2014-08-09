var app = angular.module('SeatMap', ['mm.foundation']);

var screenWidth = $(window).width();
var picHeight = screenWidth * 0.6686217; // maintains image aspect ratio
console.log(picHeight);
console.log(screenWidth);

$(window).load(function() {
	//sets the image to full width of device while maintaining proper aspec ratio
	$('.image-box').css({width: screenWidth, height: picHeight});
});

