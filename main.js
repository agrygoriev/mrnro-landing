$( document ).ready(function() {
    var width_window = $( window ).width();
    var height_window = $( window ).height();
    var height_header = $('header').height();
    var hr_element = $('hr');

    $('.burger-btn').click(function(){
        $(this).toggleClass('close-btn');
        $('header').toggleClass('open-header');
        $('.overlay').toggleClass('flex');
        $('body').toggleClass('not-scrolling');
        $('.home-top-text-module .logo-img-wrapper').toggleClass('open-menu-logo');
    });

    $('.call-modal-button').click(function(){
        $('.order-form').toggle();
        $('body').toggleClass('not-scrolling');
        $('.overlay-to-order').toggleClass('flex-to-order');
    });

    $('.overlay-to-order').click(function(){
        $('.order-form').toggle();
        $('body').toggleClass('not-scrolling');
        $('.overlay-to-order').toggleClass('flex-to-order');
    });

    $('.order-burger-btn').click(function(){
        $('.order-form').toggle();
        $('body').toggleClass('not-scrolling');
        $('.overlay-to-order').toggleClass('flex-to-order');
    });


    $('main').css({paddingTop: height_header + 'px'});



    $(window).on({
        resize: function () {
            var height_header = $('header').height();
            $('main').css({paddingTop: height_header + 'px'});
        }
    });



    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('header').addClass("scroll-header");
            $('.home-top-text-module .logo-img-wrapper').addClass("scroll-home-page-logo");
        }
        else{
            $('header').removeClass("scroll-header");
            $('.home-top-text-module .logo-img-wrapper').removeClass("scroll-home-page-logo");
        }
    });

    if (window.scrollY > 0){
        $('header').addClass("scroll-header");
        $('.home-top-text-module .logo-img-wrapper').addClass("scroll-home-page-logo");
    }



    // $('form[name="order-form"] input, form[name="order-form"] textarea, form[name="contact-page-form"] input, form[name="contact-page-form"] textarea').on({
    //     blur: function () {
    //         var elem_val = $(this).val();
    //         if(elem_val){
    //             $(this).next('label').addClass('label-focus');
    //             return false;
    //         }
    //     }
    // });

    //form
    $('.contact-page-form-wrapper .row-contact-form, .order-form .row-contact-form').each(function() {
        var input = $(this).find('input');
        var label = $(this).find('label');
        var textarea = $(this).find('textarea');
        // var select = $(this).find('select');

        input.on({
            focus: function() {
                label.addClass('label-focus');
                return false;
            },
            blur: function () {
                var elem_val = $(this).val();
                if(elem_val && /^\s*$/.test(elem_val) !== true){
                    label.addClass('label-focus');
                    return false;
                } else {
                    label.removeClass('label-focus');
                    return false;
                }
            }
        });

        textarea.on({
            focus: function() {
                label.addClass('label-focus');
                return false;
            },
            blur: function () {
                var elem_val = $(this).val();
                if(elem_val && /^\s*$/.test(elem_val) !== true){
                    label.addClass('label-focus');
                    return false;
                } else {
                    label.removeClass('label-focus');
                    return false;
                }
            }
        });

        // select.val(0);
        // select.on({
        //     focus: function() {
        //         label.addClass('label-focus');
        //         return false;
        //     },
        //     focusout: function () {
        //         var elem_val = $(this).val();
        //         if(elem_val){
        //             label.addClass('label-focus');
        //             return false;
        //         } else {
        //             label.removeClass('label-focus');
        //             return false;
        //         }
        //     }

        // });

    });
    //form end


    $(window).on("load",function(){
        $(".order-form, .row-order-form").mCustomScrollbar({
            axis:"y", // vertical scrollbar
            theme:"minimal-dark",
            scrollInertia:100
        });
    });




        $(window).on({
            scroll: function () {
                var scrolled = window.pageYOffset || document.documentElement.scrollTop;

                var service_element = $('.service-sections-module .service-section');
                var homePromotion_element = $('.home-promotion-module .wrapper');

                if (width_window>=750){
                    service_element.each(function () {

                        var that_element = $(this);

                        var position_element = that_element.offset().top;
                        var image_wrapper = that_element.find($('.img-wrapper'));
                        var service_description = that_element.find($('.service-description'));
                        var q1 = ((scrolled + height_window) - position_element)*0.08;
                        var q2 = ((scrolled + height_window) - position_element)*0.1;

                        if(scrolled + height_window >= position_element){
                            var moveImgPX =(-35);
                            var moveDescriptionPX =(60);

                            if( q1 < 35 && q1 > 0 ){
                                moveImgPX = (-35) + q1;
                                // console.log(q1);
                            }else{
                                moveImgPX = 0;
                            }
                            if( q2 < (60) && q2 > 5 ){
                                moveDescriptionPX = 60 - q2;
                                // console.log(moveDescriptionPX);
                            }else{
                                moveDescriptionPX = 0;
                            }


                            image_wrapper.css({
                                transform: 'translateY('+moveImgPX+'px)'
                            },10);
                            service_description.css({
                                transform: 'translateY('+moveDescriptionPX+'px)'
                            },10)
                        }

                    });
                }


                if (width_window>=590){
                    homePromotion_element.each(function () {

                        var that_element = $(this);

                        var position_element = that_element.offset().top;
                        var image_wrapper = that_element.find($('.image-wrapper'));
                        var promotion_content = that_element.find($('.promotion-content'));
                        var q1 = ((scrolled + height_window) - position_element)*0.07;
                        var q2 = ((scrolled + height_window) - position_element)*0.1;

                        if(scrolled + height_window >= position_element){
                            var moveImgPX =(-70);
                            var moveDescriptionPX =(80);

                            if( q1 > (-70)){
                                moveImgPX = (-70) + q1;
                            }else{
                                moveImgPX = 0;
                            }
                            if( q2 < (80)){
                                moveDescriptionPX = 80 - q2;
                            }else{
                                moveDescriptionPX = (0);
                            }



                            image_wrapper.css({
                                transform: 'translateY('+moveImgPX+'px)'
                            },10);
                            promotion_content.css({
                                transform: 'translateY('+moveDescriptionPX+'px)'
                            },10)
                        }

                    });
                }




                hr_element.each(function(){
                    var that_element = $(this);
                    var position_this_hr_element = that_element.offset().top;

                    if ( scrolled + height_window >= position_this_hr_element ) {
                        that_element.addClass('visible-hr');
                    }
                });



            }
        });

    hr_element.each(function(){
        var that_element = $(this);
        var position_this_hr_element = that_element.offset().top;

        if ( position_this_hr_element < height_window ) {
            that_element.css('transition-delay', '1.5s').addClass('visible-hr');
        }

    });






    // new WOW().init();
});

