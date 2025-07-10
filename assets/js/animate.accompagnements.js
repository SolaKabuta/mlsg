// Hero Area
$(".slider-area, .hero-cap h2").css("opacity", 0);

setTimeout(function(){
    $(".slider-area").animate({opacity: 1}, 800);
    $(".hero-cap h2").delay(600).animate({opacity: 1}, 1600);
}, 1200);


// Support Company Start
$(".section-tittle span, .section-tittle h2, .support-caption p, .support-caption a").css({
    opacity: 0,
    transform: 'translateX(-30px)',
    transition: '0.6s'
});

$("#img1, .support-img-cap").css({
    opacity: 0,
    transform: 'translateX(30px)',
    transition: '0.6s'
});

setTimeout(function(){
    $(".section-tittle span").css({
        opacity: 1,
        transform: 'translateX(0px)'

    }, setTimeout(function(){
        $(".section-tittle h2, #img1").css({
            opacity: 1,
            transform: 'translateX(0px)'
        }, setTimeout(function(){
            $(".support-caption p").css({
            opacity: 1,
            transform: 'translateX(0px)'
            }, setTimeout(function(){
                $(".support-caption a, .support-img-cap").css({
                opacity: 1,
                transform: 'translateX(0px)'
            })
            }, 150));
        }, 200));
    }, 300));
}, 2200)

