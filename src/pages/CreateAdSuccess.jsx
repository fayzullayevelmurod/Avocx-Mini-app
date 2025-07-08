import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Button from '../components/Button';

const CreateAdSuccess = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
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

      <div className='text-center'>
        <img
          className='mx-auto mt-[66px]'
          src='images/yes.png'
          alt='success img'
        />
        <h2 className='text-[40px] italic leading-full font-bold my-[13px]'>
          Готово!
        </h2>
        <p className='text-xl leading-full mb-5'>
          С минуты на минуту ваше объявление появится на бирже.
        </p>
        <Button>Ок</Button>
      </div>
    </div>
  );
};

export default CreateAdSuccess;
