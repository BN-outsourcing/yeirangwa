"use strict";

gsap.registerPlugin(SplitText);

export default ()=>{

    const m2 = gsap.matchMedia();

    m2.add("(min-width:821px)",()=>{

        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec04",
                pin : true,
                scrub : 1,
            }
        })
        .fromTo('._main .sec04 ul',{
            yPercent : 100
        },{
            yPercent : -35
        });

    });

    m2.add("(max-width:820px)",()=>{

        const split = new SplitText("._main .sec04 h3", {type: "chars"});

        gsap.from(split.chars,{
            y: 100, 
            autoAlpha: 0, 
            stagger: 0.05
        });

        gsap.utils.toArray('._main .sec04 ul li').forEach((e,i)=>{
            gsap.from(e,{
                y : 50,
                opacity : 0,
                scrollTrigger : {
                    trigger : e,
                    start : "top bottom-=10%"
                }
            }) 
        });

    });


}