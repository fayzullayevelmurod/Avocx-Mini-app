import { useRef, useState } from "react";
import {
  Button,
  CardUI,
  CustomRadio,
  InputForm,
  Search,
  SelectTime,
} from "../components";
import { Header } from "../layouts";
import { CustomSelect } from "../components/CustomSelect";

export const ChannelSettings = () => {
  const categories = [
    "Авто и мото",
    "Бизнес и финансы",
    "Видеоигры",
    "Животные",
    "Дети и родители",
    "Другое",
    "Еда и кулинария",
    "Здоровье и медицина",
    "Шоубизнес",
    "Lorem 2",
    "Lorem 3",
    "Lorem 4",
    "Lorem 5",
    "Lorem 6",
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const options = [
    { value: "sell", label: "Фикс" },
    { value: "buy", label: "Фикс2" },
    { value: "rent", label: "Фикс3" },
  ];
  return (
    <div>
      <CardUI className="!pt-[21px] rounded-[30px] !pl-[14px] !pr-4 ">
        <h3 className="text-center font-semibold mb-[15px]">
          Выберите в какой категории ваш канал
        </h3>
        <Search className="mb-[15px]" />
        <CustomRadio
          options={categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
        <h3 className="text-15 font-semibold text-center mt-4 mb-[18px] leading-[103%] max-w-[360px] mx-auto">
          Укажите формат, условия и цену за рекламное размещение в вашем канале.
        </h3>
        <div className="flex gap-[2px] mb-[7px]">
          <div className="flex-1 relative">
            <span className="text-[13px] pl-3 mb-[5px] absolute top-[10px]">
              Формат
            </span>
            <SplitInput />
          </div>
          <div className="flex-1 relative">
            <span className="text-[13px] pl-[14px] mb-[5px] absolute top-[10px]">
              Измерение
            </span>
            <CustomSelect
              options={options}
              placeholder="Фикс"
              rightIcon={true}
              className="h-[55px] "
            />
          </div>
          <div className="flex-1 min-w-[135px] relative">
            <span className="text-[13px] pl-[10px] mb-[5px] absolute top-[10px]">
              Цена
            </span>
            <InputForm placeHolder="0" />
          </div>
        </div>
        <Button type="gray">
          <img src="/images/icons/plus.svg" alt="" />
          <span>Добавить ещё формат</span>
        </Button>
        <p className="font-normal text-grayCustom text-[11px] mt-[6px] leading-[123%] mb-[13px]">
          <span className="text-white font-semibold">Формат это</span> — то,
          сколько и как будет размещена ваша реклама, на примере «
          <span className="font-semibold">1</span> /{" "}
          <span className="font-semibold">24</span>»: «{" "}
          <span className="font-semibold">1</span> » - это час в топе канале без
          перекрытия, затем « <span className="font-semibold">24</span> » часа в
          ленте канала.
        </p>
        <h3 className="text-center  font-semibold text-15 mb-3">
          Дни для рекламных публикаций:
        </h3>
        <div className="space-y-[7px]">
          <SelectTime />
          <Button type="gray">
            <img src="/images/icons/plus.svg" alt="" />
            <span>Добавить ещё время</span>
          </Button>
          <Button>Создать</Button>
        </div>
      </CardUI>
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
    <div className="flex items-center bg-dark rounded-[20px] h-[55px] pt-[17px]">
      <input
        ref={firstInputRef} // Attach ref to first input
        className="w-[20px] placeholder:text-[#464646] text-base-white pl-3 bg-transparent outline-none text-base text-center"
        type="text"
        value={first}
        onChange={handleFirstChange}
        placeholder="1"
      />
      <span className="text-white text-sm ml-1">/</span>
      <input
        ref={secondInputRef} // Attach ref to second input
        className="w-[40px] pl-[7px] placeholder:text-[#464646] text-left text-base-white bg-transparent outline-none text-base"
        type="text"
        value={second}
        onChange={handleSecondChange}
        placeholder="24"
      />
    </div>
  );
};
