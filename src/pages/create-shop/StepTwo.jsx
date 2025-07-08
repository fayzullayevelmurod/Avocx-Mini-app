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
        : 'border border-transparent h-[230px] w-[155px]'
    }`;

  return (
    <CardUI>
      <Title label='Тема оформления магазина' />
      <div className='flex gap-6 items-center h-[265px]'>
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
      <Tariffs />
      <Button onClick={onNext}>Далее</Button>
    </CardUI>
  );
};
export default StepTwo;
