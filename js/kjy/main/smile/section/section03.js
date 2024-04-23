"use strict";

gsap.registerPlugin(SplitText);

export default ()=> {

    ScrollTrigger.create({
        trigger : "._main .sec03",
        start : "top center",
        onEnter : ()=>{
            $('.menu-hover').addClass('black');
        },
        onLeaveBack : ()=>{
            $('.menu-hover').removeClass('black');
        }
    });

    const sec03Split = new SplitText('._main .sec03 .tbx h3');

    gsap.timeline({
        scrollTrigger : {
            trigger : "._main .sec03 .tbx",
            start : "top bottom-=10%"
        }
    }).from(sec03Split.chars, {
        y: 50, 
        autoAlpha: 0, 
        stagger: 0.05,  
    }).fromTo("._main .sec03 .tbx span", {
        width : 0
    },{
        width : "1.5em"
    });

    const sec03MM = gsap.matchMedia();

    sec03MM.add("(min-width:821px)",()=>{
        const sec03Tl = gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec03 .wrapper",
                start : "center center",
                pin : true,
                end : "+=300%",
                scrub : 1,
            }
        });

        $('._main .sec03 .cir-box .img').each((i,e)=>{
            if(i >= 1){
                sec03Tl.from(e,{
                    x : window.innerWidth,
                    onStart : ()=>{
                        $('._main .sec03 .page p').removeClass('act');
                        $('._main .sec03 .page p').eq(i).addClass('act');
                    },
                    onReverseComplete : ()=>{
                        $('._main .sec03 .page p').removeClass('act');
                        $('._main .sec03 .page p').eq(i-1).addClass('act');
                    }
                })
            }
        });
    });

    sec03MM.add("(max-width:821px)",()=>{

        const sec03Tl = gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec03 .cir-box",
                start : "top bottom-=10%",
            }
        });

        $('._main .sec03 .cir-box .img').each((i,e)=>{
            if(i >= 1){
                sec03Tl.from(e,{
                    x : window.innerWidth,
                })
            }
        });

    })

}