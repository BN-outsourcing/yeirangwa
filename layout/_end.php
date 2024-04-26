<div class="top_home">
    <div id="top">
        <div class="tbx">
            <i class="xi-angle-up"></i>
            <p>TOP</p>
        </div>
    </div>
    <?php if( isset($home) && $home ) : ?>
        <div id="home">
            <div class="tbx">
                <p>Home</p>
            </div>
        </div>
    <?php endif ?>
</div>

<script>
    
    gsap.registerPlugin(ScrollToPlugin);

    $(window).scroll(function(){
        const scrollTo = $(window).scrollTop();
        if(scrollTo > 0){
            $('.top_home').addClass('act');
        }else{
            $('.top_home').removeClass('act');
        }
    }).scroll();

    $('#top').click(function(){
        gsap.to(window,{ duration: 1, scrollTo: 0 });
    });
    $('#home').click(function(){
        window.location.href = "/";
    });

</script>

</body>
</html>