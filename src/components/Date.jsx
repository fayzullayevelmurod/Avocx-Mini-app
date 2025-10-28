import { useState, useRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru"; // Import Russian locale from date-fns

// Register Russian locale for DatePicker
registerLocale("ru", ru);

export const Date = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Start with picker closed
  const datePickerRef = useRef(null); // Ref to track the DatePicker element

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsOpen(false); // Close picker after selecting a date
  };

  const togglePicker = (e) => {
    e.stopPropagation(); // Prevent event bubbling to avoid conflicts
    setIsOpen((prev) => !prev); // Toggle the isOpen state
  };

  const handleClickOutside = (e) => {
    // Only close if clicking outside both the picker and the button
    if (
      datePickerRef.current &&
      !datePickerRef.current.contains(e.target) &&
      !e.target.closest(".date-picker-button") // Ensure the button isn't considered "outside"
    ) {
      setIsOpen(false);
    }
  };

  // Format date as DD.MM.YYYY or use placeholder if no date is selected
  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "";

  return (
    <div className="relative w-full">
      <div
        className={`pl-[10px] justify-between rounded-15 pr-[23px] text-sm w-full h-[54px] py-2 bg-carbon focus:outline-none focus:ring-2 border focus:ring-iron/50 flex items-center gap-[7px] cursor-pointer date-picker-button ${
          isOpen ? "border-iron rounded-b-none" : "border-transparent"
        }`}
        onClick={togglePicker} // Toggle picker on button click
      >
        <div className="flex gap-[6px]">
          <img
            src="images/icons/calendar.svg"
            alt="calendar"
            className="w-[19px] h-5 ml-2"
          />
          <span className="text-15 text-white">
            Дата/время: {formattedDate}
          </span>
        </div>
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M11.878 0.363023C12.3588 -0.1183 13.138 -0.1183 13.6353 0.346979C13.884 0.58764 14 0.892477 14 1.21336C14 1.5182 13.884 1.82303 13.6353 2.04765L7.88277 7.64703C7.65068 7.87165 7.3357 8 7.00414 8C6.67259 8 6.35761 7.87165 6.12552 7.64703L0.373002 2.04765C-0.124334 1.58237 -0.124334 0.828301 0.373002 0.346979C0.85376 -0.1183 1.6495 -0.1183 2.13025 0.363023L7.00414 5.09602L11.878 0.363023Z"
            fill={`${isOpen ? "#52E063" : "#464646"}`}
          />
        </svg>
      </div>
      {isOpen && (
        <div
          className="absolute w-full z-10 mt-2 left-1/2 -translate-x-1/2 custom-date"
          ref={datePickerRef} // Attach ref to the DatePicker container
        >
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            onClickOutside={handleClickOutside} // Custom outside click handler
            inline
            locale="ru" // Use registered Russian locale
            dateFormat="dd.MM.yyyy"
            calendarClassName="bg-carbon text-white"
          />
        </div>
      )}
    </div>
  );
};
