<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/layout/_head.php";
    include_once $_SERVER["DOCUMENT_ROOT"]."/components/header.html";
?>

<?php
    include $_SERVER["DOCUMENT_ROOT"]."/components/main/common/menu-hover.html";
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

            ?>

            <div class="smile_video">
                <div id="player"></div>
            </div>

            <?php
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
    
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. API 코드를 다운로드 받은 다음에 <iframe>을 생성하는 기능 (youtube player도 더불어)
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            videoId : "1oJFShANMTc",
            playerVars : {
                controls : 0,
                mute : 1,
            },
            events: {
                'onReady': onPlayerReady
            }
        });
    }
    
    
    // 4. API는 비디오 플레이어가 준비되면 아래의 function을 불러올 것이다.
    function onPlayerReady(event) {
        
        ScrollTrigger.create({
            trigger : ".smile_video",
            start : "top bottom-=10%",
            // markers : true,
            onEnter : ()=>{
                event.target.playVideo();
            }
        });

    }

</script>

<script type="module" src="/js/kjy/main/smile/smile.js"></script>

<?php
    $home = true;
    include_once $_SERVER["DOCUMENT_ROOT"]."/layout/_end.php";
?>