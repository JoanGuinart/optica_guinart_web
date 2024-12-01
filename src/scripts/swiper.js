import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Mousewheel, Parallax } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    modules: [Navigation, Pagination, Autoplay, Mousewheel, Parallax],
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      enabled: true
    },
    freeMode: true,
    mousewheel: {
      enabled: true,
      forceToAxis: true,
    },
    parallax: {
      enabled: true,
    },
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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
