import { useState } from 'react';

const Sort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Сортировка');

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className='relative flex-1 min-w-[155px]'>
      <button
        className={`flex-1 flex w-full items-center text-15 gap-[10px] pr-4 bg-carbon h-12 rounded-base pl-[13px] border ${
          isOpen ? 'border-iron' : 'border-transparent'
        }`}
        onClick={toggleDropdown}
      >
        <img src='/images/icons/filter.svg' alt='filter' />
        <span className='overflow-hidden whitespace-nowrap w-[94px]'>{selectedOption}</span>
      </button>
      {isOpen && (
        <ul className='absolute left-0 top-full z-50 w-full shadow-sort bg-carbon p-[15px] rounded-b-base pt-[17px] pb-4 -mt-[13px] border border-iron border-t-0'>
          <li
            className='text-[13px] leading-[200%] text-primary hover:cursor-pointer'
            onClick={() => handleOptionClick('Подборка')}
          >
            Подборка
          </li>
          <li
            className='text-[13px] leading-[200%] hover:cursor-pointer'
            onClick={() => handleOptionClick('По популярности')}
          >
            По популярности
          </li>
          <li
            className='text-[13px] leading-[200%] hover:cursor-pointer'
            onClick={() => handleOptionClick('Горящее')}
          >
            Горящее
          </li>
          <li
            className='text-[13px] leading-[200%] hover:cursor-pointer'
            onClick={() => handleOptionClick('Больше охват')}
          >
            Больше охват
          </li>
          <li
            className='text-[13px] leading-[200%] hover:cursor-pointer'
            onClick={() => handleOptionClick('Меньше охват')}
          >
            Меньше охват
          </li>
          <li
            className='text-[13px] leading-[200%] hover:cursor-pointer'
            onClick={() => handleOptionClick('Больше ER')}
          >
            Больше ER
          </li>
          <li
            className='text-[13px] leading-[200%] hover:cursor-pointer'
            onClick={() => handleOptionClick('Меньше ER')}
          >
            Меньше ER
          </li>
          <li
            className='text-[13px] leading-[200%] hover:cursor-pointer'
            onClick={() => handleOptionClick('Больше аудитории')}
          >
            Больше аудитории
          </li>
          <li
            className='text-[13px] leading-[200%] hover:cursor-pointer'
            onClick={() => handleOptionClick('Меньше аудитории')}
          >
            Меньше аудитории
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sort;
