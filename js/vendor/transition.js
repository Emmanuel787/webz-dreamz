$(document).ready(function () {
  function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

  function pageTransition() {
    var tl = gsap.timeline();

    tl.to(".loading-screen", {
      duration: 1,
      height: "100vh",
      bottom: "0%",
      ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
      duration: 1,
      height: "100vh",
      bottom: "100%",
      ease: "Expo.easeInOut",
      delay: 0.3,
    });

    tl.set(".loading-screen", { bottom: "-100%" });
  }

  function contentAnimation() {
    var tl = gsap.timeline();

  }

  $(function () {
    barba.init({
      sync: false,

      transitions: [
        {
          //Before the transition, this goes
          async leave(data) {
            const done = this.async();

            pageTransition();
            await delay(1000);
            done();

            $(window).scrollTop(0);

          },

          //after the transition this will re-init...//
          async enter(data) {
            contentAnimation();
            $('.preloader').fadeOut(1000);

            //button-effects
            $('.ehs-gtb, .a-ehs-gtb').on('mouseenter', function () {
              $('.ehs-temp-title, .a-ehs-temp-title').css({
                "color": "white"
              });
            });
            $('.ehs-gtb, .a-ehs-gtb').on('mouseleave', function () {
              $('.ehs-temp-title, .a-ehs-temp-title').css({
                "color": ""
              });
            });

            $('.ehs-gtb, .a-ehs-gtb').on('click', function () {
              $('.ehs-temp-title, .a-ehs-temp-title').css({
                "margin-top": "-2em"
              });
            });



          },


          async once(data) {
            contentAnimation();

          },
        },
      ],
    });
  });
});


