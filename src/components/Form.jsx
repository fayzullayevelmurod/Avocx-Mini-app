import { useState } from 'react';

export const InputForm = ({
  type = 'text',
  placeHolder,
  value,
  disabled = false,
}) => {
  return (
    <input
      className='w-full h-[45px] py-2 px-[10px] bg-dark rounded-[15px] placeholder:text-iron text-sm text-white disabled:opacity-100 disabled:text-white'
      type={type}
      placeholder={placeHolder}
      value={value}
      disabled={disabled}
    />
  );
};

export const CategoryForm = ({ label = 'Категория', icon }) => {
  return (
    <div className='flex items-center gap-[7px] w-full h-[45px] py-2 px-[10px] bg-dark rounded-[15px]'>
      <img
        src={`${icon ? icon : 'images/icons/bars-plus.svg'}`}
        alt='bars-plus'
      />
      <span className='text-iron text-15'>{label}</span>
    </div>
  );
};

export const TextareaForm = ({ placeHolder, value }) => {
  return (
    <textarea
      className='w-full resize-none h-[105px] py-2 px-[10px] bg-dark rounded-[15px] placeholder:text-iron text-sm text-white'
      placeholder={placeHolder}
      value={value}
    />
  );
};

export const Select = ({ options, selected = false }) => {
  const [isSelected, setIsSelected] = useState(selected);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setIsSelected(!!e.target.value);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  return (
    <div className='relative w-full'>
      <svg
        className={`absolute top-1/2 left-[10px] -translate-y-1/2 w-5 h-5 transition-transform duration-300 ${
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
      <select
        className={`pl-10 pr-4 text-sm w-full h-[45px] py-2 bg-dark rounded-[15px] appearance-none focus:outline-none focus:ring-2 focus:ring-iron/50 ${
          isSelected ? 'text-white' : 'text-iron'
        }`}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {options && options.length > 0 ? (
          options.map((option, index) => (
            <option
              key={index}
              value={option.value}
              className='pl-10 text-white bg-dark'
            >
              {option.label}
            </option>
          ))
        ) : (
          <option value='Япродаю' className='pl-10 text-white bg-dark'>
            Я продаю
          </option>
        )}
      </select>
    </div>
  );
};

export const UploadImg = ({ label }) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='w-[89px] h-[46px] flex items-center justify-center bg-dark rounded-base'>
        <img
          src='/images/icons/plus-circle.svg'
          alt='plus-circle'
          width={20}
          height={20}
        />
      </div>
      <span className='text-15'>{label}</span>
    </div>
  );
};

export const UploadFile = () => {
  return (
    <div className='flex items-center justify-center gap-[7px] w-full h-[45px] py-2 px-[10px] bg-dark rounded-[15px]'>
      <img src='images/icons/upload-file.svg' alt='' />
      <span className='text-15 font-semibold'>Загрузить текстовым файлом</span>
    </div>
  );
};

export const SelectedBox = () => {
  return (
    <div className='w-full h-[45px] p-3 bg-dark text-base-white flex items-center justify-between rounded-base'>
      <span>Обувь</span>
      <img src='/images/icons/trash.svg' alt='' />
    </div>
  );
};

export const DropDown = ({ children, className, isOpen = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className={className}>
      <div
        className='pl-[10px] pr-4 text-sm w-full h-[45px] py-2 bg-dark rounded-[15px] appearance-none focus:outline-none focus:ring-2 focus:ring-iron/50 flex items-center gap-[7px] cursor-pointer'
        onClick={toggleDropdown}
      >
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isDropdownOpen ? 'rotate-180' : ''
          }`}
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.018 9.22749L10.0532 12.1923L7.08834 9.22749M18.9476 10.2158C18.9476 5.30348 14.9654 1.32129 10.0532 1.32129C5.14088 1.32129 1.15869 5.30348 1.15869 10.2158C1.15869 15.128 5.14088 19.1102 10.0532 19.1102C14.9654 19.1102 18.9476 15.128 18.9476 10.2158Z'
            stroke={isDropdownOpen ? '#1A72FF' : '#E8E8E8'}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <span className='text-white'>Мужское</span>
      </div>
      <div className={`space-y-[7px] ${isDropdownOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};
