import { useState, useRef, useEffect } from "react";

export const ChanelSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({ label: "Cчастье Сейчас" });
  const selectRef = useRef(null);

  const options = [
    { label: "Cчастье Сейчас" },
    { label: "Канал Добра" },
    { label: "Мудрость" },
    { label: "Улыбка ТВ" },
  ];

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  // tashqariga bosilganda yopilsin
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
    <div ref={selectRef} className="relative">
      {/* Select head */}
      <div
        onClick={toggleOpen}
        className={`flex justify-between duration-300 items-center border  bg-[#242424] rounded-[20px] px-4 h-[50px] cursor-pointer ${
          isOpen
            ? "shadow-option-shadow rounded-b-none border border-[#3a3a3a] border-b-transparent"
            : "border-transparent"
        }`}
      >
        <div className="flex gap-1 items-center">
          <span className="text-grayCustom font-semibold">Канал:</span>
          <span className="font-semibold">{selected.label}</span>
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
            fill="#707070"
          ></path>
        </svg>
      </div>

      {/* Dropdown options */}
        <ul
          className={`absolute left-0 duration-300 top-full w-full bg-[#242424] z-50 rounded-b-[20px] px-4 pb-3 border border-t-0 border-[#3a3a3a] ${
            isOpen
              ? "max-h-60 opacity-100 pb-3 visible"
              : "max-h-0 opacity-0 py-0 invisible"
          }`}
        >
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              className={`py-1 text-sm cursor-pointer ${
                selected.label === option.label
                  ? "text-primary font-semibold"
                  : "text-grayCustom"
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
    </div>
  );
};
