import { Link } from 'react-router-dom';
import Title from '../components/Title';
import CardUI from '../components/CardUI';

const CreateAd = () => {
  return (
    <div>
      <div className='flex items-center justify-between mb-[22px]'>
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
      <p className='text-center mb-[17px] text-base leading-full'>
        Выберите добавленный в{' '}
        <a className='text-primary' href='#!'>
          @avocx
        </a>{' '}
        канал, для которого будет создаваться объявление.
      </p>

      <div className='space-y-[6px]'>
        <CardUI className='flex items-center justify-between !rounded-[20px] !py-2'>
          <div className='flex items-center gap-[10px]'>
            <img
              className='w-[30px] h-[30px] object-cover'
              src='images/icons/logo.svg'
              alt='logo'
            />
            <span className='text-[17px] font-semibold'>Cчастье Сейчас</span>
          </div>
          <img src='/images/icons/next-arrow-2.svg' alt='next arrow' />
        </CardUI>
        <CardUI className='flex items-center justify-between !rounded-[20px] !py-2'>
          <div className='flex items-center gap-[10px]'>
            <img
              className='w-[30px] h-[30px] object-cover'
              src='images/icons/logo.svg'
              alt='logo'
            />
            <span className='text-[17px] font-semibold'>Тайнология</span>
          </div>
          <img src='/images/icons/next-arrow-2.svg' alt='next arrow' />
        </CardUI>
        <CardUI className='flex items-center justify-between !rounded-[20px] !py-2'>
          <div className='flex items-center gap-[10px]'>
            <img
              className='w-[30px] h-[30px] object-cover'
              src='images/icons/logo.svg'
              alt='logo'
            />
            <span className='text-[17px] font-semibold'>Avocx Devblog</span>
          </div>
          <img src='/images/icons/next-arrow-2.svg' alt='next arrow' />
        </CardUI>
      </div>
    </div>
  );
};

export default CreateAd;
