$(window).on("scroll touchmove", function() 
{
	if ($(document).scrollTop() >= $("#one").position().top && $(document).scrollTop() < $("#two").position().top  ) 
	{
		$('header').css('background-image', 'url(file:///E:/Projet%20S2/Website-pathmaker/assets/img/capture_asian_side.png)')
    };
	if ($(document).scrollTop() >= $("#two").position().top && $(document).scrollTop() < $("#three").position().top)
	{
		$('header').css('background-image', 'url(file:///E:/Projet%20S2/Website-pathmaker/assets/img/capture_greek_side.png)')
    };
   if ($(document).scrollTop() >= $("#three").position().top && $(document).scrollTop() < $("#four").position().top ) 
   {
		$('header').css('background-image', 'url(file:///E:/Projet%20S2/Website-pathmaker/assets/img/capture_greek_side.png)')
   };
   if ($(document).scrollTop() >= $("#four").position().top) 
   {
		$('header').css('background-image', 'url(file:///E:/Projet%20S2/Website-pathmaker/assets/img/capture_greek_side.png)')
   };
  
});