$(document).ready(function () {


    $('.menu-toggler').on('click', function (evt) {
        $menu = $('.menu');
        $menu.toggleClass('expanded');
    });


    var menu = $('.menu ul');

    $('.scroll').click(function (event) {
        $('.menu').removeClass('expanded');
        event.preventDefault();

        var full_url = this.href,
            parts = full_url.split('#'),
            trgt = parts[1],
            target_offset = $('#' + trgt).offset(),
            target_top = target_offset.top - 60;

        $('html, body').animate({ scrollTop: target_top }, 1000);

        /* Remove active class on any li when an anchor is clicked */
        var width = $(window).width();
        if (width > 960) {
            menu.children().removeClass();
            /* Add active class to clicked anchor's parent li */
            $(this).parent().addClass('active');
        }

    });

});