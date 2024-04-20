<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/layout/_head.php";
    include_once $_SERVER["DOCUMENT_ROOT"]."/components/header.html";
?>

<div id="smooth-wrapper">
    <div id="smooth-content">
        <main class="_main">

            <?php
                
                # 섹션 1
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/section01.html";
                
                # 섹션 3
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/section02.html";
                
                # 섹션 3
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/section03.html";

                # 섹션 4
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/section04.html";

                # 섹션 5
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/section05.html";

                # 섹션 6
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/section06.html";

                # 섹션 7
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/section07.html";

                # 섹션 8
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/section08.html";

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
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/section09.html";

                # 섹션 10
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/section10.html";

                # 섹션 11
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/section11.html";

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