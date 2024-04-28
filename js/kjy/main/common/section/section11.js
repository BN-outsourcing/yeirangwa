export default ()=>{

    const mm = gsap.matchMedia();

    mm.add("(min-width:821px)",()=>{

        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec11 .lt dl:nth-of-type(1)",
                start : "top bottom-=10%"
            }
        })
        .from("._main .sec11 .lt dl:nth-of-type(1) dt",{
            x : -50,
            opacity : 0
        })
        .from("._main .sec11 .lt dl:nth-of-type(1) dd",{
            x : -50,
            opacity : 0
        })
    
        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec11 .lt dl:nth-of-type(2)",
                start : "top bottom-=10%"
            }
        })
        .from("._main .sec11 .lt dl:nth-of-type(2) dt",{
            x : -50,
            opacity : 0
        })
        .from("._main .sec11 .lt dl:nth-of-type(2) dd .flex",{
            x : -50,
            opacity : 0,
            stagger: 0.05
        });
    
        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec11 .lt",
                start : "top bottom-=10%"
            }
        })
        .from("._main .sec11 .rt h4",{
            x : -50,
            opacity : 0
        })
        .from("._main .sec11 .rt h4 ~ div",{
            y : 50,
            opacity : 0,
        });

    });

    mm.add("(max-width:820px)",()=>{

        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec11 .lt dl:nth-of-type(1)",
                start : "top bottom-=10%"
            }
        })
        .from("._main .sec11 .lt dl:nth-of-type(1) dt",{
            x : -50,
            opacity : 0
        })
        .from("._main .sec11 .lt dl:nth-of-type(1) dd",{
            x : -50,
            opacity : 0
        })
    
        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec11 .lt dl:nth-of-type(2)",
                start : "top bottom-=10%"
            }
        })
        .from("._main .sec11 .lt dl:nth-of-type(2) dt",{
            x : -50,
            opacity : 0
        })
        .from("._main .sec11 .lt dl:nth-of-type(2) dd .flex",{
            x : -50,
            opacity : 0,
            stagger: 0.05
        });
    
        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec11 .lt",
                start : "top bottom-=10%"
            }
        })
        .from("._main .sec11 .rt h4",{
            x : -50,
            opacity : 0
        })
        .from("._main .sec11 .rt h4 ~ div",{
            y : 50,
            opacity : 0,
        });

    });

}