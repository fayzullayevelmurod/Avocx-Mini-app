import { Link } from "react-router-dom";
import Search from "../components/Search";
import Button from "../components/Button";
import CardUI from "../components/CardUI";
import { Select } from "../components/Form";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Header } from "../components/Header";
import Sort from "../components/Sort";
import Title from "../components/Title";
import Card from "../components/Card";
const cardProducts = [
  {
    id: 1,
    image: "/images/product-img-3.png",
    imageAlt: "product image",
    brand: "Hugo BOSS",
    title: "Футболка «RED»",
    condition: "Состояние: Отличное",
    size: "Размер: L",
    price: "2.500₽",
    favoriteIcon: "/images/icons/star.svg",
    favoriteIconAlt: "favorite icon",
  },
  {
    id: 2,
    image: "/images/product-img-3.png",
    imageAlt: "product image",
    brand: "Hugo BOSS",
    title: "Футболка «RED»",
    condition: "Состояние: Отличное",
    size: "Размер: L",
    price: "2.500₽",
    favoriteIcon: "/images/icons/star.svg",
    favoriteIconAlt: "favorite icon",
  },
];
const ProductCard = () => {
  const images = [
    { src: "images/product-img-2.png", alt: "product img 1" },
    { src: "images/product-img-2.png", alt: "product img 2" },
    { src: "images/product-img-2.png", alt: "product img 3" },
  ];

  const options1 = ["Black", "Red", "Yellow"];
  const options2 = ["L", "M", "S"];
  return (
    <div className="">
      {/* search */}
      <Header
        iconPath="/images/icons/refresh.svg"
        grayBtn={true}
        grayBtnIcon="/images/icons/link.svg"
      />
      <CardUI className="!pl-[10px] !pr-[17px] h-[65px] !py-[0] flex items-center relative">
        <div className="flex items-center justify-between gap-[11px]">
          <img
            className="w-12 h-12 rounded-full"
            src="/images/company-logo.svg"
            alt="product company logo"
          />
          <div className="">
            <h3 className="text-base font-semibold leading-full mb-[6px]">
              SHLZ.STORE 🥇
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 ml-[-3px]">
                <img src="/images/icons/group.svg" alt="group icon" />
                <span className="text-xs font-medium text-grayCustom">
                  5879
                </span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/images/icons/cart.svg" alt="cart icon" />
                <span className="text-xs font-medium text-grayCustom">
                  2334
                </span>
              </div>
            </div>
            <img
              className="absolute top-1/2 -translate-y-1/2 right-[22px]"
              src="/images/icons/star.svg"
              alt=""
            />
          </div>
        </div>
      </CardUI>

      <div className="-mx-[14px] mt-4">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="swiper product-card__swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img
                className="rounded-base h-[440px] w-full"
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <CardUI className="!pt-[21px] !pb-[13px] !rounded-[30px] !px-[14px] -mt-[30px] relative z-10 !bg-[#1A1A1A]">
          <div className="text-center">
            <span className="text-15 font-semibold leading-full text-grayCustom">
              Hugo BOSS
            </span>
            <h4 className="text-xl leading-full font-bold italic mt-[5px]">
              T-shirt «RED»
            </h4>
          </div>
          <img
            className="absolute top-4 mt-0 right-[20px] w-[26px]"
            src="/images/icons/star.svg"
            alt="star icon"
            width={26}
          />
          <div className="grid grid-cols-2 gap-[14px] mb-[11px] mt-[17px]">
            <Sort label="Размер" options={options2} />
            <Sort label="Цвет" options={options1} />
          </div>
          <Button className="w-full h-[51px]">
            <span>2.500₽</span>
            <svg
              className="w-[22px] h-auto mt-[-3px] "
              width="22px"
              height="22"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.18618 4.46117H3.20944C2.17121 4.46117 1.65253 4.46117 1.28327 4.67244C0.959222 4.85783 0.71013 5.15069 0.580059 5.49998C0.431929 5.89777 0.517194 6.40805 0.687663 7.42823L0.68802 7.43015L1.43363 11.8923C1.56011 12.6492 1.62377 13.0279 1.81312 13.3119C1.98004 13.5622 2.21434 13.7602 2.48937 13.8832C2.80137 14.0228 3.18589 14.0229 3.95525 14.0229H10.8082C11.5776 14.0229 11.9619 14.0228 12.2739 13.8832C12.5489 13.7602 12.7834 13.5622 12.9503 13.3119C13.1396 13.0279 13.203 12.6492 13.3294 11.8923L14.075 7.43015L14.0758 7.42704C14.2461 6.40765 14.3313 5.89762 14.1833 5.49998C14.0532 5.15069 13.8047 4.85783 13.4806 4.67244C13.1114 4.46117 12.5919 4.46117 11.5536 4.46117H10.5771M4.18618 4.46117H10.5771M4.18618 4.46117C4.18618 2.7009 5.61683 1.27393 7.38164 1.27393C9.14644 1.27393 10.5771 2.7009 10.5771 4.46117"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <div className="mt-3">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-xl">Описание</h4>
              <div className="flex items-center gap-5">
                <span className="text-[13px] font-medium leading-fll text-[#707070]">
                  Артикул: 2352:86
                </span>
                <img src="/images/icons/copy-2.svg" alt="" />
              </div>
            </div>
            <p className="text-15 leading-[120%]  font-normal italic mt-[-3px]">
              Изготовленная из премиального хлопка, она сочетает комфорт
              повседневной носки с безупречным качеством легендарного бренда.{" "}
            </p>
            <p className="text-15 leading-[120%] font-normal italic mt-[18px]">
              Минималистичный крой и фирменный логотип делают ее универсальной
              основой для любого образа — от дерзкого casual до элегантного
              smart casual.
            </p>
          </div>
          <div className="bg-iron pt-[13px] px-[17px] rounded-[20px] mt-[21px] pb-3 mb-[17px]">
            <h4 className="text-17 font-semibold mb-[13px]">
              Комментарий продавца
            </h4>
            <p className="text-[#D3D3D3] text-15 italic leading-[116%]">
              Доставляем по СНГ, по России бесплатно, остальные + 500₽
              наложенным платежом.
            </p>
          </div>
          <Button
            className="!bg-[#232323] h-[51px] relative gap-[10px]"
            gray={true}
          >
            <img src="images/icons/chat.svg" alt="chat icon" />
            <span>Связаться с продавцом</span>
          </Button>
        </CardUI>
      </div>
      <Title label="Популярное в этом магазине" />
      <div className="grid grid-cols-2 gap-[6px]">
        {cardProducts.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
