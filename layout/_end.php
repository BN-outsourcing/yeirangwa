<div id="top">
    <div class="tbx">
        <i class="xi-angle-up"></i>
        <p>TOP</p>
    </div>
</div>

<script>
    
    gsap.registerPlugin(ScrollToPlugin);

    $(window).scroll(function(){
        const scrollTo = $(window).scrollTop();
        if(scrollTo > 0){
            $('#top').addClass('act');
        }else{
            $('#top').removeClass('act');
        }
    }).scroll();

    $('#top').click(function(){
        gsap.to(window,{ duration: 1, scrollTo: 0 });
    });

</script>

</body>
</html>