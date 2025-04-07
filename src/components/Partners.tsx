"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import Underline from "./Underline";

const Partners = () => {
  const partners = [
    {
      id: 1,
      logo: "/images/partners/iso-certified-1024x396.png",
      name: "Partner 1",
    },
    {
      id: 2,
      logo: "/images/partners/ORERA-removebg-preview.png",
      name: "Partner 2",
    },
    {
      id: 3,
      logo: "/images/partners/credai1-removebg-preview.png",
      name: "Partner 3",
    },
  ];

  return (
    <section className="py-16 md:py-16 overflow-hidden ">
      <div className="container mx-auto px-4 md:px-8 text-center ">
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
          OUR PARTNERS
          <Underline />
        </h2>
        {/* Desktop view */}
        <div className="hidden md:grid grid-cols-3 gap-12 md:gap-16 items-center px-4 md:px-12 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center h-24 transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                key={partner.id}
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={48}
                className="object-contain w-auto h-full max-h-24 max-w-36 opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        {/* Mobile view with slider */}
        <div className="md:hidden relative px-2 max-w-sm mx-auto">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10" />
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={40}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="partner-swiper"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="flex items-center justify-center h-20 transform transition-all duration-300 hover:scale-105">
                  <Image
                    key={partner.id}
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={48}
                    className="object-contain w-auto h-full max-h-20 max-w-32 opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
