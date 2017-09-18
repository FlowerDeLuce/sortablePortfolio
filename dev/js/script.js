$(document).ready(function () {
    $(".main-menu__link.main-menu__link_dropdown").click(function (e) {
        e.preventDefault();
        $('.search-form').slideUp();
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).addClass("dropdown-close");
            $(this).parent().find('.main-menu__sub-menu').slideUp();
        }
        else if ($(this).hasClass('dropdown-close')) {
            closeMenus();
            $(this).addClass("active");
            $(this).removeClass("dropdown-close");
            $(this).parent().find('.main-menu__sub-menu').slideDown();
            $(this).parent().addClass('bordered');
        }
    });

    function closeMenus() {
        $(".main-menu__link.main-menu__link_dropdown").each(function (index, menu) {
            var menuNodes = document.querySelectorAll(".main-menu__link.main-menu__link_dropdown");
            menuNodes[index].classList.remove("active");
            menuNodes[index].classList.add("dropdown-close");
            $(menu).parent().find('.main-menu__sub-menu').slideUp();
            $(menu).parent().removeClass('bordered');
        });
    }
    if (window.matchMedia('(max-width: 900px)').matches) {
        $('.main-menu__sub-menu li').click(function (e) {
            e.preventDefault();
          
            if ($(this).siblings('li').find('ul.sub-sub-menu:visible').length) {
                $('ul.sub-sub-menu').slideUp('normal');
                console.log('slideUp ul');
            }
            $(this).find('ul.sub-sub-menu').slideToggle('normal');
        });
    }
    $('.search-icon').click(function () {
       
        closeMenus();
        $('.search-form').slideToggle();
    })
    $('.sort-content').masonry({
        itemSelector: '.sort-item'
        , gutter: 30
    });
    $(".mobile-menu").on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.main-menu__list').slideToggle();
        $('.header').toggleClass('active');
    });
    $('body').append('<a href="#" id="go-top" title="To Top"><i class="fa fa-angle-up" aria-hidden="true"></i></a>');
    $(function () {
        $.fn.scrollToTop = function () {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
            var scrollDiv = $(this);
            $(window).scroll(function () {
                if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
                else $(scrollDiv).fadeIn("slow")
            });
            $(this).click(function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow")
            })
        }
    });
    $(function () {
        $("#go-top").scrollToTop();
    });
});