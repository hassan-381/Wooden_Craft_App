import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Handcrafted Wooden Treasures",
    desc: "Discover unique wooden crafts made with love and tradition.",
    image:
      "/tags-ruler-scissor-sticks-lace-ribbon-empty-jar-heart-shape-wooden-backdrop.jpg",
  },
  {
    id: 2,
    title: "Rustic Wooden Decor",
    desc: "Elevate your home with rustic, handmade wood designs.",
    image: "/top-view-carpenter-set-tools.jpg",
  },
  {
    id: 3,
    title: "Eco-Friendly Wooden Art",
    desc: "Sustainably sourced. Beautifully crafted.",
    image: "/lg_1cCKMhC8jqsmHS3j8ppM1dZLk6xTXcOSIY8Njyn2.jpg",
  },
];

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg sm:text-xl">{slide.desc}</p>
                  <div className="mt-6 flex justify-center gap-4">
                    <Link
                      to="/shop"
                      className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md"
                    >
                      Shop Now
                    </Link>
                    <Link
                      to="/about"
                      className="px-6 py-3 bg-white text-amber-700 font-medium rounded-md hover:bg-gray-100"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-amber-600 text-white p-3 rounded-full">
          ❮
        </button>
        <button className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-amber-600 text-white p-3 rounded-full">
          ❯
        </button>
      </Swiper>
    </div>
  );
};

export default HeroSection;
