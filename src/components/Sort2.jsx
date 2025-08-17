import { useState } from "react";

const SortTwo = ({
  label = "Сортировка",
  icon = false,
  iconPath,
  options = [],
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState(
    options.reduce((acc, opt) => {
      acc[opt.id] = false;
      return acc;
    }, {})
  );

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleCheckboxClick = (e, id) => {
    e.stopPropagation();
    setCheckedItems((prev) => {
      const newState = { ...prev, [id]: !prev[id] };
      if (onChange) {
        const selected = options.filter((o) => newState[o.id]);
        onChange(selected);
      }
      return newState;
    });
  };

  const handleLabelClick = (id) => {
    setCheckedItems((prev) => {
      if (!prev[id]) {
        // agar hozircha unchecked bo‘lsa → faqat shu true bo‘lsin
        const newState = Object.keys(prev).reduce((acc, key) => {
          acc[key] = false;
          return acc;
        }, {});
        newState[id] = true;

        if (onChange) {
          const selected = options.find((o) => o.id === id);
          onChange([selected]);
        }

        setIsOpen(false); // text bosilganda yopilsin
        return newState;
      }
      return prev;
    });
  };

  // 🔑 tanlangan label(lar)ni chiqarish
  const selectedLabels = options
    .filter((o) => checkedItems[o.id])
    .map((o) => o.label)
    .join(", ");

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
        <div className="flex flex-col items-start text-left">
          <div className="flex gap-1 items-center">
            {icon && (
              <img src={iconPath || "/images/icons/filter.svg"} alt="filter" />
            )}
            <span className="text-grayCustom leading-full">{label}</span>
          </div>
          <span className="text-white text-sm mt-[2px] truncate max-w-[125px]">
            {selectedLabels || options[0].label}
          </span>
        </div>

        <svg
          className={`w-5 h-5 absolute right-3 transition-transform duration-300 ${
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
          ></path>
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute space-y-1 left-0 top-full z-50 w-full bg-carbon pt-[2px] p-[15px] rounded-b-base pb-4 -mt-[6px] border border-iron border-t-0">
          {options.map((option) => (
            <li
              key={option.id}
              className={`text-[13px] flex items-center gap-2 leading-[200%] hover:cursor-pointer ${
                checkedItems[option.id] ? "text-primary" : "text-grayCustom"
              }`}
              onClick={() => handleLabelClick(option.id)}
            >
              {option.checkbox && (
                <button
                  onClick={(e) => handleCheckboxClick(e, option.id)}
                  className="w-5 h-5 flex items-center justify-center border-2 border-dark-gray rounded-[5px]"
                >
                  {checkedItems[option.id] && (
                    <img
                      src="images/icons/check.svg"
                      alt="checkbox"
                      width={14}
                    />
                  )}
                </button>
              )}
              {option.icon && <img src={option.icon} width={20} />}
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortTwo;
