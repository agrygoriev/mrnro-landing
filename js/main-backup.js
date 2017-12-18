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
window.onload = function () {
    var docWidth = document.documentElement.offsetWidth;
    [].forEach.call(
        document.querySelectorAll('*'),
        function(el) {
            if (el.offsetWidth > docWidth) {
                console.log(el);
                // var elWidth = el.width();
                // console.log(elWidth)
            }
        }
    );
};

$(document).ready(function(){

    //reviews slider
    if($('.single-slider').length){
        $('.single-slider').bxSlider({
            slideWidth: '770px',
            pager: false
        })
    }
    if($('.travel-slider').length){
        $('.travel-slider').bxSlider({
            slideWidth: '780px',
            pager: false
        })
    }
    $('nav.overscreen-menu').hide();

    //change header menu & nav to mobile one
    var windowWidth = $(window).width();
    if (windowWidth <= 800) {
        console.log(windowWidth);
        window.onscroll = function(ev) {
            if ((window.scrollY) >= 50) { // if scrolled more than 50 px
                $(".btn-to-top").show("slow"); //show btn-to-top
                $("nav.menu-wrapper").hide(0);
                $(".mobile-menu-wrapper").show(100).css('display', 'flex');
                // console.log("Scrolled to " + window.scrollY + " pixels");
            } else {
                $(".btn-to-top").hide("slow");
                $("nav.menu-wrapper").show(0).css('display', 'flex');
                $(".mobile-menu-wrapper").hide(100);
            }
        };
    } else {
        window.onscroll = function(ev) {
            if ((window.scrollY) >= 50) { // if scrolled more than 50 px
                $(".btn-to-top").show("slow");
            } else {
                $(".btn-to-top").hide("slow");
            }
        }
    }

    //scroll to top
    $('.btn-to-top').click(function () {
        var position = $('body').offset().top;
        $('html, body').animate({
            scrollTop: position
        }, 800);
    });

    //animated scroll to section route
    $(".arrow-down").on('click', function() {
        var position = $('#route').offset().top-70;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 800);
    });

    //overscreen menu
    $('.burger').click(function () {
        $('nav.overscreen-menu').show().css('display', 'flex');
        $('.arrow-down').hide()
    });
    $('.burger.clicked').click(function () {
        $('nav.overscreen-menu').hide();
        $('.arrow-down').show().css('display', 'flex');
    });
    $('nav.overscreen-menu ul li a').click(function (ev) {
        ev.preventDefault();
        var hrefGoTo = $(this).attr('href');
        $('html, body').animate({scrollTop: $(hrefGoTo).offset().top-70}, 'slow');
        $('nav.overscreen-menu').hide();
        $('.arrow-down').show();
    });

    //accordion
    function accordionProcced(thisElem){
        if(!thisElem.hasClass('opened')){
            $('.accordion-header').removeClass('opened');
            $('.accordion-content').hide();
            thisElem.addClass('opened').next().slideDown(300);
        }
    }
    $('.accordion-header').on('click', function(){
        if($(this).hasClass('opened')){
            $(this).removeClass('opened').next().slideUp(200);
            $('#advanced').val(0);
        } else{
            accordionProcced($(this));
            $('#advanced').val(1);
        }
    });

    //scroll to element
    $('.go-to-block').on('click', function(e){
        e.preventDefault();
        var goTo = $(this).attr('href').split('#')[1];
        var additionalOffset;

        if($(this).parent().hasClass('sub-menu')){
            additionalOffset = 125;
            if(!$(this).hasClass('register-link')){
                accordionProcced($('#' + goTo));
            }
        } else{
            additionalOffset = 105
        }

        $('html, body').animate({
            scrollTop: $('#' + goTo).offset().top - additionalOffset
        }, 800);
    });

    //custom select
    $('.custom-select').on('click', function(){
        var thisElem = $(this);

        if(!thisElem.hasClass('active')){
            var $activeSelect = thisElem.find('select');
            var $modalContent = thisElem.find('.custom-select-content');
            var itemContent, itemMarkUp, activeOption;

            $modalContent.empty();

            $activeSelect.find('option').each(function() {
                itemContent = $(this).data();
                activeOption = '';
                itemMarkUp = '';

                var rmultiDash = /([a-z])([A-Z])/g;
                var className;
                for(var i in itemContent) {
                    className = i.replace( rmultiDash, "$1-$2" ).toLowerCase();
                    itemMarkUp = itemMarkUp + '<span class='+ className +'>' + itemContent[i] + '</span> '
                }

                if($(this).attr('selected') == 'selected') {
                    activeOption = ' custom-select-active'
                }

                thisElem.addClass('active');
                $modalContent.append('<div class="custom-select-item'+ activeOption +'" data-value="' + $(this).val() + '">' + itemMarkUp + '</div>');
            });

            $modalContent.show();
        } else{
            thisElem.removeClass('active');
            thisElem.find('.custom-select-content').hide();
        }
    });

    $(document).on('click', '.custom-select-item', function(){
        var $activeOptionVal = $(this).attr('data-value');
        var $owner = $(this).closest('.custom-select').find('select');
        var $mask = $(this).closest('.custom-select').find('.select-mask');
        var $content = $(this).html();
        var $modalContent = $(this).parents('.custom-select-content');

        $mask.html($content);

        $modalContent.hide();
        $owner.val($activeOptionVal).trigger("change");
    });


    $('.custom-select').on('mousemove',(function(e){
        var thisElem = $(this);
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var elemWidth = thisElem.outerWidth();
        var elemHeight = thisElem.outerHeight() + thisElem.find('.custom-select-content').outerHeight();

        console.log(y == elemHeight, y, elemHeight);

        if(x == 1 || y == 1){
            hideContent();
        }
        else if(x == (elemWidth - 1) || y == (elemHeight - 3)){
            hideContent();
        }

        function hideContent(){
            var thisElem = $('.custom-select.active');
            thisElem.removeClass('active');
            thisElem.find('.custom-select-content').hide();
        }

    }));

    //phone input placeholder
    if($('.phone-number').length){
        $('.phone-number').mask("(000) 000 00 00", {placeholder: "(011) 22 333 44 *"});
    }

    //fixed header left offset
    $(window).scroll( function(){
        if($(window).width() < 1200){
            var correctingMargin = $(window).scrollLeft();
            $('.main-header').css({
                'margin-left': - correctingMargin
            });
        }
    }).trigger('scroll');

    $(window).resize(function(){
        if($(window).width() < 1200){
            var correctingMargin = $(window).scrollLeft();
            $('.main-header').css({
                'margin-left': - correctingMargin
            });
        }
        else{
            $('.main-header').attr('style', ' ');
        }
    }).trigger('resize');

    //custom checkbox
    /*
        $('.custom-checkbox').on('click', function(e){
            e.preventDefault();
            if($(this).hasClass('checked')){
                $(this).removeClass('checked').find('input').attr('checked', '');
            } else{
                $(this).addClass('checked').find('input').attr('checked', 'checked');
            }
        });
    */

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

    });
    // wrapCSS: 'custom-fancy',
    //     padding: 0


    //share

    // $('.btn-soc').ShareLink({
    //     //url:   'http://mrnro.com/',
    //     //title: 'Marinero',
    //     //text:  '',
    //     image: 'http://mrnro.com/images/logo_150.png'
    // });

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