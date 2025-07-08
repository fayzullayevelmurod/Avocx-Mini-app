import Tab from '../components/Tab';
import CardUI from '../components/CardUI';
import Button from '../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

const MyOrders = () => {
  const tabData = [
    { id: '1', label: 'Магазины', content: <StoresContent /> },
    { id: '2', label: 'Реклама', content: <AdsContent /> },
    { id: '3', label: 'Услуги', content: <ServicesContent /> },
  ];
  return (
    <div>
      <div className='flex items-center justify-between mb-[22px]'>
        <Link className='mr-2 w-10' to='#!'>
          <img src='/images/icons/prev-arrow.svg' alt='prev arrow' />
        </Link>
        <Title label='Управление магазином' className='!m-0' />
        <button className='w-[50px] h-[22px] flex items-center justify-center'>
          <img
            src='/images/icons/refresh.svg'
            alt='refresh icon'
            width={17}
            height={21}
          />
        </button>
      </div>

      <Tab tabData={tabData} />
    </div>
  );
};

export default MyOrders;

const StoresContent = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className='flex justify-between text-xs px-6 mb-[18px]'>
        <span>Выбрано: 0</span>
        <div className='flex gap-9'>
          <span>Оформить</span>
          <span>Удалить</span>
        </div>
      </div>

      <CardUI className='!p-[10px]'>
        <div className='flex gap-[10px]'>
          <div className='w-8 h-8 flex items-center justify-center border border-dark-gray rounded-[11px]'>
            <img src='images/icons/check.svg' alt='checkbox' />
          </div>
          <img
            className='w-[78px] h-[78px] rounded-base object-cover'
            src='/images/product-img-2.png'
            alt=''
          />
          <div>
            <h3 className='text-15 font-bold leading-full mb-[6px]'>
              Футболка «RED» <br />{' '}
              <span className='font-normal'>Hugo BOSS</span>
            </h3>
            <ul className='space-y-1'>
              <li className='text-[10px] leading-full text-grayCustom'>
                Магазин: <span className='text-primary'>SHLZ.STORE</span>
              </li>
              <li className='text-[10px] leading-full text-grayCustom flex gap-4'>
                <span>Размер: L</span> <span>Цвет: Black</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex gap-[9px] mt-1'>
          <div className='text-[#787878] text-[17px] flex gap-[10px] w-[119px] h-[50px] bg-[#1B1B1B] rounded-base items-center justify-between px-4'>
            <button onClick={handleDecrement}>−</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <Button gray={true}>
            <span>2500₽</span>
            <div className='flex items-center gap-2'>
              <img src='/images/icons/card.svg' alt='' />
              <span>Оформить</span>
            </div>
          </Button>
        </div>
      </CardUI>
    </div>
  );
};

const AdsContent = () => (
  <div>
    <div className='flex justify-between text-xs px-6 mb-[18px]'>
      <span>Выбрано: 0</span>
      <div className='flex gap-9'>
        <span>Оформить</span>
        <span>Удалить</span>
      </div>
    </div>

    <CardUI className='!p-[10px]'>
      <div className='flex gap-[10px] items-center'>
        <div className='w-8 h-8 flex items-center justify-center border border-dark-gray rounded-[11px]'>
          <img src='images/icons/check.svg' alt='checkbox' />
        </div>
        <img
          className='w-8 h-8 rounded-base object-cover'
          src='/images/icons/logo.svg'
          alt=''
        />
        <h3 className='font-semibold text-15'>Счастье Сейчас</h3>
      </div>
      <div className='mt-1 flex gap-1'>
        <div>
          <span className='text-center text-[10px] block mb-1'>Формат</span>
          <div className='h-[36px] w-[74px] flex items-center justify-center bg-[#303030] rounded-base'>
            <span className='text-[13px]'>1 / 48</span>
          </div>
        </div>

        <div>
          <span className='text-center text-[10px] block mb-1'>Время </span>
          <div className='h-[36px] w-[56px] flex items-center justify-center bg-[#303030] rounded-base'>
            <span className='text-[13px]'>10:21</span>
          </div>
        </div>

        <div>
          <span className='text-center text-[10px] block mb-1'>Дата </span>
          <div className='h-[36px] w-[107px] flex items-center justify-center bg-[#303030] rounded-base'>
            <span className='text-[13px]'>01.07.2025</span>
          </div>
        </div>
        <div className='flex-1'>
          <span className='text-center text-[10px] block mb-1'>
            Рекламный пост{' '}
          </span>
          <div className='h-[36px] flex items-center justify-center bg-[#303030] rounded-base'>
            <span className='text-[13px]'>№17</span>
          </div>
        </div>
      </div>
      <div className='flex gap-[9px] mt-[7px]'>
        <Button gray={true}>
          <span>650₽</span>
          <div className='flex items-center gap-2'>
            <img src='/images/icons/card.svg' alt='' />
            <span>Оформить</span>
          </div>
        </Button>
      </div>
    </CardUI>
  </div>
);

const ServicesContent = () => (
  <CardUI className='!p-[10px] space-y-3'>
    <div>
      <div className='flex gap-[10px] items-center'>
        <div className='w-8 h-8 flex items-center justify-center border border-dark-gray rounded-[11px]'>
          <img src='images/icons/check.svg' alt='checkbox' />
        </div>
        <img
          className='w-8 h-8 rounded-base object-cover'
          src='/images/icons/logo.svg'
          alt=''
        />
        <h3 className='font-semibold text-15'>Счастье Сейчас</h3>
      </div>
      <div className='mt-1 flex gap-1'>
        <div>
          <span className='text-center text-[10px] block mb-1'>Формат</span>
          <div className='h-[36px] w-[74px] flex items-center justify-center bg-[#303030] rounded-base'>
            <span className='text-[13px]'>1 / 48</span>
          </div>
        </div>

        <div>
          <span className='text-center text-[10px] block mb-1'>Время </span>
          <div className='h-[36px] w-[56px] flex items-center justify-center bg-[#303030] rounded-base'>
            <span className='text-[13px]'>10:21</span>
          </div>
        </div>

        <div>
          <span className='text-center text-[10px] block mb-1'>Дата </span>
          <div className='h-[36px] w-[107px] flex items-center justify-center bg-[#303030] rounded-base'>
            <span className='text-[13px]'>01.07.2025</span>
          </div>
        </div>
        <div className='flex-1'>
          <span className='text-center text-[10px] block mb-1'>
            Рекламный пост{' '}
          </span>
          <div className='h-[36px] flex items-center justify-center bg-[#303030] rounded-base'>
            <span className='text-[13px]'>№17</span>
          </div>
        </div>
      </div>
    </div>
    <div className='h-[50px] w-full border border-iron border-dashed flex items-center justify-center rounded-base text-xl font-semibold'>
      650₽
    </div>
    <div>
      <h4 className='text-15 font-semibold mb-1'>Без гарантий сервиса</h4>
      <Button>
        <img src='/images/icons/card.svg' alt='card' />
        <span>По реквизитам</span>
      </Button>
    </div>

    <div>
      <h4 className='text-15 font-semibold'>С гарантией сервиса:</h4>
      <p className='text-15 text-[#9C9C9C] leading-full mb-2 block'>
        Avocx Pro — 0,3% комиссия <br />
        Остальные — 0,5% комиссия
      </p>
      <Button>
        <img src='/images/icons/ton.svg' alt='card' />
        <span>TON</span>
      </Button>
      <Button className='mt-2'>
        <span>Pay</span>
        <img src='/images/icons/star-2.svg' alt='card' />
        <span>321</span>
      </Button>
      <p className='text-[11px] text-[#888888] mt-2 leading-full'>
        Оплачивая рекламу в TON или TG Stars, бот передаст оплату после
        выполнения условий со стороны принимающего.Если условия не будут
        выполнены, средства вернется на ваш кошелёк.{' '}
        <a className='text-primary' href='#!'>
          Подробнее.
        </a>
      </p>
    </div>
  </CardUI>
);
