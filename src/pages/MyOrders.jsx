import Tab from '../components/Tab';
import CardUI from '../components/CardUI';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import { InputForm, Select, TextareaForm, UploadImg } from '../components/Form';

const MyOrders = () => {
  const tabData = [
    { id: '1', label: 'Оплачено', content: <StoresContent /> },
    { id: '2', label: 'Неоплачено', content: <AdsContent /> },
    { id: '3', label: 'Отменённые', content: <ServicesContent /> },
  ];
  return (
    <div>
      <div className='mb-[22px] relative'>
        <Link to='#!' className='w-10 absolute top-1/2 left-0 -translate-y-1/2'>
          <img src='/images/icons/prev-arrow.svg' alt='previous step' />
        </Link>
        <Title label='Мои заказы' className='!m-0' />
      </div>

      <Tab tabData={tabData} />
    </div>
  );
};

export default MyOrders;

const StoresContent = () => {
  return (
    <CardUI className='!p-3 space-y-5'>
      <p className='text-[17px] font-semibold leading-full'>
        Заявка создана: <span className='text-primary'>№21425</span> <br />
        <span className='font-normal'>Когда: 12:17, 29.06.2025</span>
      </p>
      <div>
        <div className='flex items-center gap-[6px]'>
          <img src='/images/icons/green-check.svg' alt='green-check' />
          <span className='text-green text-xl font-semibold'>
            Успешная оплата
          </span>
        </div>
        <p className='text-15 mt-2'>
          Ваш рекламный пост запланирован на указанное время и дату.
        </p>
      </div>
      <Button>Вернутся в корзину</Button>
    </CardUI>
  );
};

const AdsContent = () => (
  <div>
    <p className='text-center text-[17px] leading-full mb-5'>
      Переведите средства по указанным реквизитам, прикрепите чек и нажмите
      «Подтвердить оплату»
    </p>
    <CardUI className='!p-3 space-y-5'>
      <div className='space-y-2'>
        <div className='flex items-start justify-between'>
          <p className='text-[17px] font-semibold leading-full'>
            Заявка создана: <span className='text-primary'>№21425</span> <br />
            <span className='font-normal'>Когда: 12:17, 29.06.2025</span>
          </p>
          <span className='text-green text-xl leading-full'>9:59</span>
        </div>
        <div className='h-[50px] w-full border border-iron border-dashed flex items-center justify-center rounded-base text-xl font-semibold'>
          650₽
        </div>
        <div className='h-11 w-full bg-[#303030] py-3 rounded-base text-15 font-semibold flex justify-between items-center px-[14px]'>
          <div className='flex items-center gap-[14px]'>
            <span>Ф.И.О.</span>
            <div className='w-[1px] h-5 bg-iron'></div>
            <span>Иван И.</span>
          </div>
          <button>
            <img src='/images/icons/copy.svg' alt='' />
          </button>
        </div>
        <h4 className='text-15 font-semibold'>По номеру карты</h4>
        <div className='h-11 w-full bg-[#303030] py-3 rounded-base text-15 font-semibold flex justify-between items-center px-[14px]'>
          <div className='flex items-center gap-[14px]'>
            <span>Т-банк </span>
            <div className='w-[1px] h-5 bg-iron'></div>
            <span>1234 4321 1234 4321</span>
          </div>
          <button>
            <img src='/images/icons/copy.svg' alt='' />
          </button>
        </div>
        <div className='h-11 w-full bg-[#303030] py-3 rounded-base text-15 font-semibold flex justify-between items-center px-[14px]'>
          <div className='flex items-center gap-[14px]'>
            <span>Сбер</span>
            <div className='w-[1px] h-5 bg-iron'></div>
            <span>3234 4321 1234 4323</span>
          </div>
          <button>
            <img src='/images/icons/copy.svg' alt='' />
          </button>
        </div>
        <h4 className='text-15 font-semibold leading-full'>По номеру карты</h4>
        <span className='text-xxs leading-full'>Т-банк, Сбер, Альфа банк.</span>
        <div className='h-11 w-full bg-[#303030] py-3 rounded-base text-15 font-semibold flex justify-between items-center px-[14px]'>
          <span>+79996665544</span>
          <button>
            <img src='/images/icons/copy.svg' alt='' />
          </button>
        </div>
      </div>
      <UploadImg label='Чек или скриншот оплаты' />
      <div className='space-y-2'>
        <Button>Подтвердить оплату и отправить</Button>
        <Button gray={true}>Отменить заявку</Button>
      </div>
    </CardUI>
  </div>
);

const ServicesContent = () => (
  <div>
    <p className='text-center text-[17px] leading-full mb-5'>
      Переведите TON на указанный адресс, как только блокчейн выполнит перевод,
      ваша заявка подтвердится.
    </p>
    <CardUI className='!p-3 space-y-5'>
      <div className='space-y-2'>
        <h4 className='text-15 font-semibold leading-full'>
          Скопируйте количество TON
        </h4>
        <div className='h-11 w-full bg-[#303030] py-3 rounded-base text-15 font-semibold flex justify-between items-center px-[14px]'>
          <span>2.944507361268403</span>
          <button>
            <img src='/images/icons/copy.svg' alt='' />
          </button>
        </div>
        <h4 className='text-15 font-semibold leading-full'>
          Переведите на этот адрес.
        </h4>
        <span className='text-xs leading-full text-[#757575]'>
          Tag/Memo указывать не нужно.
        </span>
        <div className='h-11 w-full bg-[#303030] py-3 rounded-base text-15 font-semibold flex justify-between items-center px-[14px]'>
          <div className='flex items-center gap-2'>
            <span>TON</span>
            <div className='w-[1px] h-5 bg-iron'></div>
            <span>UQB_vgViOrTwh...-K7YtByd0u</span>
          </div>
          <button>
            <img src='/images/icons/copy.svg' alt='' />
          </button>
        </div>
      </div>
      <div className='space-y-2'>
        <Button>Я перевёл</Button>
        <Button gray={true}>Отменить заявку</Button>
      </div>
    </CardUI>
  </div>
);
