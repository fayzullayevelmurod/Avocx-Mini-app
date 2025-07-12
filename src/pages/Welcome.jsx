import Button from '../components/Button';

const Welcome = () => {
  return (
    <div className='mt-[89px]'>
      <img className='mx-auto h-[202px]' src='/gif/2.gif' alt='' />
      <h2 className='text-[40px] leading-full italic mt-[37px] font-bold text-center'>
        Welcome
      </h2>
      <p className='leading-full text-center text-xl font-medium mt-[9px]'>
        В Mini-app{' '}
        <a className='text-primary' href='#!'>
          @avocx
        </a>{' '}
        superbot
      </p>
      <Button className='!w-[284px] !rounded-[20px] mx-auto mt-[34px] !h-[51px]'>
        <span>Продолжить</span>
      </Button>
    </div>
  );
};

export default Welcome;
