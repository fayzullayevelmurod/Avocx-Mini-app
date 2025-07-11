import { Link } from 'react-router-dom';

const BottomBar = () => {
  return (
    <div className='max-w-[500px] fixed bottom-3 left-1/2 -translate-x-1/2 flex justify-between px-6 items-center bg-[#1B1B1B66] z-50 w-[calc(100%_-_32px)] rounded-[150px] h-[76px] backdrop-blur-md shadow-inset-gray border border-iron'>
      <Link className='text-center h-[34px] flex flex-col justify-between' to='#!'>
        <img
          // w-6 h-6
          className='block mx-auto w-6 h-6'
          src='/images/icons/bottom-shop.svg'
          alt=''
        />
        <span className='mt-0 leading-full text-[6px] text-white'>SHOPS</span>
      </Link>
      <Link className='text-center h-[34px] flex flex-col justify-between' to='#!'>
        <img className='mx-auto w-6 h-[22px]' src='/images/icons/bottom-basket.svg' alt='' />
        <span className='mt-0 leading-full text-[6px] text-white'>BASKET</span>
      </Link>
      <Link className='text-center h-[34px] flex flex-col justify-between' to='#!'>
        <img className='block mx-auto w-7 h-[22px]' src='/images/icons/home.svg' alt='' />
        <span className='mt-0 leading-full text-[6px] text-white'>HOME</span>
      </Link>
      <Link className='text-center h-[34px] flex flex-col justify-between' to='#!'>
        <img className='block mx-auto w-[30px] h-5' src='/images/icons/order.svg' alt='' />
        <span className='mt-0 leading-full text-[6px] text-white'>ORDERS</span>
      </Link>
      <Link className='text-center h-[34px] flex flex-col justify-between' to='#!'>
        <img
          className='block mx-auto w-[22px] h-5'
          src='/images/icons/settings.svg'
          alt=''
        />
        <span className='mt-0 leading-full text-[6px] text-white'>SETTINGS</span>
      </Link>
    </div>
  );
};

export default BottomBar;
