$(document).ready(function () {
  $("#collapse_navbar");
  tabs_CONTROL();
  tabs_CONTROL_TICKED();
  tabs_CONTROL_NOW("item_contact_tabs");
  tabs_CONTROL_NOW("item_head_tabs");
  ShowAnser();
  Slide_article();
  timePick_day();
  var numItems = $("#list_item_box_news .item_slide").length;
  if (numItems > 2) {
    $("#list_item_box_news").slick({
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

  $("#main_box_slide_Item5").slick({
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
          dots: true,
        },
      },

      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

  $("#main_box_slide").slick({
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
          dots: true,
        },
      },

      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $("#main_box_slide_tour").slick({
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
  $("#main_box_slide_1").slick({
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
          dots: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $("#main_box_slide_2").slick({
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
          dots: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $("#main_box_slide_3").slick({
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
          dots: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $("#box_reviews").slick({
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
          dots: true,
        },
      },

      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
  $(document).on("click", ".show_box_search", function () {
    $(this).addClass("active_search");
    $(this).removeClass("show_box_search");
    $("#box_search").removeClass("fadeOutDown");
    $("#box_search").addClass("fadeInUp");
    $("#box_search").show(300);
  });

  $(document).on("click", ".active_search", function () {
    $(this).addClass("show_box_search");
    $(this).removeClass("active_search");
    $("#box_search").removeClass("fadeInUp");
    $("#box_search").addClass("fadeOutDown");
    $("#box_search").hide(300);
  });
  $(document).on("keyup", ".control_input", function () {
    var lengthCount = this.value.length;
    if (lengthCount) {
      $("#clear_text").addClass("active_text");
    } else {
      $("#clear_text").removeClass("active_text");
    }
  });
  $(document).on("click", ".active_text", function () {
    $("#clear_text").removeClass("active_text");
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
    get_HTML_menu: $("#collapse_navbar").html(),
    bullet_menu: $("#bullet_menu"),
    box_menu_respontive_ovelay: $("#box_menu_respontive_ovelay"),
    box_menu_HTML: $("#box_menu_HTML"),
    box_menu_respontive: $("#box_menu_respontive"),
    control_close: $("#control_close"),
    win_screen: $(window).width(),
    wid: "460px",
  };
  if (CONTROL.win_screen < 768) {
    CONTROL.wid = "460px";
  }
  if (CONTROL.win_screen < 480) {
    CONTROL.wid = "270px";
  }
  if (CONTROL.win_screen < 980) {
    $("#bullet_menu").click(function () {
      CONTROL.box_menu_HTML.html(CONTROL.get_HTML_menu);
      CONTROL.box_menu_respontive.css({
        left: 0,
        width: CONTROL.wid,
      });
      CONTROL.box_menu_respontive_ovelay.css({
        left: CONTROL.wid,
        opacity: 1,
        visibility: "visible",
      });
    });
    $(".control_close").click(function () {
      $(".box_menu_respontive").css({
        left: "-" + CONTROL.wid,
        width: CONTROL.wid,
      });
      $(".box_menu_respontive_ovelay").css({
        left: "0",
        opacity: "0",
        visibility: "hidden",
      });
    });
    $(".box_menu_respontive_ovelay").click(function () {
      $(".box_menu_respontive").css({
        left: "-" + CONTROL.wid,
        width: CONTROL.wid,
      });
      $(".box_menu_respontive_ovelay").css({
        left: "0",
        opacity: "0",
        visibility: "hidden",
      });
    });
  } else {
    $(".box_menu_respontive").css({
      left: "-" + CONTROL.wid,
      width: CONTROL.wid,
    });
    $(".box_menu_respontive_ovelay").css({
      left: "0",
      opacity: "0",
      visibility: "hidden",
    });
  }
  $(document).on("click", "#showModal1", function () {
    var action = $(this).attr("data-toggle");
    ModalTongle(action);
  });
  $(document).on("click", "#showModal2", function () {
    var action = $(this).attr("data-toggle");
    ModalTongle(action);
  });
  $(document).on("click", "#showModal3", function () {
    var action = $(this).attr("data-toggle");
    ModalTongle(action);
  });
  $(document).on("click", "#showModal4", function () {
    var action = $(this).attr("data-toggle");
    ModalTongle(action);
  });
  $(document).on("click", "#showModal5", function () {
    var action = $(this).attr("data-toggle");
    ModalTongle(action);
  });
  $(document).on("click", "#showModal6", function () {
    var action = $(this).attr("data-toggle");
    ModalTongle(action);
  });
  $(document).on("click", ".closeModel", function () {
    closeModal();
  });
  $(document).on("click", ".modal_backdrop", function () {
    closeModal();
  });
}
function tabs_CONTROL() {
  $(document).on("click", ".item_tabs", function () {
    $(".item_tabs").removeClass("active");
    $(this).addClass("active");
    get_ID = $(this).attr("data-tabs");
    $(".itemList").removeClass("activetabs");
    $("#tabs" + get_ID).addClass("activetabs");
  });
}
function ModalTongle(action) {
  CONTROL_MODAL = {
    Modal: $("#" + action),
    Body: $("body"),
  };
  if (action === " ") {
  } else {
    $("#" + action).show(300);
    CONTROL_MODAL.Body.addClass("in");
    CONTROL_MODAL.Body.append('<div class="modal_backdrop fade"></div>');
    $(".modal_backdrop").addClass("in");
    CONTROL_MODAL.Modal.addClass("in");
  }
}
function closeModal() {
  $(".zuzuModal").removeClass("in");
  $(".zuzuModal").fadeOut(150, function () {
    $(".modal_backdrop").remove();
  });
}
function tabs_CONTROL_TICKED() {
  $(document).on("click", ".item_tabs_ticked", function () {
    $(".item_tabs_ticked").removeClass("active");
    $(this).addClass("active");
    get_ID = $(this).attr("data-tabs");
    $(".item_list_a").removeClass("activetabs");
    $("#tabsa" + get_ID).addClass("activetabs");
  });
}

function tabs_CONTROL_NOW($value) {
  $(document).on("click", "." + $value, function () {
    $("." + $value).removeClass("active");
    $(this).addClass("active");
    get_ID = $(this).attr("data-tabs");
    var DATAID = $("#tabs_" + get_ID).attr("data-id");
    var NAMECLASS = $("#" + DATAID + get_ID).attr("class");
    var FINTCLASS = $("#" + DATAID + get_ID).hasClass(NAMECLASS);

    $("." + NAMECLASS).hide(300);
    $("#" + DATAID + get_ID).show(300);
  });
}
function ShowAnser() {
  var sum_question = $(".sum_question");
  $(document).on("click", ".sum_question", function () {
    var IDANSER = $(this).attr("data-anser");
    // $('.sum_anser').hide(300);
    // $('#anser_' + IDANSER).show(300);
    $("#anser_" + IDANSER).toggle(300);
  });
}
function Slide_article() {
  $(".main_slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: ".slider_nav",
  });
  $(".slider_nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".main_slide",
    dots: false,
    arrows: false,
    prevArrow: '<div class="slick_prev"></div>',
    nextArrow: '<div class="slick_next"></div>',
    centerMode: true,
    focusOnSelect: true,
  });
}
function timePick_day() {
  var width_n = $(window).width();
  var box_grid_day = $(".box_grid_day");
  var modal_content = $(".modal_content ");
  var item_day = $(".item_day");
  var modal_content_W = modal_content.width();
  item_day.css({
    width: (modal_content_W - 14) / 7 + "px",
    height: (modal_content_W - 14) / 7 + "px",
  });
  $(".box_name_day").css({
    width: (modal_content_W - 14) / 7 + "px",
  });
}
$(document).on("click", ".close_icon", function () {
  closeModal();
});

$(document).click(function () {
  $(".drop_down_menu").hide();
});

$(document).on("click", ".heaer_menu_drop .li_meu .aput_dorop", function (e) {
  e.stopPropagation();
  $(".drop_down_menu").hide();
  $(this).find(".drop_down_menu").toggle();
});
$(document).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var top_bar = $(".top_bar").height();
  if (scrollTop > top_bar) {
    $(".top_bar").css({
      height: "0",
      overflow: "hidden",
    });
  } else {
    $(".top_bar").css({
      height: "40px",
      overflow: "visible",
    });
  }
});
// -----------------SHOW DROP SELECT LANGUE---------------
$(document).on("click", ".custom_select_triggle", function (e) {
  $(".custom_options").toggleClass("open");
  $(this).toggleClass("on");
});
$(document).on("click", ".custom_option", function (e) {
  var custom_select_triggle = $(".custom_select_triggle");
  var custom_select_triggle_name_contry = $(
    ".custom_select_triggle .name_contry"
  );
  var selected_flag_contry = $("#selected_flag_contry");
  var data_select_contry = $(this).attr("data-value");
  console.log($(this).text());
  selected_flag_contry.attr("class", "");
  selected_flag_contry.addClass('icon_flag ' + data_select_contry);
  $(".custom_options").toggleClass("open");
  custom_select_triggle.removeClass("on");
  custom_select_triggle_name_contry.html($(this).text());
});

// -----------------SHOW MENU-----------------

$(document).on("click", "#menu_slide", function (e) {
  $("body").addClass("active_menu");
  $(".menu_mb").css({
    left: 0,
  });
  $("body").append("<div class='ovelay_menu' id='ovelay_menu'></div>");
});
$(document).on("click", "#ovelay_menu", function (e) {
  $(".menu_mb").css({
    left: "-100%",
  });
  $("body").removeClass("active_menu");
  $(this).remove();
});

// -----------------SHOW SEARCH-----------------
$(document).on("click", "#search_action", function (e) {
  $("body").addClass("active_menu");
  $(this).hide();
  $(".search_box").css({
    top: "56px",
  });
  $("body").append("<div class='ovelay_search' id='ovelay_search'></div>");
});
$(document).on("click", "#ovelay_search", function (e) {
  $("body").removeClass("active_menu");
  $(".search_box").css({
    top: "-100%",
  });
  $("#search_action").show();
  $(this).remove();
});

// ===================TABS RANKING=================
$(document).on("click", ".item", function (e) {
  $(".control_tabs_ranking .item").removeClass("on");
  $(".list__rank").removeClass("on");
  $(this).addClass("on");
  var data_rank = $(this).attr("data-rank");
  $("#ranking_00" + data_rank).addClass("on");
});
// ===================TABS CONTACT=================
$(document).on("click", ".item_tabs_Control", function (e) {
  $(".item_tabs_Control").removeClass("on");
  $(".tabs_control").removeClass("on");
  $(this).addClass("on");
  var data_form = $(this).attr("data-form");
  $("#tabs_controll_00" + data_form).addClass("on");
});
// ===================TABS CONTACT QA=================
$(document).on("click", ".item_QA ", function (e) {
  $(".item_QA ").removeClass("on");
  $(this).addClass("on");
});

// ===================TABS FQA=================
$(document).on("click", ".centerService .item_tabs", function (e) {
  $(".centerService .item_tabs").removeClass("on");
  $(".tabsintem ").removeClass("on");
  $(this).addClass("on");
  var data_tabs = $(this).attr("data-tabs");
  $("#tabs-" + data_tabs).addClass("on");
});
//===================================OPEN MODAL===================================
$(document).on("click", ".open_modal", function (e) {
  var data_target = $(this).attr("data-target");
  // $('#' + data_target).css({'display':'block'});
  $("#" + data_target).show(100);
  $("#" + data_target).addClass("open");
  $("body").addClass("active_menu");
  $("body").append(
    "<div class='ovelay_modal fade open' id='ovelay_modal'></div>"
  );
});
function do_modal_close() {
  $(".modal").css({ display: "none" });
  // we don't want to call do_totals2 directly, because it is what hides the element.
  window.setTimeout(do_modal_close, 40000); // setTimeout accepts a function reference
}
$(document).on("click", ".ovelay_modal", function (e) {
  $(".modal").removeClass("open");
  $("body").removeClass("active_menu");
  $(this).remove();
  setTimeout(function () {
    $(".modal").css({ display: "none" });
  }, 200);
});
$(document).on("click", ".btn", function (e) {
  var dismiss = $(this).attr("dismiss");
  if (dismiss === "modal") {
    $(".modal").removeClass("open");
    $("body").removeClass("active_menu");
    $(".ovelay_modal").remove();
    setTimeout(function () {
      $(".modal").css({ display: "none" });
    }, 200);
  }
});
// $(document).on('click', '.modal.open', function (e) {
//     e.preventDefault();
// });

$(document).on("click", ".menu .menu_list .menu_item", function (e) {
  var data_category = $(this).attr("data-category");
  var data_activeMenu = $(this).attr("data-active-menu");
  var set = localStorage.setItem("category", data_category);
  var setActiveMenu = localStorage.setItem("activeMenu", data_activeMenu);
});
$(document).on("click", ".box_select_lang", function (e) {
  $(this).toggleClass("on");
});

$(document).ready(function () {
  var getURL = $(location).attr("pathname").slice(1);
  if (
    getURL == "home.html" ||
    getURL == "review_list.html" ||
    getURL == "contact_list_01.html" ||
    getURL == "info_hallyo.html" ||
    getURL == "notice.html"
  ) {
    localStorage.removeItem("category");
  }
  switch (getURL) {
    case "home.html":
      document.title = "Home Page";
      break;
    case "review_list.html":
      document.title = "리뷰";
      break;
    case "contact_list_01.html":
      document.title = "문의하기";
      break;
    case "info_hallyo.html":
      document.title = "Info Hallyo";
      break;
    case "notice.html":
      document.title = "리뷰";
      break;
    default:
    // code block
  }

  var get = localStorage.getItem("category");
  var get_activeMenu = localStorage.getItem("activeMenu");
  var a = $(".menu .menu_list .menu_item").attr("data-category");
  var b = $(".menu .menu_list .menu_item").attr("data-active-menu");
  var test;
  $.each($(".menu .menu_list .menu_item"), function (k, v) {
    if (get_activeMenu == $(v).text()) {
      test = v;
    }
  });

  if ($(".menu .menu_list").hasClass("on")) {
    $(".menu .menu_list").removeClass("on");
    var active = $(test).parent().addClass("on");
  }
  if (get == undefined || get === "undefined") {
  } else {
    if ($(".menu .menu_list").hasClass("on")) {
      $(".menu .menu_list").removeClass("on");
      var active = $(test).parent().addClass("on");
    }
    $("#title-head").html(get);
    document.title = get;
  }
});
function open_modal(data_target) {
  $("#" + data_target).show(100);
  $("#" + data_target).addClass("open");
  $("body").addClass("active_menu");
  $("body").append(
    "<div class='ovelay_modal fade open' id='ovelay_modal'></div>"
  );
}
$(document).on("click", "#send_one_one", function (e) {
  var data_target = $(this).attr("data-target");
  open_modal(data_target);
});
$(document).on("click", ".btn.close", function (e) {
  $(".modal").removeClass("open");
  $("body").removeClass("active_menu");
  $(".ovelay_modal").remove();
  setTimeout(function () {
    $(".modal").css({ display: "none" });
  }, 200);
});
$(document).on("click", ".box_sum_ques_ans .box_ques", function (e) {
  $(this).children(".box_more_info").toggle("300");
  $(this).parent().addClass("dropdown");
});
$(document).on("click", ".box_sum_ques_ans.dropdown", function (e) {
  console.log("321");
  $(this).removeClass("dropdown");
});
$(document).on("click", ".detail__info_right .sharing", function (e) {
  $(this).children().toggleClass("on");
});
