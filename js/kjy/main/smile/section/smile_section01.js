"use strict";

gsap.registerPlugin(ScrollTrigger);

export default ()=>{

    const mm2 = gsap.matchMedia();

    mm2.add("(min-width:821px)",()=>{

        const scrollTween = gsap.fromTo('._main .visual-box .smile_section01',{
            x : ()=> 4024,
        },{
            x : ()=> -(4024 - window.innerWidth),
            ease : "none",
            scrollTrigger : {
                trigger : "._main .visual-box",
                // markers : true,
                pin : true,
                scrub : 1,
                end : "+=400%",
                invalidateOnRefresh : true
            }
        });

        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .smile_section01 .sc01_box .p",
                // markers : true,
                containerAnimation: scrollTween,
                start : "left right",
                end : "right center",
                scrub : 1,
            }
        })
        .to($('._main .smile_section01 .sc01_box .p p').eq(0).find('span'),{
            width : "100%"
        })
        .to($('._main .smile_section01 .sc01_box .p p').eq(1).find('span'),{
            width : "100%"
        })
        .to($('._main .smile_section01 .sc01_box .p p').eq(2).find('span'),{
            width : "100%"
        });

    });

    mm2.add("(max-width:820px)",()=>{
        $('.smile_section01').removeAttr('style');

        gsap.timeline({
            trigger : "._main .smile_section01 .sc01_box .tp",
            start : "top bottom-=10%"
        })
        .from('._main .smile_section01 .sc01_box .tp dt',{
            y : 50,
            opacity : 0
        })
        .from('._main .smile_section01 .sc01_box .tp dd',{
            y : 50,
            opacity : 0
        });

        gsap.from('._main .smile_section01 .sc01_box .img',{
            x : 50,
            opacity : 0,
            scrollTrigger : {
                trigger : "._main .smile_section01 .sc01_box",
                start : "top bottom-=10%"
            }
        })

        gsap.from('._main .smile_section01 .sc01_box .iframe',{
            y : 50,
            opacity : 0,
            scrollTrigger : {
                trigger : "._main .smile_section01 .sc01_box .iframe",
                start : "top bottom-=10%"
            }
        })

        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .smile_section01 .sc01_box .p",
                // markers : true,
                end : "top center",
                scrub : 1,
            }
        })
        .to($('._main .smile_section01 .sc01_box .p p').eq(0).find('span'),{
            width : "100%"
        })
        .to($('._main .smile_section01 .sc01_box .p p').eq(1).find('span'),{
            width : "100%"
        })
        .to($('._main .smile_section01 .sc01_box .p p').eq(2).find('span'),{
            width : "100%"
        });

    });

};