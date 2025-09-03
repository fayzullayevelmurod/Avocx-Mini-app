import { useState } from "react";

export const List = ({
  label = "Список",
  icon = false,
  iconPath,
  options = [],
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0] || "");

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div
      className={`relative flex-[1_1_30px] rounded-[20px] ${
        isOpen ? "shadow-option-shadow" : ""
      }`}
    >
      <button
        className={`flex-1 justify-between flex w-full items-center text-15 gap-[10px] rounded-[20px] h-[55px] pr-4 bg-carbon pl-[13px] border ${
          isOpen ? "border-iron rounded-b-none " : "border-transparent"
        }`}
        onClick={toggleDropdown}
      >
        <div className="text-left">
          <span className="text-grayCustom leading-full">{label}</span>
          <div className="flex gap-1 items-center mt-1">
            {icon && (
              <img src={iconPath || "/images/icons/list.svg"} alt="filter" />
            )}
            <span className="overflow-hidden whitespace-nowrap translate-y-[3px] ml-[6px] -mt-[7px]">
              {selectedOption}
            </span>
          </div>
        </div>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="M10.5 0C16.01 0 20.5 4.48 20.5 10C20.5 15.51 16.01 20 10.5 20C4.98 20 0.5 15.51 0.5 10C0.5 4.48 4.98 0 10.5 0ZM14.5 8.01953C14.2 7.72978 13.7304 7.73042 13.4404 8.03027L10.5 10.9805L7.55957 8.03027C7.26964 7.73043 6.79 7.72979 6.5 8.01953C6.2 8.31953 6.2 8.79008 6.5 9.08008L9.96973 12.5703C10.1097 12.7103 10.3 12.79 10.5 12.79C10.7 12.79 10.8903 12.7103 11.0303 12.5703L14.5 9.08008C14.65 8.94008 14.7197 8.74957 14.7197 8.55957C14.7196 8.35973 14.6499 8.16942 14.5 8.01953Z"
            fill={isOpen ? "#E679FF" : "#707070"}
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-full z-50 w-full bg-carbon pt-[2px] p-[15px] rounded-b-[20px] pb-4 -mt-[6px] border border-iron border-t-0">
          {options.map((option, idx) => (
            <li
              key={idx}
              className={`text-[13px] leading-[200%] ${
                option === selectedOption ? "text-primary" : "text-grayCustom"
              } hover:cursor-pointer`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
