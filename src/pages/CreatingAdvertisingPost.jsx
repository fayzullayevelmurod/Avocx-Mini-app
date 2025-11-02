import { useRef, useState } from "react";
import { Button, Date, Sort, Tab } from "../components";
import { Footer, Header } from "../layouts";

const categoryOptions2 = [
  "Счастье Сейчас",
  "Счастье Сейчас 2",
  "Счастье Сейчас 3",
];

export const CreatingAdvertisingPost = () => {
  const [time, setTime] = useState({ hours: "", minutes: "" });
  const minutesRef = useRef(null);
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
    <>
      <div className="pb-[160px]">
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
                className="py-[7px] rounded-lg bg-[#283134] text-xs font-semibold text-[#59BFFF] h-[30px] flex items-center justify-center w-[54px]"
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
          <div className="flex items-center justify-between h-[50px] bg-[#242424] rounded-15 pr-[18px] pl-[15px]">
            <span className="font-semibold">Пост: №...</span>
            <div className="flex gap-[19px] items-center">
              <div className="flex gap-1 items-center">
                <span className="text-[#A3A3A3] text-xs font-semibold leading-[15px]">
                  Ср. по посту:
                </span>
                <img src="/images/icons/diagnostika.svg" alt="" />
                <span className="text-[#E8E8E8] text-xs font-semibold leading-[15px]">
                  0₽
                </span>
              </div>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.878 0.363023C12.3588 -0.1183 13.138 -0.1183 13.6353 0.346979C13.884 0.58764 14 0.892477 14 1.21336C14 1.5182 13.884 1.82303 13.6353 2.04765L7.88277 7.64703C7.65068 7.87165 7.3357 8 7.00414 8C6.67259 8 6.35761 7.87165 6.12552 7.64703L0.373002 2.04765C-0.124334 1.58237 -0.124334 0.828301 0.373002 0.346979C0.85376 -0.1183 1.6495 -0.1183 2.13025 0.363023L7.00414 5.09602L11.878 0.363023Z"
                  fill="#464646"
                />
              </svg>
            </div>
          </div>
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
                ? "bg-[#59BFFF] text-[#242424]"
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
      </div>
      <Footer btnIcon="/images/icons/paper-plus.svg" btn="Создать пост" />
    </>
  );
};
