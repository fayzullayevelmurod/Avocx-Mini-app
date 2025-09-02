import { useState } from "react";

export const SelectTime = () => {
  const [open, setOpen] = useState(false);

  // Checkbox state
  const [checkedDays, setCheckedDays] = useState({
    one: true,
    two: true,
    three: true,
    four: true,
    five: true,
    six: false,
    seven: false,
  });

  // handle open
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  // handle checkbox change
  const handleChange = (e) => {
    const { id, checked } = e.target;
    setCheckedDays((prev) => ({ ...prev, [id]: checked }));
  };

  // Tanlangan kunlarni chiqarish uchun mapping
  const dayShortNames = {
    one: "Пн",
    two: "Вт",
    three: "Ср",
    four: "Чт",
    five: "Пт",
    six: "Сб",
    seven: "Вс",
  };

  return (
    <div
      className={`relative bg-[#1A1A1A] rounded-[20px] py-[15px] px-4 ${
        open ? "shadow-option-shadow" : ""
      }`}
    >
      {/* Top block (ochish yopish) */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleOpen}
      >
        <div className="flex gap-[7px] items-center">
          <img src="/images/icons/time.svg" alt="" />
          <div className="text-grayCustom font-semibold flex gap-1 items-center">
            <input
              className="text-grayCustom font-semibold bg-transparent border-none outline-none w-[20px] placeholder:text-grayCustom "
              type="text"
              placeholder="00"
              min={2}
              max={2}
            />
            <span className="text-white">:</span>
            <input
              className="text-grayCustom font-semibold bg-transparent border-none outline-none w-[20px] placeholder:text-grayCustom "
              type="text"
              placeholder="00"
              min={2}
              max={2}
            />
          </div>
        </div>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M10.5 0C16.01 0 20.5 4.48 20.5 10C20.5 15.51 16.01 20 10.5 20C4.98 20 0.5 15.51 0.5 10C0.5 4.48 4.98 0 10.5 0ZM14.5 8.01953C14.2 7.72978 13.7304 7.73042 13.4404 8.03027L10.5 10.9805L7.55957 8.03027C7.26964 7.73043 6.79 7.72979 6.5 8.01953C6.2 8.31953 6.2 8.79008 6.5 9.08008L9.96973 12.5703C10.1097 12.7103 10.3 12.79 10.5 12.79C10.7 12.79 10.8903 12.7103 11.0303 12.5703L14.5 9.08008C14.65 8.94008 14.7197 8.74957 14.7197 8.55957C14.7196 8.35973 14.6499 8.16942 14.5 8.01953Z"
            fill={open ? "#E679FF" : "#707070"}
          ></path>
        </svg>
      </div>

      {/* Tanlangan kunlarni chiqarish */}
      <div className="flex gap-1 pt-[13px] relative z-10 flex-wrap">
        {Object.entries(checkedDays)
          // eslint-disable-next-line no-unused-vars
          .filter(([key, value]) => value) // faqat tanlanganlarni olish
          .map(([key]) => (
            <div
              key={key}
              className="w-10 h-[30px] rounded-xl bg-[#303030] flex items-center justify-center text-12 font-bold cursor-pointer"
            >
              {dayShortNames[key]}
            </div>
          ))}
      </div>

      {/* Drop panel */}
      {open && (
        <div
          className="absolute top-[80%] left-0 pt-5 w-full px-5 bg-[#1A1A1A] flex gap-5 pb-[15px] rounded-b-[20px]"
          onClick={(e) => e.stopPropagation()} // bu yerda bosilganda panel yopilmasin
        >
          <div className="space-y-4">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="one"
                checked={checkedDays.one}
                onChange={handleChange}
              />
              <label htmlFor="one">Понедельник</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="two"
                checked={checkedDays.two}
                onChange={handleChange}
              />
              <label htmlFor="two">Вторник</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="three"
                checked={checkedDays.three}
                onChange={handleChange}
              />
              <label htmlFor="three">Среда</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="four"
                checked={checkedDays.four}
                onChange={handleChange}
              />
              <label htmlFor="four">Четверг</label>
            </div>
          </div>
          <div className="space-y-4">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="five"
                checked={checkedDays.five}
                onChange={handleChange}
              />
              <label htmlFor="five">Пятница</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="six"
                checked={checkedDays.six}
                onChange={handleChange}
              />
              <label htmlFor="six">Суббота</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="seven"
                checked={checkedDays.seven}
                onChange={handleChange}
              />
              <label htmlFor="seven">Воскресенье</label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
