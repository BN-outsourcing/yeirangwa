<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/layout/_head.php";
    include_once $_SERVER["DOCUMENT_ROOT"]."/components/header.html";
?>

<div id="smooth-wrapper">
    <div id="smooth-content">
        <main class="_main">

            <div class="visual-box">

                <div class="visual" style="background-image: url(/asset/img/main/SMILE_LASIK_IMG.png);">
                    <div class="tbx">
                        <dl>
                            <dt>스마일라식</dt>
                            <dd>SMILE LASIK</dd>
                        </dl>
                        <p>라식, 라섹의 한계를 개선한 미세절개 스마일라식</p>
                    </div>

                    <div class="scroll-box">
                        <div class="scroll">
                            <div></div>
                        </div>
                        <p>SCROLL DOWN</p>
                    </div>

                    <a href="/presbyopia.php" class="circle-box" style="background-image: url('/asset/img/main/presbyopia_circle.png');">
                        <div 
                            class="circle"
                            style="background-image: url('/asset/img/main/presbyopia_img.png"
                        ></div>
                    </a>

                </div>

                <?php
                    #smile1
                    include $_SERVER["DOCUMENT_ROOT"]."/components/main/smile/smile_section01.html";
                ?>

            </div>

            <?php

                # smile 3
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/smile/section03.html";

                # smile 4
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/smile/section04.html";

                # smile 5
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/smile/section05.html";

            ?>
            
            <?php
                # 섹션 6
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/common/section06.html";

                # 섹션 7
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/common/section07.html";

                # 섹션 8
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/common/section08.html";

            ?>

            <div class="banner">
            <?php
                for($i = 0; $i < 10; $i++) {
            ?>
                <div>
                    <p><span>YEIL</span> Eye Clinic</p>
                    <div><img src="/asset/img/main/banner_star.png" alt=""></div>
                </div>
            <?php
                }
            ?>
            </div>

            <?php
            
                # 섹션 9
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/common/section09.html";

                # 섹션 10
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/common/section10.html";

                # 섹션 11
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/common/section11.html";

            ?>

            <?php
                include_once $_SERVER["DOCUMENT_ROOT"]."/components/footer.html";
            ?>

        </main>  
    </div>
</div>

<script>

    gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

    ScrollSmoother.create({
        smooth: 1,
        effects: true,
    });

    gsap.timeline({})
    .from('._main .visual .tbx dl dt',{
        y : 50,
        opacity : 0
    })
    .from('._main .visual .tbx dl dd',{
        y : 50,
        opacity : 0
    },">-=25%")
    .from('._main .visual .tbx p',{
        y : 50,
        opacity : 0
    },">-=25%");


    const mm2 = gsap.matchMedia();

    mm2.add("(min-width:821px)",()=>{

        const scrollTween = gsap.to('._main .visual-box .smile_section01',{
            x : ()=> -(4024 - window.innerWidth),
            ease : "none",
            scrollTrigger : {
                trigger : "._main .visual-box",
                markers : true,
                pin : true,
                scrub : 1,
                end : "+=400%",
                invalidateOnRefresh : true
            }
        });

        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .smile_section01 .sc01_box .p",
                // markers : true,
                containerAnimation: scrollTween,
                start : "left right",
                end : "right center",
                scrub : 1,
            }
        })
        .to($('._main .smile_section01 .sc01_box .p p').eq(0).find('span'),{
            width : "100%"
        })
        .to($('._main .smile_section01 .sc01_box .p p').eq(1).find('span'),{
            width : "100%"
        })
        .to($('._main .smile_section01 .sc01_box .p p').eq(2).find('span'),{
            width : "100%"
        });

    });

    mm2.add("(max-width:820px)",()=>{
        $('.smile_section01').removeAttr('style');

        gsap.timeline({
            trigger : "._main .smile_section01 .sc01_box .tp",
            start : "top bottom-=10%"
        })
        .from('._main .smile_section01 .sc01_box .tp dt',{
            y : 50,
            opacity : 0
        })
        .from('._main .smile_section01 .sc01_box .tp dd',{
            y : 50,
            opacity : 0
        });

        gsap.from('._main .smile_section01 .sc01_box .img',{
            x : 50,
            opacity : 0,
            scrollTrigger : {
                trigger : "._main .smile_section01 .sc01_box",
                start : "top bottom-=10%"
            }
        })

        gsap.from('._main .smile_section01 .sc01_box .iframe',{
            y : 50,
            opacity : 0,
            scrollTrigger : {
                trigger : "._main .smile_section01 .sc01_box .iframe",
                start : "top bottom-=10%"
            }
        })

        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .smile_section01 .sc01_box .p",
                markers : true,
                end : "top center",
                scrub : 1,
            }
        })
        .to($('._main .smile_section01 .sc01_box .p p').eq(0).find('span'),{
            width : "100%"
        })
        .to($('._main .smile_section01 .sc01_box .p p').eq(1).find('span'),{
            width : "100%"
        })
        .to($('._main .smile_section01 .sc01_box .p p').eq(2).find('span'),{
            width : "100%"
        });

    });


</script>

<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/layout/_end.php";
?>