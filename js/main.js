$(function(){ // "` Эй Браузер! Сначала загрузи весь DOM!

    //Слайдер
    $('.slider__inner').slick({
        arrows:false,
        dots:true,
    });
    $('.works__inner').slick({
        arrows:true,
        dots:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/slider-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/slider-right.svg" alt=""></button>',

        responsive: [
            {
              breakpoint: 911,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 681,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 455,
                settings: {
                  slidesToShow: 1,
                }
            },
        ]

    });
    //Нажатие на кнопку меню
    $('.header__menu-btn').on('click', function(){
        //console.log('test');
        $('.header__menu > ul').slideToggle(); // Только первая ul открывается
    });

    $('.header__drop-down.drop-down').on('click', function(){
        $(this).children('.drop-down__list').toggleClass('active'); // Клик по конкретному элементу next a + , children
        // .toggleClass('active') Добавляет класс active при нажатии
        $(this).children('.drop-down__link').toggleClass('active'); // Клик по конкретному элементу next a + , children
    });



  });