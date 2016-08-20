(function () {
    $(document).ready(function () {
        var isMobile = true;
        $('#hamburger').css('display') != 'none' ? isMobile = true : isMobile = false;
        
        if (isMobile) {
            var toggle_menu = function () {
                $('.page-nav').slideToggle(200);
                $('#hamburger').toggleClass('nav-open');
            };
            $('#hamburger').on('click', toggle_menu);
        }
        
        $('.page-nav a').on('click', function (e) {
            e.preventDefault();
            isMobile ? toggle_menu() : '';
            var dest = $($(this).attr('href').replace('#', '.')).offset().top;
            $('html, body').animate({
                scrollTop: dest
            }, 800);
        });
        
        //Slider
        
        if (!isMobile) {
            var slides_num = $('#slider div').length;
            var currentSlideNum = 0;
            var nextSlideNum = 0;
            var animationTime = 400;
            setInterval( function () {
                var currentSlide = $('#slider div')[currentSlideNum];
                if (currentSlideNum == slides_num-1) {
                    nextSlideNum = 0;
                } else {
                    nextSlideNum++;
                }
                var nextSlide = $('#slider div')[nextSlideNum];
                
                $(nextSlide).animate({
                    'opacity' : 1
                }, animationTime);
                
                $(currentSlide).animate({
                    opacity: 0
                }, animationTime);
                
                console.log(currentSlideNum);
                console.log(nextSlideNum);
                console.log(nextSlide);
                currentSlideNum = nextSlideNum;
                
            }, 3000);
        }
    });
})();