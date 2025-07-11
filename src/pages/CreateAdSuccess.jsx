import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Button from '../components/Button';

const CreateAdSuccess = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <Link className='mr-2 w-6' to='#!'>
          <img src='/images/icons/prev-arrow.svg' alt='prev arrow' />
        </Link>
        <Title label='Создание объявление' className='!m-0' />
        <button className='h-[22px] w-6 flex items-center justify-end'>
          <img
            src='/images/icons/refresh.svg'
            alt='refresh icon'
            width={17}
            height={21}
          />
        </button>
      </div>

      <div className='text-center'>
        <img
          className='mx-auto mt-[66px] w-[237px] h-[237px] -translate-x-5'
          src='/gif/5.gif'
          alt='success img'
        />
        <h2 className='text-[40px] italic leading-full font-bold my-[13px]'>
          Создаю!
        </h2>
        <p className='text-xl leading-full mb-5'>
          С минуты на минуту ваше объявление появится на бирже.
        </p>
        <div className='mx-auto w-[284px]'>
          <Button className=''>Ок</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAdSuccess;
