// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Tab from "../components/Tab";
import CardUI from "../components/CardUI";
import Button from "../components/Button";
import Title from "../components/Title";
import Sort from "../components/Sort";
import { Chanel } from "../components/Chanel";
import SearchTitle from "../components/SearchTitle";
import { ReklamaBlock } from "../components/ReklamaBlock";
import { useEffect, useRef, useState } from "react";

const MyOrders = () => {
  const tabData = [
    { id: "1", label: "Я покупатель", content: <StoresContent /> },
    { id: "2", label: "Я продавец", content: <AdsContent /> },
  ];
  return (
    <div className="">
      <SearchTitle label="Рекламный кабинет" className="mb-5" />
      <Tab tabData={tabData} />
    </div>
  );
};

export default MyOrders;

const StoresContent = () => {
  const categoryOption = ["Заказы", "Заказы 2", "Заказы 3"];
  const categoryOption2 = ["От новых", "От новых 2", "От новых 3"];
  const categoryOption3 = ["Все", "Все 2", "Все 3"];
  return (
    <div className="space-y-[6px]">
      <Sort
        label="Категория"
        icon={true}
        iconPath="/images/icons/category.svg"
        options={categoryOption}
      />
      <Chanel />
      <div className="grid grid-cols-2 gap-[9px]">
        <Sort label="Сортировка" icon={true} options={categoryOption2} />
        <Sort
          label="Статус"
          icon={true}
          iconPath="/images/icons/flagg.svg"
          options={categoryOption3}
        />
      </div>
      <Title label="Мои заказы" className="!mb-[17px] !mt-4" />
      <ReklamaBlock className="" />
    </div>
  );
};

const AdsContent = () => {
  const categoryOption = ["Заказы", "Заказы 2", "Заказы 3"];
  return (
    <div className="space-y-[6px]">
      <Sort
        label="Категория"
        icon={true}
        iconPath="/images/icons/category.svg"
        options={categoryOption}
      />
      <Chanel />
      <Button gray={true} className="!bg-[#232323]">
        <img src="/images/icons/plus-green.svg" alt="" />
        <span>Создать объявление</span>
      </Button>
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
            { format: "2/168", price: "1200₽" },
          ]}
        />
        <div className="flex items-center justify-between mt-2 px-4">
          <button className="flex items-center gap-1">
            <img src="/images/icons/trash.svg" alt="" width={14} />
            <span className="font-semibold">Del</span>
          </button>
          <div className="flex items-center gap-[17px]">
            <button className="flex items-center gap-[5px]">
              <img src="/images/icons/pause.svg" alt="" />
              <span>Stop</span>
            </button>
            <button className="flex items-center gap-[5px]">
              <img src="/images/icons/pen.svg" alt="" width={17} />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </CardUI>
    </div>
  );
};

const ServicesContent = () => (
  <div>
    <p className="text-center text-[17px] leading-full mb-5">
      Переведите TON на указанный адресс, как только блокчейн выполнит перевод,
      ваша заявка подтвердится.
    </p>
    <CardUI className="!p-3 space-y-5 !rounded-[20px] !py-[11px] !px-3">
      <div className="flex items-start justify-between">
        <p className="text-[17px] font-semibold leading-full">
          Заявка создана: <span className="text-primary">№21425</span> <br />
          <span className="font-normal">Когда: 12:17, 29.06.2025</span>
        </p>
        <span className="text-green text-xl leading-full">9:45</span>
      </div>
      <div className="space-y-2">
        <h4 className="text-15 font-semibold leading-full">
          Скопируйте количество TON
        </h4>
        <div className="h-11 w-full bg-[#303030] py-3 rounded-base text-15 font-semibold flex justify-between items-center px-[14px]">
          <span>2.944507361268403</span>
          <button>
            <img src="/images/icons/copy.svg" alt="" />
          </button>
        </div>
        <h4 className="text-15 font-semibold leading-full">
          Переведите на этот адрес.
        </h4>
        <span className="text-xs leading-full text-[#757575]">
          Tag/Memo указывать не нужно.
        </span>
        <div className="h-11 w-full bg-[#303030] py-3 rounded-base text-15 font-semibold flex justify-between items-center px-[14px]">
          <div className="flex items-center gap-2">
            <span>TON</span>
            <div className="w-[1px] h-5 bg-iron"></div>
            <span>UQB_vgViOrTwh...-K7YtByd0u</span>
          </div>
          <button>
            <img src="/images/icons/copy.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <Button>Я перевёл</Button>
        <Button gray={true}>Отменить заявку</Button>
      </div>
    </CardUI>
  </div>
);

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
