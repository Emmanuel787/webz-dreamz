$(window).scrollTop(0);
////////////////////////////////////////////////@2020

// reveal on scroll:start
new WOW().init();
// reveal on scroll:end

////////////////////////////////////////////////@2020

//smooth scroll:start

//smooth scroll:end


////////////////////////////////////////////////@2020

//startup loader:start
$(window).on('load',function () {
  $('.el-main-preloader').fadeOut(2000);
  //los-hero-sections-animate:start
  $(".el-hero-section, .a-el-hero-section, .g-el-hero-section, .c-el-hero-section").velocity("transition.slideUpIn", 2000);
  //los-hero-sections-animate:end

});
//startup loader:end

//rellax #2:start
var rellax = new Rellax(".rellax", {
  center: true,
});
//rellax #2:end

////////////////////////////////////////////////@2020


////////////////////////////////////////////////@2020


////////////////////////////////////////////////@2020

/*
one page smooth scroll easing:start
*/
// HTML CODE
// <section id="sectionThree" class="section-three">
//       <a data-easing="easeInQuint" href="#top"><p>BACK UP</p></a>
//     </section>

// Instantiate Scrolls
var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');

if (document.querySelector("[data-easing]")) {
  var linear = new SmoothScroll('[data-easing="linear"]', { easing: "linear" });

  var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {
    easing: "easeInQuad",
  });
  var easeInCubic = new SmoothScroll('[data-easing="easeInCubic"]', {
    easing: "easeInCubic",
  });
  var easeInQuart = new SmoothScroll('[data-easing="easeInQuart"]', {
    easing: "easeInQuart",
  });
  var easeInQuint = new SmoothScroll('[data-easing="easeInQuint"]', {
    easing: "easeInQuint",
  });

  var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {
    easing: "easeInOutQuad",
  });
  var easeInOutCubic = new SmoothScroll('[data-easing="easeInOutCubic"]', {
    easing: "easeInOutCubic",
  });
  var easeInOutQuart = new SmoothScroll('[data-easing="easeInOutQuart"]', {
    easing: "easeInOutQuart",
  });
  var easeInOutQuint = new SmoothScroll('[data-easing="easeInOutQuint"]', {
    easing: "easeInOutQuint",
  });

  var easeOutQuad = new SmoothScroll('[data-easing="easeOutQuad"]', {
    easing: "easeOutQuad",
  });
  var easeOutCubic = new SmoothScroll('[data-easing="easeOutCubic"]', {
    easing: "easeOutCubic",
  });
  var easeOutQuart = new SmoothScroll('[data-easing="easeOutQuart"]', {
    easing: "easeOutQuart",
  });
  var easeOutQuint = new SmoothScroll('[data-easing="easeOutQuint"]', {
    easing: "easeOutQuint",
  });
}

/*
one page smooth scroll easing:start
*/

////////////////////////////////////////////////@2020


////////////////////////////////////////////////@2020

/*
if inside div do this:start
*/

/*
if inside div do this:end
*/

////////////////////////////////////////////////@2020

/*
Jquery breakpoints:start
*/
// Jquery breakpoints
// var isBreakPoint = function (bp) {
//   var bps = [320, 480, 768, 1024],
//     w = $(window).width(),
//     min, max
//   for (var i = 0, l = bps.length; i < l; i++) {
//     if (bps[i] === bp) {
//       min = bps[i - 1] || 0
//       max = bps[i]
//       break
//     }
//   }
//   return w > min && w <= max
// }

// if (isBreakPoint(480)) {}
/*
Jquery breakpoints:end
*/

////////////////////////////////////////////////@2020

/*
ons scroll do this:start
*/
// $(function () {
//   var backToTop = $(".emf-bottom-box");
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll >= 3500) {
//       backToTop.fadeIn();
//     } else {
//       backToTop.fadeOut();
//     }
//   });
// });
/*
ons scroll do this:end
*/

////////////////////////////////////////////////@2020

/*
if IE=doThisHere():start
*/
function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");
  // If IE, return version number.
  if (Idx > 0)
    return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;
  else return 0; //It is not IE
}
//usage
if (GetIEVersion() > 0) {
  // code for IE goes here
}
/*
if !E=doThisHere():end
*/

////////////////////////////////////////////////@2020