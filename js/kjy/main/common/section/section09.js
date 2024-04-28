"use strict";

export default ()=>{

    const mm = gsap.matchMedia();

    mm.add("(min-width:821px)",()=>{
        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec09 .wrapper .lf",
                start : "top bottom-=10%"
            }
        })
        .from('._main .sec09 .lf dl dt',{
            y : 50,
            opacity : 0
        })
        .from('._main .sec09 .lf dl dd',{
            y : 50,
            opacity : 0
        })
        .from('._main .sec09 .lf a',{
            x : -50,
            opacity : 0
        });

        gsap.from('._main .sec09 .rf',{
            y : 50,
            opacity : 0,
            scrollTrigger : {
                trigger : "._main .sec09 .rf",
                start : "top bottom-=10%"
            }
        });
    })

    mm.add("(max-width:820px)",()=>{
        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec09 .wrapper .lf",
                start : "top bottom-=10%"
            }
        })
        .from('._main .sec09 .lf dl dt',{
            y : 50,
            opacity : 0
        })
        .from('._main .sec09 .lf dl dd',{
            y : 50,
            opacity : 0
        })
        .from('._main .sec09 .lf a',{
            x : -50,
            opacity : 0
        });

        gsap.from('._main .sec09 .rf',{
            y : 50,
            opacity : 0,
            scrollTrigger : {
                trigger : "._main .sec09 .rf",
                start : "top bottom-=10%"
            }
        });
    })

}