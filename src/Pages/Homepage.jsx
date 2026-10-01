import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FeaturePage from "./FeaturePage";
import AboutPage from "./AboutPage";

const HomePage = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src="/Image/p1.webp"
            alt="Banner 1"
            className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/Image/p2.webp"
            alt="Banner 2"
            className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/Image/p3.webp"
            alt="Banner 3"
            className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/Image/p4.webp"
            alt="Banner 4"
            className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <AboutPage />
      <FeaturePage />
    </div>
  );
};

export default HomePage;