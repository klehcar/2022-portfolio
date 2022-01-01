// main
new WOW().init();

// var textWrapper = document.querySelector(".hero-title");
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /\S/g,
//   "<span class='letter'>$&</span>"
// );
// $(document).ready(function() {
//   anime.timeline({ loop: false }).add({
//     targets: ".hero-title .letter",
//     translateY: [120, 0],
//     translateZ: 0,
//     opacity: [0, 1],
//     easing: "easeOutExpo",
//     duration: 1360,
//     // delay: (el, i) => 2000 + 40 * i
//     delay: (el, i) => 3800 + 40 * i
    
//   });
// });

var t1 = new TimelineMax({ paused: true });

TweenMax.from(".hero-logo", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 3
});

TweenMax.from(".hero-right", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1
});

TweenMax.from(".menu-toggle", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 3.3
});

TweenMax.from(".view-photos", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 3.4
});

TweenMax.staggerFrom(
  ".media ul li",
  2,
  {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 3.5
  },
  0.028
);

t1.to(".overlay", 1, {
  opacity: 1,
  ease: Expo.easeInOut
});

t1.to(".view-photos, .media", 1, {
  opacity: 0,
  ease: Expo.easeInOut
});

t1.staggerFrom(
  ".menu ul li",
  1,
  { y: 100, opacity: 0, ease: Expo.easeOut },
  0.1
);

t1.reverse();
$(document).on("click", ".menu-toggle", function() {
  t1.reversed(!t1.reversed());
});

$(document).on("click", ".close-btn", function() {
  t1.reversed(!t1.reversed());
});

t1.reverse();
$(document).on("click", "li", function() {
  t1.reversed(!t1.reversed());
});

var image = document.getElementsByClassName("hero-img-parallax");
new simpleParallax(image, {
  scale: 1.1
});

var image = document.getElementsByClassName("project-1-img");
new simpleParallax(image, {
  // scale:1.2
  scale: 1.5
});

var image = document.getElementsByClassName("project-2-img");
new simpleParallax(image, {
  scale: 1.5
});

var image = document.getElementsByClassName("project-3-img");
new simpleParallax(image, {
  scale: 1.5
});

var image = document.getElementsByClassName("project-4-img");
new simpleParallax(image, {
  scale: 1.5
});

var image = document.getElementsByClassName("project-5-img");
new simpleParallax(image, {
  scale: 1.5
});

var image = document.getElementsByClassName("project-6-img");
new simpleParallax(image, {
  scale: 1.5
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length
        ? target
        : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });


  // LOADER
  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 200
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 200,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 400,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 400,
    easing: "easeOutExpo",
    delay: 500
  });