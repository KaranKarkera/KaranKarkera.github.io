let vantaEffect;

window.addEventListener("load", () => {
  // Initialize Vanta
  vantaEffect = VANTA.WAVES({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x1b1b1b,
    shininess: 50.00,
    waveHeight: 5.50,
    waveSpeed: 0.50,
    zoom: 1.19
  });

  // Wait for Vanta's canvas to attach
  const waitForVanta = setInterval(() => {
    const canvas = document.querySelector("#vanta-bg canvas");

    if (canvas) {
      clearInterval(waitForVanta);

      // NOW initialize Swiper
      const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }, 50);
});