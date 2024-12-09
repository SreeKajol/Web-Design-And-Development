//slick slider

$(document).ready(function () {
	$('.kajol').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 1000,
		prevArrow: '<i class="fa fa-angle-left icon-left" ></i>',
		nextArrow: '<i class="fa fa-angle-right icon-right" ></i>',
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
            },
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
            },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
	});
});


//veno box js code start

$('.venobox').venobox();

//wow code start

new WOW().init();
