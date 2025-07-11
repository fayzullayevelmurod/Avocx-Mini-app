import Button from '../components/Button';

const Welcome = () => {
  return (
    <div className='mt-[133px]'>
      <img className='mx-auto h-[144px]' src='/images/welcome.png' alt='' />
      <h2 className='text-[40px] leading-full italic mt-3 font-bold text-center'>
        Welcome
      </h2>
      <p className='leading-full text-center text-xl font-medium mt-1'>
        В Mini-app{' '}
        <a className='text-primary' href='#!'>
          @avocx
        </a>{' '}
        superbot
      </p>
      <Button className='!w-[284px] !rounded-[20px] mx-auto mt-9'>
        <span>Продолжить</span>
      </Button>
    </div>
  );
};

export default Welcome;
