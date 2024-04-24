"use strict";

gsap.registerPlugin(DrawSVGPlugin)

export default ()=>{

    ScrollTrigger.create({
        trigger : "._main .sec07",
        start : "top center",
        onEnter : ()=>{
            $('.menu-hover').removeClass('black');
        },
        onLeaveBack : ()=>{
            $('.menu-hover').addClass('black');
        }
    });

    gsap.timeline({
        scrollTrigger : {
            trigger : "._main .sec07 .history",
            start : "top bottom-=10%"
        }
    })
    .from('._main .sec07 .flex dl dt',{
        y : 50,
        opacity : 0
    })
    .from('._main .sec07 .flex dl dd',{
        y : 50,
        opacity : 0
    })

    .from('._main .sec07 .flex .scroll',{
        y : 50,
        opacity : 0
    })

    const sec07MM = gsap.matchMedia();

    sec07MM.add("(min-width:821px)",()=>{

        const hFlex = gsap.to('._main .sec07 .history .h-flex',{
            x : ()=>-($('._main .sec07 .history .h-flex').width() - window.innerWidth/2),
            ease : "none",
            scrollTrigger : {
                trigger : "._main .sec07",
                pin : true,
                scrub : 1,
                // markers : true,
                end : "+=300%",
                invalidateOnRefresh : true,
            }
        });

        $('._main .sec07 .history .h-flex .his').each((i,e)=>{

            ScrollTrigger.create({
                trigger : e,
                containerAnimation : hFlex,
                // markers : true,
                start : "center center",
                toggleClass : "active"
            });

        });

        $('._main .sec07 .flex .scroll .ri .right i').each((i,e)=>{
            gsap.from(e,{
                opacity : 0,
                duration : 0.6,
                delay : 0.2*i,
                repeat : -1,
                ease: "power1.inOut",
                yoyo : true,
            })
        });

        gsap.to('._main .sec07 .flex .scroll .bar div',{
            width : "100%",
            ease : "none",
            scrollTrigger : {
                trigger : "._main .sec07 .history .h-flex",
                containerAnimation : hFlex,
                // markers : true,
                start : "left center",
                end : "right-=5% center",
                scrub : 1,
            }
        })


        gsap.from('._main .sec07 .history .h-flex .line svg path',{
            drawSVG: 0,
            ease : "none",  
            scrollTrigger : {
                trigger : "._main .sec07 .history .h-flex",
                containerAnimation : hFlex,
                // markers : true,
                start : "left center",
                end : "right-=5% center",
                scrub : 1,
            }
        })

    })

    sec07MM.add("(max-width:820px)",()=>{

        gsap.to('._main .sec07 .history .h-flex .line div',{
            height : "100%",
            eaes : "none",
            scrollTrigger : {
                trigger : "._main .sec07 .history .h-flex .line",
                start : "top center",
                end : "bottom top",
                scrub : 1,
                // markers : true,
            }
        });

        $('._main .sec07 .history .h-flex .his').each((i,e)=>{

            ScrollTrigger.create({
                trigger : e,
                // markers : true,
                start : "top center",
                toggleClass : "active"
            });

        });

    })

}