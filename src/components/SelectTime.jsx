import { useState, useRef, useEffect } from "react";

export const SelectTime = ({ className }) => {
  const [open, setOpen] = useState(false);

  const [checkedDays, setCheckedDays] = useState({
    one: true,
    two: true,
    three: true,
    four: true,
    five: true,
    six: false,
    seven: false,
  });

  const dayShortNames = {
    one: "Пн",
    two: "Вт",
    three: "Ср",
    four: "Чт",
    five: "Пт",
    six: "Сб",
    seven: "Вс",
  };

  const dropdownRef = useRef(null);
  const [shadowHeight, setShadowHeight] = useState(0);

  const handleOpen = () => setOpen((prev) => !prev);

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setCheckedDays((prev) => ({ ...prev, [id]: checked }));
  };

  // shadow height ni dinamik o‘lchash
  useEffect(() => {
    if (open && dropdownRef.current) {
      const height = dropdownRef.current.offsetHeight;
      setShadowHeight(height + 60); // biroz qo‘shimcha pastga
    }
  }, [open]);

  return (
    <div
      className={`relative bg-[#242424] rounded-15 pb-3 pt-[15px] px-4 ${className}`}
    >
      {/* Shadow layer */}
      {open && (
        <div
          className="absolute inset-0 -bottom-[calc(100%+240px)] rounded-15 shadow-option-shadow pointer-events-none z-10"
          style={{ height: `calc(21px + ${shadowHeight}px)` }}
        />
      )}

      {/* Header */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleOpen}
      >
        <div className="flex gap-[7px] items-center">
          <img
            className="filter invert brightness-0"
            src={
              open ? "/images/icons/open-time.svg" : "/images/icons/time.svg"
            }
            alt=""
          />
          <div className="text-[#464646] font-semibold flex gap-1 items-center">
            <input
              className="text-base-white font-semibold bg-transparent border-none outline-none w-[20px] placeholder:text-grayCustom"
              type="text"
              placeholder="00"
            />
            <span className="text-white">:</span>
            <input
              className="text-base-white font-semibold bg-transparent border-none outline-none w-[20px] placeholder:text-grayCustom"
              type="text"
              placeholder="00"
            />
          </div>
        </div>

        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            open ? "rotate-180" : ""
          } transition-transform duration-300`}
        >
          <path
            d="M11.878 0.363023C12.3588 -0.1183 13.138 -0.1183 13.6353 0.346979C13.884 0.58764 14 0.892477 14 1.21336C14 1.5182 13.884 1.82303 13.6353 2.04765L7.88277 7.64703C7.65068 7.87165 7.3357 8 7.00414 8C6.67259 8 6.35761 7.87165 6.12552 7.64703L0.373002 2.04765C-0.124334 1.58237 -0.124334 0.828301 0.373002 0.346979C0.85376 -0.1183 1.6495 -0.1183 2.13025 0.363023L7.00414 5.09602L11.878 0.363023Z"
            fill={`${open ? "#59BFFF" : "#464646"}`}
          />
        </svg>
      </div>

      {/* Tanlangan kunlar */}
      <div className="flex gap-1 pt-[13px] relative z-10 flex-wrap">
        {Object.entries(checkedDays)
          .filter(([_, value]) => value)
          .map(([key]) => (
            <div
              key={key}
              className="w-10 h-[30px] rounded-lg bg-[#303030] flex items-center justify-center text-xs font-bold cursor-pointer"
            >
              {dayShortNames[key]}
            </div>
          ))}
      </div>

      {/* Drop panel */}
      {open && (
        <div
          ref={dropdownRef}
          className="absolute top-[90%] left-0 pt-5 w-full px-5 bg-[#242424] flex gap-5 pb-[15px] rounded-b-15 z-20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-4">
            {["one", "two", "three", "four"].map((dayKey, i) => (
              <div className="checkbox-container" key={i}>
                <input
                  type="checkbox"
                  id={dayKey}
                  checked={checkedDays[dayKey]}
                  onChange={handleChange}
                />
                <label htmlFor={dayKey}>
                  {["Понедельник", "Вторник", "Среда", "Четверг"][i]}
                </label>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {["five", "six", "seven"].map((dayKey, i) => (
              <div className="checkbox-container" key={i}>
                <input
                  type="checkbox"
                  id={dayKey}
                  checked={checkedDays[dayKey]}
                  onChange={handleChange}
                />
                <label htmlFor={dayKey}>
                  {["Пятница", "Суббота", "Воскресенье"][i]}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
