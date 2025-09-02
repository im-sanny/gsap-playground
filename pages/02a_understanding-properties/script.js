import gsap from 'gsap';

gsap.to('.box', {
  opacity: 1,
  rotate: 360,
  background: '#f29f83',
  // borderRadius: '50%',
  scale: 1.25,
  duration: 2,
  ease: 'bounce',
  repeat: -1,
  yoyo: true,
  repeatDelay: 2,
  // paused: true,
  // stagger: 1,
});
