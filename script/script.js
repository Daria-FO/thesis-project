$(function(){
  /*slider*/
    $('.work-examples_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 1205,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 910,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  arrows: false,
                  dots: true,
                }
              }
          ]
    });

    /*symbols*/
    $('.hanging-symbols').addClass('growing');


    /*menu*/
    $('.header-button__menu').click(function(){
        
        var menu=$('.header__menu-list');

        if (menu.css('display') == 'flex'){
            menu.css('display', 'none');
        }else{
            menu.show(1000).css('display', 'flex');
        }
    });
    
    /*form*/
    $('.request-a-call__button').click(function(){
        $('.popup_request-a-call').css('display', 'flex');
    });

    $('.request-a-call__button_mini').click(function(){
        $('.popup_request-a-call').css('display', 'flex');
    });
    
    $('.business_card__button').click(function(){
        $('.popup_to-learn-more').css('display', 'flex');
    });

    $('.skills__button').click(function(){
        $('.popup_find-out-the-cost').css('display', 'flex');
    });

    $('.work-examples__button').click(function(){
        $('.popup_project-order').css('display', 'flex');
    });

    $('.popup').click(function(event){
        if(event.target == this) {
            $(this).css('display', 'none');
        }
    });

    $('.button_close').click(function(){
        $('.popup').css('display', 'none');
    })

    /*проверка поля для ввода номера телефона*/

    $('.form__item-tel').inputmask('+9 (999) 999 99 99');

});