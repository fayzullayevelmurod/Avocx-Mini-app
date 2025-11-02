import { useState, useRef, useEffect } from "react";

/**
 * InlineIconSelect
 * Matn ichida icon bilan select komponent
 */
export const InlineIconSelect = ({
  options = [],
  selected = null,
  placeholder = "Выберите",
  bgColor = "bg-[#242424]",
  className = "",
  rightIcon = true,
  onChange,
  subText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(selected);
  const selectRef = useRef(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSelect = (option) => {
    setCurrentValue(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  // close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={selectRef}
      className={`relative flex-[1_1_30px] h-[55px] rounded-[15px] ${
        isOpen ? "shadow-option-shadow " : ""
      } ${className}`}
    >
      <button
        onClick={toggleOpen}
        className={`flex w-full duration-300 items-center justify-between gap-[10px] h-full rounded-[15px] pl-[17px] pr-4 ${bgColor} ${
          isOpen ? "rounded-b-none" : ""
        }`}
      >
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="font-bold">{placeholder}</span>
          {currentValue?.icon && (
            <img src={currentValue.icon} alt="icon" className="w-5 h-5" />
          )}
          <span className="overflow-hidden text-ellipsis font-bold">
            {currentValue?.label}{" "}
            <span className="text-[#FFD26F]">{subText}</span>
          </span>
        </div>

        {rightIcon && (
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${isOpen ? "rotate-180" : ""} duration-300`}
          >
            <path
              d="M11.878 0.363023C12.3588 -0.1183 13.138 -0.1183 13.6353 0.346979C13.884 0.58764 14 0.892477 14 1.21336C14 1.5182 13.884 1.82303 13.6353 2.04765L7.88277 7.64703C7.65068 7.87165 7.3357 8 7.00414 8C6.67259 8 6.35761 7.87165 6.12552 7.64703L0.373002 2.04765C-0.124334 1.58237 -0.124334 0.828301 0.373002 0.346979C0.85376 -0.1183 1.6495 -0.1183 2.13025 0.363023L7.00414 5.09602L11.878 0.363023Z"
              fill={`${isOpen ? "#59BFFF" : "#464646"}`}
            />
          </svg>
        )}
      </button>

      {/* Dropdown animatsiya bilan */}
      <div
        className={`
          absolute left-0 top-full  z-50 w-full overflow-hidden transition-all duration-300
          ${bgColor} border-t-0 rounded-b-[20px]
          ${isOpen ? "max-h-60 opacity-100 pb-3" : "max-h-0 opacity-0 py-0"}
        `}
      >
        <ul className="px-[15px] space-y-1">
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              className={`text-15 leading-[200%] flex items-center gap-2 hover:cursor-pointer transition-colors duration-200 ${
                option === currentValue ? "text-[#E679FF]" : "text-grayCustom"
              }`}
            >
              {option.icon && (
                <img src={option.icon} alt="icon" className="w-5 h-5" />
              )}
              {option.label}
              {option.subText && (
                <span className="text-[#FFD26F]">{option.subText}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
