import { Link } from "react-router-dom";
import Button from "../components/Button";
import Search from "../components/Search";
import Date from "../components/Date";
import Categories from "../components/Categories";
import Title from "../components/Title";
import CardUI from "../components/CardUI";
import Sort from "../components/Sort";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { OrangeBtn } from "../components/OrangeBtn";
import { Category } from "../components/Category";
import { Chanel } from "../components/Chanel";

export const ShopButton = () => {
  const [ripple, setRipple] = useState(false);

  const handleClick = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 400); // Ripple animatsiyasini tozalash
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.9 }} // "Prujina" effekti
      className="relative overflow-hidden w-[34.89236831665039px] h-[31.20182991027832px] shadow-btn-inset !rounded-[13px] bg-blue-600 flex items-center justify-center mr-[1px]"
    >
      <img src="/images/icons/white-cart.svg" alt="" />

      {ripple && (
        <motion.span
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute w-16 h-16 bg-blue-400 rounded-full pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </motion.button>
  );
};

const Announcement = () => {
  const categories = [
    { label: "Горячее", to: "/hype", className: "bg-orange" },
    { label: "На трафике", to: "/bestsellers", className: "bg-primary" },
    { label: "Проверенное", to: "/brands", className: "bg-purple" },
    { label: "Свежие", to: "/discounts", className: "bg-green" },
  ];
  const categoryOptions = ["Все", "Все 1", "Все 2"];
  const sortOptions = ["Text", "Text  1", "Text  2"];
  return (
    <div>
      {/* search */}
      <div className="flex items-center gap-[9px] h-[45px]">
        <Link className="mr-1" to="#!">
          <img
            className="stroke-2 min-w-[28px]"
            src="/images/icons/prev-arrow.svg"
            alt="prev arrow"
          />
        </Link>
        <div className="max-w-[226px] w-full">
          <Search />
        </div>
        <OrangeBtn
          label="Office"
          icon="bullhorn.svg"
          className="min-w-[107px]"
        />
        <button className="ml-auto h-[45px] flex items-center justify-end">
          <img
            src="/images/icons/refresh.svg"
            alt="refresh icon"
            width={20}
            height={21}
          />
        </button>
      </div>
      {/* filter */}
      <div className="space-y-[5px] mb-[9px]">
        <div className="flex gap-[5px] mt-[17px] items-center">
          {/* <Category /> */}
          <Sort options={categoryOptions} icon={true} iconPath='/images/icons/category.svg' />
          <Sort options={sortOptions} icon={true} />
          <button className="min-w-[35px] h-[55px] max-w-[35px] flex items-center justify-center bg-carbon rounded-base">
            <img src="/images/icons/star.svg" alt="star" />
          </button>
        </div>
        <Chanel />
        <Date />
        <Button gray={true} className="!bg-[#242424] !mt-[6px] font-semibold">
          <img src="images/icons/ai.svg" alt="" />
          <span>Mass Ads</span>
        </Button>
      </div>
      <Categories categoriesData={categories} />
      <div className="">
        <div className="rounded-[30px] mx-[-13px] gradient-border mt-0.5">
          <div className="px-[13px] pb-[21px] pt-[21px]">
            <Title label="VIP" className="!m-0" />
            <CardUI className="!p-[11px] mt-[1px] !rounded-[25px] relative">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-[5px]">
                  <div className="bg-[#3B3B3B] rounded-t-[79px] rounded-b-[25px] w-[53px] h-[65px] p-[2px] flex justify-between flex-col items-center">
                    <img
                      className="w-[48px] h-[47px]"
                      src="images/icons/logo.svg"
                      alt="logo"
                    />
                    <span className="text-[7px] text-grayCustom">Diamond</span>
                  </div>
                  <div>
                    <h4 className="text-[17px] font-semibold leading-full mt-[3px]">
                      Cчастье Сейчас
                    </h4>
                    <p className="text-[10px] font-normal text-grayCustom leading-full mt-[1px] mb-[5px]">
                      Психология, Цитаты, Литература.
                    </p>
                    <div className="flex items-center gap-[10px] my-[2px] mt-[-3px]">
                      <div className="flex items-center gap-[5px]">
                        <img src="images/icons/users.svg" alt="" />
                        <span className="text-xs text-grayCustom">17.345</span>
                      </div>
                      <div className="flex gap-[2px]">
                        <img src="images/icons/trade-down.svg" alt="" />
                        <img src="images/icons/trade-success.svg" alt="" />
                        <img src="images/icons/trade-success.svg" alt="" />
                      </div>
                    </div>
                    <div className="flex items-center gap-[10px] mt-[3px]">
                      <div className="flex items-center gap-[5px]">
                        <img src="images/icons/er.svg" alt="er" />
                        <span className="text-xs text-grayCustom">21%</span>
                      </div>
                      <div className="flex items-center gap-[5px]">
                        <img src="images/icons/see.svg" alt="see" />
                        <span className="text-xs text-grayCustom">
                          567, 754, 1145
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="absolute top-[10px] right-[10px] w-[19px] h-[19px]"
                  src="images/icons/star.svg"
                  alt="star icon"
                />
              </div>

              {/* Первая карточка с уникальным ID и данными */}
              <ExpandableAdButtons
                cardId="card1"
                buttonsData={[
                  { format: "1/48", price: "650₽" },
                  { format: "1/72", price: "890₽" },
                  { format: "1/168", price: "1200₽" },
                  { format: "Story", price: "1500₽" },
                ]}
              />
            </CardUI>
          </div>
        </div>

        <div>
          <Title label="Подборка дня" className="!m-[0]" />
          <CardUI className="!p-[11px] !rounded-[25px] mt-[9px] relative">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-[5px]">
                <div className="bg-[#3B3B3B] rounded-t-[79px] rounded-b-[25px] w-[53px] h-[65px] p-[2px] flex justify-between flex-col items-center">
                  <img
                    className="w-[48px] h-[47px]"
                    src="images/icons/logo.svg"
                    alt="logo"
                  />
                  <span className="text-[7px] text-grayCustom">Diamond</span>
                </div>
                <div>
                  <h4 className="text-[17px] font-semibold leading-full mt-[3px]">
                    Тайнология
                  </h4>
                  <p className="text-[10px] font-normal text-grayCustom leading-full mt-[1px] mb-[5px]">
                    Познавательное, История, Политика.
                  </p>
                  <div className="flex items-center gap-[10px] my-[2px] mt-[-3px]">
                    <div className="flex items-center gap-[5px]">
                      <img src="images/icons/users.svg" alt="" />
                      <span className="text-xs text-grayCustom">
                        много цифр 735
                      </span>
                    </div>
                    <div className="flex gap-[2px]">
                      <img src="images/icons/trade-down.svg" alt="" />
                      <img src="images/icons/trade-down.svg" alt="" />
                      <img src="images/icons/trade-success.svg" alt="" />
                    </div>
                  </div>
                  <div className="flex items-center gap-[10px] mt-[3px]">
                    <div className="flex items-center gap-[5px]">
                      <img src="images/icons/er.svg" alt="er" />
                      <span className="text-xs text-grayCustom">13%</span>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <img src="images/icons/see.svg" alt="see" />
                      <span className="text-xs text-grayCustom">
                        231, 313, 420
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[10px] right-[10px] w-[19px] h-[19px]"
                src="images/icons/star.svg"
                alt="star icon"
              />
            </div>

            {/* Вторая карточка с уникальным ID и другими данными */}
            <ExpandableAdButtons
              cardId="card2"
              buttonsData={[
                { format: "1/24", price: "450₽" },
                { format: "1/48", price: "650₽" },
                { format: "1/72", price: "890₽" },
                { format: "Story", price: "1200₽" },
              ]}
            />
          </CardUI>
        </div>
      </div>
    </div>
  );
};

export default Announcement;

// Универсальный компонент с уникальным ID
const ExpandableAdButtons = ({ cardId, buttonsData }) => {
  const [expandedButton, setExpandedButton] = useState(null);
  const [ripple, setRipple] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setExpandedButton(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = (format) => {
    if (expandedButton === format) {
      setExpandedButton(null);
    } else {
      setExpandedButton(format);
    }
  };

  const handleCartClick = (e, format, price) => {
    e.stopPropagation();
    setRipple(true);
    setTimeout(() => setRipple(false), 400);
    console.log(`Card ${cardId}: Added ${format} for ${price} to cart`);
  };

  return (
    <div
      ref={containerRef}
      className="bg-iron p-[1px] flex items-center rounded-2xl mt-[7px] gap-[2px] h-[38px] border border-[#707070]"
    >
      {buttonsData.map((button) => {
        const isExpanded = expandedButton === button.format;

        return (
          <div
            key={`${cardId}-${button.format}`}
            className={`
              flex items-center justify-between  rounded-base bg-charcoal cursor-pointer
              transition-all duration-300 ease-out ml-0
              ${
                isExpanded
                  ? "h-[34.55686569213867px] gap-[15px]"
                  : "w-10 h-[34.55686569213867px] justify-center"
              }
            `}
            onClick={() => handleButtonClick(button.format)}
          >
            {/* Format text */}
            <span
              className={`text-[11px] transition-all w-10 h-[34px] flex items-center justify-center duration-300 ${
                isExpanded ? "ml-[1px]" : ""
              }`}
            >
              {button.format}
            </span>

            {/* Price - slides in */}
            <span
              className={` -ml-2
                text-[11px] font-bold whitespace-nowrap
                transition-all duration-300 ease-out
                ${
                  isExpanded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4 w-0 overflow-hidden"
                }
              `}
            >
              {button.price}
            </span>

            {/* Cart button - appears with spring effect */}
            <div
              className={`
                transition-all duration-400 ease-out
                ${
                  isExpanded
                    ? "opacity-100 scale-100 translate-x-0"
                    : "opacity-0 scale-75 translate-x-2 w-0 overflow-hidden"
                }
              `}
              style={{
                transitionTimingFunction: isExpanded
                  ? "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                  : "ease-out",
              }}
            >
              <motion.button
                onClick={(e) => handleCartClick(e, button.format, button.price)}
                whileTap={{ scale: 0.9 }}
                className="relative overflow-hidden min-w-[34.89236831665039px] min-h-[31.20182991027832px] max-w-[34.89236831665039px] max-h-[31.20182991027832px] shadow-btn-inset !rounded-[13px] bg-blue-600 flex items-center justify-center mr-[1px]"
              >
                <img src="/images/icons/white-cart.svg" alt="" />
                {ripple && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0.6 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute w-16 h-16 bg-blue-400 rounded-full pointer-events-none"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                )}
              </motion.button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
