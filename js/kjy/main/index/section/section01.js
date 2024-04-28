"use strict";

gsap.registerPlugin(SplitText);

export default ()=> {

    ScrollTrigger.create({
        trigger : "._main .sec01 .rel",
        start : "top top",
        // markers : true,
        onEnter : ()=>{
            $('._header').addClass('white');
        },
        onLeaveBack : ()=>{
            $('._header').removeClass('white');
        },
        onEnterBack : ()=>{
            $('._header').addClass('white');
        }
    });

    const split = new SplitText($('._main .sec01 .rel > h3'));
    const split2 = new SplitText($('._main .sec01 .img h3'));

    gsap.timeline({
        defaults : {
            duration : 1
        }
    })
    .from(split.chars,{
        y : 100,
        opacity : 0,
        stagger: 0.05
    },'a')
    .from(split2.chars,{
        y : 100,
        opacity : 0,
        stagger: 0.05
    },'a');

    gsap.timeline({
        scrollTrigger : {
            trigger : "._main .sec01",
            start : "top+=5% top",
            end : "center top",
            scrub : 1,
            // markers : true,
        }
    })
    .to($('._main .sec01 .rel > h3'),{
        y : "-90%",
        x : "-50%"
    },'a')
    .to($('._main .sec01 .img h3'),{
        y : "-90%",
        x : "-50%"
    },'a');

    new Swiper('.sec01 .swiper',{
        effect : "fade",
        loop : true,
        speed : 600,
        autoplay : {
            delay : 5000
        },
        pagination : {
            el : "._main .sec01 .tbx .page",
            clickable : true,
            bulletActiveClass : "active",
            renderBullet : (index,className) =>`<button class=${className}>${(index+1).toString().padStart(2,'0')}</button>`
        }, 
        on : {
            init : ()=>{
                $('._main .sec01 .tbx').addClass('act');
            },
            slideChangeTransitionStart : ()=>{
                $('._main .sec01 .tbx').removeClass('act');
            },
            slideChangeTransitionEnd : ()=>{
                $('._main .sec01 .tbx').addClass('act');
                let dt = $('._main .sec01 .swiper-slide.swiper-slide-active').data('dt')?.replace(/\\r\\n|\\n|\\r/gm, '<br/>');
                let dd = $('._main .sec01 .swiper-slide.swiper-slide-active').data('dd')?.replace(/\\r\\n|\\n|\\r/gm, '<br/>');
                $('._main .sec01 .tbx dl dt').html(dt);
                $('._main .sec01 .tbx dl dd').html(dd);
            }
        }
    });

}