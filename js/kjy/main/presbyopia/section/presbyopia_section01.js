"use strict";

export default ()=>{

    const mm4 = gsap.matchMedia();

    mm4.add("(min-width:821px)",()=>{

        const scrollTween = gsap.to('._main .visual-box .presbyopia_section01',{
            x : ()=> -(5290 - window.innerWidth),
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

        ScrollTrigger.create({
            trigger : "._main .presbyopia_section01 .top",
            endTrigger : "._main .presbyopia_section01",
            containerAnimation : scrollTween,
            start : "left left",
            end : "right right",
            pin : true,
            pinSpacing : true,
            markers : true,
            horizontal: true
        });

        /* gsap.to("._main .presbyopia_section01 .top",{
            left : ()=> (5290 - 440),
            ease : "none",
            scrollTrigger : {
                trigger : "._main .presbyopia_section01",
                containerAnimation : scrollTween,
                start : "left left",
                scrub : true,
                pin : true,
                markers : true,
                horizontal: true
            }
        }) */

    });

    mm4.add("(max-width:820px)",()=>{
        $('.presbyopia_section01').removeAttr('style');
    });

}