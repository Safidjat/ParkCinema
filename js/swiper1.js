const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    // nextEl: ".handle", это не сработало 
  },
  loop: true,
  spaceBetween: 30,
  effect: "fade",
});
document.querySelectorAll(".handle").forEach((handle) => {
  handle.onclick= () => { 
      swiper.slideNext(); // custom fun
  }; 
});