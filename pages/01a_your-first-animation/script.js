gsap.to('.card', {
  opacity: 1,
  scale: 1,
  duration: 0.5,
  onComplete: () => {
    gsap.to('.card', {
      y: -200,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      scale: 0,
    });
  },
});
