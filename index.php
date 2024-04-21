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
                
                # 섹션 2
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/section02.html";
            
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