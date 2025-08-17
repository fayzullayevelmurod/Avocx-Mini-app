import { Link } from 'react-router-dom';
import Title from '../components/Title';
import CardUI from '../components/CardUI';
import { InputForm, Select } from '../components/Form';
import Button from '../components/Button';

const CreateAdTwo = () => {
  const options = [
    { value: 'sell', label: 'Фикс' },
    { value: 'buy', label: 'Фикс2' },
    { value: 'rent', label: 'Фикс3' },
  ];
  return (
    <div>
<SearchTitle label="Создание объявления" />
      <p className='text-center text-base leading-[119%] w-[360px] mx-auto mb-[23px] mt-[35px]'>
        Укажите формат, условия и цену за рекламное размещение в вашем канале.
      </p>
      <CardUI className='!rounded-[30px]'>
        <div className='flex gap-3 justify-center'>
          <img
            className='w-[31px] h-[31px] object-cover rounded-full'
            src='images/icons/logo.svg'
            alt='logo'
          />
          <span className='text-lg font-semibold'>Cчастье Сейчас</span>
        </div>
        <div className='mt-[13px]'>
          <div className='flex gap-[2px] mb-[5px]'>
            <div className='flex-1'>
              <span className='text-[13px] pl-[14px] mb-[5px]'>Формат</span>
              <SplitInput />
            </div>
            <div className='flex-1'>
              <span className='text-[13px] pl-[14px] mb-[5px]'>Измерение</span>
              <Select options={options} selected={true} rightIcon={true} />
            </div>
            <div className='flex-1 min-w-[135px]'>
              <span className='text-[13px] pl-[14px] mb-[5px]'>Цена</span>
              <InputForm placeHolder='Цена' />
            </div>
          </div>
          <Button className='bg-transparent border-2 border-primary !shadow-none before:hidden after:hidden'>
            + Добавить
          </Button>
          <p className='text-[11px] font-semibold leading-[120%] text-[#B1B1B1] mt-[6px] mb-[13px]'>
            <span className='text-base-white'>Формат это</span> — то, сколько и
            как будет размещена ваша реклама, на примере «1 / 24»: «1» - это час
            в топе канале без перекрытия, затем «24» часа в ленте канала.
          </p>
          <Link className='w-full mt-[5px]' to='/create-ad-success'>
            <Button>Создать</Button>
          </Link>
        </div>
      </CardUI>
    </div>
  );
};

export default CreateAdTwo;

import { useState, useRef } from 'react';
import SearchTitle from '../components/SearchTitle';

const SplitInput = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const firstInputRef = useRef(null); // Ref for the first input
  const secondInputRef = useRef(null); // Ref for the second input

  const handleFirstChange = (e) => {
    const val = e.target.value;
    if (/^\d?$/.test(val)) {
      // Allow only one digit or empty
      setFirst(val);
      if (val.length === 1 && secondInputRef.current) {
        secondInputRef.current.focus(); // Move focus to second input after entering one digit
      }
    }
  };

  const handleSecondChange = (e) => {
    const val = e.target.value;
    if (/^\d{0,3}$/.test(val)) {
      // Allow 0-3 digits
      setSecond(val);
      if (val.length === 0 && firstInputRef.current) {
        firstInputRef.current.focus(); // Move focus to first input when second input is emptied
        setFirst(''); // Clear the first input
      }
    }
  };

  return (
    <div className='flex items-center bg-dark rounded-base h-[45px]'>
      <input
        ref={firstInputRef} // Attach ref to first input
        className='w-[20px] placeholder:text-[#464646] text-base-white pl-3 bg-transparent outline-none text-base text-center'
        type='text'
        value={first}
        onChange={handleFirstChange}
        placeholder='1'
      />
      <span className='text-white text-sm ml-1'>/</span>
      <input
        ref={secondInputRef} // Attach ref to second input
        className='w-[40px] pl-[7px] placeholder:text-[#464646] text-left text-base-white bg-transparent outline-none text-base'
        type='text'
        value={second}
        onChange={handleSecondChange}
        placeholder='24'
      />
    </div>
  );
};

// import { useState, useRef } from 'react';

// const SplitInput = () => {
//   const [first, setFirst] = useState('');
//   const [second, setSecond] = useState('');
//   const firstInputRef = useRef(null); // Ref for the first input
//   const secondInputRef = useRef(null); // Ref for the second input

//   const handleFirstChange = (e) => {
//     const val = e.target.value;
//     if (/^\d?$/.test(val)) { // Allow only one digit or empty
//       setFirst(val);
//       if (val.length === 1 && secondInputRef.current) {
//         secondInputRef.current.focus(); // Move focus to second input after entering one digit
//       }
//     }
//   };

//   const handleSecondChange = (e) => {
//     const val = e.target.value;
//     if (/^\d{0,3}$/.test(val)) { // Allow 0-3 digits
//       setSecond(val);
//     }
//   };

//   return (
//     <div className='flex items-center bg-dark rounded-base h-[45px]'>
//       <input
//         ref={firstInputRef} // Attach ref to first input
//         className='w-[20px] placeholder:text-[#464646] text-base-white pl-3 bg-transparent outline-none text-base text-center'
//         type='text'
//         value={first}
//         onChange={handleFirstChange}
//         placeholder='1'
//       />
//       <span className='text-white text-sm ml-1'>/</span>
//       <input
//         ref={secondInputRef} // Attach ref to second input
//         className='w-[40px] pl-[7px] placeholder:text-[#464646] text-left text-base-white bg-transparent outline-none text-base'
//         type='text'
//         value={second}
//         onChange={handleSecondChange}
//         placeholder='24'
//       />
//     </div>
//   );
// };
