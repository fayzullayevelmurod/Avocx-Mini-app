import { useRef, useState } from "react";
import { Button, Date, Sort, Tab } from "../components";
import { Header } from "../layouts";

const categoryOptions2 = [
  "Счастье Сейчас",
  "Счастье Сейчас 2",
  "Счастье Сейчас 3",
];

export const CreatingAdvertisingPost = () => {
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

  const [check, setCheck] = useState(false);
  const [ratio, setRatio] = useState({ left: "", right: "" });
  const rightInputRef = useRef(null);
  const [time, setTime] = useState({ hours: "", minutes: "" });
  const minutesRef = useRef(null);
  const [selectedLanguage2, setSelectedLanguage2] = useState(
    languageOptions2[0]
  );
  const [active, setActive] = useState("Фикс"); // default

  const buttons = ["Фикс", "CPM", "ПДП"];
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

  const tabData = [
    {
      id: "1",
      label: "На заявки",
      icon: "/images/icons/block.svg",
      content: "",
    },
    {
      id: "2",
      label: "Открытая",
      icon: "/images/icons/open-lock.svg",
      content: "",
    },
  ];

  return (
    <div>
      <Header
        search={true}
        settingBtn={true}
        action="Таблица"
        actionIcon="/images/icons/table.svg"
      />
      <h3 className="text-center font-bold text-15 leading-[18px] mb-[11px]">
        Выберите канал
      </h3>
      <Sort
        label="Канал"
        icon={true}
        iconPath="/images/icons/stars.svg"
        options={categoryOptions2}
        className="item-width h-[54px]"
      />
      <h3 className="text-center font-bold text-15 leading-[16px] mb-3 mt-[13px]">
        Дата, время выхода и формат
      </h3>
      <Date />
      <div className="bg-[#242424] rounded-15 p-[10px] flex justify-between items-center h-[50px] pl-[21px] mt-[3px]">
        <div className="flex gap-[7px] items-center">
          <img src="/images/icons/clock.svg" alt="" />
          <div className="text-grayCustom font-semibold flex items-center">
            <input
              className="w-5 text-center text-15 font-semibold placeholder:text-[#464646] bg-transparent border-none outline-none"
              type="text"
              name="hours"
              placeholder="09"
              value={time.hours}
              onChange={handleTimeChange}
              maxLength={2}
            />
            <span className="text-white">/</span>
            <input
              ref={minutesRef}
              className="w-6 text-center text-15 font-semibold placeholder:text-[#464646] bg-transparent border-none outline-none"
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
              className="py-[7px] rounded-lg bg-[#283134] text-xs font-semibold text-[#B8EDBE] h-[30px] flex items-center justify-center w-[54px]"
              onClick={() => handleTimePreset(t)}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
      <h3 className="text-center font-bold text-15 leading-[16px] mb-3 mt-[13px]">
        Место размещения
      </h3>
      <div className="space-y-[7px]">
        <div className="w-full flex items-center gap-1 h-[50px] py-2 px-5 bg-[#242424] rounded-15 placeholder:text-iron text-sm text-white disabled:opacity-100 disabled:text-white">
          <img src="/images/icons/build.svg" alt="" />
          <input
            type="text"
            className="w-full h-full bg-transparent border-none outline-none placeholder:text-iron"
            placeholder="Название площадки"
          />
        </div>
        <div className="w-full flex items-center gap-1 h-[50px] py-2 pl-5 pr-[11px] bg-charcoal rounded-15 placeholder:text-iron text-sm text-white disabled:opacity-100 disabled:text-white">
          <img src="/images/icons/manager.svg" alt="" />
          <input
            type="text"
            className="w-full h-full bg-transparent border-none outline-none placeholder:text-iron"
            placeholder="Админ"
          />
          <Button className="!min-w-[129px] max-w-[129px] !h-[30px] !text-xs !rounded-lg">
            Выбрать
          </Button>
        </div>
        <div className="w-full flex items-center justify-between gap-1 h-[50px] py-2 pl-5 pr-[11px] bg-charcoal rounded-15 placeholder:text-iron text-sm text-white disabled:opacity-100 disabled:text-white">
          <span className="font-semibold">Категория:</span>
          <Button className="!min-w-[129px] max-w-[129px] !h-[30px] !text-xs !rounded-lg">
            Выбрать
          </Button>
        </div>
        <h3 className="text-center font-bold text-15 leading-[16px] mt-[11px] mb-[7px]">
          Выберите рекламный пост
        </h3>
        <p className="text-[#A3A3A3] max-w-[280px] mx-auto text-xs font-medium text-center mb-3">
          Если их нет, то добавьте через бот: меню - креатив - добавить.
        </p>
        <div className="space-y-[7px]">
          <div className="flex justify-between items-center bg-charcoal p-[10px] rounded-15 pl-5 h-[50px]">
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
                ? "bg-[#52E063] text-[#242424]"
                : "bg-[#303030] text-[#A3A3A3]"
            }
          `}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
          <Tab tabData={tabData} />
        </div>
      </div>
      <div className="mt-4">
        <Button> <img src="/images/icons/paper-plus.svg" alt="" /> Создать пост</Button>
      </div>
    </div>
  );
};
