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
        className={`pl-[10px] justify-between rounded-[20px] pr-4 text-sm w-full h-[48px] py-2 bg-carbon rounded-base focus:outline-none focus:ring-2 border focus:ring-iron/50 flex items-center gap-[7px] cursor-pointer date-picker-button ${
          isOpen ? "border-iron rounded-b-none" : "border-transparent"
        }`}
        onClick={togglePicker} // Toggle picker on button click
      >
        <div className="flex gap-[6px]">
          <img
            src="images/icons/calendar.svg"
            alt="calendar"
            className="w-[15px] h-5 ml-2"
          />
          <span className="text-15 text-white">Выбрать дату: {formattedDate}</span>
        </div>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 transition-transform duration-300 "
        >
          <path
            d="M10.5 0C16.01 0 20.5 4.48 20.5 10C20.5 15.51 16.01 20 10.5 20C4.98 20 0.5 15.51 0.5 10C0.5 4.48 4.98 0 10.5 0ZM14.5 8.01953C14.2 7.72978 13.7304 7.73042 13.4404 8.03027L10.5 10.9805L7.55957 8.03027C7.26964 7.73043 6.79 7.72979 6.5 8.01953C6.2 8.31953 6.2 8.79008 6.5 9.08008L9.96973 12.5703C10.1097 12.7103 10.3 12.79 10.5 12.79C10.7 12.79 10.8903 12.7103 11.0303 12.5703L14.5 9.08008C14.65 8.94008 14.7197 8.74957 14.7197 8.55957C14.7196 8.35973 14.6499 8.16942 14.5 8.01953Z"
            fill={isOpen ? "#E679FF" : "#707070"}
          ></path>
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
