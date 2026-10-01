import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FeaturePage from "./FeaturePage";
import AboutPage from "./AboutPage";
const HomePage = () => {
  return (
    <div className="">
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
          <img src="/Image/p1.webp" className="w-full h-[350px] object-cover" />
          
        </SwiperSlide>

        <SwiperSlide>
          <img src="/Image/p2.webp" className="w-full h-[350px] object-cover" />
          
        </SwiperSlide>

        <SwiperSlide>
          <img src="/Image/p3.webp" className="w-full h-[350px] object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/Image/p4.webp" className="w-full h-[350px] object-cover" />
        </SwiperSlide>
      </Swiper>
      <AboutPage/>
      < FeaturePage/>
    </div>
    
  );
};

export default HomePage;