$(function() {

    $(".menu_icon").click(function() {
        $(".header").animate({
            left: 0
        }, 500);
    })
    $("#close").click(function() {
        $(".header").animate({
            left: "-60%"
        }, 300);
    })





    if($(window).width() < 767){
        $("#shouye1").attr("href","indexController.do?_index&terminal=phone");
    }else{
        $("#shouye1").attr("href","indexController.do?_index&terminal=pc");
    }
    $(".menu_icon").click(function() {
        $(".header").animate({
            left: 0
        }, 500);
    })
    $("#close").click(function() {
        $(".header").animate({
            left: "-60%"
        }, 300);
    })

    if($(window).width() < 767){
        $("#shouye2").attr("href","indexController.do?_index&terminal=phone");
    }else{
        $("#shouye2").attr("href","indexController.do?_index&terminal=pc");
    }
    $("#phone_icon").click(function(){
        $(".phone_menu_list").slideToggle();
    })
    $(document).ready(function (){
        if($(window).width() <= 767){ //手机终端

        }else{
            $("#_tool_tips").show();
        }
    });
    $.ajax({
        url: "../include/top.html",
        success: function(x) {
            $(".header").html(x);
        }
    });
    $.ajax({
        url: "../include/foot.html",
        success: function(x) {
            $(".footer").html(x);
        }
    });

    // 菜单
    $("#fullPage").fullpage({
        resize: true,
        verticalCentered: false,
        fixedElements: ".menu_icon",
        anchors: ['page1'],
        navigation: false,
        slidesNavigation: true,
        controlArrowColor: "#f62929",
        css3: true,
        responsiveHeight: "100px",
        autoScrolling: true,
        scrollOverflow: true,
        afterRender: function() {
            $(".contact_tit").css({
                left: "0",
                opacity: "1",
            });
            $(".contact_pic").css({
                left: "0",
                opacity: "1",
            });
            $(".common_items").css({
                left: "0",
                opacity: "1",
            });
            $(".right_bar").css({
                right: "0",
                opacity: "1",
            });
        }
    });
    $(document).ready(function(){
        $(".footer img").css("margin","0 0 -5px 10px");
    })
});