import Tabs from "./components/Tabs";
import popupFunc from "./components/popupFunc";
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

function iOS() {
    return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
function SmoothVerticalScrolling(e, time, where) {
    let eTop;
    if (iOS){
        eTop = e.offsetTop;
    } else {
        eTop = e.getBoundingClientRect().top;
    }
    window.scrollTo({
        top: eTop - 50,
        behavior: "smooth"
    })
}
document.querySelectorAll('[data-href]').forEach( link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        SmoothVerticalScrolling(document.querySelector(`${link.dataset.href}`), 1500, 'top')
    })
});

new Tabs(document.querySelectorAll('.tab-buttons .tab'), document.querySelectorAll('.tabs .tab'));

if (document.querySelector('.how-we-do-it .image-block') && window.screen.width > 978){
    let imageBlock = document.querySelector('.how-we-do-it .image-block'),
        imageList = imageBlock.querySelector('ol'),
        canvas = imageBlock.querySelector('canvas'),
        widthStatic = 1250,
        heightStatic = 650,
        paddingString,
        widthMark;
    canvas.width = widthStatic;
    canvas.height = heightStatic;
    let step = {
            0: '41',
            1024: '62',
            1366: '82'
        };
    for (let width in step){
        if (window.screen.width <= width){
            break
        } else {
            widthMark = step[width]
        }
    }
    imageBlock.querySelectorAll('.image-field').forEach( (elem,index) => {
        let round = document.createElement('span');
        round.classList.add('mark');
        imageList.appendChild(round);
        let markX = parseInt(elem.dataset.posX),
            markY = parseInt(elem.dataset.posY);
        elem.style.top = `calc(${(markY * 100) / heightStatic}% + ${Math.round(widthMark * .78)}px)`;
        elem.style.left = `${(markX * 100) / widthStatic}%`;
        round.style.top = `${(markY * 100) / heightStatic}%`;
        round.style.left = `${(markX * 100) / widthStatic}%`;

        let elemHeight = parseInt(window.getComputedStyle(elem).getPropertyValue('height'));
        elem.style.height = '0';
        if (window.screen.width > 1023) {
            elem.style.padding = `0 15px 0 20px`;
        } else {
            elem.style.padding = `0 15px`
        }
        round.addEventListener('click', ()=>{
            document.querySelectorAll('.how-we-do-it .image-block .image-field').forEach( field => {
                if (field !== elem) {
                    field.style.height = '0';
                    if (window.screen.width > 1023) {
                        field.style.padding = `0 15px 0 20px`;
                    } else {
                        field.style.padding = `0 15px`
                    }
                }
            });
            document.querySelectorAll('.how-we-do-it .image-block .mark').forEach( mark => {
                if (mark !== round) {
                    mark.classList.remove('active')
                }
            });

            if (parseInt(elem.style.height) === 0){
                round.classList.add('active');
                elem.style.height = `${elemHeight}px`;
                if (window.screen.width > 1023) {
                    elem.style.padding = `25px 15px 25px 20px`
                } else {
                    elem.style.padding = `5px 15px`
                }
            } else {
                round.classList.remove('active');
                elem.style.height = '0';
                elem.style.padding = `0 15px 0 20px`
            }
        });
    })
}
if (document.querySelector('header .burger') && window.screen.width < 860){
    document.querySelector('header .burger').addEventListener('click', function(){
        document.querySelector('header nav').classList.add('active');
        document.body.classList.add('hidden');
        if (window.screen.width < 576){
            document.querySelector('header .social').classList.add('active');
        }
    });
    document.querySelectorAll('header nav a').forEach( link => {
        link.addEventListener('click', ()=>{
            document.querySelector('header nav').classList.remove('active');
            document.body.classList.remove('hidden')
            if (window.screen.width < 576){
                document.querySelector('header .social').classList.remove('active');
            }
        })
    });
    document.querySelector('header nav .close').addEventListener('click', function () {
        document.querySelector('header nav').classList.remove('active');
        document.body.classList.remove('hidden');
        if (window.screen.width < 576){
            document.querySelector('header .social').classList.remove('active');
        }
    })
}

if (document.querySelector('section.top-catalogs .slider-images')){
    let allImages = document.querySelectorAll('section.top-catalogs .slider-images img');
    let siema = new Siema({
        selector: 'section.top-catalogs .slider-images',
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: false,
        multipleDrag: false,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: function(){
            let dotLength = this.innerElements.length - this.perPage;
            for (let i = 0; i < dotLength; i++){
                let dot = document.createElement('div');
                dot.classList.add('dot');
                this.selector.closest('section.top-catalogs').querySelector('.scroll').appendChild(dot);
            }
            allImages[this.currentSlide].classList.remove('active');
            setTimeout(()=>{
                this.next();
                setTimeout( () => {
                    allImages[this.currentSlide].classList.add('active');
                },300)
            },300);
            setInterval( ()=>{
                allImages[this.currentSlide].classList.remove('active');
                setTimeout(()=>{
                    this.next();
                    setTimeout( () => {
                        allImages[this.currentSlide].classList.add('active');
                    },300)
                },300);
            }, 10300);
            this.selector.closest('section.top-catalogs').querySelector('.btns .prev').addEventListener('click', () => {
                allImages[this.currentSlide].classList.remove('active');
                setTimeout( ()=>{
                    siema.prev();
                    setTimeout( () => {
                        allImages[this.currentSlide].classList.add('active');
                    },300)
                },300);
            });
            this.selector.closest('section.top-catalogs').querySelector('.btns .next').addEventListener('click', () => {
                allImages[this.currentSlide].classList.remove('active');
                setTimeout( ()=>{
                    siema.next();
                    setTimeout( () => {
                        allImages[this.currentSlide].classList.add('active');
                    },300)
                },300);
            });
        },
        onChange: function(){
            this.selector.parentNode.querySelectorAll('.scroll .dot').forEach( elem => elem.classList.remove('active'));
            for (let i = 0; i < this.currentSlide; i++){
                this.selector.parentNode.querySelectorAll('.scroll .dot')[i].classList.add('active')
            }
        },
    });
}
if (document.querySelector('[data-popup="custom-popup"]')){
    new popupFunc(document.querySelector('.wrapper .custom-popup'), [...document.querySelectorAll('[data-popup="custom-popup"]')]);
}
if (document.querySelector('[data-popup="lot-popup"]')){
    new popupFunc(document.querySelector('.wrapper .lot-popup'), [...document.querySelectorAll('[data-popup="lot-popup"]')]);
}
if (document.querySelector('[data-popup="quiz-popup"]')){
    new popupFunc(document.querySelector('.wrapper .quiz-popup'), [...document.querySelectorAll('[data-popup="quiz-popup"]')]);
}
if (document.querySelector('section.blog')){
    let maxHeight = document.querySelector('section.blog .grid').offsetHeight;
    let heightOfBlock = document.querySelector('section.blog .elem').offsetHeight;
    let grid = document.querySelector('section.blog .grid');
    grid.style.maxHeight = `${heightOfBlock}px`;
    document.querySelector('section.blog .btn').addEventListener('click', (e)=>{
        e.preventDefault();
        grid.style.maxHeight = `${maxHeight}px`;
        grid.style.paddingBottom = `30px`;
        document.querySelector('section.blog .btn').style.display = 'none';
    })
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
$.fn.isOnScreen = function(x, y){
    if(x == null || typeof x == 'undefined') x = 1;
    if(y == null || typeof y == 'undefined') y = 1;

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var height = this.outerHeight();
    var width = this.outerWidth();

    if(!width || !height){
        return false;
    }

    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    if(!visible){
        return false;
    }

    var deltas = {
        top : Math.min( 1, ( bounds.bottom - viewport.top ) / height),
        bottom : Math.min(1, ( viewport.bottom - bounds.top ) / height),
        left : Math.min(1, ( bounds.right - viewport.left ) / width),
        right : Math.min(1, ( viewport.right - bounds.left ) / width)
    };

    return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
};
function onScroll() {
    if($('.testimonials').isOnScreen(0, 0)){
        $('.open-insta').each(function(){
            var $src = $(this).attr('data-src');
            $(this).css('background-image', 'url(' + $src + ')');
        })
    }
    if($('.team').isOnScreen(0, 0)){
        $('.team').addClass('active');
        if($('.team .lazyload').length){
            $('.team .lazyload').each(function(){
                var $src = $(this).attr('data-src');
                $(this).attr('src', $src);
            })
        }
    }
    if($('.section_review').isOnScreen(0, 0)){
        $('.review__img img').each(function(){
            var $src = $(this).attr('data-src');
            $(this).attr('src', $src);
        })
    }
    if($('.smi').isOnScreen(0, 0)){
        if($('.smi .lazyload').length){
            $('.smi .lazyload').each(function(){
                var $src = $(this).attr('data-src');
                $(this).attr('src', $src);
            })
        }
    }
    if($('.section_video').isOnScreen(0, 0)){
        if($('.section_video .lazyload').length){
            $('.section_video .lazyload').each(function(){
                var $src = $(this).attr('data-src');
                $(this).attr('src', $src);
            })
        }
    }

    if($('.contacts').isOnScreen(0, 0)){
        $('.contacts').addClass('active');
        if($('.contacts .lazyload').length){
            $('.contacts .lazyload').each(function(){
                var $src = $(this).attr('data-src');
                $(this).attr('src', $src);
            })
        }
    }
    if($('.benefit').isOnScreen(0, 0)){
        if($('.benefit .lazyload').length){
            $('.benefit .lazyload').each(function(){
                var $src = $(this).attr('data-src');
                $(this).attr('src', $src);
            })
        }
    }
    if($('.second').isOnScreen(0, 0)){
        $('.second').addClass('active');
        if($('.second .lazyload').length){
            $('.second .lazyload').each(function(){
                var $src = $(this).attr('data-src');
                $(this).attr('src', $src);
            })
        }
    }
    if($('.prices').isOnScreen(0, 0)){
        $('.prices').addClass('active');
        if($('.prices .lazyload').length){
            $('.prices .lazyload').each(function(){
                var $src = $(this).attr('data-src');
                $(this).attr('src', $src);
            })
        }
    }
    if($('.how').isOnScreen(0, 0)){
        $('.how').addClass('active');
        if($('.how .lazyload').length){
            $('.how .lazyload').each(function(){
                var $src = $(this).attr('data-src');
                $(this).attr('src', $src);
            })
        }
    }
}

$(document).ready(function(){
    onScroll();
    $(window).on("scroll", onScroll);

    $('.vosst_href').magnificPopup({
        mainClass: 'mfp-fade',
        type: 'image',
        items: [
            { src: 'img/vosst-1.jpg' },
            { src: 'img/vosst-3.jpg' },
            { src: 'img/vosst-5.jpg' },
            { src: 'img/vosst-6.jpg' },
            { src: 'img/vosst-7.jpg' },
            { src: 'img/vosst-8.jpg' },
            { src: 'img/vosst-9.jpg' },
            { src: 'img/vosst-12.jpg' },
            { src: 'img/vosst-13.jpg' },
            { src: 'img/vosst-14.jpg' },
            { src: 'img/vosst-15.jpg' },
            { src: 'img/vosst-16.jpg' },
            { src: 'img/vosst-17.jpg' },
            { src: 'img/vosst-18.jpg' },
        ],
        gallery:{
            enabled: true,
            arrows: true
        }
    });


    var
        rev1 = $.cookie('rev1'),
        rev2 = $.cookie('rev2');

    if(typeof rev1 === "undefined") {
        rev1 = randomInteger(1, 15);
        if(rev1 < 10){
            // rev1 = '0' + rev1;
        }
        $.cookie('rev1', rev1, { expires: 1, path: '../default.htm' });
    }
    if(typeof rev2 === "undefined") {
        rev2 = randomInteger(1, 10);
        if(rev2 < 10){
            // rev2 = '0' + rev2;
        }
        $.cookie('rev2', rev2, { expires: 1, path: '../default.htm' });
    }
    $('.rev-1 span').text(rev1);
    $('.rev-2 span').text(rev2);


    $('body').on('click','.menu-burger',function(e){
        e.preventDefault();
        $('.main-wrapper').css('pointer-events','none');
        $('body').addClass('perspective');
        $('.main-wrapper').removeClass('closed-menu').addClass('transform');
    });

    $('body').on('click','.open-menu',function(e){
        e.preventDefault();
        $('.main-wrapper').css('pointer-events','none');
        $('body').addClass('perspective');
        $('.main-wrapper').removeClass('closed-menu').addClass('transform');
    });

    $('body').on('click','.menu-close',function(e){
        e.preventDefault();
        $('.main-wrapper').css('pointer-events','auto');
        $('.main-wrapper').removeClass('transform').addClass('closed-menu');
        setTimeout(function(){
            $('body').removeClass('perspective');
        },700);
    });

    $('body').on('click','.how-tabs-nav a',function(){
        $('.how-tabs-nav a').removeClass('current-tab');
        $(this).addClass('current-tab');
        var href = $(this).attr('href');
        $('.how-tabs-pane').removeClass('active').removeClass('in');
        var id = $(href).addClass('active');
        setTimeout(function(){
            $(href).addClass('in');
        }, 200);
        return false;
    });

    $(document).on('click','.mvideo__show', function(e){
        e.preventDefault();
        var $href = $(this).attr('href');

        var $html = '<div class="mvideo__inner"><iframe src="'+$href+'" width="1280" height="720" frameborder="0" allowfullscreen></iframe></div>';




        $.magnificPopup.open({
            items: {
                src: $html,
                type: 'inline'
            },
            closeBtnInside: true
        });
    });

    $('.review__item').on('click', function(e){
        e.preventDefault();
        var $href = $(this).siblings('.review__modal').find('.modrev__cont');
        if($href.find('.modrev__image').length){
            var
                $img = $href.find('.modrev__image img'),
                $src = $img.attr('data-src');
            $img.attr('src', $src);
        }
        if($href.find('.modrev__img').length){
            $href.find('.modrev__img').each(function(){
                let element = $(this);
                let src = $(this).attr('href');
                setTimeout(function(){
                    element.css('background-image', 'url(' + src + ')');
                },100);
            });
        }
        $.magnificPopup.open({
            items: {
                src: $href,
                type: 'inline'
            },
            closeBtnInside: true
        });
    })

    var videoSlider = new Swiper('.video__slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        lazy: true,
        loop: true,
        breakpoints: {
            991 : {
                slidesPerView: 2,
            },
            767 : {
                slidesPerView: 1,
            }
        },
        navigation: {
            nextEl: '.video__right',
            prevEl: '.video__left',
        },
    });


    $(document).on('click','.modrev__right a', function(e){
        e.preventDefault();

    })

    /*$('.modrev__right').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled:true
            }
        });
    });*/

    $('.review__more a').on('click', function(e){
        e.preventDefault();
        $(this).parent().stop(true, true).slideUp();
        $(this).parent().siblings('.review__hidden').stop(true, true).slideDown();
    })

    $('.custom__morelink').on('click', function(e){
        e.preventDefault();
        $(this).removeClass('active').siblings('a').addClass('active');
        $('.custom__hidden').stop(true, true).slideDown();
    });
    $('.custom__morehide').on('click', function(e){
        e.preventDefault();
        $(this).removeClass('active').siblings('a').addClass('active');
        $('.custom__hidden').stop(true, true).slideUp();
    });

    $('.mvideo__close').on('click', function(){
        $('.mvideo__cont').stop(true, true).slideUp();
    })

    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        preloader: true,
    });


    var max_chars = 8;
    $('.lot-input').keydown(function(e){
        if ($(this).val().length >= max_chars) {
            $(this).val($(this).val().substr(0, max_chars));
        }
    });

    $('.lot-input').keyup(function(e){
        if ($(this).val().length >= max_chars) {
            $(this).val($(this).val().substr(0, max_chars));
        }
    });


    $('.photos a img').each(function(){
        let src = $(this).attr('data-src');
        $(this).parents('a').css('background-image', 'url(' + src + ')');
    });

    var swiper = new Swiper('.testimonials .swiper-container', {
        autoplay: {
            delay: 5000,
        },
        speed: 1000,
        preloadImages: false,
        lazy: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.testimonials .swiper-button-next',
            prevEl: '.testimonials .swiper-button-prev',
        },
    });

    var smiSlider = new Swiper('.smi__slider', {
        autoplay: {
            delay: 5000,
        },
        speed: 1000,
        preloadImages: false,
        lazy: true,
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.smi__cont .swiper-button-next',
            prevEl: '.smi__cont .swiper-button-prev',
        },
    });


    $('.show__popup').magnificPopup({

        items: {
            src: '#quiz-popup',
            type: 'inline'
        },
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
                $('main').addClass('blured');
                $('#question1 .to-2').trigger('click');
                var car = this.st.el.attr('data-car');
                if(car){
                    $('#question2 #marka').find('.' + car).prop('selected', true);
                    setTimeout(function(){
                        $("select").trigger("chosen:updated");
                    },100);
                }else{
                    $('#question2 #marka option').eq(0).prop('selected', true);
                    setTimeout(function(){
                        $("select").trigger("chosen:updated");
                    },100);
                }
            },
            beforeClose: function() {
                $('main').removeClass('blured');
            },
            afterClose: function() {
                $('.quiz-form').trigger("reset");
                $('.quiz-tab-pane').removeClass('active').removeClass('in');
                setTimeout(function(){
                    $('#question2 #marka option').eq(0).prop('selected', true);
                    $('#question1 .to-4').trigger('click');
                    // $('#question4').addClass('active').addClass('in');
                },150);
                setTimeout(function(){
                    $("select").trigger("chosen:updated");
                },100);
            }
        },
        midClick: true
    });


    $('.open-popup').magnificPopup({
        //mainClass: 'mfp-fade',
        //removalDelay: 300, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
                $('main').addClass('blured');
                $('#question1 .to-4').trigger('click');

            },
            beforeClose: function() {
                $('main').removeClass('blured');
            },
            afterClose: function() {
                $('.quiz-form').trigger("reset");
                $('.quiz-tab-pane').removeClass('active').removeClass('in');
                setTimeout(function(){
                    $('#question2 #marka option').eq(0).prop('selected', false);
                    $('#question1 .to-4').trigger('click');
                    // $('#question4').addClass('active').addClass('in');
                },150);
            }
        },
        midClick: true
    });





    setTimeout(function(){
        $("select").chosen({no_results_text: "Ничего не найдено!"});
    },300);


    $("#question1 .to-2").on("click", function() {
        $('.quiz-tab-pane').removeClass('active').removeClass('in');
        $('.quiz-tab-pane').next('#question2').addClass('active');
        setTimeout(function(){
            $("select").chosen({no_results_text: "Ничего не найдено!"});
            $('.quiz-tab-pane').next('#question2').addClass('in');
        }, 200);
    });
    $('.quiz-tab-pane').removeClass('active').removeClass('in');
    $('.quiz-tab-pane').next('#question4').addClass('active');
    setTimeout(function(){
        $("select").chosen({no_results_text: "Ничего не найдено!"});
        $('.quiz-tab-pane').next('#question4').addClass('in');
    }, 200);
    $("#question1 .to-4").on("click", function() {
        $('.quiz-popup').css('height','625px');
        $('.quiz-tab-pane').removeClass('active').removeClass('in');
        $('.quiz-tab-pane').next('#question4').addClass('active');
        setTimeout(function(){
            $("select").chosen({no_results_text: "Ничего не найдено!"});
            $('.quiz-tab-pane').next('#question4').addClass('in');
        }, 200);
    });

    $("#question2 .next-block").on("click", function(e) {
        e.preventDefault();
        var select = $(this).parents('#question2').find('select.item');

        if((select.val() !== 'Марка_не_выбрана')) {
            $('.quiz-popup .content #question2 .answer-inputs .select-block span').removeAttr('style');
            $('.quiz-tab-pane').removeClass('active').removeClass('in');
            $('.quiz-tab-pane').next('#question3').addClass('active');
            setTimeout(function(){
                $("select").chosen({no_results_text: "Ничего не найдено!"});
                $('.quiz-tab-pane').next('#question3').addClass('in');
            }, 200);
        } else {
            $('.quiz-popup .content #question2 .answer-inputs .select-block span').css('color','red');
        }
    });
    $("#question3 .prev-block").on("click", function(e) {			e.preventDefault();				$('.quiz-tab-pane').removeClass('active').removeClass('in');				$('.quiz-tab-pane').next('#question2').addClass('active');				$('.quiz-tab-pane').next('#question2').addClass('in');});
    $("#question4 .next-block").on("click", function(e) {
        e.preventDefault();

        var radio = $(this).parents('#question4').find('.type');
        if (radio.hasClass('active')) {
            $('.quiz-popup .content #question4 .answer-inputs span').removeAttr('style');
            $('.quiz-tab-pane').removeClass('active').removeClass('in');
            $('.quiz-tab-pane').next('#question3').addClass('active');
            setTimeout(function(){
                $("select").chosen({no_results_text: "Ничего не найдено!"});
                $('.quiz-tab-pane').next('#question3').addClass('in');
            }, 200);
        } else {
            $('.quiz-popup .content #question4 .answer-inputs span').css('color','red');
        }

    });

    $("#question4 label.type input").on( "click", function() {
        $('label.type input').each(function(){
            if(!$(this).prop( "checked"))
                $(this).parents('label.type').removeClass('active');
        });
        var tmp = 0;
        $('#question4 label.type input').each(function(){
            if($(this).prop( "checked" )) {
                tmp ++;
            }
        });
        if($(this).prop( "checked" )) {
            $(this).parents('label.type').addClass('active');
        }
        else {
            $(this).parents('label.type').removeClass('active');
        }
        if (tmp!=0){
        }
        else {
        }
    });

    $("label.auk input").on( "click", function() {
        $('label.auk input').each(function(){
            if(!$(this).prop( "checked"))
                $(this).parents('label.auk').removeClass('active');
        });
        var tmp = 0;
        $('label.auk input').each(function(){
            if($(this).prop( "checked" )) {
                tmp ++;
            }
        });
        if($(this).prop( "checked" )) {
            $(this).parents('label.auk').addClass('active');
        }
        else {
            $(this).parents('label.auk').removeClass('active');
        }
        if (tmp!=0){
        }
        else {
        }
    });


    var count = 0;
    var items$ = $('.imgs');
    for (var i = 0; i < items$.size(); i = i + 4) {
        count++;
        items$.slice(i, i + 4).addClass("imgs" + count);
        $('.imgs' + count).magnificPopup({
            mainClass: 'mfp-fade',
            type: 'image',
            gallery:{
                enabled: true,
                arrows: true
            }
        });
    }

    $('.primer').magnificPopup({
        mainClass: 'mfp-fade',
        type: 'image',
    });

    new WOW().init();



    $('.swiper-button-next').append('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="14" viewBox="0 0 8 14"><defs><path id="z0qra" d="M1602.9 5993.85c-.1.1-.23.15-.38.15a.53.53 0 0 1-.37-.15c-.2-.19-.2-.5 0-.7l6.55-6.15-6.55-6.16c-.2-.2-.2-.5 0-.7.2-.2.54-.2.75 0l6.92 6.5c.2.2.2.52 0 .7z"/></defs><g><g opacity=".5" fill="#ffffff" transform="translate(-1602 -5980)"><use xlink:href="#z0qra"/></g></g></svg>');
    $('.swiper-button-prev').append('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="14" viewBox="0 0 8 14"><defs><path id="4fsaa" d="M319.1 5993.85c.1.1.23.15.38.15.14 0 .27-.05.37-.15.2-.19.2-.5 0-.7l-6.55-6.15 6.55-6.16c.2-.2.2-.5 0-.7a.55.55 0 0 0-.75 0l-6.92 6.5c-.2.2-.2.52 0 .7z"/></defs><g><g opacity=".5" fill="#ffffff" transform="translate(-312 -5980)"><use xlink:href="#4fsaa"/></g></g></svg>');




    $('input[type="tel"]').mask("+38 (099) 999-99-99");


    $(".quiz-form").validate({
        errorPlacement: function(error,element) {
            return true;
        },
        focusInvalid: false,
        rules: {
            tel: {
                required: true
            }
        },
        messages: {
            tel: {
                required: 'Заполните телефон'
            }
        },
    });

    $('.plus').click(function(){
        $('.plus').removeClass('opp')
        $(this).addClass('opp');
        $('.plus').find('.tooltip').removeClass('opened');
        $(this).find('.tooltip').addClass('opened');
    });

    $('.callback-form').each(function(){
        $(this).validate({
            errorPlacement: function(error,element) {
                return true;
            },
            focusInvalid: false,
            rules: {
                tel: {
                    required: true
                },
                name: {
                    required: true
                }
            },
            messages: {
                tel: {
                    required: 'Заполните телефон'
                },
                name: {
                    required: true
                }
            },
            /*submitHandler: function(form) {
                var th = $(form);
                var loading = th.closest('.send__cont').find('.send__item');
                if(loading.length){loading.fadeIn();}
                var subm = th.find('button[type="submit"]');
                if(subm.length){subm.prop('disabled',true);}
                $.ajax({
                    type: "POST",
                            url: "mail.php", //Change
                            data: th.serialize()
                        }).done(function() {
                            if(loading.length){loading.fadeOut();}
                            if(subm.length){subm.prop('disabled',false);}
                            yaCounter50573578.reachGoal('modal_sucsess2');
                            window.dataLayer.push({'event': 'modal_success2'});
                            $.magnificPopup.open({
                                items: {
                                    src: '#callback-ok',
                                    type: 'inline'
                                },
                                closeBtnInside: true
                            });
                            th.trigger("reset");
                        });
                        return false;
                    }*/
        });
    });


    let rep = document.querySelectorAll('.representative__right');
    for(let i = 0; i < rep.length; i++) {

        rep[i].addEventListener('click', function(event) {
            let changer = document.querySelectorAll('.representative__changer');
            let currentCity = document.querySelectorAll('.rep-city');
            let currentCity2 = document.querySelectorAll('.mapMain .rep-city');
            function showCity(city, repCity) {
                for(let i = 0; i < changer.length; i++) {
                    changer[i].classList.add('hide');

                    for(let a = 0; a < changer.length; a++) {
                        if(changer[a].classList.contains(city)) {
                            changer[i].classList.add('hide');
                            changer[i].classList.remove('show');
                            changer[a].classList.add('show');
                            changer[a].classList.remove('hide');
                        }

                        if(currentCity[a].classList.contains(repCity)) {
                            currentCity[i].classList.remove('rep-city-active');
                            currentCity[a].classList.add('rep-city-active');
                        }
                    }

                }
            }
            function showMainCity(repCity) {
                for(let i = 0; i < currentCity2.length; i++) {
                    for(let a = 0; a < changer.length; a++) {
                        if(currentCity2[a].classList.contains(repCity)) {
                            currentCity2[i].classList.remove('rep-city-active');
                            currentCity2[a].classList.add('rep-city-active');
                        }
                    }
                }
            }
            let target = event.target,
                parent1 = target.parentNode,
                parent2 = target.parentNode.parentNode;

            if(target && parent1.classList.contains('rep-city') || parent2.classList.contains('rep-city')) {

                if(parent1.classList.contains('rep__vitebsk') || parent2.classList.contains('rep__vitebsk')) {

                    showCity('vitebsk', 'rep__vitebsk');
                    showMainCity('rep__vitebsk');
                } else if (parent1.classList.contains('rep__minsk') || parent2.classList.contains('rep__minsk')) {

                    showCity('minsk', 'rep__minsk');
                    showMainCity('rep__minsk');
                } else if (parent1.classList.contains('rep__mogilev') || parent2.classList.contains('rep__mogilev')) {

                    showCity('mogilev', 'rep__mogilev');
                    showMainCity('rep__mogilev');
                } else if (parent1.classList.contains('rep__gomel') || parent2.classList.contains('rep__gomel')) {

                    showCity('gomel', 'rep__gomel');
                    showMainCity('rep__gomel');
                } else if (parent1.classList.contains('rep__brest') || parent2.classList.contains('rep__brest')) {

                    showCity('brest', 'rep__brest');
                    showMainCity('rep__brest');
                } else  {

                    showCity('grodno', 'rep__grodno');
                    showMainCity('rep__grodno');
                }
            }

        });
    }
});
