import { useState } from "react";
import { Button, CardUI, ReklamaBlock, Sort, Tab, Order, Checkbox } from "../components";
import { Header } from "../layouts";

const StoresContent = () => {
  const tabData = [
    {
      id: "1",
      label: "Я покупатель",
      icon: "/images/icons/profile.svg",
      content: <Buyer />,
    },
    {
      id: "3",
      label: "Я продавец",
      icon: "/images/icons/work.svg",
      content: <Seller2 />,
    },
  ];
  return (
    <div>
      <Tab tabData={tabData} defaultTab={true} />
    </div>
  );
};

const Buyer = () => {
  const categoryOptions2 = ["От новых", "От новых 2", "От новых 3"];
  const categoryOptions3 = ["Все", "Все 2", "Все 3"];
  return (
    <>
      <div className="grid grid-cols-2 gap-[9px] mt-[6px]">
        <Sort label="Фильтр" icon={true} options={categoryOptions2} />
        <Sort
          label="Статус"
          icon={true}
          iconPath="/images/icons/flag.svg"
          options={categoryOptions3}
        />
      </div>

      <div className="rounded-[25px] mt-[9px]">
        <div className="pt-[9px] pl-[13px] flex justify-between items-center pr-[10px] bg-[#464646] pb-10 rounded-t-[25px]">
          <div className="flex items-center gap-[4px]">
            <img src="/images/icons/box.svg" alt="" />
            <span className="text-[13px] font-semibold overflow-hidden text-ellipsis line-clamp-2">№2143</span>
          </div>
          <span className="text-[13px] font-semibold overflow-hidden text-ellipsis line-clamp-2">29.06.25 в 12:19</span>
          <span className="text-[13px] text-[#CBDFFF] font-semibold">
            Принят
          </span>
        </div>

        <div className="border border-[#464646] bg-[#272727] p-1 rounded-[30px] flex items-start gap-4 mt-[-34px] pr-[11px]">
          <img
            className="w-[105px] h-[142px] rounded-[26px]"
            src="/images/bag.png"
            alt=""
          />
          <div className="pt-[2px] w-full">
            <h3 className="text-[13px] font-semibold overflow-hidden text-ellipsis line-clamp-2">Capucino Coffe</h3>
            <ul className="mt-1 space-y-[3px]">
              <li className="text-[10px] leading-full text-grayCustom font-semibold flex gap-[2px]">
                <span>Магазин:</span>
                <span className="text-[#CBDFFF]">KillianCoffe</span>
              </li>
              <li className="text-[10px] leading-full text-grayCustom font-semibold flex gap-[2px]">
                <span>Где:</span>
                <span className="text-[#CBDFFF]">
                  Москва, Название улицы, 123
                </span>
              </li>
              <li className="text-[10px] leading-full text-grayCustom font-semibold flex gap-[2px]">
                <div className="flex gap-0.2">
                  <span>Объём:</span>
                  <span className="text-white">400ml</span>
                </div>
                <div className="flex gap-0.2">
                  <span>Вариант:</span>
                  <span className="text-white">С собой</span>
                </div>
              </li>
            </ul>
            <div className="flex gap-1 items-center">
              <h3>245₽</h3>
              <div className="h-[11px] rounded-lg bg-iron px-1 text-[7px] font-semibold text-[#00D79A] flex items-center w-fit">
                Оплачено
              </div>
            </div>
            <div className="flex gap-1 mt-[10px] w-full">
              <div className="min-w-[49px] h-[49px] rounded-[20px] bg-[#303030] flex items-center justify-center">
                <img src="/images/icons/support.svg" alt="" />
              </div>
              <div className="h-[49px] w-full text-sm font-semibold rounded-[20px] bg-[#303030] flex items-center justify-center">
                <img src="/images/icons/clock.svg" alt="" />
                Через <span className="text-[#00D79A]">15м</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[25px] mt-[7px]">
        <div className="pt-[9px] pl-[13px] flex justify-between items-center pr-[10px] bg-[#464646] pb-10 rounded-t-[25px]">
          <div className="flex items-center gap-[4px]">
            <img src="/images/icons/box.svg" alt="" />
            <span className="text-[13px] font-semibold overflow-hidden text-ellipsis line-clamp-2">№2143</span>
          </div>
          <span className="text-[13px] font-semibold overflow-hidden text-ellipsis line-clamp-2">29.06.25 в 12:19</span>
          <span className="text-[13px] text-[#FFD26F] font-semibold">
            Ожидает
          </span>
        </div>

        <div className="border border-[#464646] bg-[#272727] p-1 rounded-[30px] flex items-start gap-4 mt-[-34px]">
          <img
            className="w-[105px] h-[142px] rounded-[26px]"
            src="/images/bag.png"
            alt=""
          />
          <div className="pt-[2px] w-full">
            <h3 className="text-[13px] font-semibold overflow-hidden text-ellipsis line-clamp-2">Capucino Coffe</h3>
            <ul className="mt-1 space-y-[3px]">
              <li className="text-[10px] leading-full text-grayCustom font-semibold flex gap-[2px]">
                <span>Магазин:</span>
                <span className="text-[#CBDFFF]">KillianCoffe</span>
              </li>
              <li className="text-[10px] leading-full text-grayCustom font-semibold flex gap-[2px]">
                <span>Где:</span>
                <span className="text-[#CBDFFF]">
                  Москва, Название улицы, 123
                </span>
              </li>
              <li className="text-[10px] leading-full text-grayCustom font-semibold flex gap-[2px]">
                <div className="flex gap-0.2">
                  <span>Объём:</span>
                  <span className="text-white">400ml</span>
                </div>
                <div className="flex gap-0.2">
                  <span>Вариант:</span>
                  <span className="text-white">С собой</span>
                </div>
              </li>
            </ul>
            <div className="flex gap-1 items-center">
              <h3>245₽</h3>
              <div className="h-[11px] rounded-lg bg-iron px-1 text-[7px] font-semibold text-[#00D79A] flex items-center w-fit">
                Оплачено
              </div>
            </div>
            <div className="flex gap-1 mt-[10px] w-full">
              <div className="min-w-[49px] h-[49px] rounded-[20px] bg-[#303030] flex items-center justify-center">
                <img src="/images/icons/support.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Seller2 = () => {
  const categoryOptions2 = ["От новых", "От новых 2", "От новых 3"];
  const categoryOptions3 = ["Все", "Все 2", "Все 3"];
  return (
    <>
      <div className="grid grid-cols-2 gap-[9px] mt-2">
        <Sort label="Фильтр" icon={true} options={categoryOptions2} />
        <Sort
          label="Статус"
          icon={true}
          iconPath="/images/icons/flag.svg"
          options={categoryOptions3}
        />
      </div>

      <div className="rounded-[25px] mt-[9px]">
        <div className="pt-2 pl-[13px] flex justify-between items-center pr-[10px] bg-[#464646] pb-10 rounded-t-[25px]">
          <div className="flex items-center gap-[4px]">
            <img src="/images/icons/box.svg" alt="" />
            <span className="text-[13px] font-semibold overflow-hidden text-ellipsis line-clamp-2">№2143</span>
          </div>
          <span className="text-[13px] font-semibold overflow-hidden text-ellipsis line-clamp-2">29.06.25 в 12:19</span>
          <span className="text-[13px] text-[#00D79A] font-semibold">
            Отправлен
          </span>
        </div>

        <div className="border border-[#464646] bg-[#272727] rounded-[30px] mt-[-34px] py-3 pl-[19px] pr-[13px]">
          <div className="pt-[2px] w-full">
            <h3 className="text-[13px] font-semibold overflow-hidden text-ellipsis line-clamp-2">
              Рюкзак Tommy Helfiger 25 из натуральной кожи черного цвета
            </h3>
            <ul className="mt-1 flex gap-2">
              <li className="text-[10px] leading-full text-grayCustom font-semibold flex gap-[2px]">
                <span>Магазин:</span>
                <span className="text-[#CBDFFF]">Gucci legend</span>
              </li>
              <li className="text-[10px] leading-full text-grayCustom font-semibold flex gap-[2px]">
                <span>Размер:</span>
                <span className="text-[#CBDFFF]">L</span>
              </li>
              <li className="text-[10px] leading-full text-grayCustom font-semibold flex gap-[2px]">
                <span>Цвет:</span>
                <span className="text-white">Black</span>
              </li>
            </ul>
            <h3 className="text-sm font-bold mb-[10px] mt-1">25.000₽</h3>
            <div className="flex gap-1 mt-[10px] w-full">
              <div className="min-w-[49px] h-[49px] rounded-[20px] bg-[#303030] flex items-center justify-center">
                <img src="/images/icons/support.svg" alt="" />
              </div>
              <div className="flex-1 gap-[7px] h-[49px] w-full text-sm font-semibold rounded-[20px] bg-[#303030] flex items-center justify-center">
                <img src="/images/icons/sms.svg" alt="" />
                <span>Клиент</span>
              </div>
              <div className="flex-1 h-[49px] w-full text-sm font-semibold rounded-[20px] bg-[#303030] flex items-center justify-center">
                <span>Детали</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AdsContent = () => {
  const [check, setCheck] = useState(false);
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  const categoryOptions2 = ["От новых", "От новых 2", "От новых 3"];
  const categoryOptions3 = ["Все", "Все 2", "Все 3"];
  return (
    <div className="mt-[-1px]">
      <div className="grid grid-cols-2 gap-[9px] mt-2">
        <Sort label="Фильтр" icon={true} options={categoryOptions2} />
        <Sort
          label="Статус"
          icon={true}
          iconPath="/images/icons/flag.svg"
          options={categoryOptions3}
        />
      </div>
      <div className="flex justify-between text-xs  px-6 my-[6px] py-[7px] bg-charcoal rounded-[15px]">
        <span>Выбрано: 0</span>
        <div className="flex gap-10 pr-1">
          <span>Оформить</span>
          <span>Удалить</span>
        </div>
      </div>
      <CardUI className="relative !rounded-[30px] !p-[3px] !pr-3">
        <div className="flex gap-3">
          <div className="relative min-w-[105px] max-w-[105px] h-[140px]">
            <button className="absolute flex items-center justify-center bottom-[6px] right-[7px] w-[26px] h-[26px] z-10 bg-[#272727] rounded-[10px]">
              <img src="/images/icons/red-trash.svg" alt="" />
            </button>
            <div className="absolute top-[10px]  left-[10px]">
              <Checkbox checked={check} onChange={() => setCheck(!check)} />
            </div>
            <img
              className="w-full h-full object-cover rounded-[26px]"
              src="/images/bag.png"
              alt=""
            />
          </div>
          <div className="mt-[3px] ml-1">
            <h3 className="text-[13px] font-semibold leading-[112%] mb-[5px] line-clamp-2">
              Рюкзак Tommy Helfiger 25 из натуральной кожи черного цвета
            </h3>
            <ul className="space-y-[2px]">
              <li className="text-[10px] font-semibold leading-full text-grayCustom">
                Магазин: <span className="text-[#CBDFFF]">Gucci legend</span>
              </li>
              <li className="text-[10px] leading-full text-grayCustom flex gap-[14px]">
                <p className="text-grayCustom">
                  Размер: <span className="text-white">L</span>
                </p>{" "}
                <p>
                  Цвет: <span className="text-white">Black</span>
                </p>
              </li>
            </ul>
            <div className="flex gap-[7px] items-center mt-[3px]">
              <h4 className="text-sm font-bold">25.000₽</h4>
              <span className="text-[10px] text-grayCustom">37.500</span>
              <h4 className="text-sm font-bold text-[#E679FF]">– 33%</h4>
            </div>
            <div className="mt-[3px] flex gap-[5px]">
              <div className="text-[#787878] text-[17px] flex gap-[10px] h-[47px] bg-[#303030] 390:min-w-[112px] 390:max-w-[112px] min-w-[100px] max-w-[100px] rounded-[20px] items-center justify-between px-4">
                <button className="text-[28px]" onClick={handleDecrement}>
                  −
                </button>
                <span className="text-[17px] font-semibold text-white">
                  {count}
                </span>
                <button className="text-[28px]" onClick={handleIncrement}>
                  +
                </button>
              </div>
              <Button type="gray">
                <img src="/images/icons/card-pay.svg" alt="" />
                <span>Купить</span>
              </Button>
            </div>
          </div>
        </div>
      </CardUI>
    </div>
  );
};

const Buyer2 = () => {
  const categoryOptions2 = ["От новых", "От новых 2", "От новых 3"];
  const categoryOptions3 = ["Все", "Все 2", "Все 3"];
  return (
    <>
      <div className="grid grid-cols-2 gap-[9px] mt-[6px]">
        <Sort label="Фильтр" icon={true} options={categoryOptions2} />
        <Sort
          label="Статус"
          icon={true}
          iconPath="/images/icons/flag.svg"
          options={categoryOptions3}
        />
      </div>

      <div className="rounded-[25px] mt-[7px]">
        <div className="pt-[9px] pl-[13px] flex justify-between items-center pr-3 bg-[#464646] pb-10 rounded-t-[25px]">
          <div className="flex items-center gap-[4px]">
            <img src="/images/icons/box.svg" alt="" />
            <span className="text-[13px] font-semibold overflow-hidden text-ellipsis line-clamp-2">№2143</span>
          </div>
          <span className="text-[13px] font-semibold overflow-hidden text-ellipsis line-clamp-2">29.06.25 в 12:19</span>
          <span className="text-[13px] text-[#00D79A] font-semibold">
            Завершён
          </span>
        </div>

        <div className="border border-[#464646] bg-[#272727] p-1 pr-3 rounded-[30px] flex items-start gap-4 mt-[-34px]">
          <img
            className="w-[105px] h-[142px] rounded-[26px]"
            src="/images/bag.png"
            alt=""
          />
          <div className="pt-[2px] w-full">
            <h3 className="text-[13px] font-semibold overflow-hidden text-ellipsis line-clamp-2">
              Рюкзак Tommy Helfiger 25 из натуральной кожи черного цвета
            </h3>
            <ul className="mt-1 space-y-[3px]">
              <li className="text-[10px] leading-full text-grayCustom font-semibold flex gap-[2px]">
                <span>Магазин:</span>
                <span className="text-[#CBDFFF]">Gucci legend</span>
              </li>
              <li className="text-[10px] leading-full text-grayCustom font-semibold flex gap-2">
                <div className="flex gap-1">
                  <span>Размер:</span>
                  <span className="text-white">L</span>
                </div>
                <div className="flex gap-1">
                  <span>Цвет:</span>
                  <span className="text-white">Black</span>
                </div>
              </li>
            </ul>

            <h3 className="text-15 font-bold mt-0.5 mb-[6px]">25.000₽</h3>
            <Button type="gray">
              <img src="/images/icons/plus-chat.svg" alt="" />
              <span>Поделится отзывом</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
const ServicesContent = () => {
  const tabData = [
    {
      id: "1",
      label: "Я покупатель",
      icon: "/images/icons/profile.svg",
      content: <Buyer2 />,
    },
    {
      id: "3",
      label: "Я продавец",
      icon: "/images/icons/work.svg",
      content: <Seller2 />,
    },
  ];
  return (
    <>
      <Tab tabData={tabData} defaultTab={true} />
    </>
  );
};

export const CartProducts = () => {
  const tabData = [
    {
      id: "1",
      label: "Корзина",
      icon: "/images/icons/basket.svg",
      content: <AdsContent />,
    },
    {
      id: "2",
      label: "Заказы",
      icon: "/images/icons/ticket.svg",
      content: <StoresContent />,
    },
    {
      id: "3",
      label: "История",
      icon: "/images/icons/document.svg",
      content: <ServicesContent />,
    },
  ];

  return (
    <div>
      <Tab tabData={tabData} />
    </div>
  );
};
