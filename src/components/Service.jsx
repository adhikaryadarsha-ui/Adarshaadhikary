import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import {
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
  FaTools,
  FaRocket,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl text-center font-black mb-16">
          What <span className="font-bold text-orange-600">I Do</span>
        </h1>
      

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <ServiceCard
              icon={<FaPalette />}
              title="Website Design"
              desc="Modern and clean website UI design tailored for user experience."
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceCard
              icon={<FaLaptopCode />}
              title="Front-End Development"
              desc="Building responsive and interactive web interfaces using modern technologies."
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceCard
              icon={<FaMobileAlt />}
              title="Responsive Website Development"
              desc="Ensuring websites work perfectly on mobile, tablet, and desktop devices."
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceCard
              icon={<FaTools />}
              title="Website Redesign"
              desc="Improving UI design and modernizing existing websites."
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceCard
              icon={<FaRocket />}
              title="Website Performance Optimization"
              desc="Optimizing website speed, accessibility, and performance."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center">
      <div className="text-4xl text-blue-600 mb-4 flex justify-center">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-3">{title}</h3>

      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
};
