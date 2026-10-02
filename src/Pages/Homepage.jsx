import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FeaturePage from "./FeaturePage";
import AboutPage from "./AboutPage";

const HomePage = () => {

  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 499,
      image: "/Image/a5.jpg",
    },
    {
      id: 2,
      name: "Shoes",
      price: 1499,
      image: "/Image/h1.jfif",
    },
    {
      id: 3,
      name: "Headphones",
      price: 1999,
      image: "/Image/a3.jpg",
    },
    {
      id: 4,
      name: "Laptop",
      price: 49999,
      image: "/Image/a1.jpg",
    },
  ];

  return (
    <div>

      {/* ================= Slider ================= */}
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


      {/* ================= About ================= */}
      <AboutPage />


      {/* ================= Featured Products ================= */}
      <section className="py-12 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Featured Products
            </h2>

            <p className="text-gray-500 mt-2">
              Explore our popular products
            </p>
          </div>


          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                {/* Image */}
                <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-105 transition duration-300"
                  />

                </div>


                {/* Product Details */}
                <div className="p-4">

                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  <p className="text-xl font-bold text-blue-600 mt-2">
                    ₹{product.price}
                  </p>

                  <Link
                    to="/shop"
                    className="block text-center mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
                  >
                    View Product
                  </Link>

                </div>

              </div>

            ))}

          </div>


          {/* View All Products */}
          <div className="text-center mt-8">

            <Link
              to="/shop"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              View All Products →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= Features ================= */}
      <FeaturePage />

    </div>
  );
};

export default HomePage;