import { useState } from "react";
import { Search } from "./Search";
import { Checkbox } from "./Checkbox";

export const MultiSelect = ({ id, categories, openId, setOpenId }) => {
  const isOpen = openId === id;
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const removeCategory = (category) => {
    setSelectedCategories((prev) => prev.filter((c) => c !== category));
  };

  return (
    <div
      className={`relative bg-[#1B1B1B] border rounded-[20px] min-h-[49px] flex flex-col ${
        isOpen ? "border-iron rounded-b-none z-50" : "border-[#272727] z-10"
      }`}
    >
      {/* header */}
      <div
        className="flex items-center justify-between px-5 h-[49px] cursor-pointer"
        onClick={() => setOpenId(isOpen ? null : id)}
      >
        <div className="flex gap-[6px] items-center whitespace-nowrap w-[90%]">
          <span>Выбраны:</span>
          <div className="flex gap-[6px] w-[80%] overflow-x-auto no-scrollbar">
            {selectedCategories.length > 0 &&
              selectedCategories.map((cat) => (
                <div
                  key={cat}
                  className="bg-iron px-[10px] h-[30px] rounded-[27px] flex items-center gap-2 text-xs font-semibold text-grayCustom"
                >
                  <span>{cat}</span>
                  <img
                    src="/images/icons/close.svg"
                    alt="remove"
                    width={8}
                    className="cursor-pointer min-w-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCategory(cat);
                    }}
                  />
                </div>
              ))}
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
      </div>

      {/* dropdown */}
      {isOpen && (
        <div className="absolute left-[-1px] top-[99%] w-[calc(100%+2px)] pt-0 p-[15px] rounded-b-[20px] border border-iron border-t-0 bg-[#1B1B1B] z-50">
          <Search className="mb-[15px]" />
          <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 cursor-pointer text-sm"
              >
                <Checkbox
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
