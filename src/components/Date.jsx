import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru'; // Import Russian locale from date-fns

// Register Russian locale for DatePicker
registerLocale('ru', ru);

const Date = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsOpen(false); // Close picker after selection
  };

  const togglePicker = () => {
    setIsOpen((prev) => !prev);
  };

  // Format date as DD.MM.YYYY or use placeholder if no date is selected
  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : 'Выбрать дату';

  return (
    <div className='relative w-full'>
      <div
        className={`pl-[10px] pr-4 text-sm w-full h-[45px] py-2 bg-carbon rounded-[15px] focus:outline-none justify-center focus:ring-2 border focus:ring-iron/50 flex items-center gap-[7px] cursor-pointer ${
          isOpen ? 'border-iron' : 'border-transparent'
        }`}
        onClick={togglePicker}
      >
        <img
          src='images/icons/calendar.svg'
          alt='calendar'
          className='w-5 h-5'
        />
        <span className='text-15 text-white'>{formattedDate}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.018 9.22749L10.0532 12.1923L7.08834 9.22749M18.9476 10.2158C18.9476 5.30348 14.9654 1.32129 10.0532 1.32129C5.14088 1.32129 1.15869 5.30348 1.15869 10.2158C1.15869 15.128 5.14088 19.1102 10.0532 19.1102C14.9654 19.1102 18.9476 15.128 18.9476 10.2158Z'
            stroke={isOpen ? '#1A72FF' : '#E8E8E8'}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      {isOpen && (
        <div className='absolute w-full z-10 mt-2 left-1/2 -translate-x-1/2 custom-date'>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            onClickOutside={() => setIsOpen(false)}
            inline
            locale='ru' // Use registered Russian locale
            dateFormat='dd.MM.yyyy'
            calendarClassName='bg-carbon text-white'
          />
        </div>
      )}
    </div>
  );
};

export default Date;
