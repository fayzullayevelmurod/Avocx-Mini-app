import { useState, useRef, useEffect } from "react";

export const SelectAvg = ({ options = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("не выбран");
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.scrollHeight);
    }
  }, [isOpen, options]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className="relative rounded-15" style={{ zIndex: isOpen ? 9999 : 1 }}>
      {/* Asosiy select header */}
      <button
        className={`flex items-center justify-between w-full bg-[#242424] h-[50px] rounded-15 px-[15px] pr-[18px] duration-300 ${
          isOpen ? "rounded-b-none" : ""
        }`}
        onClick={toggleDropdown}
      >
        {/* Chap qism */}
        <div className="font-semibold text-[15px] flex gap-0.5 items-center w-[68%]">
          Пост:{" "}
          <span
            className={`text-ellipsis overflow-hidden whitespace-nowrap text-15 ${
              selectedOption === "не выбран"
                ? "text-[#464646]"
                : "text-[#E8E8E8]"
            }`}
          >
            {selectedOption}
          </span>
        </div>

        {/* O'ng qism */}
        <div className="flex gap-[19px] items-center">
          <div className="flex gap-1 items-center">
            <span className="text-[#A3A3A3] text-xs font-semibold leading-[15px]">
              AVG:
            </span>
            <img
              src="/images/icons/diagnostika.svg"
              alt=""
              width={20}
              height={15}
            />
            <span className="text-[#E8E8E8] text-xs font-semibold leading-[15px]">
              0₽
            </span>
          </div>

          {/* Pastga ochiladigan ikonka */}
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`duration-200 ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M11.878 0.363023C12.3588 -0.1183 13.138 -0.1183 13.6353 0.346979C13.884 0.58764 14 0.892477 14 1.21336C14 1.5182 13.884 1.82303 13.6353 2.04765L7.88277 7.64703C7.65068 7.87165 7.3357 8 7.00414 8C6.67259 8 6.35761 7.87165 6.12552 7.64703L0.373002 2.04765C-0.124334 1.58237 -0.124334 0.828301 0.373002 0.346979C0.85376 -0.1183 1.6495 -0.1183 2.13025 0.363023L7.00414 5.09602L11.878 0.363023Z"
              fill={isOpen ? "#59BFFF" : "#464646"}
            />
          </svg>
        </div>
      </button>

      {/* Ochiladigan ro‘yxat */}
      <ul
        ref={dropdownRef}
        className={`absolute left-0 top-full bg-carbon w-full rounded-b-15 p-[15px] pt-1 -mt-[6px] duration-300  overflow-hidden ${
          isOpen
            ? "max-h-[230px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        {/* Search */}
        <div className="mb-2 relative">
          <input
            type="text"
            placeholder="Поиск"
            className="w-full text-xs text-base-white placeholder:text-[#707070] font-semibold h-[46px] rounded-[10px] bg-[#303030] px-8  outline-none"
          />
          <img className="absolute top-1/2 left-[14px] -translate-y-1/2" src="/images/icons/search.svg" alt="" />
        </div>

        {/* Options */}
        {options.map((option, idx) => (
          <li
            key={idx}
            className={`flex items-center h-[41px] justify-between py-[11px] border-b border-[#303030] last:border-none text-[13px] leading-[200%] cursor-pointer ${
              selectedOption === option ? "text-primary" : "text-grayCustom"
            }`}
            onClick={() => handleOptionClick(option)}
          >
            <div className="flex items-center gap-2 radio-container">
              <input
                type="radio"
                id={`avg-${idx}`}
                name="avg-select"
                checked={selectedOption === option}
                onChange={() => handleOptionClick(option)}
                className="accent-[#59BFFF]"
              />
              <label htmlFor={`avg-${idx}`} className="cursor-pointer media-small-text text-[#E8E8E8] text-[15px] whitespace-nowrap overflow-hidden text-ellipsis">
                {option}
              </label>
            </div>

            <div className="flex items-center gap-1">
              <img
                src="/images/icons/diagnostika.svg"
                alt="avg"
                width={16}
                height={12}
              />
              <span className="text-xs text-[#E8E8E8] font-semibold">0₽</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
