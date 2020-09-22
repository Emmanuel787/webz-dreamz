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

            $(window).scrollTop(0);

            //rellax-re-init:start
            var rellax = new Rellax(".rellax", {
              center: false,
            });
            //rellax-re-init:end

            //hero-sections-animate:start
            $(".el-hero-section, .a-el-hero-section, .g-el-hero-section, .c-el-hero-section")
              .delay(400)
              .velocity("transition.slideUpIn", 2000);
            //hero-sections-animate:end

            $(".el-main-preloader").fadeOut(2000);
          },


          async once(data) {
            contentAnimation();


          },
        },
      ],
    });
  });
});


