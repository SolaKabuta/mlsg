$(".left, .hl , .imgl, .pl").css({
    opacity: 0,
    transform: 'translateX(-30px)',
    transition: '0.6s'
});

$(".right, .hr, .imgr, .pr").css({
    opacity: 0,
    transform: 'translateX(30px)',
    transition: '0.6s'
});

setTimeout(function(){
    $(".left, .right").css({
        opacity: 1,
        transform: 'translateX(0px)'
    });
    
    setTimeout(function(){
        $(".hl, .hr").css({
            opacity: 1,
            transform: 'translateX(0px)'
        });
        
        setTimeout(function(){
            $(".imgl, .imgr").css({
                opacity: 1,
                transform: 'translateX(0px)'
            });
            
            setTimeout(function(){
                $(".pl, .pr").css({
                    opacity: 1,
                    transform: 'translateX(0px)'
                });
            }, 300);
        }, 300);
    }, 300);
}, 1200);


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