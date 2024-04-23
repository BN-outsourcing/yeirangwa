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

            <?php
                
                # 섹션 1
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/section01.html";
                
                # 섹션 2
                include $_SERVER["DOCUMENT_ROOT"]."/components/main/section02.html";
            
            ?>
            
        </main>  
    </div>
</div>

<script type="module" src="/js/kjy/main/index/index.js"></script>

<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/layout/_end.php";
?>