$(document).ready(function(){
   $('.slider').slick({
      adaptiveHeight: true,
      
      autoplay: true,
      speed:1200,
      autoplaySpeed:800,
      slidesToShow: 3,
      responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]

   });
  

});