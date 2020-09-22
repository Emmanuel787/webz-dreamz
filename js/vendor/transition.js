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


            $('.svg-dark').delay(500).fadeOut();

            $('.svg-dark').delay(500).fadeOut();

            const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

            //hero-center-text:start
            //home
            tl.to('.intro-two-title', { y: '0%', duration: 0.7, delay: 1, opacity: 1, stagger: 0.05 });

            tl.to('.intro-two-title', { y: '100%', duration: 1, delay: 0.2, opacity: 1, stagger: 0.05 });

            //hero-center-text:end

            //intro-one:start
            tl.to('.intro-one', {
              y: '0%',
              duration: 0.7,
              delay: 0.2
            }, '-=.9');

            tl.to('.intro-one', {
              y: '-100%',
              duration: 0.5,
              delay: 0.5
            });
            //intro-one:end

            //intro-two:start
            tl.to('.intro-two', {
              y: '-100%',
              duration: 0.5,
              delay: 0.5,
            }, '-=.9');
            //intro-two:end

            //intro-three:start
            tl.to('.intro-three', {
              y: '-100%',
              duration: 0.5,
              delay: 0.5,
            }, '-=.9');
            //intro-three:end

            // animate background and center box on startup:start
            $('.el-hero-section').delay(2000).addClass('ehs-bg-anim');
            $('.ehs-anim-box').delay(1000).addClass('ehs-anim');
            // animate background and center box on startup:end

            //hero-center-text:start
            tl.to('.ecb-text', { y: '0%', duration: 0.7, delay: 0.6, stagger: 0.10 }, '-=.9');
            //hero-center-text:end

          },


          async once(data) {
            contentAnimation();


          },
        },
      ],
    });
  });
});


