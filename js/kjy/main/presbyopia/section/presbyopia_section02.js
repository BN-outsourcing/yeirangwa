"use strict";

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

        const pretl = gsap.timeline({
            scrollTrigger : {
                trigger : "._main .presbyopia_section02",
                start : "top top",
                pin : true,
                end : "+=300%",
                scrub : 1,
            }
        })
        .from('._main .presbyopia_section02 .back',{
            opacity : 0
        })
        .from('._main .presbyopia_section02 .poa',{
            top : "100%",
            ease : "none"
        });
        
        gsap.utils.toArray('._main .presbyopia_section02 .poa ul li').forEach((e,i)=>{
            gsap.from(e,{
                opacity : 0.2,
                scrollTrigger : {
                    trigger : e,
                    start : ()=>window.innerHeight / 2,
                    end : "bottom center",
                    // markers : true,
                    scrub : 1,
                }
            })
        });

        pretl.from('._main .presbyopia_section02 .poa p',{
            opacity : 0.2,
            scrollTrigger : {
                trigger : '._main .presbyopia_section02 .poa p',
                start : "top+=300% bottom-=30%",
                end : "bottom center",
                scrub : 1,
            }
        });

    });

    mm3.add("(max-width:821px)",()=>{

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