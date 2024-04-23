"use strict";

const FLIPOPTION = [
    {
        team : `의학박사 / 대표원장 <span>심형석</span>`,
        name : "Shim Hyeongseok",
        desc : `
            아름다운 눈, 소중한 눈,<br/>
            눈의 건강을 지키는 일이 저희 예일안과의<br/>
            사훈이자 전직원의 사명입니다.
        `
    },
    {
        team : `의학박사 / 대표원장 <span>심형석2</span>`,
        name : "Shim Hyeongseok2",
        desc : `
            아름다운 눈, 소중한 눈,<br/>
            눈의 건강을 지키는 일이 저희 예일안과의<br/>
            사훈이자 전직원의 사명입니다.2
        `
    },
    {
        team : `의학박사 / 대표원장 <span>심형석3</span>`,
        name : "Shim Hyeongseok3",
        desc : `
            아름다운 눈, 소중한 눈,<br/>
            눈의 건강을 지키는 일이 저희 예일안과의<br/>
            사훈이자 전직원의 사명입니다.3
        `
    },
    {
        team : `의학박사 / 대표원장 <span>심형석4</span>`,
        name : "Shim Hyeongseok4",
        desc : `
            아름다운 눈, 소중한 눈,<br/>
            눈의 건강을 지키는 일이 저희 예일안과의<br/>
            사훈이자 전직원의 사명입니다.4
        `
    }
];

export default ()=>{

    ScrollTrigger.create({
        trigger : "._main .sec06",
        start : "top center",
        onEnter : ()=>{
            $('.menu-hover').addClass('black');
        },
        onLeaveBack : ()=>{
            $('.menu-hover').removeClass('black');
        }
    });

    new Swiper('.sec06 .swiper',{
        effect: "flip",
        flipEffect : {
            slideShadows : false
        },
        loop : true,
        pagination : {
            clickable : true,
            el : "._main .sec06 .warpbox .paging",
            bulletClass : 'null',
            bulletActiveClass : "active",
            renderBullet : (index, className)=>`<li class="${className}">${String(index+1).padStart(2,'0')} 과</li>`
        },
        on : {
            init : (swiper)=>{
                const {realIndex} = swiper;
                $('._main .sec06 .warpbox .tbx dl dt').html(FLIPOPTION[realIndex].team);
                $('._main .sec06 .warpbox .tbx dl dd').html(FLIPOPTION[realIndex].name);
                $('._main .sec06 .warpbox .tbx p').html(FLIPOPTION[realIndex].desc);
                $('._main .sec06 .sbox .num').html(String(realIndex+1).padStart(2,0));
    
                gsap.timeline({
                    scrollTrigger : {
                        trigger : "._main .sec06 .warpbox .tbx",
                        start : "top bottom-=10%"
                    }
                })
                .set('._main .sec06 .warpbox .tbx dl dt',{
                    x : 50,
                    opacity : 0
                })
                .set('._main .sec06 .warpbox .tbx dl dd',{
                    x : 50,
                    opacity : 0
                })
                .set('._main .sec06 .warpbox .tbx p',{
                    x : 50,
                    opacity : 0
                })
                .to('._main .sec06 .warpbox .tbx dl dt',{
                    x : 0,
                    opacity : 1
                })
                .to('._main .sec06 .warpbox .tbx dl dd',{
                    x : 0,
                    opacity : 1
                })
                .to('._main .sec06 .warpbox .tbx p',{
                    x : 0,
                    opacity : 1
                });
    
                gsap.timeline({
                    scrollTrigger : {
                        trigger : "._main .sec06 .sbox",
                        start : "top bottom-=10%"
                    }
                })
                .set('._main .sec06 .sbox .line-circle',{
                    scale : 0
                })
                .set('._main .sec06 .sbox .swiper',{
                    scale : 0
                })
                .set('._main .sec06 .sbox .num',{
                    scale : 0
                })
                .set('._main .sec06 .sbox .bt',{
                    x : -50,
                    opacity : 0
                })
                .to('._main .sec06 .sbox .line-circle',{
                    scale : 1,
                    duration : 0.6
                },"a")
                .to('._main .sec06 .sbox .swiper',{
                    scale : 1,
                    duration : 0.6
                },"a+=25%")
                .to('._main .sec06 .sbox .num',{
                    scale : 1,
                    duration : 0.6
                },'a')
                .to('._main .sec06 .sbox .bt',{
                    x : 0,
                    opacity : 1
                },'a')
    
            },
            slideChange : (swiper)=>{
                const {realIndex} = swiper;
                $('._main .sec06 .warpbox .tbx dl dt').html(FLIPOPTION[realIndex].team);
                $('._main .sec06 .warpbox .tbx dl dd').html(FLIPOPTION[realIndex].name);
                $('._main .sec06 .warpbox .tbx p').html(FLIPOPTION[realIndex].desc);
                $('._main .sec06 .sbox .num').html(String(realIndex+1).padStart(2,0));
    
                gsap.timeline()
                .set('._main .sec06 .sbox .num',{
                    scale : 0
                })
                .set('._main .sec06 .sbox .bt',{
                    x : -50,
                    opacity : 0
                })
                .to('._main .sec06 .sbox .num',{
                    scale : 1,
                    duration : 0.6
                },'a')
                .to('._main .sec06 .sbox .bt',{
                    x : 0,
                    opacity : 1
                },'a')
    
                gsap.timeline({})
                .set('._main .sec06 .warpbox .tbx dl dt',{
                    x : 50,
                    opacity : 0
                })
                .set('._main .sec06 .warpbox .tbx dl dd',{
                    x : 50,
                    opacity : 0
                })
                .set('._main .sec06 .warpbox .tbx p',{
                    x : 50,
                    opacity : 0
                })
                .to('._main .sec06 .warpbox .tbx dl dt',{
                    x : 0,
                    opacity : 1
                })
                .to('._main .sec06 .warpbox .tbx dl dd',{
                    x : 0,
                    opacity : 1
                })
                .to('._main .sec06 .warpbox .tbx p',{
                    x : 0,
                    opacity : 1
                });
    
            }
        }
    });

}