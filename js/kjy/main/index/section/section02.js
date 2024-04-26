gsap.registerPlugin(SplitText);

export default ()=> {    

    ScrollTrigger.create({
        trigger : "._main .sec02",
        start : "top center",
        onEnter : ()=>{
            $('.menu-hover').addClass('black');
        },
        onLeaveBack : ()=>{
            $('.menu-hover').removeClass('black');
        }
    });

    ScrollTrigger.create({
        trigger : "._main .sec02",
        start : "top top",
        onEnter : ()=>{
            $('._header').removeClass('white');
        }
    });

    ScrollTrigger.create({
        trigger : "._main .sec02 .two .area > div:nth-of-type(1)",
        start : "top center",
        // markers : true,
        onEnter : ()=>{
            $('._header').addClass('white');
            $('.menu-hover').removeClass('black');
        },
        onLeaveBack : ()=>{
            $('._header').removeClass('white');
            $('.menu-hover').addClass('black');
        }
    });

    const h3Split = new SplitText('._main .sec02 .h3 p');
    gsap.from(h3Split.chars, {
        y: 100,
        autoAlpha: 0, 
        stagger: 0.05,
        scrollTrigger : {
            trigger : "._main .sec02 .h3",
            start : "top bottom-=10%"
        }
    });
    
    gsap.from('._main .sec02 .tbx', {
        x: 100,
        opacity : 0,
        scrollTrigger : {
            trigger : "._main .sec02 .tbx",
            start : "top bottom-=10%"
        }
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width:821px)",()=>{
        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec02",
                endTrigger : "._main .sec02 .two",
                // markers : true,
                start : "top top",
                end : "bottom center",
                scrub : 1,
            }
        })
        .to('._main .sec02 .wallpaper',{
            clipPath: "circle(100% at 50% 50%)",
        },'a')
        .to('._main .sec02 .wallpaper .back',{
            opacity : 1
        },'a');
    })

    mm.add("(max-width:820px)",()=>{
        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .sec02",
                endTrigger : "._main .sec02 .two",
                // markers : true,
                start : "top center",
                end : "bottom center",
                scrub : 1,
            }
        })
        .to('._main .sec02 .wallpaper',{
            clipPath: "circle(100% at 50% 50%)",
        },'a')
        .to('._main .sec02 .wallpaper .back',{
            opacity : 1
        },'a');
    })



    const mm2 = gsap.matchMedia();

    mm2.add("(min-width:821px)",()=>{
        ScrollTrigger.create({
            trigger : "._main .sec02 .wallpaper",
            endTrigger : "._main .sec02",
            end : "bottom bottom",
            // markers : true,
            pin : true,
            pinSpacing : false,
        });
    
        ScrollTrigger.create({
            trigger : "._main .sec02 .two .bt",
            endTrigger : "._main .sec02 .two .area",
            start : "center center",
            end : "bottom center",
            // markers : true,
            pin : true,
            pinSpacing : false,
        });
    });

    mm2.add("(max-width:820px)",()=>{
        ScrollTrigger.create({
            trigger : "._main .sec02 .wallpaper",
            endTrigger : "._main .sec02",
            end : "bottom bottom",
            // markers : true,
            pinType : "fixed",
            pin : true,
            pinSpacing : false,
        });
    
        ScrollTrigger.create({
            trigger : "._main .sec02 .two .bt",
            endTrigger : "._main .sec02 .two .area",
            start : "center center",
            end : "bottom center",
            // markers : true,
            pinType : "fixed",
            pin : true,
            pinSpacing : false,
        });
    })
    

    // 숫자 카운트
    $('._main .sec02 .two .area dl dd .count').each((i,e)=>{
        if(i === 0){
            gsap.from(e,{
                innerText : 0,
                duration: 2,
                snap : {
                    innerText : 0.01
                },
                scrollTrigger : {
                    trigger : e,
                    start : "top bottom-=20%",
                    // markers : true,
                }
            })
        }else{
            gsap.from(e,{
                innerText : 0,
                duration: 1,
                snap : {
                    innerText : 1
                },
                scrollTrigger : {
                    trigger : e,
                    start : "top bottom-=20%",
                    // markers : true,
                }
            })
        }
    })
    

    $('._main .sec02 .more-box .more-flex .box').click(function(e){

        if(window.innerWidth >= 821){

            e.preventDefault();

            const href = $(this).attr('href');

            let imgSrc;

            switch($(this).index()){
                case 0 :
                    imgSrc = "/asset/img/main/sec02_01.jpg";
                    break;
                case 1 :
                    imgSrc = "/asset/img/main/sec02_02.jpg";
                    break;
            }

            const clone = $(this).clone();

            clone.addClass('fix-img');

            const option = {
                y : $(this)[0].getBoundingClientRect().top,
                x : $(this)[0].getBoundingClientRect().left,
                width : $(this).width(),
                height : $(this).height(),
            };

            $(clone).css({
                position: "fixed",
                left : option.x,
                top : option.y,
                width : option.width,
                height : option.height
            })

            $(clone).find("dl").remove();
            $(clone).find(".more").remove();

            $(clone).find(".img").css({
                opacity : 1,
                transition : 'none',
                backgroundImage : `url(${imgSrc})`,
            });

            $(clone).click((e)=>{e.preventDefault(); return false;});

            $(document.body).append(clone);

            gsap.timeline({
                onComplete : ()=>{
                    window.location.href = href;
                }
            })
            .to($(clone),{
                width : window.innerWidth,
                height : window.innerHeight,
                duration : 0.6,
            },"a")
            .to($(clone),{
                left : 0,
                top : 0,
                rigiht : 0,
                bottom : 0,
            },'a')

            return false;

        }

    });


}