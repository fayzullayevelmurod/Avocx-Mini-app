import { useState } from "react";

const Sort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Text 1");

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative flex-[1_1_30px]">
      <button
        className={`flex-1 justify-between flex w-full items-center text-15 gap-[10px] rounded-[20px] h-[55px] pr-4 bg-carbon pl-[13px] border ${
          isOpen ? "border-iron rounded-b-none" : "border-transparent"
        }`}
        onClick={toggleDropdown}
      >
        <div className="text-left">
          <div className="flex gap-1 items-center">
            <img src="/images/icons/filter.svg" alt="filter" />
            <span className="text-grayCustom leading-full">Сортировка</span>
          </div>
          <span className="overflow-hidden mt-[1px] whitespace-nowrap w-[94px] ml-[2px] translate-y-[3px]">
            {selectedOption}
          </span>
        </div>
        <svg
          className="w-5 h-5 transition-transform duration-300 "
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.018 9.22749L10.0532 12.1923L7.08834 9.22749M18.9476 10.2158C18.9476 5.30348 14.9654 1.32129 10.0532 1.32129C5.14088 1.32129 1.15869 5.30348 1.15869 10.2158C1.15869 15.128 5.14088 19.1102 10.0532 19.1102C14.9654 19.1102 18.9476 15.128 18.9476 10.2158Z"
            stroke="#E8E8E8"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute left-0 top-full z-50 w-full shadow-sort bg-carbon pt-[2px] p-[15px] rounded-b-base pb-4 -mt-[6px] border border-iron border-t-0">
          <li
            className="text-[13px] leading-[200%] text-primary hover:cursor-pointer"
            onClick={() => handleOptionClick("Подборка")}
          >
            Подборка
          </li>
          <li
            className="text-[13px] leading-[200%] hover:cursor-pointer"
            onClick={() => handleOptionClick("По популярности")}
          >
            По популярности
          </li>
          <li
            className="text-[13px] leading-[200%] hover:cursor-pointer"
            onClick={() => handleOptionClick("Горящее")}
          >
            Горящее
          </li>
          <li
            className="text-[13px] leading-[200%] hover:cursor-pointer"
            onClick={() => handleOptionClick("Больше охват")}
          >
            Больше охват
          </li>
          <li
            className="text-[13px] leading-[200%] hover:cursor-pointer"
            onClick={() => handleOptionClick("Меньше охват")}
          >
            Меньше охват
          </li>
          <li
            className="text-[13px] leading-[200%] hover:cursor-pointer"
            onClick={() => handleOptionClick("Больше ER")}
          >
            Больше ER
          </li>
          <li
            className="text-[13px] leading-[200%] hover:cursor-pointer"
            onClick={() => handleOptionClick("Меньше ER")}
          >
            Меньше ER
          </li>
          <li
            className="text-[13px] leading-[200%] hover:cursor-pointer"
            onClick={() => handleOptionClick("Больше аудитории")}
          >
            Больше аудитории
          </li>
          <li
            className="text-[13px] leading-[200%] hover:cursor-pointer"
            onClick={() => handleOptionClick("Меньше аудитории")}
          >
            Меньше аудитории
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sort;
