import { Link } from 'react-router-dom';
import Title from '../components/Title';
import CardUI from '../components/CardUI';
import { InputForm, Select, TextareaForm, UploadImg } from '../components/Form';
import Button from '../components/Button';
import SearchTitle from '../components/SearchTitle';

const StoreManagement = () => {
  const options = [
    { value: 'sell', label: 'Процесс оплаты' },
    { value: 'buy', label: 'Я покупаю' },
    { value: 'rent', label: 'Я арендаю' },
  ];

  const options1 = [
    { value: 'sell1', label: 'Способы оплаты' },
    { value: 'buy', label: 'Я покупаю' },
    { value: 'rent', label: 'Я арендаю' },
  ];

  const options2 = [
    { value: 'sell2', label: 'Способы доставки товаров' },
    { value: 'buy', label: 'Я покупаю' },
    { value: 'rent', label: 'Я арендаю' },
  ];
  const options3 = [
    { value: 'sell2', label: 'Возврат' },
    { value: 'buy', label: 'Я покупаю' },
    { value: 'rent', label: 'Я арендаю' },
  ];

  return (
    <div>
      <SearchTitle label='Создание объявление' className='mb-5' />
      <CardUI className='!p-[14px]'>
        <div className='flex items-center gap-2'>
          <img
            className='w-12 h-12 rounded-full'
            src='/images/company-logo.svg'
            alt='product company logo'
          />
          <div>
            <div className='flex items-center gap-5'>
              <h3 className='text-base font-semibold'>SHLZ.STORE 🥇</h3>
              <div className='flex items-center gap-3'>
                <div className='flex items-center gap-1'>
                  <img src='/images/icons/group.svg' alt='group icon' />
                  <span className='text-xs font-medium text-grayCustom'>
                    5879
                  </span>
                </div>
                <div className='flex items-center gap-1'>
                  <img src='/images/icons/cart.svg' alt='cart icon' />
                  <span className='text-xs font-medium text-grayCustom'>
                    2334
                  </span>
                </div>
              </div>
            </div>
            <p className='text-xxs text-grayCustom'>
              Топовые вещи за вкусный прайс. 500+ настоящих отзывов. Вещи б/у из
              семейного гардероба.
            </p>
          </div>
        </div>
        <div className='space-y-[9px] mt-3'>
          <InputForm placeHolder='SHLZ.STORE' value='SHLZ.STORE' />
          <TextareaForm value='Топовые вещи за вкусный прайс.500+ настоящих отзывов. Вещи б/у из семейного гардероба.' />
          <UploadImg label='Загрузите новый логотип' />
          <UploadImg label='Загрузите новый баннер' />
          <Select options={options} />
          <Select options={options1} />
          <Select options={options2} />
          <Select options={options3} />
          <Button>Изменить категории</Button>
          <Button>Сохранить изменения</Button>
        </div>
      </CardUI>
    </div>
  );
};

export default StoreManagement;
