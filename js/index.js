
const slider1 = document.querySelector('.swiper-container1');
const slider2 = document.querySelector('.swiper-container2');
const slider3 = document.querySelector('.swiper-container3');
let mySwiper1 = new Swiper(slider1, {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },


    pagination: {
        el: '.pag-1',
        type: 'fraction',
        clickable: true,
        slideToClickedSlide: true,
    },
    //   autoplay: {
    //     delay: 5000,
    //   },
    loop: false,
    navigation: {
        nextEl: '.button-next1',
        prevEl: '.button-prev1',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 45
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 45
        },
        // when window width is >= 480px
        1600: {
            slidesPerView: 3,
            spaceBetween: 50
        },
    }
})
let mySwiper2 = new Swiper(slider2, {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 50,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
        pageUpDown: true,
    },

    loop: false,
    navigation: {
        nextEl: '.button-next2',
        prevEl: '.button-prev2',
    },
    pagination: {
        el: '.pag-2',
        type: 'bullets',
        clickable: true,
        slideToClickedSlide: true,
  },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    
        1024: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        
   
        // when window width is >= 480px
        1600: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
     
        // when window width is >= 640px
       
    }
})


let mySwiper3 = new Swiper(slider3, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
        pageUpDown: true,
    },

    loop: false,
    navigation: {
        nextEl: '.button-next3',
        prevEl: '.button-prev3',
    },
   
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 480px
        660: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 57
        }
    }
})
// select
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {

    searchEnabled: false,

});
// accordion
$(function () {
    $('.accordion').accordion({
        collapsible: true,
        active: 0,
        heightStyle: 'content'

    });

});


ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("myMap1", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.75786715778723, 37.61982277659597],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16,
        scroll:false
       
    });
myMap.behaviors.disable('scrollZoom');
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Шоурум №4',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/metka.svg',
            // Размеры метки.
            iconImageSize: [28, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.75786715778723, 37.61982277659597], {


        });

    myMap.geoObjects
        .add(myPlacemark)
      
    myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)'
}

// validation
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.Inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },

        mail: {
            required: true,
            email: true
        },
    },
});
// socsety
Share = {
    vkontakte: function (purl, ptitle, pimg, text) {
        url = 'http://vkontakte.ru/share.php?';
        url += 'url=' + encodeURIComponent(purl);
        url += '&title=' + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image=' + encodeURIComponent(pimg);
        url += '&noparse=true';
        Share.popup(url);
    },
    facebook: function (purl, ptitle, pimg, text) {
        url = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]=' + encodeURIComponent(ptitle);
        url += '&p[summary]=' + encodeURIComponent(text);
        url += '&p[url]=' + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    instagram: function (purl, ptitle, pimg, text) {
        url = 'http://instagram.com/###?ref=badge';
        url += '&p[title]=' + encodeURIComponent(ptitle);
        url += '&p[summary]=' + encodeURIComponent(text);
        url += '&p[url]=' + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    popup: function (url) {
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    }
};
// плавный скролл
$(document).ready(function () {
    $("a.header-first__list-link").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1600);
        return false;
    });
});

// смена активного художника
document.querySelectorAll('.artist__btn').forEach(el => {
    el.addEventListener('click', (e) => { 
    document.querySelectorAll('.tab-content-active .artist__btn').forEach(el => {el.classList.remove('artist_active')}); 
    e.currentTarget.classList.add('artist_active');
    
    });
    
    });
 

// флаги
document.querySelector('.catalog').addEventListener('click', function (e) {
    if (e.target.classList.contains('catalog__flag-tab')) {

        this.querySelector('.flag_active').classList.remove('flag_active');
        e.target.classList.add('flag_active');
    }

});
// смена картинок
document.querySelectorAll('.artist__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {

        const text = event.currentTarget.dataset.text
        document.querySelectorAll('.tab-content-active .catalog__block-image').forEach(function (tabContent) {
            tabContent.classList.remove('catalog__block-image_active')
        })
        document.querySelector(`.tab-content-active [data-img="${text}"]`).classList.add('catalog__block-image_active')
    })
});

// 
// Бургер меню
document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')

})

$(document).ready(function () {


    $(".header-first__menu").hide();
    $(".header-first__burger").click(function () {
        $(".header-first__menu").slideToggle("slow", function () {


        });
    });
});
//  Табы
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.catalog__flag-tab').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.tab-content').forEach(function (tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
            $('.accordion').accordion('refresh');
        })
    })

});
// кнопкка все события

jQuery(document).ready(function($){
    if($('ul.list').find('li').length > 4){
    $('.event__hide_btn').click(function(){
    $('ul.list li:nth-child(n+4)').slideToggle('');
    $(this).toggleClass('opnd_g');
    if($(this).hasClass('opnd_g')){
    $(this).html('Свернуть');}
    else {$(this).html('Все события');}
    });
    }else{$('.event__hide_btn').hide();}
    });