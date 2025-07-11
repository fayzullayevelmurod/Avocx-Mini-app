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
      <div className='flex items-center justify-between mb-[22px]'>
        <Link className='mr-2 w-10' to='#!'>
          <img src='/images/icons/prev-arrow.svg' alt='prev arrow' />
        </Link>
        <Title label='Создание объявление' className='!m-0' />
        <button className='h-[22px] flex items-center justify-center'>
          <img
            src='/images/icons/refresh.svg'
            alt='refresh icon'
            width={17}
            height={21}
          />
        </button>
      </div>
      <p className='text-center mb-6 text-base leading-full'>
        Укажите формат, условия и цену за рекламное размещение в вашем канале.
      </p>
      <CardUI>
        <div className='flex gap-3'>
          <img
            className='w-[31px] h-[31px] object-cover rounded-full'
            src='images/icons/logo.svg'
            alt='logo'
          />
          <span className='text-lg font-semibold'>Cчастье Сейчас</span>
        </div>
        <div className='mt-[13px]'>
          <div className='flex gap-[2px] mb-[7px]'>
            <div className='flex-1'>
              <span className='text-[13px] pl-[14px] mb-[1px]'>Формат</span>
              {/* <InputForm placeHolder='1 / 24' /> */}
              {/* <input
                className='w-full h-[45px] py-2 px-[10px] bg-dark rounded-[15px] placeholder:text-iron text-sm text-white disabled:opacity-100 disabled:text-white'
                type='text'
                placeholder='1 / 24'
              /> */}
              <SplitInput />
            </div>
            <div className='flex-1'>
              <span className='text-[13px] pl-[14px] mb-[1px]'>Измерение</span>
              <Select options={options} selected={true} rightIcon={true} />
            </div>
            <div className='flex-1'>
              <span className='text-[13px] pl-[14px] mb-[1px]'>Цена</span>
              <InputForm placeHolder='Цена' />
            </div>
          </div>
          <Button gray={true} className='!h-[45px]'>
            + Добавить
          </Button>
          <p className='text-[11px] font-semibold leading-full text-[#B1B1B1] mt-[9px] mb-[13px]'>
            <span className='text-base-white'>Формат это</span> — то, сколько и
            как будет размещена ваша реклама, на примере «1 / 24»: «1» - это час
            в топе канале без перекрытия, затем «24» часа в ленте канала.
          </p>
          <Link className='w-full' to='/create-ad-success'>
            <Button>Создать</Button>
          </Link>
        </div>
      </CardUI>
    </div>
  );
};

export default CreateAdTwo;

import { useState } from 'react';

const SplitInput = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');

  const handleFirstChange = (e) => {
    const val = e.target.value;
    if (/^\d?$/.test(val)) setFirst(val); // faqat bitta raqam
  };

  const handleSecondChange = (e) => {
    const val = e.target.value;
    if (/^\d{0,3}$/.test(val)) setSecond(val); // faqat 0-3 ta raqam
  };

  return (
    <div className='flex items-center bg-dark rounded-base h-[45px]'>
      <input
        className='w-[20px] placeholder:text-[#464646] text-base-white pl-3 bg-transparent outline-none text-base text-center'
        type='text'
        value={first}
        onChange={handleFirstChange}
        placeholder='1'
      />
      <span className='text-white text-sm ml-1'>/</span>
      <input
        className='w-[40px] pl-[7px] placeholder:text-[#464646] text-left text-base-white bg-transparent outline-none text-base'
        type='text'
        value={second}
        onChange={handleSecondChange}
        placeholder='24'
      />
    </div>
  );
};
