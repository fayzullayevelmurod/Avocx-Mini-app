import { Header } from "../layouts";
import { Button, CardUI, ProductCard, Sort } from "../components";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import { ToggleIconButton } from "../components/ToggleFeatured";
const productData = [
  {
    image: "/images/bag.png",
    title: "Gucci legend",
    price: "25.000₽",
    oldPrice: "37.500",
    storeName: "Gucci legend",
    description: "Рюкзак Tommy Helfiger 25 из на..",
    discount: null,
    className: "!w-full",
  },
  {
    image: "/images/bag.png",
    title: "Gucci legend",
    price: "25.000₽",
    oldPrice: "37.500",
    storeName: "Gucci legend",
    description: "Рюкзак Tommy Helfiger 25 из на..",
    discount: "– 33%",
    className: "!w-full",
  },
];

export const ProductCardPage = () => {
  const options1 = ["Black", "Red", "Yellow"];
  const options2 = ["L", "M", "S"];
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const handleShowMore = () => {
    setIsExpanded(true);
  };


  const images = ["/images/bag.png", "/images/bag.png", "/images/bag.png"];

  return (
    <div>

      <div className="space-y-[7px]">
        <div
          className={`bg-[#272727] border pt-1 px-1  border-[#303030] pb-2 overflow-hidden rounded-[30px] w-[calc(100%_+_26px)] -ml-[13px]`}
        >
          <div className="h-[570px] rounded-[19px] bg-[#303030] block relative">
            <button className="absolute top-[10px] right-[10px] z-50">
              <ToggleIconButton
                defaultIcon="/images/icons/featured-border.svg"
                activeIcon="/images/icons/active-feature-2.svg"
              />
            </button>
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              className="h-full overflow-hidden"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index} className="overflow-hidden">
                  <img
                    className="w-full h-full object-cover rounded-[26px]"
                    src={src}
                    alt={`image-${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="bg-iron absolute z-50 -bottom-[30px] right-[41px] rounded-[28px] shadow-cart-btn w-[80px] h-[63px] flex items-center justify-center border-4 border-[#272727]">
              <img src="/images/icons/cart.svg" alt="cart" width={30} />
            </button>
          </div>

          <div className="pt-1 px-[23px] mt-[3px] ml-[-6px]">
            <h3 className={`text-[25px] font-bold leading-full mt-0.5`}>
              25.000₽
              <span className="text-15 text-grayCustom line-through font-normal pl-2 -translate-y-1">
                37.500₽
              </span>
              <span className="text-15 text-[#00D79A] font-normal pl-2 -translate-y-1">
                – 33%
              </span>
            </h3>
            <span className="block mt-[10px] leading-full font-semibold">
              Рюкзак Tommy Helfiger 25 из натуральной кожи черного цвета
            </span>
          </div>
          <div className="grid grid-cols-2 gap-[14px] mt-[11px] px-[9px]">
            <Sort
              label="Размер"
              options={options2}
              className=" !border-[#303030]"
            />
            <Sort
              label="Цвет"
              options={options1}
              className=" !border-[#303030]"
            />
          </div>
        </div>
        <CardUI className="!pl-[7px] justify-between pr-[22px] !py-[10px] h-[65px] flex items-center relative !rounded-[25px]">
          <div className="flex items-center justify-between gap-[10px]">
            <div className="relative w-[50px] h-[50px]">
              <img
                className="w-full h-full rounded-full border border-primary object-cover"
                src="/images/profile-img.jpg"
                alt="product company logo"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-primary flex items-center gap-[1px] h-[10px] rounded-[5px] w-[30px] justify-center">
                <img src="/images/icons/trophy.svg" alt="" />
                <span className="text-[8px] font-semibold leading-full">
                  189
                </span>
              </div>
            </div>
            <div className="mt-[3px]">
              <div className="flex items-center gap-1  mb-[6px]">
                <div className="flex items-center justify-center w-5 h-[14px] rounded-[5px] bg-primary">
                  <img src="/images/icons/veirf.svg" alt="" />
                </div>
                <div className="flex items-center justify-center w-5 h-[14px] rounded-[5px] bg-[#FF9462]">
                  <img src="/images/icons/crown2.svg" alt="" />
                </div>
                <h3 className="text-base font-semibold leading-full">
                  Gucci Legend
                </h3>
              </div>
              <div className="flex items-center gap-[6px]">
                <div className="flex items-center gap-1">
                  <img src="/images/icons/group.svg" alt="group icon" />
                  <span className="text-xs font-medium text-grayCustom">
                    5879
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src="/images/icons/cart.svg"
                    alt="cart icon"
                    width={13}
                  />
                  <span className="text-xs font-medium text-grayCustom">
                    2334
                  </span>
                </div>
                <div className="flex items-center gap-0.5">
                  <img
                    src="/images/icons/orange-star.svg"
                    alt="cart icon"
                    width={13}
                  />
                  <span className="text-xs font-medium text-grayCustom">
                    4.9
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ToggleIconButton
            defaultIcon="/images/icons/featured.svg"
            activeIcon="/images/icons/active-featured.svg"
          />
        </CardUI>

        <CardUI className="!pl-4 justify-between pr-4 !mt-[6px] !py-[10px] h-[44px] flex items-center relative !rounded-[25px]">
          <div className="flex items-center">
            <h3 className="font-semibold text-15 mr-[7px]">Рейтинг</h3>
            <img
              src="/images/icons/orange-star.svg"
              alt=""
              width={20}
              height={20}
            />
            <span className="font-semibold pl-[5px]">4.9</span>
            <span className="font-semibold pl-3">(Отзывов: 234)</span>
          </div>
          <img className="" src="/images/icons/book.svg" alt="" />
        </CardUI>
        <CardUI className="!pt-[10px] !pl-4 border-none relative">
          <div className="flex items-center justify-between mb-[13px]">
            {/* Tabs */}
            <div className="flex 390:gap-[21px] gap-[10px] items-center">
              <button
                className={`font-semibold ${
                  activeTab === "description" ? "text-white" : "text-[#707070]"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Описание
              </button>
              <button
                className={`font-semibold ${
                  activeTab === "features" ? "text-white" : "text-[#707070]"
                }`}
                onClick={() => setActiveTab("features")}
              >
                Характеристики
              </button>
            </div>

            {/* Copy ID */}
            <div className="flex gap-1 items-center">
              <span className="text-xs text-grayCustom">ID: 2352:86</span>
              <img src="/images/icons/copy.svg" alt="" width={20} height={20} />
            </div>
          </div>

          {/* Content */}
          {activeTab === "description" && (
            <div
              className={`relative ${
                isExpanded ? "" : "show-more__text overflow-hidden"
              }`}
            >
              <p className="text-xs">
                Изготовленная из премиального хлопка, она сочетает комфорт
                повседневной носки с безупречным качеством легендарного бренда.
              </p>
              <br />
              <p className="text-[#D3D3D3] text-xs">
                Минималистичный крой и фирменный логотип делают ее универсальной
                основой для любого образа — от дерзкого
              </p>
            </div>
          )}

          {activeTab === "features" && (
            <div className="text-xs">
              <p>Материал: хлопок 100%</p>
              <p>Цвет: белый</p>
              <p>Размер: M, L, XL</p>
            </div>
          )}

          {/* Show more button */}
          {activeTab === "description" && !isExpanded && (
            <button
              className="font-semibold absolute bottom-[9px] left-1/2 -translate-x-1/2 z-50 flex justify-center items-center gap-[7px] w-fit mx-auto"
              onClick={handleShowMore}
            >
              <span>Подробнее</span>
              <img src="/images/icons/arrow-down-circle.svg" alt="show more" />
            </button>
          )}
        </CardUI>
        <Button type="gray">
          <img src="/images/icons/support.svg" alt="" />
          <span>Связаться с продавцом</span>
        </Button>
        <h3 className="text-center !my-[10px] font-semibold h-[21px] flex items-center justify-center">
          Популярное в этом магазине
        </h3>
        <div className="grid grid-cols-2 gap-1 w-[calc(100%_+_18px)] -ml-[9px]">
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={false}
              price={product.price}
              oldPrice={product.oldPrice}
              storeName={product.storeName}
              description={product.description}
              discount={product.discount}
              className={product.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
