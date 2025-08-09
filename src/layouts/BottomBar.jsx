import { Link } from 'react-router-dom';

const BottomBar = () => {
  return (
    <div className='max-w-[500px] fixed bottom-[31px] left-1/2 -translate-x-1/2 flex justify-between px-[37px] items-center bg-[#1B1B1B66] z-50 w-[calc(100%_-_35px)] ml-[3px] rounded-[150px] h-[76px] backdrop-blur-md shadow-inset-gray border border-iron'>
      <Link
        className='text-center h-[24px] -translate-y-1 flex flex-col justify-end relative'
        to='#!'
      >
        <img
          className='block mx-auto w-[29px] h-[27px] translate-x-[-1px] translate-y-[3px]'
          src='/images/icons/bottom-shop.svg'
          alt=''
        />
        <span className='leading-full -ml-[1px] text-[7px] text-white absolute top-full left-1/2 mt-[7px] -translate-x-1/2'>
          Stores
        </span>
      </Link>
      <Link
        className='text-center h-[24px] -translate-y-1 flex flex-col justify-end relative'
        to='#!'
      >
        <img
          className='mx-auto w-[25px]  translate-y-[3px] translate-x-0.5'
          src='/images/icons/bottom-basket.svg'
          alt=''
        />
        <span className='leading-full mt-[7px] ml-[3px] text-[7px] text-white absolute top-full left-1/2 -translate-x-1/2'>
          Ads
        </span>
      </Link>
      <Link
        className='text-center h-[24px] -translate-y-1 flex flex-col justify-end relative'
        to='#!'
      >
        <img
          className='block mx-auto w-6 translate-y-[1px] ml-1'
          src='/images/icons/home.svg'
          alt=''
        />
        <span className='leading-full ml-0.5 text-[7px] text-white absolute top-full left-1/2 mt-[5px] translate-y-[2px] -translate-x-1/2'>
          Home
        </span>
      </Link>
      <Link
        className='text-center h-[24px] w-[33px] -translate-y-1 flex flex-col justify-end relative'
        to='#!'
      >
        <img
          className='block mx-auto w-[25px] translate-y-0.5 '
          src='/images/icons/order.svg'
          alt=''
        />
        <span className='leading-full  text-[7px] text-white absolute top-full left-1/2 mt-[7px] -translate-x-1/2'>
          Freelance
        </span>
      </Link>
      <Link
        className='text-center h-[24px] -translate-y-1 flex flex-col justify-end relative'
        to='#!'
      >
        <img
          className='block mx-auto w-[27px] translate-x-[-1px] translate-y-[1px]'
          src='/images/icons/basket.svg'
          alt=''
        />
        <span className='leading-full text-[7px] text-white absolute top-full left-1/2 mt-[6px] -translate-x-1/2'>
          Basket
        </span>
      </Link>
    </div>
  );
};

export default BottomBar;
