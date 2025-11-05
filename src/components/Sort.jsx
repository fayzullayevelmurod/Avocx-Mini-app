import { useState, useRef, useEffect } from "react";

export const Sort = ({
  label = "Сортировка",
  icon = false,
  iconPath,
  options = [],
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0] || "");
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
    <div
      className="relative flex-[1_1_30px] rounded-15 z-50"
      style={{ zIndex: isOpen ? 9999 : 1 }}
    >
      {/* Shadow layer */}
      {isOpen && (
        <div
          className="absolute left-0 top-0 w-full rounded-15 shadow-option-shadow pointer-events-none -z-10"
          style={{
            height: `calc(65px + ${dropdownHeight}px)`,
            transition: "height 0.3s ease",
          }}
        />
      )}

      <button
        className={`flex-1 justify-between duration-300 flex w-full items-center text-15 gap-[10px] rounded-15 h-[55px] pr-4 bg-carbon pl-[16px] relative z-10 ${
          isOpen ? "rounded-b-none" : ""
        } ${className}`}
        onClick={toggleDropdown}
      >
        <div className="text-left">
          <div className="flex gap-1 items-center">
            {icon && (
              <img
                src={iconPath || "/images/icons/filter.svg"}
                alt="filter"
                width={14}
              />
            )}
            <span className="text-grayCustom leading-full font-semibold text-xs">
              {label}
            </span>
          </div>
          <span
            className={`overflow-hidden mt-[1px] whitespace-nowrap text-ellipsis font-semibold translate-y-[3px] ${
              className === "item-width" ? "max-w-[125px]" : ""
            }`}
          >
            {selectedOption}
          </span>
        </div>

        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M11.878 0.363023C12.3588 -0.1183 13.138 -0.1183 13.6353 0.346979C13.884 0.58764 14 0.892477 14 1.21336C14 1.5182 13.884 1.82303 13.6353 2.04765L7.88277 7.64703C7.65068 7.87165 7.3357 8 7.00414 8C6.67259 8 6.35761 7.87165 6.12552 7.64703L0.373002 2.04765C-0.124334 1.58237 -0.124334 0.828301 0.373002 0.346979C0.85376 -0.1183 1.6495 -0.1183 2.13025 0.363023L7.00414 5.09602L11.878 0.363023Z"
            fill={`${isOpen ? "#59BFFF" : "#464646"}`}
          />
        </svg>
      </button>

      <ul
        ref={dropdownRef} // ✅ endi to‘g‘ri
        className={`absolute left-0 top-full duration-300 w-full bg-carbon pt-[2px] p-[15px] rounded-b-15 pb-4 -mt-[6px] z-10 ${
          isOpen
            ? "max-h-60 opacity-100 pb-3 visible"
            : "max-h-0 opacity-0 py-0 invisible"
        }`}
      >
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
    </div>
  );
};
