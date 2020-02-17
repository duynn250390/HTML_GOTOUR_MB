
$(document).ready(function () {
    $('#collapse_navbar');
    tabs_CONTROL();
    tabs_CONTROL_TICKED();
    tabs_CONTROL_NOW('item_contact_tabs');
    tabs_CONTROL_NOW('item_head_tabs');
    ShowAnser();
    Slide_article();
    timePick_day();
    var numItems = $('#list_item_box_news .item_slide').length;
    if (numItems > 2) {
        $('#list_item_box_news').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '<div class="slick_prev"></div>',
            nextArrow: '<div class="slick_next"></div>',
            // responsive: [
            //     {
            //         breakpoint: 768,
            //         settings: {
            //             slidesToShow: 1,
            //             slidesToScroll: 1,
            //             infinite: true,
            //         }
            //     }
            // ]
        });
    }

    $('#main_box_slide_Item5').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // $('#main_box_slide_m').slick({
    //     infinite: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 5,
    //     autoplay: true,
    //     autoplaySpeed: 20000,
    //     dots: false,
    //     arrows: false,
    //     centerMode: true,
    //     // prevArrow: '<div class="slick_prev"></div>',
    //     // nextArrow: '<div class="slick_next"></div>',
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //             }
    //         },

    //         {
    //             breakpoint: 980,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 2,
    //                 infinite: true,
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 375,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });
   
    $('#main_box_slide').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        dots: true,
        arrows: true,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('#main_box_slide_tour').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 4,
        //             slidesToScroll: 4,
        //             infinite: true,
        //             dots: true
        //         }
        //     },

        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 375,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    });
    $('#main_box_slide_1').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('#main_box_slide_2').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('#main_box_slide_3').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('#box_reviews').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: true,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });
    $(document).on('click', '.show_box_search', function () {
        $(this).addClass('active_search');
        $(this).removeClass('show_box_search');
        $('#box_search').removeClass('fadeOutDown');
        $('#box_search').addClass('fadeInUp');
        $('#box_search').show(300);
    });

    $(document).on('click', '.active_search', function () {
        $(this).addClass('show_box_search');
        $(this).removeClass('active_search');
        $('#box_search').removeClass('fadeInUp');
        $('#box_search').addClass('fadeOutDown');
        $('#box_search').hide(300);
    });
    $(document).on('keyup', '.control_input', function () {
        var lengthCount = this.value.length;
        if (lengthCount) {
            $('#clear_text').addClass('active_text');
        } else {
            $('#clear_text').removeClass('active_text');
        }
    });
    $(document).on('click', '.active_text', function () {
        $('#clear_text').removeClass('active_text');
        document.getElementById("control_input").value = "";

    });
    respon_menu();
});
$(window).resize(function () {
    respon_menu();
    timePick_day();
});

function respon_menu() {
    var CONTROL = {
        get_HTML_menu: $('#collapse_navbar').html(),
        bullet_menu: $('#bullet_menu'),
        box_menu_respontive_ovelay: $('#box_menu_respontive_ovelay'),
        box_menu_HTML: $('#box_menu_HTML'),
        box_menu_respontive: $('#box_menu_respontive'),
        control_close: $('#control_close'),
        win_screen: $(window).width(),
        wid: '460px',
    }
    if (CONTROL.win_screen < 768) {
        CONTROL.wid = '460px'
    }
    if (CONTROL.win_screen < 480) {
        CONTROL.wid = '270px'
    }
    if (CONTROL.win_screen < 980) {
        $('#bullet_menu').click(function () {
            CONTROL.box_menu_HTML.html(CONTROL.get_HTML_menu);
            CONTROL.box_menu_respontive.css({
                'left': 0,
                'width': CONTROL.wid
            });
            CONTROL.box_menu_respontive_ovelay.css({
                'left': CONTROL.wid,
                'opacity': 1,
                'visibility': 'visible',
            });
        });
        $('.control_close').click(function () {
            $('.box_menu_respontive').css({
                'left': '-' + CONTROL.wid,
                'width': CONTROL.wid
            });
            $('.box_menu_respontive_ovelay').css({
                'left': '0',
                'opacity': '0',
                'visibility': 'hidden',
            });
        });
        $('.box_menu_respontive_ovelay').click(function () {
            $('.box_menu_respontive').css({
                'left': '-' + CONTROL.wid,
                'width': CONTROL.wid
            });
            $('.box_menu_respontive_ovelay').css({
                'left': '0',
                'opacity': '0',
                'visibility': 'hidden',
            });
        });
    } else {
        $('.box_menu_respontive').css({
            'left': '-' + CONTROL.wid,
            'width': CONTROL.wid
        });
        $('.box_menu_respontive_ovelay').css({
            'left': '0',
            'opacity': '0',
            'visibility': 'hidden',
        });
    }
    $(document).on('click', '#showModal1', function () {
        var action = $(this).attr('data-toggle');
        ModalTongle(action);
    });
    $(document).on('click', '#showModal2', function () {
        var action = $(this).attr('data-toggle');
        ModalTongle(action);
    });
    $(document).on('click', '#showModal3', function () {
        var action = $(this).attr('data-toggle');
        ModalTongle(action);
    });
    $(document).on('click', '#showModal4', function () {
        var action = $(this).attr('data-toggle');
        ModalTongle(action);
    });
    $(document).on('click', '#showModal5', function () {
        var action = $(this).attr('data-toggle');
        ModalTongle(action);
    });
    $(document).on('click', '#showModal6', function () {
        var action = $(this).attr('data-toggle');
        ModalTongle(action);
    });
    $(document).on('click', '.closeModel', function () {
        closeModal();
    });
    $(document).on('click', '.modal_backdrop', function () {
        closeModal();
    });
}
function tabs_CONTROL() {
    $(document).on('click', '.item_tabs', function () {
        $('.item_tabs').removeClass('active');
        $(this).addClass('active');
        get_ID = $(this).attr('data-tabs');
        $('.itemList').removeClass('activetabs');
        $('#tabs' + get_ID).addClass('activetabs');
    });
}
function ModalTongle(action) {
    CONTROL_MODAL = {
        Modal: $('#' + action),
        Body: $('body'),
    }
    if (action === " ") {
    } else {
        $('#' + action).show(300);
        CONTROL_MODAL.Body.addClass('in');
        CONTROL_MODAL.Body.append('<div class="modal_backdrop fade"></div>');
        $('.modal_backdrop').addClass('in');
        CONTROL_MODAL.Modal.addClass('in');
    }
}
function closeModal() {
    $('.zuzuModal').removeClass('in');
    $('.zuzuModal').fadeOut(150, function () {
        $(".modal_backdrop").remove();
    });
}
function tabs_CONTROL_TICKED() {
    $(document).on('click', '.item_tabs_ticked', function () {
        $('.item_tabs_ticked').removeClass('active');
        $(this).addClass('active');
        get_ID = $(this).attr('data-tabs');
        $('.item_list_a').removeClass('activetabs');
        $('#tabsa' + get_ID).addClass('activetabs');
    });
}

function tabs_CONTROL_NOW($value) {
    $(document).on('click', '.' + $value, function () {
        $('.' + $value).removeClass('active');
        $(this).addClass('active');
        get_ID = $(this).attr('data-tabs');
        var DATAID = $('#tabs_' + get_ID).attr('data-id');
        var NAMECLASS = $('#' + DATAID + get_ID).attr('class');
        var FINTCLASS = $('#' + DATAID + get_ID).hasClass(NAMECLASS);

        $('.' + NAMECLASS).hide(300);
        $('#' + DATAID + get_ID).show(300);
    });
}

{/* <div class="control_heading_tabs">
    <div class="item_head_tabs active" data-tabs="01">상세정보</div>
    <div class="item_head_tabs" data-tabs="02">취소안내</div>
</div>
    <div class="control_body_tabs">
        <div class="body_tabs_item active" data-id="tabs_" id="tabs_01">
           CONTENT
        </div>
        <div class="body_tabs_item" data-id="tabs_" id="tabs_02">
            CONTENT
        </div>
    </div> */}
function ShowAnser() {
    var sum_question = $('.sum_question');
    $(document).on('click', '.sum_question', function () {
        var IDANSER = $(this).attr('data-anser');
        // $('.sum_anser').hide(300);
        // $('#anser_' + IDANSER).show(300);
        $('#anser_' + IDANSER).toggle(300);
    });
}
function Slide_article() {
    $('.main_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        fade: true,
        asNavFor: '.slider_nav'
    });
    $('.slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.main_slide',
        dots: false,
        arrows: false,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
        centerMode: true,
        focusOnSelect: true
    });
}
function timePick_day() {
    var box_grid_day = $('.box_grid_day');
    var item_day = $('.item_day');
    var width_box_grid_day = box_grid_day.width();
    item_day.css({
        'width': width_box_grid_day / 7 + 'px',
        'height': width_box_grid_day / 7 + 'px',
    });
    $('.box_name_day').css({
        'width': width_box_grid_day / 7 + 'px',
    });
}
$(document).on('click', '.close_icon', function () {
    closeModal();
});

$(document).click(function () {
    $(".drop_down_menu").hide();
});

$(document).on('click', '.heaer_menu_drop .li_meu .aput_dorop', function (e) {
    e.stopPropagation();
    $('.drop_down_menu').hide();
    $(this).find('.drop_down_menu').toggle();
});
$(document).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var top_bar = $('.top_bar').height();
    if (scrollTop > top_bar) {
        $('.top_bar').css({
            'height': '0',
            'overflow': 'hidden'
        });
    } else {
        $('.top_bar').css({
            'height': '40px',
            'overflow': 'visible'
        });
    }
});
