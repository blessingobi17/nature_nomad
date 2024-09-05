import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import clients from "/data/clients.json";

const Carousel = () => {
  return (
    <main className="w-full lg:py-12 py-8 lg:px-20 px-6 font-ptSerif flex flex-col items-center">
      <h1 className="text-center text-3xl  pb-10 px-4">
        Doing Things looks good on you.
      </h1>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3.5,
          },
        }}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        navigation={true}
        modules={[Navigation, Autoplay, FreeMode]}
        className="mySwiper flex flex-col items-center w-full mb-10"
      >
        {clients.map((grid) => (
          <SwiperSlide
            className="flex flex-col items-center carouselImg"
            key={grid.id}
          >
            <figure className="relative">
              <img
                src={grid.image}
                alt=""
                className="lg:w-80 w-full h-80 object-cover"
              />
              <figcaption
                className="absolute top-8 left-4 opacity-0 carouselText bg-white dark:text-black
                px-4 py-1 rounded-full text-xs lg:block hidden"
              >
                {grid.name}
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Carousel;
