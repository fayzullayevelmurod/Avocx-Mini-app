import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className='mt-[67px]'>
      <img className='mx-auto h-[208px]' src='/gif/1.gif' alt='' />
      <h2 className='text-[40px] leading-full italic mt-[19px] font-bold text-center'>
        Opss..
      </h2>
      <p className='leading-[117%] text-center text-xl font-medium mt-[9px]'>
        Для этой функции, необходима подписка на{' '}
        <a className='text-primary' href='#!'>
          @avocx.
        </a>
      </p>
      <Button className='!w-[284px] !rounded-[20px] mx-auto mt-[36px] !h-[51px] !text-base'>
        <img src='/images/icons/tg-star.svg' alt='' />
        <span>Подробнее о подписке</span>
      </Button>
    </div>
  );
};

export default NotFound;
