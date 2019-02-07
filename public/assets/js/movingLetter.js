// Home Header
// Wrap every letter in a span
$('.ml2').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline()
    .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: function (el, i) {
            return 70 * i;
        }
    })
    // .add({
    //     targets: '.ml2',
    //     opacity: 0,
    //     duration: 1000,
    //     easing: "easeOutExpo",
    //     delay: 1000
    // });


// Quiz Header
// Wrap every letter in a span
$('.ml16').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline()
    .add({
        targets: '.ml16 .letter',
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function (el, i) {
            return 30 * i;
        }
    })
    // .add({
    //     targets: '.ml16',
    //     opacity: 0,
    //     duration: 1000,
    //     easing: "easeOutExpo",
    //     delay: 1000
    // });

// Meet the Team Header
// Wrap every letter in a span
$('.ml11 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline()
    .add({
      targets: '.ml11 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    // .add({
    //   targets: '.ml11 .line',
    //   translateX: [0,$(".ml11 .letters").width()],
    //   easing: "easeOutExpo",
    //   duration: 700,
    //   delay: 100
    // }).add({
    //   targets: '.ml11 .letter',
    //   opacity: [0,1],
    //   easing: "easeOutExpo",
    //   duration: 600,
    //   offset: '-=775',
    //   delay: function(el, i) {
    //     return 34 * (i+1)
    //   }
    // }).add({
    //   targets: '.ml11',
    //   opacity: 0,
    //   duration: 1000,
    //   easing: "easeOutExpo",
    //   delay: 1000
    // });