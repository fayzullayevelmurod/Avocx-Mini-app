import { Link } from 'react-router-dom';

const BottomBar = () => {
  return (
    <div className='max-w-[500px] fixed bottom-3 left-1/2 -translate-x-1/2 flex justify-between px-[37px] items-center bg-[#1B1B1B66] z-50 w-[calc(100%_-_32px)] rounded-[150px] h-[76px] backdrop-blur-md shadow-inset-gray border border-iron'>
      <Link
        className='text-center h-[24px] -translate-y-1 flex flex-col justify-end relative'
        to='#!'
      >
        <img
          className='block mx-auto w-[26px] translate-x-[-1px] translate-y-[1px]'
          src='/images/icons/bottom-shop.svg'
          alt=''
        />
        <span className='leading-full -ml-[1px] text-[6px] text-white absolute top-full left-1/2 mt-[6px] -translate-x-1/2'>
          SHOPS
        </span>
      </Link>
      <Link
        className='text-center h-[24px] -translate-y-1 flex flex-col justify-end relative'
        to='#!'
      >
        <img
          className='mx-auto w-7  translate-y-[1px]'
          src='/images/icons/bottom-basket.svg'
          alt=''
        />
        <span className='leading-full text-[6px] text-white absolute top-full left-1/2 mt-[6px] -translate-x-1/2'>
          BASKET
        </span>
      </Link>
      <Link
        className='text-center h-[24px] -translate-y-1 flex flex-col justify-end relative'
        to='#!'
      >
        <img
          className='block mx-auto w-[31px] translate-y-[1px]'
          src='/images/icons/home.svg'
          alt=''
        />
        <span className='leading-full ml-[1px] text-[6px] text-white absolute top-full left-1/2 mt-[6px] -translate-x-1/2'>
          HOME
        </span>
      </Link>
      <Link
        className='text-center h-[24px] -translate-y-1 flex flex-col justify-end relative'
        to='#!'
      >
        <img
          className='block mx-auto w-[33px] translate-y-[1px] translate-x-[2px]'
          src='/images/icons/order.svg'
          alt=''
        />
        <span className='leading-full ml-[2px] text-[6px] text-white absolute top-full left-1/2 mt-[6px] -translate-x-1/2'>
          ORDERS
        </span>
      </Link>
      <Link
        className='text-center h-[24px] -translate-y-1 flex flex-col justify-end relative'
        to='#!'
      >
        <img
          className='block mx-auto w-[27px] translate-x-[-1px] translate-y-[1px]'
          src='/images/icons/settings.svg'
          alt=''
        />
        <span className='leading-full text-[6px] text-white absolute top-full left-1/2 mt-[6px] -translate-x-1/2'>
          SETTINGS
        </span>
      </Link>
    </div>
  );
};

export default BottomBar;
