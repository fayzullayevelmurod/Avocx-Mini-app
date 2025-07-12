import { useState } from 'react';
import CardUI from '../../components/CardUI';
import Title from '../../components/Title';
import Tariffs from './Tariffs';
import Button from '../../components/Button';

const StepTwo = ({ onNext }) => {
  const [selectedTheme, setSelectedTheme] = useState('dark-theme');

  const getThemeStyles = (theme) =>
    `p-1 rounded-base cursor-pointer duration-200 ${
      selectedTheme === theme
        ? 'border-[2px] border-primary shadow-select-theme h-[265px] w-[182px]'
        : 'border border-transparent h-[265px] w-[184px]'
    }`;

  return (
    <CardUI>
      <Title className='!mt-[6px]' label='Тема оформления магазина' />
      <div className='flex gap-[13px] items-center h-[265px] pl-1'>
        <div
          className={getThemeStyles('dark-theme')}
          onClick={() => setSelectedTheme('dark-theme')}
        >
          <img
            className='w-full h-full'
            src='/images/dark-theme.png'
            alt='dark theme'
          />
        </div>
        <div
          className={getThemeStyles('white-theme')}
          onClick={() => setSelectedTheme('white-theme')}
        >
          <img
            className='w-full h-full'
            src='/images/white-theme.png'
            alt='white theme'
          />
        </div>
      </div>
      <h2 className='text-[17px] leading-full font-semibold text-center mt-[22px] mb-2'>
        Тарифный план
      </h2>
      <button className='border border-dashed border-[#464646] rounded-base h-[49px] flex items-center justify-center w-full'>
        Ваша подписка: Pro
      </button>
      <p className='pb-[18px] pt-[14px] pl-[3px] text-15 leading-[112%]'>
        Для того чтобы продолжить необходимо иметь подписку: Basic, Pro или
        Ultra.
      </p>
      <Button onClick={onNext}>Далее</Button>
    </CardUI>
  );
};
export default StepTwo;
