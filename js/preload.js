// код для главного экрана
$(document).ready(function() {
    // перемещение объектов
    let mainscreen = document.querySelector('.mainscreen1');
    let moving = document.querySelector('.moving');
    mainscreen.addEventListener('mousemove', (e) => {
      let x = e.clientX/ 2 - mainscreen.getBoundingClientRect().left;
      let y = e.clientY/ 2 - mainscreen.getBoundingClientRect().top;
      moving.style.transform = `translate(-${x}px, -${y*1.5}px)`;
    })
  
  
  
    // прогресс бар
    setTimeout(function() {
        $('#demo-progress-bar').addClass('none');
        $('.menustar, .restartstar').removeClass('none');
    }, 2000)
    var counter = 0;
    function progressDemo() {
      counter++;
      document.getElementById('demo-progress-bar').value = counter;
      if( counter == 100 ) {
        clearInterval(timer);
      }
    }
    var timer = setInterval(progressDemo, 17);
  });