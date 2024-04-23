"use strict";

gsap.registerPlugin(SplitText);

export default ()=> {

    const split = new SplitText($('._main .sec01 .rel > h3'));
    const split2 = new SplitText($('._main .sec01 .img h3'));

    gsap.from(split.chars,{
        y : 100,
        opacity : 0,
        stagger: 0.05
    });
    gsap.from(split2.chars,{
        y : 100,
        opacity : 0,
        stagger: 0.05
    });

    $('.sec01 .swiper .page').empty();

    const slide = new Swiper('.sec01 .swiper',{
        effect : "fade",
        loop : true,
        on : {
            init : (swiper)=>{
                setTimeout(()=>{
                    $(`.sec01 .swiper-slide > div .tbx .page button`).removeClass('active');
                    $(`.sec01 .swiper-slide > div .tbx .page button:nth-of-type(1)`).addClass('active');
                },500);
            },
            slideChange : (swiper)=>{
                const {realIndex} = swiper;
                $(`.sec01 .swiper-slide > div .tbx .page button`).removeClass('active');
                $(`.sec01 .swiper-slide > div .tbx .page button:nth-of-type(${realIndex+1})`).addClass('active');
            }
        }
    });

    const slideHanlder = (index)=>{
        slide.slideTo(index, 600);
    }

    for(let i = 0; i < slide.slides.length; i++){
        const $button = $(`<button>${(i+1).toString().padStart(2,'0')}</button>`);
        $button.on('click',()=>slideHanlder(i));
        $('.sec01 .swiper .page').append($button);
    }

}