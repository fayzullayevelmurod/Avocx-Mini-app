import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CardUI } from "../components";
import { Header } from "../layouts";
export const Home = () => {
  // Sample image data (replace with your own images)
  const slides = [
    { src: "images/home-slider-img.png", alt: "slider img 1" },
    { src: "images/home-slider-img.png", alt: "slider img 2" },
    { src: "images/home-slider-img.png", alt: "slider img 3" },
    { src: "images/home-slider-img.png", alt: "slider img 3" },
  ];
  return (
    <div>

      <h1 className="mt-[11px] text-15 font-semibold text-center mb-[10px]">
        Главная
      </h1>
      <div className="mb-2 border border-iron rounded-[20px] overflow-hidden bg-[#1E1E1E]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="h-[118px] rounded-[19px] home-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-full h-full object-left object-cover rounded-[19px]"
                src={slide.src}
                alt={slide.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pt-[15px] pb-[11px] px-[18px]">
          <h3 className="flex items-center gap-[7px]">
            <span className="text-[20px] font-bold leading-full">
              Go to the hot sale
            </span>
            <img src="/images/icons/arrow-right.svg" alt="" />
          </h3>
          <p className="mt-[3px] text-sm">
            What if your dream is 70% off today?
          </p>
        </div>
      </div>
      <Buyer />

      <h1 className="mt-[10px] text-15 font-semibold text-center mb-[10px]">
        Актуальное
      </h1>
      <div className="space-y-[10px]">
        <img
          className="h-[118px] w-full object-cover object-left rounded-[17px]"
          src="/images/home-slider-img.png"
          alt=""
        />
        <img
          className="h-[118px] w-full object-cover object-left rounded-[17px] "
          src="/images/home-banner.png"
          alt=""
        />
      </div>
    </div>
  );
};

const Buyer = () => {
  const cardsData = [
    {
      id: "1",
      title: "Маркетплейс",
      description:
        "Покупайте огромное количество товаров напрямую у бизнеса, удобно и выгодно.",
      icon: "/images/icons/store-white.svg",
      imgWidth: "20px",
    },
    {
      id: "2",
      title: "Реклама в TG",
      description:
        "Купить и продать рекламу, удобно, быстро, выгодно и без обмана.",
      icon: "/images/icons/tg-trade.svg",
      imgWidth: "20px",
    },
    {
      id: "3",
      title: "Фриланс",
      description: "Найдётся решение любых задач, от простых до high lvl.",
      icon: "/images/icons/freelance-white.svg",
      imgWidth: "18px",
    },
    {
      id: "4",
      title: "Розыгрыши",
      description: "Создайте розыгрыш призов для клиентов и друзей.",
      icon: "/images/icons/draws.svg",
      imgWidth: "20px",
    },
    {
      id: "5",

      title: "Avocx VPN",
      description:
        "Быстрый, стабильный VPN с честным анлимом за самую низкую цену на рынке.",
      icon: "/images/icons/earth.svg",
      imgWidth: "22px",
    },
    {
      id: "8",
      title: "TG Stars",
      description: "Выгодно купить/продать Telegram stars.",
      icon: "/images/icons/star.svg",
      imgWidth: "20px",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-[10px] gap-y-2 mb-[10px]">
      {cardsData.map((card) => (
        <CardUI key={card.id} className="pl-[17px] min-h-[84px]">
          <div className="flex items-center gap-[5px] mb-1">
            <img
              src={card.icon}
              alt={`${card.title} icon`}
              width={card.imgWidth}
            />
            <span className="text-sm font-semibold text-white">
              {card.title}
            </span>
          </div>
          <p className="text-[10px] leading-[107%] text-grayCustom">
            {card.description}
          </p>
        </CardUI>
      ))}
    </div>
  );
};
