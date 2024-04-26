"use strict";

export default ()=>{

    ScrollTrigger.create({
        trigger : "._main .sec08",
        start : "top top",
        onEnter : ()=>{
            $('._header').removeClass('white');
        },
        onLeaveBack : ()=>{
            $('._header').addClass('white');
        }
    });

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


    const s = new Swiper('.sec08 .box .s',{
        slidesPerView: 0.5,
        spaceBetween: 20,
        touchRatio : 0,
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

    const b = new Swiper('.sec08 .box .b',{
        slidesPerView: 1,
        spaceBetween: 20,
        touchRatio : 0,
        on : {
            slideChange : (swiper)=>{
                const {realIndex} = swiper;
                s.slideTo(realIndex, 600);
            }
        }
    });

    $('._main .sec08 .box .s-box .nav li.next').click(function(){
        const {realIndex,slides} = b;
        if(realIndex === slides.length-1){
            b.slideTo(0);
        }else{
            b.slideNext();
        }
    });

    $('._main .sec08 .box .s-box .nav li.prev').click(function(){
        const {realIndex,slides} = b;
        if(realIndex === 0){
            b.slideTo(slides.length-1);
        }else{
            b.slidePrev();
        }
    });


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