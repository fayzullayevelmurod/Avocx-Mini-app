import { useRef, useState } from "react";
import { Button, InputForm, SelectTime, Sort } from "../components";
import { CustomSelect } from "../components/CustomSelect";
import { Header } from "../layouts";

const categoryOptions2 = [
  "Счастье Сейчас",
  "Счастье Сейчас 2",
  "Счастье Сейчас 3",
];

const options = ["Фикс", "Фикс2", "Фикс3"];

export const CreatingExchange = () => {
  return (
    <div>
      <Header title="Создание объявления" settingBtn={true} />
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
      <h3 className="text-center font-semibold text-15 leading-[12px] mt-[13px] mb-3">
        Выберите нишу вашего канала
      </h3>
      <div className="flex flex-wrap gap-1 mb-3">
        <div className="px-[10px] h-[30px] rounded-[10px] bg-[#283134] flex items-center gap-[7px]">
          <span className="text-xs font-semibold text-[#B8EDBE]">
            Не выбрано
          </span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4999 15.4999L8.5 8.5M8.5 8.5L1.5 1.5M8.5 8.5L15.5 1.5M8.5 8.5L1.5 15.5"
              stroke="#B8EDBE"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <Button type="gray">
        <img
          className="filter invert brightness-0"
          src="/images/icons/plus-btn.svg"
          alt=""
        />
        <span>Выбрать</span>
      </Button>
      <h3 className="text-center font-semibold text-15 leading-[12px] my-3">
        Укажите формат, условия и цену.
      </h3>
      <div className="flex gap-[7px] mb-[7px]">
        <div className="flex-1 relative max-w-[132px]">
          <span className="text-[13px] pl-3 mb-[5px] absolute top-[10px]">
            Формат
          </span>
          <SplitInput />
        </div>
        <div className="flex-1 relative !max-w-[95px]">
          <Sort
            label={null}
            icon={false}
            options={options}
            className="h-[55px]"
          />
        </div>
        <div className="flex-1 min-w-0 relative">
          <span className="text-[13px] pl-[10px] mb-[5px] absolute top-[10px]">
            Цена
          </span>
          <InputForm placeHolder="0" />
        </div>
      </div>
      <Button type="gray">
        <img
          className="filter invert brightness-0"
          src="/images/icons/plus-btn.svg"
          alt=""
        />
        <span>Добавить формат</span>
      </Button>
      <p className="text-[11px] font-normal text-[#B1B1B1] mt-[7px] mb-3">
        <span className="text-base-white">Формат это</span> — то, сколько и как
        будет размещена ваша реклама, на примере «1 / 24»: «1» - это час в топе
        канале без перекрытия, затем «24» часа в ленте канала.
      </p>
      <h3 className="text-center font-semibold text-15 leading-[12px] my-3">
        Дни для рекламных публикаций:
      </h3>
      <SelectTime className="pb-[12px] mb-[7px]" />
      <Button type="gray">
        <img
          className="filter invert brightness-0"
          src="/images/icons/plus-btn.svg"
          alt=""
        />
        <span>Добавить ещё время</span>
      </Button>
      <div className="border-t border-[#242424] pt-3 w-[calc(100%_+_26px)] -ml-[13px] px-[13px] mt-3">
        <Button>
          <img src="/images/icons/plus-btn.svg" alt="" />
          <span>Создать</span>
        </Button>
      </div>
    </div>
  );
};

const SplitInput = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const firstInputRef = useRef(null); // Ref for the first input
  const secondInputRef = useRef(null); // Ref for the second input

  const handleFirstChange = (e) => {
    const val = e.target.value;
    if (/^\d?$/.test(val)) {
      // Allow only one digit or empty
      setFirst(val);
      if (val.length === 1 && secondInputRef.current) {
        secondInputRef.current.focus(); // Move focus to second input after entering one digit
      }
    }
  };

  const handleSecondChange = (e) => {
    const val = e.target.value;
    if (/^\d{0,3}$/.test(val)) {
      // Allow 0-3 digits
      setSecond(val);
      if (val.length === 0 && firstInputRef.current) {
        firstInputRef.current.focus(); // Move focus to first input when second input is emptied
        setFirst(""); // Clear the first input
      }
    }
  };

  return (
    <div className="flex items-center bg-[#242424] rounded-15 h-[55px] pt-[17px]">
      <input
        ref={firstInputRef} // Attach ref to first input
        className="w-[20px] placeholder:text-[#464646] text-base-white pl-3 bg-transparent outline-none text-15 text-center"
        type="text"
        value={first}
        onChange={handleFirstChange}
        placeholder="1"
      />
      <span className="text-white text-sm ml-1">/</span>
      <input
        ref={secondInputRef} // Attach ref to second input
        className="w-[40px] pl-[7px] placeholder:text-[#464646] text-left text-base-white bg-transparent outline-none text-15"
        type="text"
        value={second}
        onChange={handleSecondChange}
        placeholder="24"
      />
    </div>
  );
};
