"use strict";

export default ()=>{

    const mm4 = gsap.matchMedia();

    mm4.add("(min-width:821px)",()=>{

        const scrollTween = gsap.fromTo('._main .visual-box .presbyopia_section01',{
            x : () => window.innerWidth
        },{
            x : ()=> -(5290 - window.innerWidth),
            ease : "none",
            scrollTrigger : {
                trigger : "._main .visual-box",
                // markers : true,
                pin : true,
                scrub : true,
                end : "+=500%",
                invalidateOnRefresh : true
            }
        });

        ScrollTrigger.create({
            trigger : "._main .presbyopia_section01",
            containerAnimation : scrollTween,
            start : "left left",
            end : "right right",
            scrub : true,
            invalidateOnRefresh : true,
            onEnter : ()=>{
                $('._header').removeClass('white');
                $('.menu-hover').addClass('black');
            },
            onLeaveBack : ()=>{
                $('._header').addClass('white');
                $('.menu-hover').removeClass('black');
            }
        })

        gsap.to("._main .presbyopia_section01 .top",{
            left : ()=>(5290 - window.innerWidth/2) - $('._main .presbyopia_section01 .top').width()/2,
            ease : "none",
            scrollTrigger : {
                // trigger : "._main .presbyopia_section01",
                trigger : "._main .presbyopia_section01 .top",
                endTrigger : "._main .presbyopia_section01",
                containerAnimation : scrollTween,
                start : "left center",
                end : "right right",
                scrub : true,
                invalidateOnRefresh : true,
                // markers :true,
            }
        })

    });

    mm4.add("(max-width:820px)",()=>{
        $('.presbyopia_section01').removeAttr('style');

        ScrollTrigger.create({
            trigger : "._main .presbyopia_section01",
            start : "top top",
            onEnter : ()=>{
                $('._header').removeClass('white');
            },
            onLeaveBack : ()=>{
                $('._header').addClass('white');
            }
        })

        ScrollTrigger.create({
            trigger : "._main .presbyopia_section01",
            start : "top center",
            onEnter : ()=>{
                $('.menu-hover').addClass('black');
            },
            onLeaveBack : ()=>{
                $('.menu-hover').removeClass('black');
            }
        })

        $('._main .presbyopia_section01 .imbox').each((i,e)=>{
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

}