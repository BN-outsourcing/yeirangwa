"use strict";

export default ()=>{

    const mm4 = gsap.matchMedia();

    mm4.add("(min-width:821px)",()=>{

        const scrollTween = gsap.to('._main .visual-box .presbyopia_section01',{
            x : ()=> -(2610 - window.innerWidth),
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

    });

    mm4.add("(max-width:820px)",()=>{
        $('.presbyopia_section01').removeAttr('style');
    });

}