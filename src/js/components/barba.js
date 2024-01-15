import barba from "@barba/core";
import { gsap } from "gsap";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);

barba.init({
  // TODO: find a way to postpone page initialization until js is loaded
  views: [
    {
      namespace: "index",
      afterEnter() {
        const heroEpisodesSwiper = new Swiper(".hero__episodes__slider", {
          watchSlidesProgress: true,
          slidesPerView: 1,
          spaceBetween: 15,
          centeredSlides: true,
          loop: true,
          breakpoints: {
            493: {
              slidesPerView: 2,
            },
            901: {
              slidesPerView: 3,
            },
          },
        });

        const testimonialsSwiper = new Swiper(".testimonials__slider", {
          watchSlidesProgress: true,
          slidesPerView: 1,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            769: {
              slidesPerView: 2,
            },
          },
        });
      },
    },
    {
      namespace: "about",
      afterEnter() {
        const sponsorsSwiper = new Swiper(".sponsors__slider", {
          watchSlidesProgress: true,
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            769: {
              slidesPerView: 2,
            },
          },
        });
      },
    },
  ],
  transitions: [
    {
      name: "opacity-transition",
      sync: true,
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
});
