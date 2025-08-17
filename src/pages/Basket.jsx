import Tab from "../components/Tab";
import CardUI from "../components/CardUI";
import Button from "../components/Button";
import { useState } from "react";
import { Header } from "../components/Header";
import TabTwo from "../components/TabTwo";
import Sort from "../components/Sort";
import { ReklamaBlock } from "../components/ReklamaBlock";
import { Order } from "../components/Order";

const StoresContent = () => {
  const tabData = [
    { id: "1", label: "Я покупатель", content: <Buyer /> },
    { id: "3", label: "Я продавец", content: <Seller /> },
  ];
  return (
    <div>
      <Tab tabData={tabData} />
    </div>
  );
};

const Buyer = () => {
  const categoryOptions = ["Товары", "Товары 2", "Товары 3"];
  const categoryOptions2 = ["От новых", "От новых 2", "От новых 3"];
  const categoryOptions3 = ["Все", "Все 2", "Все 3"];
  return (
    <>
      <Sort
        label="Категория"
        icon={true}
        iconPath="/images/icons/category.svg"
        options={categoryOptions}
      />
      <div className="grid grid-cols-2 gap-[9px] mt-[6px]">
        <Sort label="Сортировка" icon={true} options={categoryOptions2} />
        <Sort
          label="Статус"
          icon={true}
          iconPath="/images/icons/flagg.svg"
          options={categoryOptions3}
        />
      </div>
      <div className="flex justify-between text-xs px-6 mb-[17px] mt-[17px]">
        <span>Выбрано: 0</span>
        <div className="flex gap-10 pr-1">
          <span>Оформить</span>
          <span>Удалить</span>
        </div>
      </div>

      <ReklamaBlock
        reklamaBg="bg-iron"
        rightText="Ждём ответ"
        rightTextColor="text-[#FFD26F]"
      />
    </>
  );
};

const Seller = () => {
  const categoryOptions = ["Товары", "Товары 2", "Товары 3"];
  const categoryOptions2 = ["От новых", "От новых 2", "От новых 3"];
  const categoryOptions3 = ["Все", "Все 2", "Все 3"];
  return (
    <>
      <Sort
        label="Категория"
        icon={true}
        iconPath="/images/icons/category.svg"
        options={categoryOptions}
      />
      <div className="grid grid-cols-2 gap-[9px] mt-[6px]">
        <Sort label="Сортировка" icon={true} options={categoryOptions2} />
        <Sort
          label="Статус"
          icon={true}
          iconPath="/images/icons/flagg.svg"
          options={categoryOptions3}
        />
      </div>
      <div className="flex justify-between text-xs px-6 mb-[17px] mt-[17px]">
        <span>Выбрано: 0</span>
        <div className="flex gap-10 pr-1">
          <span>Оформить</span>
          <span>Удалить</span>
        </div>
      </div>

      <Order
        reklamaBg="bg-iron"
        rightText="23:59:59"
        rightTextColor="text-[#FFD26F]"
      />
    </>
  );
};
const Seller2 = () => {
  const categoryOptions = ["Реклама", "Товары"];
  return (
    <>
      <Sort
        label="Категория"
        icon={true}
        iconPath="/images/icons/category.svg"
        options={categoryOptions}
      />
    </>
  );
};
const AdsContent = () => {
  const [check, setCheck] = useState(true);
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleChecked = () => {
    setCheck(!check);
  };
  const categoryOptions = ["Реклама", "Товары"];
  const categoryOptions2 = ["От новых", "От новых 2", "От новых 3"];
  const categoryOptions3 = ["Все", "Все 2", "Все 3"];

  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };
  return (
    <div className="mt-[-1px]">
      <Sort
        label="Категория"
        icon={true}
        iconPath="/images/icons/category.svg"
        options={categoryOptions}
        onChange={handleCategoryChange} // 🔑
      />
      <div className="grid grid-cols-2 gap-[9px] mt-[6px]">
        <Sort label="Сортировка" icon={true} options={categoryOptions2} />
        <Sort
          label="Статус"
          icon={true}
          iconPath="/images/icons/flagg.svg"
          options={categoryOptions3}
        />
      </div>
      <div className="flex justify-between text-xs px-6 mb-[15px] mt-[14px]">
        <span>Выбрано: 0</span>
        <div className="flex gap-10 pr-1">
          <span>Оформить</span>
          <span>Удалить</span>
        </div>
      </div>

      {/* Реклама cardUI */}
      {selectedCategory === "Реклама" && (
        <CardUI className="!pt-2 !pl-3 relative !rounded-[30px] !pb-[11px]">
          <button className="absolute top-[15px] right-[16px] w-[15px]">
            <img src="/images/icons/trash.svg" alt="" />
          </button>
          <div className="flex gap-[10px] items-center">
            <button
              onClick={handleChecked}
              className="w-[30px] h-[30px] flex items-center justify-center border-2 border-dark-gray rounded-[13px]"
            >
              {check && <img src="images/icons/check.svg" alt="checkbox" />}
            </button>
            <img
              className="w-8 h-8 rounded-base object-cover"
              src="/images/icons/logo.svg"
              alt=""
            />
            <h3 className="font-semibold text-15">Счастье Сейчас</h3>
          </div>
          <div className="mt-[9px] flex gap-1">
            <div>
              <div className="h-[36px] flex-col w-[74px] flex items-center justify-center bg-[#303030] rounded-base">
                <span className="text-center text-[10px] block ">Формат</span>
                <span className="text-[13px]">1 / 48</span>
              </div>
            </div>

            <div>
              <div className="h-[36px] flex-col w-[56px] flex items-center justify-center bg-[#303030] rounded-base">
                <span className="text-center text-[10px] block ">Время </span>
                <span className="text-[13px]">10:21</span>
              </div>
            </div>

            <div>
              <div className="h-[36px] flex-col w-[108px] flex items-center justify-center bg-[#303030] rounded-base">
                <span className="text-center text-[10px] block ">Дата </span>
                <span className="text-[13px]">01.07.2025</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="h-[36px] flex-col flex items-center justify-center bg-[#303030] rounded-base">
                <span className="text-center text-[10px] block ">
                  Рекламный пост{" "}
                </span>
                <span className="text-[13px]">№17</span>
              </div>
            </div>
          </div>
          <div className="flex gap-[9px] mt-[9px]">
            <Button gray={true} className="!bg-[#1B1B1B]">
              <span>650₽</span>
              <div className="flex items-center gap-2">
                <img src="/images/icons/card.svg" alt="" />
                <span>Оформить</span>
              </div>
            </Button>
          </div>
        </CardUI>
      )}

      {/* Товары cardUI */}
      {selectedCategory === "Товары" && (
        <CardUI className="relative !rounded-[30px] !pt-[5px] !pl-3">
          <button className="absolute top-[15px] right-[16px] w-[15px]">
            <img src="/images/icons/trash.svg" alt="" />
          </button>
          <div className="flex gap-[6px]">
            <button
              onClick={handleChecked}
              className="w-8 h-8 mt-1 flex items-center justify-center border-2 border-dark-gray rounded-[11px]"
            >
              {check && <img src="images/icons/check.svg" alt="checkbox" />}
            </button>
            <img
              className="w-[78px] h-[78px] rounded-base object-cover"
              src="/images/product-img-2.png"
              alt=""
            />
            <div className="mt-[3px] ml-1">
              <h3 className="text-15 font-bold leading-[112%] mb-[9px]">
                Футболка «RED» <br />{" "}
                <span className="font-normal">Hugo BOSS</span>
              </h3>
              <ul className="space-y-[1px]">
                <li className="text-[10px] leading-full text-grayCustom">
                  Магазин: <span className="text-primary">SHLZ.STORE</span>
                </li>
                <li className="text-[10px] leading-full text-grayCustom flex gap-4">
                  <span>Размер: L</span> <span>Цвет: Black</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-[3px] mt-[5px]">
            <div className="text-[#787878] text-[17px] flex gap-[10px] min-w-[119px] h-[47px] bg-[#1B1B1B] rounded-[20px] items-center justify-between px-4">
              <button className="text-[28px]" onClick={handleDecrement}>
                −
              </button>
              <span className="text-[17px]">{count}</span>
              <button className="text-[28px]" onClick={handleIncrement}>
                +
              </button>
            </div>
            <Button className="!bg-[#1B1B1B] !h-[47px]" gray={true}>
              <span>2500₽</span>
              <div className="flex items-center gap-2">
                <img src="/images/icons/card.svg" alt="" />
                <span>Оформить</span>
              </div>
            </Button>
          </div>
        </CardUI>
      )}
    </div>
  );
};

const ServicesContent = () => {
  const tabData = [
    { id: "1", label: "Я покупатель", content: <Buyer /> },
    { id: "3", label: "Я продавец", content: <Seller2 /> },
  ];
  return (
    <>
      <Tab tabData={tabData} />
    </>
  );
};

const Basket = () => {
  const tabData = [
    { id: "1", label: "Корзина", content: <AdsContent /> },
    { id: "2", label: "Заказы", content: <StoresContent /> },
    { id: "3", label: "История", content: <ServicesContent /> },
  ];

  return (
    <div>
      <Header />
      <TabTwo tabData={tabData} />
    </div>
  );
};

export default Basket;
