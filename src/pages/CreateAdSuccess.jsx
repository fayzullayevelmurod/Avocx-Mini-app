import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Button from '../components/Button';

const CreateAdSuccess = () => {
  return (
    <div>
      <div className='mb-[22px] mt-[27px] relative'>
        <Link
          className='mr-2 w-10 absolute top-1/2 -translate-y-1/2 left-5'
          to='#!'
        >
          <img src='/images/icons/prev-arrow.svg' alt='prev arrow' />
        </Link>
        <Title label='Создание объявление' className='!m-0 !text-xl' />
        <button className='h-[22px] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-[21px]'>
          <img
            src='/images/icons/refresh.svg'
            alt='refresh icon'
            width={20}
            height={21}
          />
        </button>
      </div>

      <div className='text-center'>
        <img
          className='mx-auto mt-[32px] w-[237px] h-[237px] -translate-x-5'
          src='/gif/5.gif'
          alt='success img'
        />
        <h2 className='text-[40px] italic leading-full font-bold mt-5 mb-2'>
          Создаю!
        </h2>
        <p className='text-xl leading-[119%] mb-[25px] w-[382px] mx-auto'>
          С минуты на минуту ваше объявление появится на бирже.
        </p>
        <Button className='!rounded-[20px] !h-[51px] mx-auto !w-[284px]'>
          Ок
        </Button>
      </div>
    </div>
  );
};

export default CreateAdSuccess;
