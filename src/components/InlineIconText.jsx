import { useState, useRef, useEffect } from "react";

/**
 * InlineIconSelect
 * Matn ichida icon bilan select komponent
 */
export const InlineIconSelect = ({
  options = [],
  selected = null,
  placeholder = "Выберите",
  bgColor = "bg-[#1B1B1B]",
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
      className={`relative flex-[1_1_30px] h-[55px] rounded-[20px] ${
        isOpen ? "shadow-option-shadow " : ""
      } ${className}`}
    >
      <button
        onClick={toggleOpen}
        className={`flex w-full duration-300 items-center justify-between gap-[10px] h-full rounded-[20px] px-[13px] pr-4 ${bgColor} border ${
          isOpen ? "border-iron rounded-b-none border-b-0" : "border-[#272727]"
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
        )}
      </button>

      {/* Dropdown animatsiya bilan */}
      <div
        className={`
          absolute left-0 top-full  z-50 w-full overflow-hidden transition-all duration-300
          ${bgColor} border border-iron border-t-0 rounded-b-[20px]
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
