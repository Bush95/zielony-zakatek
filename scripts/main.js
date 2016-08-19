(function () {
    $(document).ready(function () {
        var toggle_menu = function () {
            $('.page-nav').slideToggle(200);
            $('#hamburger').toggleClass('nav-open');
        };
        $('#hamburger').on('click', toggle_menu);
        $('.page-nav a').on('click', function (e) {
            e.preventDefault();
            toggle_menu();
            var dest = $($(this).attr('href').replace('#', '.')).offset().top;
            $('html, body').animate({
                scrollTop: dest
            }, 800);
        });
    });
})();