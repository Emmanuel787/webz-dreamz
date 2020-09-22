
$(window).on('load', function () {

  $('.el-hero-section').addClass('ehs-bg-anim');
  $('.ehs-anim-box').addClass('ehs-anim');

  $('.svg-dark').delay(500).fadeOut();

  $('.svg-dark').delay(500).fadeOut();

  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

  //hero-center-text:start
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

  //hero-center-text:start
  tl.to('.ecb-text', { y: '0%', duration: 0.7, delay: 0.5, stagger: 0.10 }, '-=.9');
  //hero-center-text:end

});
