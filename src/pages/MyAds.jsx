import { useState } from "react";
import {
  Button,
  CardUI,
  ChanelSelect,
  Date,
  ExpandableAdButtons,
  InputForm,
  ReklamaBlock,
  Tab,
} from "../components";
import { Header } from "../layouts";
import { CustomSelect } from "../components/CustomSelect";

export const MyAds = () => {
  const tabData = [
    {
      id: "1",
      label: "Закуп",
      icon: "/images/icons/fire.svg",
      content: <Purchase />,
    },
    {
      id: "2",
      label: "История",
      icon: "/images/icons/ticket.svg",
      content: <Order />,
    },
    {
      id: "3",
      label: "Биржа",
      icon: "/images/icons/stock.svg",
      content: <Stock />,
    },
  ];
  return (
    <div>
      <Header title="Мои объявления" />
      <Tab tabData={tabData} />
    </div>
  );
};

const Purchase = () => {
  // state
  const [time, setTime] = useState({ hours: "", minutes: "" });
  const [ratio, setRatio] = useState({ left: "", right: "" });
  const [check, setCheck] = useState(true);
  // handle inputs
  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    if (name === "hours") {
      if (value >= 0 && value <= 23)
        setTime((prev) => ({ ...prev, hours: value }));
    } else if (name === "minutes") {
      if (value >= 0 && value <= 59)
        setTime((prev) => ({ ...prev, minutes: value }));
    }
  };

  const handleRatioChange = (e) => {
    const { name, value } = e.target;
    if (name === "left") {
      if (value >= 1 && value <= 10)
        setRatio((prev) => ({ ...prev, left: value }));
    } else if (name === "right") {
      if (value >= 1 && value <= 100)
        setRatio((prev) => ({ ...prev, right: value }));
    }
  };

  // preset button click
  const handleTimePreset = (preset) => {
    const [h, m] = preset.split(":");
    setTime({ hours: h, minutes: m });
  };

  const handleRatioPreset = (preset) => {
    const [l, r] = preset.split("/");
    setRatio({ left: l, right: r });
  };
  const options = [
    { value: "sell", label: "Категория:" },
    { value: "buy", label: "Категория:2" },
    { value: "rent", label: "Категория:3" },
  ];

  const options2 = [
    { value: "sell", label: "Пост: (№последний созданный..) " },
    { value: "buy", label: "Пост: (№последний созданный..) 2" },
    { value: "rent", label: "Пост: (№последний созданный..) 3" },
  ];

  const options3 = [
    { value: "sell", label: "На заявки " },
    { value: "buy", label: "На заявки 2" },
    { value: "rent", label: "На заявки 3" },
  ];
  const handleChecked = () => {
    setCheck(!check);
  };
  return (
    <div className="space-y-[7px]">
      <ChanelSelect />
      <Date />

      {/* TIME */}
      <CardUI className="pt-[9px] rounded-[30px]">
        <h3 className="text-center mb-[9px]">Время выхода и формат</h3>
        <div className="bg-[#1A1A1A] rounded-[20px] p-[10px] flex justify-between items-center h-[50px] pl-[21px]">
          <div className="flex gap-[7px] items-center">
            <img src="/images/icons/time.svg" alt="" />
            <div className="text-grayCustom font-semibold flex gap-1 items-center">
              <input
                className="text-grayCustom font-semibold bg-transparent border-none outline-none w-4 text-center placeholder:text-grayCustom"
                type="number"
                name="hours"
                placeholder="00"
                min={0}
                max={23}
                value={time.hours}
                onChange={handleTimeChange}
              />
              <span className="text-white">:</span>
              <input
                className="text-grayCustom font-semibold bg-transparent border-none outline-none w-[25px] text-center placeholder:text-grayCustom"
                type="number"
                name="minutes"
                placeholder="00"
                min={0}
                max={59}
                value={time.minutes}
                onChange={handleTimeChange}
              />
            </div>
          </div>
          <div className="flex gap-1">
            {["9:00", "10:00", "13:00", "17:00"].map((t) => (
              <div
                key={t}
                className="w-[54px] h-[30px] rounded-xl bg-[#303030] flex items-center justify-center text-xs font-bold cursor-pointer"
                onClick={() => handleTimePreset(t)}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* RATIO */}
        <div className="mt-[7px] bg-[#1A1A1A] rounded-[20px] p-[10px] flex justify-between items-center h-[50px] pl-[21px]">
          <div className="flex gap-[7px] items-center">
            <img src="/images/icons/timer-clock.svg" alt="" />
            <div className="text-grayCustom font-semibold flex gap-1 items-center">
              <input
                className="text-grayCustom font-semibold bg-transparent border-none outline-none w-[10px] text-center placeholder:text-grayCustom"
                type="number"
                name="left"
                placeholder="1"
                min={1}
                max={10}
                value={ratio.left}
                onChange={handleRatioChange}
              />
              <span className="text-white">/</span>
              <input
                className="text-grayCustom font-semibold bg-transparent border-none outline-none w-[25px] text-center placeholder:text-grayCustom"
                type="number"
                name="right"
                placeholder="24"
                min={1}
                max={100}
                value={ratio.right}
                onChange={handleRatioChange}
              />
            </div>
          </div>
          <div className="flex gap-1">
            {["1/24", "1/48", "2/48", "1/72"].map((r) => (
              <div
                key={r}
                className="w-[54px] h-[30px] rounded-xl bg-[#303030] flex items-center justify-center text-xs font-bold cursor-pointer"
                onClick={() => handleRatioPreset(r)}
              >
                {r}
              </div>
            ))}
          </div>
        </div>
        <h3 className="text-center font-semibold text-15 my-[15px]">
          Место размещения
        </h3>
        <div className="space-y-[7px]">
          <div className="w-full flex items-center gap-1 h-[50px] py-2 px-5 bg-dark rounded-[20px] placeholder:text-iron text-sm text-white disabled:opacity-100 disabled:text-white">
            <img src="/images/icons/build.svg" alt="" />
            <input
              type="text"
              className="w-full h-full bg-transparent border-none outline-none placeholder:text-iron"
              placeholder="Название, ссылка или @имя"
            />
          </div>
          <div className="w-full flex items-center gap-1 h-[50px] py-2 pl-5 pr-[11px] bg-dark rounded-[20px] placeholder:text-iron text-sm text-white disabled:opacity-100 disabled:text-white">
            <img src="/images/icons/manager.svg" alt="" />
            <input
              type="text"
              className="w-full h-full bg-transparent border-none outline-none placeholder:text-iron"
              placeholder="Менеджер"
            />
            <Button
              type="primary"
              className="!min-w-[129px] max-w-[129px] !h-[30px] !text-xs"
            >
              Выбрать
            </Button>
          </div>
          <CustomSelect
            options={options}
            rightIcon={true}
            selected={true}
            placeholder="Категория:"
          />
        </div>
        <h3 className="text-center text-15 font-semibold mt-3">
          Выберите креативный пост
        </h3>
        <p className="text-center text-xs text-grayCustom max-w-[280px] mx-auto mt-[7px] mb-2">
          Если их нет, то добавьте через бот: меню - креатив - добавить.
        </p>
        <CustomSelect
          options={options2}
          rightIcon={true}
          selected={true}
          placeholder="Пост: (№последний созданный..)"
        />
        <div className="text-xs text-grayCustom flex items-center gap-1 justify-center mt-[3px] mb-3">
          <span>AVG за подписчика с поста:</span>
          <img src="/images/icons/heartbeat.svg" alt="" />
          <span className="text-white">0₽</span>
        </div>
        <CustomSelect
          options={options3}
          rightIcon={true}
          selected={true}
          placeholder="Тип ссылки: На заявки"
        />
        <h3 className="text-center text-15 font-semibold mt-3">
          Цена за размещение и тип
        </h3>
        <p className="text-center text-xs text-grayCustom max-w-[280px] mx-auto mt-[7px] mb-2">
          Если оплата по факту, указывайте - CPM* CPM - Цена за тысячу показаов.
        </p>
        <div className="flex justify-between items-center bg-dark p-[10px] rounded-[20px] pl-5 h-[50px]">
          <div className="flex gap-1 items-center">
            <img src="/images/icons/price.svg" alt="" />
            <input
              className="outline-none bg-transparent w-[30px] h-full border-none w-[50px]"
              type="text"
              placeholder="Цена"
            />
          </div>
          <div className="flex gap-1">
            <div className="w-[54px] h-[30px] flex items-center justify-center bg-primary rounded-xl font-bold text-xs">
              Фикс
            </div>
            <div className="w-[54px] h-[30px] flex items-center justify-center bg-[#303030] rounded-xl font-bold text-xs">
              CPM
            </div>
            <div className="w-[54px] h-[30px] flex items-center justify-center bg-[#303030] rounded-xl font-bold text-xs">
              За пдп
            </div>
          </div>
        </div>
        <div className="flex gap-[7px] mt-[6px] mb-[7px]">
          <div className="flex justify-between w-full items-center bg-dark p-[10px] rounded-[20px] pl-5 h-[50px]">
            <div className="flex gap-[7px] items-center">
              <button
                onClick={handleChecked}
                className=" bg-[#272727] w-5 h-5 flex items-center justify-center border-2 border-dark-gray rounded-[6px]"
              >
                {check && <img src="images/icons/check.svg" alt="checkbox" />}
              </button>
              <span>Маркировка</span>
            </div>
          </div>
          <div className="min-w-[50px] h-[50px] bg-[#1A1A1A] rounded-[20px] flex items-center justify-center">
            <img src="/images/icons/key.svg" alt="" />
          </div>
        </div>
        <Button>Создать пост</Button>
      </CardUI>
    </div>
  );
};

const Order = () => {
  return (
    <div className="rounded-[25px] mt-[9px]">
      <div className="pt-[9px] pl-[14px] flex justify-between items-center pr-3 bg-[#464646] pb-10 rounded-t-[25px]">
        <div className="flex items-center gap-[4px]">
          <img src="/images/icons/bullhorn.svg" alt="" />
          <span className="text-[13px] font-semibold">
            t.me/+d3KAbCdEicxZGYy
          </span>
        </div>
        <div className="flex items-center gap-[7px] ">
          <span className="text-[13px] text-white font-semibold">
            На заявки
          </span>
          <img src="/images/icons/block.svg" alt="" />
        </div>
      </div>
      <div className="border border-[#464646] bg-[#272727] rounded-[30px] flex items-start gap-4 mt-[-34px] p-[14px]">
        <div className="w-full">
          <div className="flex justify-between items-start">
            <div>
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
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-iron rounded-[15px]">
              <img src="/images/icons/graph.svg" alt="" />
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
  );
};

const Stock = () => {
  return (
    <div>
      <ChanelSelect />
      <CardUI className="!p-[11px] !rounded-[25px] relative mt-2">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-[5px]">
            <div className="bg-[#3B3B3B] rounded-t-[79px] rounded-b-[25px] w-[53px] h-[70px] p-[2px] flex justify-between flex-col items-center">
              <img
                className="w-[50px] h-[50px]"
                src="images/icons/logo.svg"
                alt="logo"
              />
              <div className="flex gap-[1px] justify-center items-center bg-[#FF9462] min-h-[10px] max-h-[10px] rounded-[5px] px-1 mt-[-9px]">
                <img src="/images/icons/trophy.svg" alt="" />
                <span className="text-[8px] font-semibold leading-full">
                  189
                </span>
              </div>
              <span className="text-[7px] text-grayCustom">Diamond</span>
            </div>
            <div>
              <h4 className="text-[17px] font-semibold leading-full mt-[3px]">
                Cчастье Сейчас
              </h4>
              <p className="text-[10px] font-normal text-grayCustom leading-full mt-[2px] mb-[6px]">
                Психология, Цитаты, Литература.
              </p>
              <div className="flex items-center gap-[10px] my-[2px] mt-[-3px]">
                <div className="flex items-center gap-[5px]">
                  <img src="images/icons/user.svg" alt="" />
                  <span className="text-xs text-grayCustom">17.345</span>
                </div>
                <div className="flex gap-[2px]">
                  <img src="images/icons/plus-2.svg" alt="" />
                  <img src="images/icons/plus-2.svg" alt="" />
                  <img src="images/icons/minus.svg" alt="" />
                </div>
              </div>
              <div className="flex items-center gap-[10px] mt-[3px]">
                <div className="flex items-center gap-[5px]">
                  <img src="images/icons/er.svg" alt="er" />
                  <span className="text-xs text-grayCustom">21%</span>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src="images/icons/eye.svg" alt="see" />
                  <span className="text-xs text-grayCustom">
                    567, 754, 1145
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span className="text-xs font-semibold absolute top-[13px] right-[26px] text-[#00D79A]">
            Активно
          </span>
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
        <div className="flex justify-between mt-2 px-4">
          <div className="flex items-center gap-1">
            <img
              src="/images/icons/red-trash.svg"
              alt=""
              width={14}
              height={16}
            />
            <span className="font-semibold">Del</span>
          </div>
          <div className="flex gap-[17px]">
            <div className="flex items-center gap-1">
              <img src="/images/icons/pause.svg" alt="" />
              <span className="font-semibold">Stop</span>
            </div>
            <div className="flex items-center gap-1">
              <img src="/images/icons/edit.svg" alt="" />
              <span className="font-semibold">Edit</span>
            </div>
          </div>
        </div>
      </CardUI>
        <p className="max-w-[341px] mx-auto text-grayCustom font-semibold my-[22px] text-center leading-[125%]">
        Объявление для этого канала ещё не создано, чтобы получать рекламные
        заказы, создайте его.
      </p>
      <Button type="gray">
        <img src="/images/icons/plus.svg" alt="" />
        <span>Создать объявление</span>
      </Button>
    </div>
  );
};
