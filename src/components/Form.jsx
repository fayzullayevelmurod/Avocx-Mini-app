import { useState } from "react";

export const InputForm = ({
  type = "text",
  placeHolder,
  value,
  disabled = false,
}) => {
  return (
    <input
      className="w-full h-[46px] py-2 px-[10px] bg-dark rounded-[20px] placeholder:text-iron text-sm text-white disabled:opacity-100 disabled:text-white"
      type={type}
      placeholder={placeHolder}
      value={value}
      disabled={disabled}
    />
  );
};

export const CategoryForm = ({ label = "Категория", icon }) => {
  return (
    <div className="flex items-center gap-[7px] w-full h-[45px] py-2 px-[10px] bg-dark rounded-[20px]">
      <img
        src={`${icon ? icon : "images/icons/bars-plus.svg"}`}
        alt="bars-plus"
      />
      <span className="text-iron text-15">{label}</span>
    </div>
  );
};

export const TextareaForm = ({ placeHolder, value, acctions, className }) => {
  return (
    <div className={`relative h-[105px] ${className}`}>
      <textarea
        className="w-full resize-none h-full pt-[14px] leading-[120%]  pb-2 px-[10px] bg-dark rounded-[20px] placeholder:text-iron text-15 text-white"
        placeholder={placeHolder}
        value={value}
      />
      {acctions && (
        <div className="flex gap-[6px] absolute bottom-[10px] left-[10px]">
          <button className="ai-btn">Ai Описание</button>
          <button className="w-[39px] h-[39px] flex items-center justify-center rounded-base border border-[#505050]">
            <img src="/images/icons/gray-trash.svg" alt="gray-trash" />
          </button>
        </div>
      )}
    </div>
  );
};

export const Select = ({
  options,
  selected = false,
  rightIcon = false,
  bgColor = "bg-dark",
  className,
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setIsSelected(!!e.target.value);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {!rightIcon && (
        <svg
          className={`absolute top-1/2 left-[10px] -translate-y-1/2 w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.018 9.22749L10.0532 12.1923L7.08834 9.22749M18.9476 10.2158C18.9476 5.30348 14.9654 1.32129 10.0532 1.32129C5.14088 1.32129 1.15869 5.30348 1.15869 10.2158C1.15869 15.128 5.14088 19.1102 10.0532 19.1102C14.9654 19.1102 18.9476 15.128 18.9476 10.2158Z"
            stroke={isOpen ? "#1A72FF" : "#E8E8E8"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <select
        className={`text-[15px] w-full ${className} h-[45px] py-2 ${bgColor} rounded-base appearance-none focus:outline-none focus:ring-2 focus:ring-iron/50 ${
          isSelected ? "text-white" : "text-iron"
        } ${rightIcon ? "pr-10 pl-4" : "pl-10 pr-4"}`}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {options && options.length > 0 ? (
          options.map((option, index) => (
            <option
              key={index}
              value={option.value}
              className="pl-10 text-white bg-dark"
            >
              {option.label}
            </option>
          ))
        ) : (
          <option value="Япродаю" className="pl-10 text-white bg-dark">
            Я продаю
          </option>
        )}
      </select>
      {rightIcon && (
        <svg
          className={`absolute top-1/2 right-[10px] -translate-y-1/2 w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.018 9.22749L10.0532 12.1923L7.08834 9.22749M18.9476 10.2158C18.9476 5.30348 14.9654 1.32129 10.0532 1.32129C5.14088 1.32129 1.15869 5.30348 1.15869 10.2158C1.15869 15.128 5.14088 19.1102 10.0532 19.1102C14.9654 19.1102 18.9476 15.128 18.9476 10.2158Z"
            stroke={isOpen ? "#1A72FF" : "#E8E8E8"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export const UploadImg = ({ label }) => {
  return (
    <div className="flex justify-center  items-center gap-[10px] border-2 border-primary h-[50px] rounded-[20px] ">
      <img
        src="/images/icons/plus-circle.svg"
        alt="plus-circle"
        width={20}
        height={20}
      />
      <span className="text-15 font-semibold leading-full">{label}</span>
    </div>
  );
};

export const UploadFile = ({ label, iconPath, className }) => {
  return (
    <div className={`flex border-2 h-[50px] border-primary rounded-[20px] items-center justify-center gap-[7px] w-full py-2 px-[10px] bg-dark ${className}`}>
      <img
        src={`${iconPath ? iconPath : "images/icons/upload-file.svg"}`}
        alt="upload file icon"
      />
      <span className="text-15 font-bold">
        {label ? label : "Загрузить текстовым файлом"}
      </span>
    </div>
  );
};

export const SelectedBox = ({ label, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full h-[45px] p-3 bg-dark text-base-white flex items-center justify-between rounded-[20px] cursor-pointer ${
        selected ? "border border-primary" : ""
      }`}
    >
      <span>{label}</span>
    </div>
  );
};

export const DropDown = ({ children, className, isOpen = false, label }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className={className}>
      <div
        className="pl-[10px] pr-4 text-sm w-full h-[45px] py-2 bg-[#1B1B1B] rounded-base appearance-none focus:outline-none focus:ring-2 focus:ring-iron/50 flex items-center gap-[7px] cursor-pointer"
        onClick={toggleDropdown}
      >
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.018 9.22749L10.0532 12.1923L7.08834 9.22749M18.9476 10.2158C18.9476 5.30348 14.9654 1.32129 10.0532 1.32129C5.14088 1.32129 1.15869 5.30348 1.15869 10.2158C1.15869 15.128 5.14088 19.1102 10.0532 19.1102C14.9654 19.1102 18.9476 15.128 18.9476 10.2158Z"
            stroke={isDropdownOpen ? "#1A72FF" : "#E8E8E8"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-white">{label ? label : "Мужское"}</span>
      </div>
      <div className={`space-y-[7px] ${isDropdownOpen ? "block" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
};

import { useEffect, useRef } from "react";

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
      className={`relative flex-[1_1_30px] h-[55px] rounded-[20px] ${
        isOpen ? "shadow-option-shadow" : ""
      } ${className}`}
    >
      <button
        onClick={toggleOpen}
        className={`flex-1 justify-between flex w-full items-center text-15 gap-[10px] h-full rounded-[20px] pr-4 ${bgColor} pl-[13px] border ${
          isOpen ? "border-iron rounded-b-none" : "border-transparent"
        } ${rightIcon && "justify-between"}`}
      >
        <div
          className={`text-left flex items-center gap-[11px] ${
            rightIcon ? "w-[90%]" : ""
          }`}
        >
          {leftIcon && (
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.018 9.22749L10.0532 12.1923L7.08834 9.22749M18.9476 10.2158C18.9476 5.30348 14.9654 1.32129 10.0532 1.32129C5.14088 1.32129 1.15869 5.30348 1.15869 10.2158C1.15869 15.128 5.14088 19.1102 10.0532 19.1102C14.9654 19.1102 18.9476 15.128 18.9476 10.2158Z"
                stroke={isOpen ? "#1A72FF" : "#E8E8E8"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <span className="overflow-hidden mt-[1px] whitespace-nowrap ml-[2px] ">
            {currentValue?.label || placeholder}
          </span>
        </div>
        {rightIcon && (
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.018 9.22749L10.0532 12.1923L7.08834 9.22749M18.9476 10.2158C18.9476 5.30348 14.9654 1.32129 10.0532 1.32129C5.14088 1.32129 1.15869 5.30348 1.15869 10.2158C1.15869 15.128 5.14088 19.1102 10.0532 19.1102C14.9654 19.1102 18.9476 15.128 18.9476 10.2158Z"
              stroke={isOpen ? "#1A72FF" : "#E8E8E8"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {trashIcon && <img src="/images/icons/trash-small.svg" alt="trash" />}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul
          className={`absolute left-0 top-full z-50 w-full ${bgColor} pt-[2px] p-[15px] rounded-b-base pb-4 -mt-[6px] border border-iron border-t-0`}
        >
          {options.length > 0 ? (
            options.map((option, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(option)}
                className={`text-[13px] leading-[200%] ${
                  option === currentValue ? "text-primary" : "text-grayCustom"
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
