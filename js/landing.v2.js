function formSubmit(id) {
    var form = $('#'+id);
    var hasError = false;
    form.find('.input-error').removeClass('input-error');
    form.find('input.require, textarea.require').each(function(){
        //if (!$(this).val().length || ($(this).val() == $(this).prop("defaultValue"))) {
        if (!$(this).val().length) {
            $(this).addClass('input-error');
            hasError = true;
        }
    });
    if (!hasError) {
        form.submit();
    }
    return false;
}
function formRentSubmit(id) {
    var form = $('#'+id);
    var hasError = false;
    form.find('.cust-error-shad').removeClass('cust-error-shad');
    if (($('#periodpickerstart').val() == '') || ($('#periodpickerend').val() == '')) {
        $('.period_picker_input').addClass('cust-error-shad');
        hasError = true;
    }
    form.find('.cust-error').removeClass('cust-error');
    form.find('select._req').each(function(){
        if ($(this).val() == null) {
            $(this).addClass('cust-error');
            //$(this).prevAll('.select-mask:first').addClass('cust-error');
            hasError = true;
        }
    });
    form.find('.input-error').removeClass('input-error');
    form.find('input.require, textarea.require').each(function(){
        if (!$(this).val().length) {
            $(this).addClass('input-error');
            hasError = true;
        }
    });
    if (!hasError) {
        form.submit();
    }
    return false;
}

function readOrientation() {
    switch (window.orientation) {
        case 0:
            return true;
            break;
            // Portrait
        case 180:
            return true;
            // Portrait (Upside-down)
            break;
        case -90:
            return false;
            // Landscape (Clockwise)
            break;
        case 90:
            return false;;
            // Landscape  (Counterclockwise)
            break;
    }
}
$(document).ready(function(){
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var headerHeight = $('.menu-wrapper').height();
    $(window).on({
        resize: function () {
            var headerHeight = $('.menu-wrapper').height();
            // console.log(headerHeight);
            $('.landing-content').css({
                marginTop: headerHeight + 'px;'
            });
        }
    });
    portraitOrientation = readOrientation();
    console.log(portraitOrientation);
    $(window).scroll(function () {
        if(window.scrollY > 0) {
            $('.btn-to-top').show(100);
        } else {
            $('.btn-to-top').hide(100);
        }
    });
    if(windowWidth < 1024) {
        $('#menu-route, #menu-logbook').hide();
        $(window).scroll(function () {
            // console.log('Scrolled');
            if ($(this).scrollTop() > 1) {
                // console.log($(this).scrollTop());
                $('.menu-wrapper').addClass("mobile-menu-wrapper");
                // $('.mobile-menu-wrapper').removeClass("menu-wrapper");
                $('#go-home img').addClass("mobile-logo");
                $('.menu-wrapper .main-menu .main-menu-item').addClass("mobile-menu-item");
                $('#fb-icon').addClass('fb-icon-mobile');
                $('#inst-icon').addClass('inst-icon-mobile');
                $('#yt-icon').addClass('yt-icon-mobile');
            } else {
                // console.log($(this).scrollTop());
                $('.menu-wrapper').removeClass("mobile-menu-wrapper");
                $('.menu-wrapper .main-menu .main-menu-item').removeClass("mobile-menu-item");
                $('#go-home img').removeClass("mobile-logo");
                $('#fb-icon').removeClass('fb-icon-mobile');
                $('#inst-icon').removeClass('inst-icon-mobile');
                $('#yt-icon').removeClass('yt-icon-mobile');
            }
        });
        // if (window.scrollY > 0) {
        //     // console.log(window.scrollY);
        //     $('.menu-wrapper').addClass("mobile-menu-wrapper");
        //     // $('.mobile-menu-wrapper').removeClass("menu-wrapper");
        //     $('#go-home img').addClass("mobile-logo");
        //     $('.main-menu-item').addClass("mobile-menu-item");
        //     $('#fb-icon').addClass('fb-icon-mobile');
        //     $('#inst-icon').addClass('inst-icon-mobile');
        //     $('#yt-icon').addClass('yt-icon-mobile');
        // }
    }
    if($('.travel-slider').length){
        $('.travel-slider').bxSlider({
            slideWidth: '780px',
            pager: false
        })
    }
    if($('.route__place__slider').length){
        $('.route__place__slider').bxSlider({
            slideWidth: '750px',
            pager: false
        })
    }
    // if($('.route__place__slider').hasClass('no-photo')) {
    //     $('.route__place').
    // }
    //show and hide rows
    $('.mobile-table-content .arrow').click(function () {
        $(this).toggleClass('open-arrow close-arrow');
        $(this).closest('.mobile-table-content').children('.row-2, .row-3').toggle(300).css('display','flex');
        // $(this).parent().children('row-3').toggle(300).css('display','flex');
        // $('.mobile-table-content .row-2, .mobile-table-content .row-3').toggle(300).css('display','flex');
    });
    //animated scroll to top
    $('.btn-to-top').click(function (ev) {
        ev.preventDefault();
        window.setTimeout(function () {
            // turnOffMobile();
            $('html, body').animate({ scrollTop: 0 }, "slow");
        }, 0);
        return false;
    });

    //animated scroll to section route
    $(".arrow-down").click(function(ev) {
        ev.preventDefault();
        var position = $('.description').offset().top - headerHeight;
        var windowWidth = $(window).width();
        var hrefGoTo = $(this).attr('href');
        window.setTimeout(function() {
            $("html, body").animate({ scrollTop: $(hrefGoTo).offset().top - 70 }, 800);
        }, 0);
    });

    //animated scroll to section booking
    $("#menu-booking, #mobile-booking, .overscreen-menu > ul > li > a.btn.primary.h60, .buttons-centered > .btn.primary.h60 ").click(function (ev) {
        // ev.preventDefault();
        var position = $('#booking').offset().top;
        var windowWidth = $(window).width();
        if (windowWidth <= 800) {
            position = $('#booking').offset().top - 70;
        }
        window.setTimeout(function() {
            $("html, body").animate({ scrollTop: position }, 800);
        }, 0);
    });

    //animated scroll to section select
    $("#select-part-button").click(function (ev) {
        ev.preventDefault();
        var position = $('#select-part').offset().top;
        var windowWidth = $(window).width();
        // turnOnMobile();
        if (windowWidth <= 800) {
            position = $('#select-part').offset().top - 70;
        }
        window.setTimeout(function() {
            $("html, body").animate({ scrollTop: position }, 800);
        }, 0);
    });
    //overscreen menu
    $('.burger').click(function () {
        $('.overscreen-menu').show().css({'display': 'flex'});
        $('.arrow-down').hide()
    });
    $('.burger.clicked').click(function () {
        $('.overscreen-menu').hide();
        $('.arrow-down').show().css('display', 'flex');
        // $('.burger').removeClass('clicked');
    });
    $('.main-menu-link').click(function (ev) {
        // ev.preventDefault();
        var hrefGoTo = $(this).attr('href');
        $('html, body').animate({scrollTop: $(hrefGoTo).offset().top -70 }, 800);
    })
    $('.overscreen-menu ul li a').click(function (ev) {
        // ev.preventDefault();
        var hrefGoTo = $(this).attr('href');
        // window.setTimeout(function() {
            $('html, body').animate({scrollTop: $(hrefGoTo).offset().top -70 }, 800);
        // }, 0);
        // turnOnMobile();
        $('.overscreen-menu').hide();
        // $('.arrow-down').show();
    });

    //phone input placeholder
    if($('.phone-number').length){
        $('.phone-number').mask("(000) 000 00 00", {placeholder: "(011) 22 333 44 *"});
    }

    $("form > button.btn.primary.h56").click(function(ev) {
        ev.preventDefault();
        var id = $(this).attr('id');
        // console.log('ID = ' + id);
        var name = $(this).siblings('.form-enter-wrapper').children('.inner-input-wrapper.name-input').find('input').val();
        // console.log('Name = ' + name);
        var phone = $(this).siblings('.form-enter-wrapper').find('.phone-number').val();
        // console.log('Phone = ' + phone);
        var etap = $(this).siblings('input').val();
        // console.log('Etap = ' + etap);
        $('#form_order #name').val(name);
        $('#phone').val(phone);
        $('#name1').val(name);
        var selectOptions =  $("#ordinary option");
        selectOptions.each(function () {
            var xyz = $(this).val();
            if (xyz === etap ) {
                $(this).prop('selected', true);
            }
        });
        // window.setTimeout(function() {
        $("html, body").animate({ scrollTop: $('#booking').offset().top - 70 }, 800);
        // }, 0);
        // $("body").animate({ scrollTop: $('#booking').offset().top - 70 }, 800);
    });


    //gallery
    $(".fancybox").fancybox({
        touch : {
            vertical : false,  // Allow to drag content vertically
            momentum : true   // Continue movement after releasing mouse/touch when panning
        },
        helpers:{
            overlay:{
                locked:false,
                css : {
                    'background' : 'rgba(42, 42, 42, 0.95)'
                }
            }
        },
        arrows: true,
        // Clicked on the slide
        clickSlide: 'close',

        // Clicked on the background (backdrop) element
        clickOutside: 'close'
    });

    $('#form_order').submit(function () {
        var _this = $(this);
        var url = _this.attr('action');
        var fields = _this.serialize();
        var event_type = $('#form_event_type').val();
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: fields
        }).done(function (data) {
            if (data.status == 'ok') {
                $('#order_cont').html(data.msg);
                dataLayer.push({'event': event_type});
            } else {
                $('#_cap').attr('src', '/captcha.php?' + Math.random());
                $('#captcha').val('');
                $('#captcha').addClass('input-error');
            }
        });
        return false;
    });
    $("#owl-slider").owlCarousel({
        navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true,
        autoPlay : 4000,
        transitionStyle : 'fade'
    });
});
