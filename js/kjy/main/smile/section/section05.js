"use strict";

gsap.registerPlugin(ScrollTrigger);

export default ()=>{

    ScrollTrigger.create({
        trigger : "._main .sec05",
        start : "top top",
        onEnter : ()=>{
            $('._header').addClass('white');
        },
        onLeaveBack : ()=>{
            $('._header').removeClass('white');
        }
    });
    
    ScrollTrigger.create({
        trigger : "._main .sec05",
        start : "top center",
        onEnter : ()=>{
            $('.menu-hover').removeClass('black');
        },
        onLeaveBack : ()=>{
            $('.menu-hover').addClass('black');
        }
    });

    let mm = gsap.matchMedia();

    mm.add("(min-width: 821px)", ()=>{

        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec05",
                // markers : true,
                pin : true,
                scrub : 1,
                end : "+=200%"
            }
        })
        .fromTo('._main .sec05 .img',{
            xPercent : -50
        },{
            xPercent : 0,
        })
        .fromTo('._main .sec05 h3',{
            opacity : 1
        },{
            opacity : 0.03,
        })
        .fromTo('._main .sec05 .sticky',{
            yPercent : 100
        },{
            yPercent : -50,
            duration : 5,
        });

    });

    mm.add("(max-width: 821px)", ()=>{

        $('._main .sec05 .sticky ul li').each((i,e)=>{
            gsap.from(e,{
                y : 100,
                opacity : 0,
                scrollTrigger : {
                    trigger : e,
                    start : "top bottom-=10%"
                }
            })
        });

        gsap.from('._main .sec05 .sticky dl dt',{
            y : 100,
            opacity : 0,
            scrollTrigger : {
                trigger : '._main .sec05 .sticky dl dt',
                start : "top bottom-=10%"
            }
        });
        
        gsap.from('._main .sec05 .sticky dl dd',{
            y : 100,
            opacity : 0,
            scrollTrigger : {
                trigger : '._main .sec05 .sticky dl dd',
                start : "top bottom-=10%"
            }
        });

        gsap.from('._main .sec05 .sticky .img',{
            xPercent : -100,
            opacity : 0,
            scrollTrigger : {
                trigger : '._main .sec05 .sticky .img',
                start : "top bottom-=10%"
            }
        })

        gsap.from('._main .sec05 .sticky > a',{
            y : 100,
            opacity : 0,
            scrollTrigger : {
                trigger : '._main .sec05 .sticky > a',
                start : "top bottom-=10%"
            }
        })

    });


};