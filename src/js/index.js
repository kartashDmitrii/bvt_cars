import Tabs from "./components/Tabs";


new Tabs(document.querySelectorAll('.tab-buttons .tab'), document.querySelectorAll('.tabs .tab'));

if (document.querySelector('.how-we-do-it .image-block')){
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
            0: '62',
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
        if (window.screen.width > 1023) {
            imageList.appendChild(round);
        } else {
            imageBlock.querySelector('.main-image').appendChild(round)
        }
        let markX = parseInt(elem.dataset.posX),
            markY = parseInt(elem.dataset.posY);
        if (window.screen.width > 1023) {
            elem.style.top = `calc(${(markY * 100) / heightStatic}% + ${Math.round(widthMark * .78)}px)`;
            elem.style.left = `${(markX * 100) / widthStatic}%`;
        } else {
            round.innerText = `${index + 1}`
        }
        round.style.top = `${(markY * 100) / heightStatic}%`;
        round.style.left = `${(markX * 100) / widthStatic}%`;

        let elemHeight = parseInt(window.getComputedStyle(elem).getPropertyValue('height'));
        elem.style.height = '0';
        elem.style.padding = `0 15px 0 20px`;
        round.addEventListener('click', ()=>{
            document.querySelectorAll('.how-we-do-it .image-block .image-field').forEach( field => {
                if (field !== elem) {
                    field.style.height = '0';
                    field.style.padding = `0 15px 0 20px`;
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
                elem.style.padding = `25px 15px 25px 20px`
            } else {
                round.classList.remove('active');
                elem.style.height = '0';
                elem.style.padding = `0 15px 0 20px`
            }
        });
    })
}