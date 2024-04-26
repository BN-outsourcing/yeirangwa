"use strict";

gsap.registerPlugin(SplitText,ScrollToPlugin);

export default ()=> {

    ScrollTrigger.create({
        trigger : "._main .sec03",
        start : "top top",
        onEnter : ()=>{
            $('._header').removeClass('white');
        },
        onLeaveBack : ()=>{
            $('._header').addClass('white');
        }
    });

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

    let sec03Tl;

    sec03MM.add("(min-width:821px)",()=>{

        sec03Tl = gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec03",
                start : "center center",
                pin : true,
                end : "+=350%",
                scrub : 1,
            }
        });

        $('._main .sec03 .cir-box .img').each((i,e)=>{
            if(i >= 1){
                sec03Tl.from(e,{
                    x : window.innerWidth,
                    ease : "none",
                    onComplete : ()=>{
                        $('._main .sec03 .page p').removeClass('act');
                        $('._main .sec03 .page p').eq(i).addClass('act');
                    },
                    onReverseComplete : ()=>{
                        $('._main .sec03 .page p').removeClass('act');
                        $('._main .sec03 .page p').eq(i-1).addClass('act');
                    }
                },`a${i}`);

            }
        });

        sec03Tl.set({},{},"+=1%");

    });

    sec03MM.add("(max-width:821px)",()=>{

        const sec03Tl2 = gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec03 .cir-box",
                start : "top bottom-=10%",
            }
        });

        $('._main .sec03 .cir-box .img').each((i,e)=>{
            if(i >= 1){
                sec03Tl2.from(e,{
                    x : window.innerWidth,
                })
            }
        });


        $('._main .sec03 .cir-box .img').each((i,e)=>{
            gsap.from(e,{
                y : 100,
                opacity : 0,
                scrollTrigger : {
                    trigger : e,
                    start : "top bottom-=10%"
                }
            })
        })

    });


    $('._main .sec03 .page p').click(function(){

        const index = $(this).index();

        if(window.innerWidth >= 821){

            switch(index){
                case 0 :
                    gsap.to(window,{scrollTo : {y : sec03Tl.scrollTrigger.start, offsetY : 10}});
                break;
                case 1 :
                    gsap.to(window,{scrollTo : {y : sec03Tl.scrollTrigger.labelToScroll('a2'), offsetY : -10}});
                break;
                case 2 :
                    gsap.to(window,{scrollTo : sec03Tl.scrollTrigger.end});
                break;
            }

        }

    });

}