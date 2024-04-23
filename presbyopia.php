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

                <?php
            
                    # 백내장 1
                    include $_SERVER["DOCUMENT_ROOT"]."/components/main/presbyopia/presbyopia_section01.html";

                ?>

            </div>

            <?php
            
                # 백내장 2
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/presbyopia/presbyopia_section02.html";

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

<script type="module" src="/js/kjy/main/presbyopia/presbyopia.js"></script>

<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/layout/_end.php";
?>