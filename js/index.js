$(document).ready(function () {

  var slideA = $('.slide-a'),
      slideB = $('.slide-b'),
      slideC = $('.slide-c'),
      slideD = $('.slide-d'),
      slide  = $('.slide'),
      replay = $('button'),
      //delay time var for slides
      first  = 200,
      second = 400,
      third  = 500,
      fourth = 600;

  slide.hide();

// Slide A
  function showSlideA() {
    slideA.fadeIn();
    $('.slide-a h1').animate({'opacity': '1'});
    $('.slide-a p:first').delay(second).animate({'opacity': '1'});
    $('.slide-a p:last').delay(third).animate({'opacity': '1'});
  };

// Slide B
  function showSlideB() {
    slideA.fadeOut(1)
    slideB.fadeIn().delay(first).queue(function (next) {
      // $(this).css({'opacity': '0','transform': 'scaleX(0)'});
      next();
    });
    $('.slide-b h2')
    .delay(second)
    .queue(function (next) {
      $(this).css({'opacity': '1', 'transform': 'translateY(0)'});
      next();
    });
    $('.slide-b p:first')
    .delay(third)
    .queue(function (next) {
      $(this).css({'opacity': '1', 'transform': 'translateY(0)'});
      next();
    });$('.slide-b p:last')
    .delay(fourth)
    .queue(function (next) {
      $(this).css({'opacity': '1', 'transform': 'translateY(10px)'});
      next();
    });
  };

// Slide C
  function showSlideC() {
    slideB.fadeOut(1)
    slideC.fadeIn()
    $('.slide-c h2')
    .delay(first)
    .queue(function next() {
      $(this).css({'transform': 'scale(1)', 'opacity': '1'});
      next();
    });
    $('.slide-c p:first')
    .delay(second)
    .queue(function next() {
      $(this).css({'transform': 'scale(1)', 'opacity': '1'});
      next();
    });
    $('.slide-c p:nth-of-type(2)')
    .delay(third)
    .queue(function next() {
      $(this).css({'transform': 'scale(1)', 'opacity': '1'});
      next();
    });
    $('.slide-c p:last')
    .delay(fourth)
    .queue(function next() {
      $(this).css({'transform': 'scale(1)', 'opacity': '1'});
      next();
    });
  }

// Slide D
  function showSlideD() {
    slideC.fadeOut(1);
    slideD.fadeIn();
    $('.slide-d h2')
    .delay(first)
    .queue(function next() {
      $(this).css({'opacity': '1'});
      next();
    });
    $('.slide-d p:first')
    .delay(second)
    .queue(function next() {
      $(this).css({'opacity': '1'});
      next();
    });
    $('.slide-d p:last')
    .delay(third)
    .queue(function next() {
      $(this).css({'opacity': '1'});
      next();
    });
    replay
    .delay(fourth)
    .queue(function next() {
      $(this).css({'transform': 'scale(1)', 'opacity': '1'});
      next();
    });
  }

  $(window).load(function() {
   showSlideA()
  })
//global var
  var x = 0

  $(window).click(function() {
     x++
     console.log(x)
     if(x === 1) {
       showSlideB()
     }
     else if(x ===2) {
       showSlideC()
     }
     else if(x ===3) {
       showSlideD()
     }
  })

  // replay
  replay.on('click', function () {
    location.reload(true);
    x = 0
  });
});
