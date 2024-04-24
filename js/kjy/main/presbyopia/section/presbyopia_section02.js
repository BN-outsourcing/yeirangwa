"use strict";

gsap.registerPlugin(ScrollTrigger);

export default ()=>{

    gsap.timeline({
        scrollTrigger : {
            trigger : "._main .presbyopia_section02 .wrapper dl",
            start : "top bottom-=10%"
        }
    })
    .from("._main .presbyopia_section02 .wrapper dl dt",{
        y : 50,
        opacity : 0
    })
    .from("._main .presbyopia_section02 .wrapper dl dd",{
        y : 50,
        opacity : 0
    });

    const mm3 = gsap.matchMedia();

    mm3.add("(min-width:821px)",()=>{

        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .presbyopia_section02 .full",
                endTrigger : "._main .presbyopia_section02 .poa",
                start : "top top",
                end : "bottom bottom",
                pin : true,
                pinSpacing : false,
                scrub : 1,
            }
        })
        .from('._main .presbyopia_section02 .back',{
            opacity : 0
        })

        gsap.utils.toArray('._main .presbyopia_section02 .poa ul li').forEach((e,i)=>{
            gsap.from(e,{
                opacity : 0.2,
                scrollTrigger : {
                    trigger : e,
                    end : "bottom center",
                    scrub : 1,
                    // markers : true,
                }
            })
        });
        

        gsap.from('._main .presbyopia_section02 .poa p',{
            opacity : 0.2,
            scrollTrigger : {
                trigger : '._main .presbyopia_section02 .poa p',
                end : "bottom center",
                scrub : 1,
                // markers : true,
            }
        })

    });

    mm3.add("(max-width:820px)",()=>{

        gsap.utils.toArray('._main .presbyopia_section02 .poa ul li').forEach((e,i)=>{
            gsap.from(e,{
                opacity : 0.2,
                scrollTrigger : {
                    trigger : e,
                    start : "top bottom-=30%",
                    end : "bottom center",
                    // markers : true,
                    scrub : 1,
                }
            })
        });

        gsap.from('._main .presbyopia_section02 .poa p',{
            opacity : 0.2,
            scrollTrigger : {
                trigger : '._main .presbyopia_section02 .poa p',
                start : "top bottom-=30%",
                end : "bottom center",
                scrub : 1,
            }
        });

    });

}