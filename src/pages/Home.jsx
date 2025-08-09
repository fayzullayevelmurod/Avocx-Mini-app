import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CardUI from "../components/CardUI";

const Home = () => {
  // Sample image data (replace with your own images)
  const slides = [
    { src: "images/slider-img.png", alt: "slider img 1" },
    { src: "images/slider-img.png", alt: "slider img 2" },
    { src: "images/slider-img.png", alt: "slider img 3" },
    { src: "images/slider-img.png", alt: "slider img 3" },
  ];
  return (
    <div>
      <div className="text-center relative mt-[6px]">
        <img
          className="absolute -top-[2px] ml-2 left-1/2 -translate-x-1/2"
          src="/images/this-is.svg"
          alt=""
        />
        <h1 className="text-[55px] leading-full gradient-text font-bold italic">
          Superservice
        </h1>
      </div>
      <h1 className="text-[17px] mt-[22px] font-bold text-center mb-4 text-white">
        Главная
      </h1>
      <div className="mb-[10px] border border-iron rounded-[20px] overflow-hidden bg-[#1E1E1E]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="h-[137px] rounded-[19px] home-swiper"
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
        <div className="pt-3 px-[18px]">
          <h3 className="flex items-center gap-3">
            <span className="text-[25px] font-bold leading-full">
              Gift Exchange
            </span>
            <img src="/images/icons/arrow-right.svg" alt="" />
          </h3>
          <p className="mt-[13px] leading-[108%] min-h-[46px] mb-0.5" >
            There are no lower fee, trade gifts quickly and safely.
          </p>
        </div>
      </div>
      <Buyer />
      <div className="mt-[6px] bg-ai-card flex items-center justify-between pl-[18px] rounded-base">
        <div className="flex items-center gap-[5px]">
          <img
            className="w-[25px] h-[25px] rounded-full object-cover"
            src="images/blog-logo.svg"
            alt="blog-logo"
          />
          <div>
            <a className="text-[13px] italic ml-[3px] flex items-center gap-[6px]" href="#!">
              <span>Avocx Devblog</span>
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 4.5L11.1111 0.999999M15 4.5L11.1111 8M15 4.5L1 4.5"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <p className="text-[8px] font-normal leading-full">
              News, promotions, giveaways.
            </p>
          </div>
        </div>
        <img src="/images/ai.png" alt="ai img" />
      </div>
        <button className="flex bg-[#232323] w-full rounded-[20px] gap-[9px] h-[52px] items-center justify-center mt-[11px]">
        <img src="/images/icons/settings.svg" alt="" />
        <span className="font-bold">Настройки</span>
      </button>
    </div>
  );
};

export default Home;

const Buyer = () => {
  const cardsData = [
    {
      id: "1",
      title: "Рекламая сеть",
      description:
        "Купить и продать рекламу, удобно, быстро, выгодно и без обмана.",
      icon: "/images/icons/trade-up-blue.svg",
      imgWidth: "18px",
    },
    {
      id: "2",
      title: "Магазины",
      description:
        "Покупайте множество товаров напрямую у авторов телеграм каналов.",
      icon: "/images/icons/store.svg",
      imgWidth: "18px",
    },
    {
      id: "3",
      title: "Фриланс",
      description:
        "Найдутся решение для любых задач, от топ специалистов, до крутых новичков.",
      icon: "/images/icons/home-blue.svg",
      imgWidth: "24px",
    },
    {
      id: "4",
      title: "Подарки",
      description:
        "Покупайте и продавайте NFT подарки быстро и надежно и с самой низкой комиссией.",
      icon: "/images/icons/gift.svg",
      imgWidth: "18px",
    },
    {
      id: "5",

      title: "Avocx VPN",
      description:
        "Быстрый, стабильный VPN с честным анлимом за самую низкую цену на рынке.",
      icon: "/images/icons/work.svg",
      imgWidth: "18px",
    },
    {
      id: "8",
      title: "Розыгрыши",
      description:
        "Создайте или участвуйте в розыгрыше подарков, подписок, звёзд или других призов.",
      icon: "/images/icons/flag.svg",
      imgWidth: "20px",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-[10px] gap-y-1 mb-[10px]">
      {cardsData.map((card) => (
        <CardUI
          key={card.id}
          className="!pt-[11px] pl-[18px] pr-0 !pb-0 !rounded-[20px] !bg-[#1E1E1E] min-h-[84px]"
        >
          <div className="flex items-center gap-2 mb-[6px]">
            <img
              src={card.icon}
              alt={`${card.title} icon`}
              width={card.imgWidth}
            />
            <span className="text-sm font-semibold text-white">
              {card.title}
            </span>
          </div>
          <p className="text-[10px] leading-[116%] text-grayCustom">
            {card.description}
          </p>
        </CardUI>
      ))}
    </div>
  );
};
