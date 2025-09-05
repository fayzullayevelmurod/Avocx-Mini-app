import { useEffect, useRef, useState } from "react";

export const CustomSelect = ({
  options = [],
  selected = null,
  bgColor = "bg-[#1B1B1B]",
  className = "",
  placeholder = "Я продаю",
  onChange,
  rightIcon,
  leftIcon,
  trashIcon,
  leftImg,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(selected);
  const selectRef = useRef(null);
  console.log(options);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option) => {
    setCurrentValue(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={selectRef}
      className={`relative border-none flex-[1_1_30px] h-[55px] rounded-[20px] ${
        isOpen ? "shadow-option-shadow" : ""
      } ${className}`}
    >
      <button
        onClick={toggleOpen}
        className={`flex-1 justify-between border flex w-full items-center text-15 gap-[10px] h-full rounded-[20px] pr-4 ${bgColor} pl-[13px] border ${
          isOpen ? "border-iron rounded-b-none" : "border-[#272727]"
        } ${rightIcon && "justify-between"}`}
      >
        <div
          className={`text-left flex items-center gap-[10px] ${
            rightIcon ? "w-[90%]" : ""
          }`}
        >
          {leftIcon && (
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
          {leftImg && (
            <img className="ml-[7px] filter brightness-0 invert" src={leftImg} />
          )}
          <span className="overflow-hidden mt-[1px] whitespace-nowrap ml-[2px] font-semibold">
            {currentValue?.label || placeholder}
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
        {trashIcon && <img src="/images/icons/red-trash.svg" alt="trash" />}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul
          className={`absolute left-0 top-full z-50 w-full ${bgColor} pt-[2px] p-[15px] rounded-b-[20px] pb-4 -mt-[6px] border border-iron border-t-0`}
        >
          {options.length > 0 ? (
            options.map((option, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(option)}
                className={`text-15 leading-[200%] ${
                  option === currentValue ? "text-[#E679FF]" : "text-grayCustom"
                } hover:cursor-pointer`}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="text-[13px] leading-[200%] text-grayCustom">
              {placeholder}
            </li>
          )}
        </ul>
      )}
    </div>
  );
};
