// общий код
$(document).ready(function() {
    // движение фона
    $('body').mousemove(function(event) {
      $(document).mousemove(function(e) {
        $('.blurstars').css({
          left: 25 - e.pageX / 50,
          top: 25 - e.pageY / 50
        })
        $('.sprinkles, .smallsprinkles, .bigsprinkles').css({
          left: 10 - e.pageX / 25,
          top: 10 - e.pageY / 25
        })
      })
    })
  
  
  
    // опции и бронь 
    $('.menustar').click(function() {$('.alloptions').toggleClass('none');});

    $('#five').click(function() {
      $('.alloptions').addClass('none');
    });
    $('.prereserve').click(function() {
      $('.alloptions').addClass('none');
    });
    $('#ten').click(function() {
      $('html').addClass('wow');
      $('.uraaa').removeClass('none');
    });
    $('.off, #ten').click(function() {
      $('.restartstar, .menustar, .up').removeClass('none');
    });
    
    $('#five').click(function() {$('.restartstar, .menustars, .up').addClass('none');});
  
  
  
    // кнопка наверх
    $(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {$('.up').fadeIn();}
        else {$('.up').fadeOut();}
      });
      $('.up').click(function() {
        $('body, html').animate({scrollTop: 0}, 1600);
      })
    });
  });
  

  
    // сопровождающее меню
    jQuery(window).scroll(function () {
      var top = jQuery(this).scrollTop();
      var menu = jQuery('.sticky');
      if (top < 200) {
        menu.stop().css('top', '0px');
      }
      if (top > 201 && top < 300) {
        menu.css('top', '-70px');
        menu.css('position', 'absolute');
      }
      if (top >= 570) {
        menu.css('position', 'fixed');
        if (menu.css('top') == '-70px') {
          menu.stop().animate({
          top: 0
        }, 200);
      }
    }
  });