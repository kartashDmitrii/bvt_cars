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
if (document.querySelector('.wrapper .popup')){
    new popupFunc(document.querySelector('.wrapper .popup'), [...document.querySelectorAll('[data-popup]')]);
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