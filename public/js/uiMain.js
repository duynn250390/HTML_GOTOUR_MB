
$(document).ready(function () {
    var exports = {};
    var widthScreen = $(window).width();
    slide_main(widthScreen);
    $(document).on('click', '.tabs_item_detail', function () {
        var data_tabs = $(this).attr('data-tabs');
        $('.tabs_item_detail').removeClass('active');
        $(this).addClass('active');
        $('.post_list___tabs').removeClass('active');
        $('#active_tabs__' + data_tabs).addClass('active');
    });
    $(document).on('click', '.show_comment', function () {
        $('.list_comment_qa').css({
            'max-height': '1000px',
            'overflow-y': 'visible'
        });
        $('.show_comment').css({
            'display': 'none'
        });
        $('.hide_comment').css({
            'display': 'flex'
        });

    });
    $(document).on('click', '.hide_comment', function () {
        $('.list_cmqa').css({
            'max-height': '0',
            'overflow-y': 'hidden'
        });
        $('.show_comment').css({
            'display': 'flex'
        });
        $('.hide_comment').css({
            'display': 'none'
        });

    });
    $(document).on('click', '#nut_box li', function () {
        $('#nut_box li').removeClass('on');
        $(this).addClass('on');

    });
    if ($('.item_warap').length > 0) {
        $(document).on('click', '.item_list', function () {
            var data_tabs = $(this).attr('data-tabs');
            console.log(data_tabs);
            $('.item_list').removeClass('on');
            $(this).addClass('on');
            $('.item_warap').removeClass('on');
            $('#item___warrap_' + data_tabs).addClass('on');
        });
    }
    if ($('.detail__container').length > 0) {
        var swiper = new Swiper('.detail__container', {
            pagination: {
                el: '.detail__pagination',
                type: 'bullets',
            },
        });
    }
    if ($('.top_swiper_index').length > 0) {
        var swiper = new Swiper('.top_swiper_index', {
            speed: 600,
            loop: true,
            loopAdditionalSlides: 1,
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: ($(window).width() - (($(window).width() <= 320) ? 233 : 260)) * -1,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            }
        });
    }
    if ($('.poster-swiper-container').length > 0) {
        var swiper = new Swiper('.poster-swiper-container', {
            slidesPerView: 'auto',
            freeMode: true,
        });
    }
});

$(window).resize(function () {
    var widthScreen = $(window).width();
    slide_main(widthScreen);
});

function slide_main(widthScreen) {
    var Mg_width = widthScreen - 240;
    var SRCIMG = $('.main_box_slide .swiper-slide-active .control_item .thumnail img').attr('src');
    $('.poro_bg img.active').attr('src', SRCIMG);
    if (widthScreen <= 414) {
        $('#main_box_slide_m .item_slideshow').css({
            'width': widthScreen,
            'margin-right': - Mg_width
        });
    }
    setInterval(function () {
        var SRCIMG = $('.main_box_slide .swiper-slide-active .control_item .thumnail img').attr('src');
        $('.poro_bg img.active').attr('src', SRCIMG);
    }, 200);
}
