// Hero Area
$(".slider-area, .hero-cap h2, .hero-cap p").css("opacity", 0);

setTimeout(function(){
    $(".slider-area").animate({opacity: 1}, 800);
    $(".hero-cap h2").delay(600).animate({opacity: 1}, 1600);
    $(".hero-cap p").delay(800).animate({opacity: 1}, 1200);
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


$('.fade').css({
  opacity: 0,
  transform: 'translateY(30px)',
  transition: 'opacity 0.6s ease, transform 0.6s ease'
});

$(window).on('scroll', function() {
  $('.fade').each(function() {
    const top = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (!$(this).data('shown') && top < scroll + windowHeight - 50) {
      $(this).css({
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      });
      $(this).data('shown', true);
    }
  });
});


$('.shake').on('click', function() {
  const $el = $(this);
  let count = 0;

  const shakeInterval = setInterval(() => {
    const x = (count % 2 === 0) ? 4 : -4;
    $el.css({
      transform: `translateX(${x}px)`,
      transition: 'transform 0.05s'
    });
    count++;
    if (count > 6) {
      clearInterval(shakeInterval);
      $el.css('transform', 'translateX(0)');
    }
  }, 50);
});