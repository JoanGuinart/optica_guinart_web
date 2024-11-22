import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: true,
    modules: [Navigation, Pagination, Autoplay],
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    loop: true,
    speed: 2000,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
