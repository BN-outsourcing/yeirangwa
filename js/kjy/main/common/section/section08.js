"use strict";

export default ()=>{

    ScrollTrigger.create({
        trigger : "._main .sec08",
        start : "top center",
        onEnter : ()=>{
            $('.menu-hover').addClass('black');
        },
        onLeaveBack : ()=>{
            $('.menu-hover').removeClass('black');
        }
    });

    /* 갯수는 동일해야합니다. */
    
    const b = new Swiper('.sec08 .box .b',{
        slidesPerView: 1,
        spaceBetween: 20,
        loop : true,
        navigation : {
            prevEl : "._main .sec08 .box .s-box .nav .prev",
            nextEl : "._main .sec08 .box .s-box .nav .next",
        },
    });

    const s = new Swiper('.sec08 .box .s',{
        slidesPerView: 0.5,
        spaceBetween: 20,
        loop : true,
        slidesPerGroup : 2,
        breakpoints : {
            821 : {
                slidesPerView: 1.7,
                spaceBetween: 30,
            },
            1025 : {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });


    b.controller.control = s;
    s.controller.control = b;

    gsap.timeline({
        scrollTrigger : {
            trigger : "._main .sec08 .top",
            start : "top bottom-=10%"
        }
    })
    .from('._main .sec08 .top dl dt',{
        y : 50,
        opacity : 0
    })
    .from('._main .sec08 .top dl dd',{
        y : 50,
        opacity : 0
    })
    .from('._main .sec08 .top a',{
        x : 50,
        opacity : 0
    })

    gsap.from('._main .sec08 .box',{
        y : 50,
        opacity : 0,
        scrollTrigger : {
            trigger : "._main .sec08 .box",
            start : "top bottom-=10%"
        }
    });

}