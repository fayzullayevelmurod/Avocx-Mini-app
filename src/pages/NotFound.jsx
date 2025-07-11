import Button from "../components/Button";

const NotFound = () => {
  return (
    <div className='mt-[133px]'>
      <img className='mx-auto h-[144px]' src='/images/guess.png' alt='' />
      <h2 className='text-[40px] leading-full italic mt-3 font-bold text-center'>
        Opss..
      </h2>
      <p className='leading-full text-center text-xl font-medium mt-1'>
        Для этой функции, необходима подписка на{' '}
        <a className='text-primary' href='#!'>
          @avocx.
        </a>
      </p>
      <Button className="!w-[284px] !rounded-[20px] mx-auto mt-9">
        <img src="/images/icons/tg-star.svg" alt="" />
        <span>
        Подробнее о подписке
        </span>
      </Button>
    </div>
  );
};

export default NotFound;
