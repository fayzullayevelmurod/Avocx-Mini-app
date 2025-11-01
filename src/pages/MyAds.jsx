import { useRef, useState } from "react";
import {
  Button,
  CardUI,
  ChanelSelect,
  Checkbox,
  Date,
  ExpandableAdButtons,
  InlineIconSelect,
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
      <Purchase />
      <Order />
      <Stock />
    </div>
  );
};

const languageOptions2 = [
  {
    label: "На заявки",
    icon: "/images/icons/block.svg",
  },
  {
    label: "Открытая",
    icon: "/images/icons/unlock.svg",
  },
];
const Purchase = () => {
  const [check, setCheck] = useState(false);
  const [ratio, setRatio] = useState({ left: "", right: "" });
  const rightInputRef = useRef(null);
  const [time, setTime] = useState({ hours: "", minutes: "" });
  const minutesRef = useRef(null);
  const [selectedLanguage2, setSelectedLanguage2] = useState(
    languageOptions2[0]
  );
  const [active, setActive] = useState("Фикс"); // default

  const buttons = ["Фикс", "CPM", "За пдп"];
  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    const onlyNums = value.replace(/\D/g, "");

    if (name === "hours") {
      if (onlyNums.length > 2) return;

      let formattedValue = onlyNums;

      // Если введено одно число больше 2, добавляем 0 перед ним
      if (formattedValue.length === 1 && parseInt(formattedValue) > 2) {
        formattedValue = "0" + formattedValue;
      }

      // Если введено два числа
      if (formattedValue.length === 2) {
        const firstDigit = parseInt(formattedValue[0]);
        const secondDigit = parseInt(formattedValue[1]);

        // Проверяем корректность часов
        if (firstDigit > 2 || (firstDigit === 2 && secondDigit > 3)) {
          // Если часы больше 23, устанавливаем максимальное значение
          formattedValue = "23";
        }

        // После ввода двух цифр переходим к минутам
        minutesRef.current?.focus();
      }

      setTime((prev) => ({ ...prev, hours: formattedValue }));
    }

    if (name === "minutes") {
      if (onlyNums.length > 2) return;

      let formattedValue = onlyNums;

      // Если введено одно число больше 5, добавляем 0 перед ним
      if (formattedValue.length === 1 && parseInt(formattedValue) > 5) {
        formattedValue = "0" + formattedValue;
      }

      // Если введено два числа
      if (formattedValue.length === 2) {
        const firstDigit = parseInt(formattedValue[0]);
        const secondDigit = parseInt(formattedValue[1]);

        // Проверяем корректность минут
        if (firstDigit > 5 || (firstDigit === 5 && secondDigit > 9)) {
          // Если минуты больше 59, устанавливаем максимальное значение
          formattedValue = "59";
        }
      }

      setTime((prev) => ({ ...prev, minutes: formattedValue }));
    }
  };
  const handleTimePreset = (preset) => {
    const [h, m] = preset.split(":");
    setTime({ hours: h, minutes: m });
  };
  const handleRatioChange = (e) => {
    const { name, value } = e.target;
    const onlyNums = value.replace(/\D/g, ""); // Оставляем только цифры

    if (name === "left") {
      if (onlyNums.length <= 2) {
        const numValue = parseInt(onlyNums) || "";
        if (numValue === "" || (numValue >= 1 && numValue <= 10)) {
          setRatio((prev) => ({ ...prev, left: onlyNums }));
          // Переход фокуса на right, если введено 2 цифры или значение от 1 до 10
          if (onlyNums.length === 2 || (numValue >= 1 && numValue <= 10)) {
            rightInputRef.current.focus();
          }
        }
      }
    } else if (name === "right") {
      if (onlyNums.length <= 3) {
        const numValue = parseInt(onlyNums) || "";
        if (numValue === "" || (numValue >= 1 && numValue <= 100)) {
          setRatio((prev) => ({ ...prev, right: onlyNums }));
        }
      }
    }
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
                className="w-5 text-center bg-transparent border-none outline-none"
                type="text"
                name="hours"
                placeholder="09"
                value={time.hours}
                onChange={handleTimeChange}
                maxLength={2}
              />
              <span className="text-white">:</span>
              <input
                ref={minutesRef}
                className="w-6 text-center bg-transparent border-none outline-none"
                type="text"
                name="minutes"
                placeholder="00"
                value={time.minutes}
                onChange={handleTimeChange}
                maxLength={2}
              />
            </div>
          </div>
          <div className="flex gap-1">
            {["9:00", "10:00", "13:00", "17:00"].map((t) => (
              <div
                key={t}
                className="w-11 h-[30px] rounded-xl bg-[#303030] flex items-center justify-center text-xs font-bold cursor-pointer"
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
                className="text-grayCustom font-semibold bg-transparent border-none outline-none w-[20px] text-center placeholder:text-grayCustom"
                type="text"
                name="left"
                placeholder="1"
                value={ratio.left}
                onChange={handleRatioChange}
                maxLength={2} // Ограничиваем до 2 цифр
              />
              <span className="text-white">/</span>
              <input
                className="text-grayCustom font-semibold bg-transparent border-none outline-none w-[30px] text-center placeholder:text-grayCustom"
                type="text"
                name="right"
                placeholder="24"
                value={ratio.right}
                onChange={handleRatioChange}
                ref={rightInputRef} // Привязываем реф ко второму input
                maxLength={3} // Ограничиваем до 3 цифр
              />
            </div>
          </div>
          <div className="flex gap-1">
            {["1/24", "1/48", "2/48", "1/72"].map((r) => (
              <div
                key={r}
                className="w-11 h-[30px] rounded-xl bg-[#303030] flex items-center justify-center text-xs font-bold cursor-pointer"
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
        <InlineIconSelect
          options={languageOptions2}
          selected={selectedLanguage2}
          placeholder="Тип ссылки:"
          onChange={(val) => setSelectedLanguage2(val)}
          rightIcon={true}
          className="!h-[49px]"
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
              className="outline-none bg-transparent  h-full border-none w-[50px] placeholder:text-iron"
              type="text"
              placeholder="Цена"
            />
          </div>
          <div className="flex gap-1">
            {buttons.map((btn) => (
              <button
                key={btn}
                onClick={() => setActive(btn)}
                className={`w-[54px] h-[30px] flex items-center justify-center rounded-xl font-bold text-xs transition-colors
            ${
              active === btn
                ? "bg-primary text-white"
                : "bg-[#303030] text-gray-300"
            }
          `}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-[7px] mt-[6px] mb-[7px]">
          <div className="flex justify-between w-full items-center bg-dark p-[10px] rounded-[20px] pl-5 h-[50px]">
            <div className="flex gap-[7px] items-center">
              <Checkbox checked={check} onChange={() => setCheck(!check)} />
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
  const [isPaused, setIsPaused] = useState(true);

  const handleToggle = () => {
    setIsPaused((prev) => !prev);
  };
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
            <button
              onClick={handleToggle}
              className="flex items-center gap-1 px-3 py-1 rounded-md"
            >
              <img
                src={
                  isPaused
                    ? "/images/icons/pause.svg"
                    : "/images/icons/play.svg"
                }
                alt={isPaused ? "pause" : "play"}
                className="w-4 h-4"
              />
              <span className="font-semibold">
                {isPaused ? "Stop" : "Start"}
              </span>
            </button>
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
