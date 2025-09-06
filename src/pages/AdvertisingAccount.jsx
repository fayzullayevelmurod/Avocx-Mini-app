import { useState } from "react";
import {
  Button,
  CardUI,
  ChanelSelect,
  Checkbox,
  Sort,
  Tab,
} from "../components";
import { Header } from "../layouts";
import { DoubleTab } from "../components/DoubleTab";

export const AdvertisingAccount = () => {
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
      content: <Seller />,
    },
  ];
  return (
    <div>
      <Header title="Рекламный кабинет" />
      <div className="space-y-[7px]">
        <Button type="gray" className="border border-[#303030] bg-charcoal">
          <img
            className="filter brightness-0 invert"
            src="/images/icons/document.svg"
            alt=""
          />
          <span>Мои рекламные посты</span>
        </Button>
        <Tab tabData={tabData} defaultTab={true} />
      </div>
    </div>
  );
};

const Buyer = () => {
  const tabData = [
    {
      id: "1",
      label: "Корзина",
      icon: "/images/icons/basket.svg",
      content: <Cart />,
    },
    {
      id: "2",
      label: "Заказы",
      icon: "/images/icons/ticket.svg",
      content: <Order />,
    },
    {
      id: "3",
      label: "История",
      icon: "/images/icons/document.svg",
      content: <History />,
    },
  ];
  return (
    <>
      <Tab tabData={tabData} />
    </>
  );
};
// cart component
const Cart = () => {
  const [check, setCheck] = useState(false);
  const categoryOptions2 = ["От новых", "От новых 2", "От новых 3"];
  const categoryOptions3 = ["Все", "Все 2", "Все 3"];
  return (
    <div>
      <ChanelSelect />
      <div className="grid grid-cols-2 gap-[9px] mt-[7px]">
        <Sort label="Фильтр" icon={true} options={categoryOptions2} />
        <Sort
          label="Статус"
          icon={true}
          iconPath="/images/icons/flag.svg"
          options={categoryOptions3}
        />
      </div>
      <div className="flex justify-between text-xs  px-6 my-[6px] py-[7px] bg-charcoal rounded-[15px] text-grayCustom">
        <span>Выбрано: 0</span>
        <div className="flex gap-10 pr-1">
          <span>Оформить</span>
          <span>Удалить</span>
        </div>
      </div>
      <CardUI className="!pt-4 !pl-[19px] relative !rounded-[30px] !pb-[11px]">
        <button className="absolute top-[17px] right-[16px] ">
          <img src="/images/icons/red-trash.svg" alt="" height={16} />
        </button>
        <div className="flex gap-[10px] items-center">
          <Checkbox checked={check} onChange={() => setCheck(!check)} />
          <img
            className="w-[30px] h-[30px] rounded-base object-cover"
            src="/images/icons/logo.svg"
            alt=""
          />
          <h3 className="font-semibold text-15">Счастье Сейчас</h3>
        </div>
        <div className="mt-[6px] flex gap-1 ml-[-7px]">
          <div className="h-[50px] flex-col w-[75px] flex items-center justify-center bg-[#303030] rounded-[20px]">
            <span className="text-center text-xs block text-grayCustom">
              Формат
            </span>
            <span className="font-semibold">1 / 48</span>
          </div>
          <div className="h-[50px] flex-col w-[68px] flex items-center justify-center bg-[#303030] rounded-[20px]">
            <span className="text-center text-xs block text-grayCustom">
              Время{" "}
            </span>
            <span className="font-semibold">10:21</span>
          </div>
          <div className="h-[50px] flex-col w-[96px] flex items-center justify-center bg-[#303030] rounded-[20px]">
            <span className="text-center text-xs block text-grayCustom">
              Дата
            </span>
            <span className="font-semibold">01.07.25</span>
          </div>
          <div className="h-[50px] flex-col flex-1 flex items-center justify-center bg-primary rounded-[20px]">
            <span className="text-center text-xs block">Пост</span>
            <span className="font-semibold">Выбрать</span>
          </div>
        </div>
        <div className="flex gap-[9px] mt-[7px] ml-[-7px]">
          <Button type="gray" className="gap-[7px]">
            <span className="text-sm font-bold">650₽</span>
            <img src="/images/icons/card-pay.svg" alt="" />
            <span className="text-sm font-bold">Оформить</span>
          </Button>
        </div>
      </CardUI>
    </div>
  );
};

// order
const Order = () => {
  const categoryOptions2 = ["От новых", "От новых 2", "От новых 3"];
  const categoryOptions3 = ["Все", "Все 2", "Все 3"];
  return (
    <div>
      <ChanelSelect />
      <div className="grid grid-cols-2 gap-[9px] mt-[7px]">
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
            <img src="/images/icons/bullhorn.svg" alt="" />
            <span className="text-[13px] font-semibold">№2143</span>
          </div>
          <span className="text-[13px] font-semibold">29.06.25 в 12:19</span>
          <span className="text-[13px] text-[#FFD26F] font-semibold">
            Ждём ответ
          </span>
        </div>

        <div className="border border-[#464646] bg-[#272727] rounded-[30px] flex items-start gap-4 mt-[-34px] p-[14px]">
          <div className="w-full">
            <ul className="mt-1 space-y-[3px]">
              <li className="text-sm  leading-full text-grayCustom font-semibold flex gap-[2px]">
                <span>Что:</span>
                <span className="text-white">Название канала 1</span>
              </li>
              <li className="text-sm  leading-full text-grayCustom font-semibold flex gap-[2px]">
                <span>Где:</span>
                <span className="text-white">Название канала 2</span>
              </li>
            </ul>
            <div className="flex gap-1 mt-[7px] mb-[10px]">
              <div className="flex items-center gap-1">
                <img src="/images/icons/card-pay-blue.svg" alt="" />
                <span className="text-xs font-semibold">0₽</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/images/icons/add-user.svg" alt="" />
                <span className="text-xs font-semibold">0</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/images/icons/heartbeat.svg" alt="" />
                <span className="text-xs font-semibold">0₽</span>
              </div>
            </div>
            <div className="mt-[6px] flex gap-1 ml-[-7px]">
              <div className="h-[50px] flex-col w-[75px] flex items-center justify-center bg-[#303030] rounded-[20px]">
                <span className="text-center text-xs block text-grayCustom">
                  Формат
                </span>
                <span className="font-semibold">1 / 48</span>
              </div>
              <div className="h-[50px] flex-col w-[68px] flex items-center justify-center bg-[#303030] rounded-[20px]">
                <span className="text-center text-xs block text-grayCustom">
                  Время{" "}
                </span>
                <span className="font-semibold">10:21</span>
              </div>
              <div className="h-[50px] flex-col w-[96px] flex items-center justify-center bg-[#303030] rounded-[20px]">
                <span className="text-center text-xs block text-grayCustom">
                  Дата
                </span>
                <span className="font-semibold">01.07.25</span>
              </div>
              <div className="h-[50px] flex-col flex-1 flex items-center justify-center bg-primary rounded-[20px]">
                <span className="text-center text-xs block">Пост</span>
                <span className="font-semibold">№17</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const History = () => {
  return <div></div>;
};

// seller component
const Seller = () => {
  const tabData = [
    {
      id: "2",
      label: "Заказы",
      icon: "/images/icons/ticket.svg",
      content: <Order2 />,
    },
    {
      id: "3",
      label: "История",
      icon: "/images/icons/document.svg",
      content: <History2 />,
    },
  ];
  return (
    <>
      <DoubleTab tabData={tabData} />
    </>
  );
};

const Order2 = () => {
  return (
    <div className="space-y-[7px]">
      <ChanelSelect />
      <div className="rounded-[25px] mt-[9px]">
        <div className="pt-[9px] pl-[13px] flex justify-between items-center pr-[13px] bg-[#464646] pb-10 rounded-t-[25px]">
          <div className="flex items-center gap-[4px]">
            <img src="/images/icons/bullhorn.svg" alt="" />
            <span className="text-[13px] font-semibold">№2143</span>
          </div>
          <span className="text-[13px] font-semibold">29.06.25 в 12:19</span>
          <span className="text-[13px] text-[#FFD26F] font-semibold pr-0.5">
            23:59:59
          </span>
        </div>

        <div className="border border-[#464646] bg-[#272727] rounded-[30px] mt-[-34px] p-[14px]">
          <div className="flex items-center gap-[10px]">
            <img src="/images/icons/logo.svg" alt="" width={30} height={30} />
            <div>
              <h3 className="text-15 font-semibold">Счастье Сейчас</h3>
              <span className="text-[#00D79A] font-semibold text-[13px]">
                650₽
              </span>
            </div>
          </div>
          <div className="mt-[6px] flex gap-1 ml-[-2px]">
            <div className="h-[50px] flex-col w-[75px] flex items-center justify-center bg-[#303030] rounded-[20px]">
              <span className="text-center text-xs block text-grayCustom">
                Формат
              </span>
              <span className="font-semibold">1 / 48</span>
            </div>
            <div className="h-[50px] flex-col w-[68px] flex items-center justify-center bg-[#303030] rounded-[20px]">
              <span className="text-center text-xs block text-grayCustom">
                Время{" "}
              </span>
              <span className="font-semibold">10:21</span>
            </div>
            <div className="h-[50px] flex-col w-[96px] flex items-center justify-center bg-[#303030] rounded-[20px]">
              <span className="text-center text-xs block text-grayCustom">
                Дата
              </span>
              <span className="font-semibold">01.07.25</span>
            </div>
            <div className="h-[50px] flex-col flex-1 flex items-center justify-center bg-primary rounded-[20px]">
              <span className="text-center text-xs block">Пост</span>
              <span className="font-semibold">№17</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const History2 = () => {
  return <ChanelSelect />;
};
