import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const ProModal = ({ isOpen, onClose }) => {
  // if (!isOpen) return null;
  const slides = [
    { src: "images/pro.png", alt: "slider img 1" },
    { src: "images/pro.png", alt: "slider img 2" },
  ];
  return (
    <div className={`fixed flex flex-col justify-end  left-0 z-[999] w-full h-screen bg-[#1616161A] backdrop-blur-20 duration-300 ${isOpen ? "bottom-0" : "-bottom-full"}`}>
      <div className="relative modal-content  z-[9999] h-[calc(100vh_-_136px)] shadow-option-shadow rounded-t-[45px]">
        <button onClick={onClose} className="absolute top-[36px] right-8 z-[999]">
          <img src="/images/icons/black-close.svg" alt="white-close" />
        </button>
        <div className="bg-[#161616d4] h-full rounded-[inherit]">
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="h-[249] rounded-[43px] home-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  className="w-full h-full object-cover rounded-[19px]"
                  src={slide.src}
                  alt={slide.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="pt-4 px-[25px]">
            <h3 className="text-[30px] leading-full font-bold">
              Оплата подписки
            </h3>
            <p className="my-[9px] font-semibold block">
              Avocx wallet balance:
              <span className="text-grayCustom">0 TON / 0 Stars</span>
            </p>
            <h3 className="mt-5 text-xl leading-full font-bold mb-1">
              К оплате:
            </h3>
            <div className="flex gap-[15px] items-center">
              <div className="flex items-center gap-[10px]">
                <span className="block leading-full text-[40px] font-bold">
                  0
                </span>
                <span className="block leading-full text-[#A3A3A3] text-[30px] font-semibold">
                  TON
                </span>
              </div>
              <img src="/images/icons/refresh.svg" alt="" />
              <span className="block leading-full text-[#A3A3A3] text-[30px] font-semibold">
                Stars
              </span>
            </div>
            <button className="gradient-btn mt-[23px]">Оплатить</button>
            <button className="gradient-btn-outline mt-3">
              Оплатить валютой
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
