<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/layout/_head.php";
    include_once $_SERVER["DOCUMENT_ROOT"]."/components/header.html";
?>

<div id="smooth-wrapper">
    <div id="smooth-content">
        <main class="_main">

            <div class="visual" style="background-image: url(/asset/img/main/PRESB_YOPIA_IMG.png);">
                <div class="tbx">
                    <dl>
                        <dt>노안·백내장</dt>
                        <dd>Presbyopia & Cataract</dd>
                    </dl>
                    <p>중장년층의 경계 대상, 백내장 치료와 노안 교정을 한번에</p>
                </div>

                <div class="scroll-box">
                    <div class="scroll">
                        <div></div>
                    </div>
                    <p>SCROLL DOWN</p>
                </div>

                <div class="circle-box" style="background-image: url('/asset/img/main/smilelasik_circle.png');">
                    <div class="circle"></div>
                </div>

            </div>

            <div class="presbyopia_section01">
                <div class="imbox">

                    <div class="top">
                        백내장 수술의 정밀도와 안정성을 높이는<br/><span>4가지 key point</span>
                    </div>
                    
                    <h4 class="num">01</h4>
                    <div class="img"></div>
                    <p>
                        24년 <em>오직 한자리</em>에서<br/>
                        <span>여러분들의 <em>눈 건강 주치의</em></span>
                    </p>
                </div>
                <div class="imbox">
                    <h4 class="num">01</h4>
                    <div class="img"></div>
                    <p>
                        24년 <em>오직 한자리</em>에서<br/>
                        <span>여러분들의 <em>눈 건강 주치의</em></span>
                    </p>
                </div>
            </div>


            <div class="presbyopia_section02">
                <div class="back"></div>
                <div class="wrapper" max="1440">
                    <dl>
                        <dt>Catalys <span>Laser</span></dt>
                        <dd>
                            일반 초음파 백내장 수술보다 10배 이상 정확한<br/>
                            카탈리스 레이저 백내장 수술
                        </dd>
                    </dl>
                </div>
                <div class="poa">
                    <ul>
                        <li>1.5초 스피드의 <span>완벽한 레이저 수정체낭 절개</span></li>
                        <li>백내장 수술의 혁신! 레이저 <span>수정체 유화술</span></li>
                        <li>최상의 시력을 위한 레이저 <span>난시교정 절개</span></li>
                    </ul>
                    <p>
                        카탈리스 레이저 백내장은 실시간 3D OCT 자동 진단과 인공수정체 맞춤 레이저 절개가 가능한<br/>
                        첨단 백내장 수술 장비로 환자별 맞춤 레이저 난시 교정, 안구 보호 기능으로<br/>
                        환자 개개인의 눈 상태를 고려한 100% 맞춤형 백내장 수술입니다.
                    </p>
                </div>
            </div>

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
</script>

<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/layout/_end.php";
?>