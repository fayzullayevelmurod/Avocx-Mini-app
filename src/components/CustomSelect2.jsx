import { useEffect, useRef, useState } from "react";

export const CustomSelect2 = ({
  options = [],
  selected = null,
  className = "",
  placeholder = "Выберите вариант",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(selected);
  const selectRef = useRef(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSelect = (option) => {
    setCurrentValue(option);
    setIsOpen(false);
    onChange?.(option);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={selectRef}
      className={`relative h-[42px] rounded-xl ${className} ${
        isOpen ? "rounded-b-none" : ""
      }`}
    >
      <button
        onClick={toggleOpen}
        className={`w-full h-full px-4 relative rounded-[inherit] bg-[#303030]`}
      >
        <div className="flex items-center gap-[6px] justify-center ml-[-10px]">
          <img
            src={currentValue?.icon || "/images/icons/tg.svg"} // <-- 🔹 Tanlangan icon
            alt=""
          />
          <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-xs text-center">
            {currentValue?.label || placeholder}
          </span>
        </div>

        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute top-1/2 -translate-y-1/2 right-[15px] duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="M11.878 0.363023C12.3588 -0.1183 13.138 -0.1183 13.6353 0.346979C13.884 0.58764 14 0.892477 14 1.21336C14 1.5182 13.884 1.82303 13.6353 2.04765L7.88277 7.64703C7.65068 7.87165 7.3357 8 7.00414 8C6.67259 8 6.35761 7.87165 6.12552 7.64703L0.373002 2.04765C-0.124334 1.58237 -0.124334 0.828301 0.373002 0.346979C0.85376 -0.1183 1.6495 -0.1183 2.13025 0.363023L7.00414 5.09602L11.878 0.363023Z"
            fill={`${isOpen ? "#59BFFF" : "#464646"}`}
          />
        </svg>
      </button>

      <div
        className={`absolute left-0 top-full z-50 w-full overflow-hidden bg-[#303030]  rounded-b-[20px] transition-all duration-300 ${
          isOpen
            ? "max-h-60 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <ul className="px-4 py-2 space-y-1">
          {options.length > 0 ? (
            options.map((option, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(option)}
                className={`text-15 leading-[200%] cursor-pointer ${
                  option.value === currentValue?.value
                    ? "text-[#59BFFF]"
                    : "text-[#A3A3A3]"
                } hover:text-[#59BFFF]`}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="text-[13px] text-[#A3A3A3]">{placeholder}</li>
          )}
        </ul>
      </div>
    </div>
  );
};
