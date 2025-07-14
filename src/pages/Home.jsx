import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Tab from '../components/Tab';
import CardUI from '../components/CardUI';

const Home = () => {
  // Sample image data (replace with your own images)
  const slides = [
    { src: 'images/slider-img.png', alt: 'slider img 1' },
    { src: 'images/slider-img.png', alt: 'slider img 2' },
    { src: 'images/slider-img.png', alt: 'slider img 3' },
  ];

  const tabData = [
    { id: '1', label: 'Я покупатель', content: <Buyer /> },
    { id: '2', label: 'Я продавец', content: <Seller /> },
  ];

  return (
    <div>
      <h1 className='text-[17px] font-bold text-center mb-5 text-white'>
        Главная
      </h1>
      <div className='mb-[15px] shadow-card-shd rounded-[20px] overflow-hidden bg-[#181818] h-[232px]'>
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className='h-full'
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                className='w-full h-full object-cover'
                src={slide.src}
                alt={slide.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Tab tabData={tabData} sizeLg={true} />
      <div className='mt-[6px] bg-ai-card flex items-center justify-between pl-[18px] rounded-base'>
        <div className='flex items-center gap-[5px]'>
          <img
            className='w-[25px] h-[25px] rounded-full object-cover'
            src='images/blog-logo.svg'
            alt='blog-logo'
          />
          <div>
            <a className='text-[13px] italic flex items-center gap-2' href='#!'>
              <span>Avocx Devblog</span>
              <svg
                width='16'
                height='9'
                viewBox='0 0 16 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 4.5L11.1111 0.999999M15 4.5L11.1111 8M15 4.5L1 4.5'
                  stroke='#fff'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
            <p className='text-[8px] font-normal'>
              News, promotions, giveaways.
            </p>
          </div>
        </div>
        <img src='/images/ai.png' alt='ai img' />
      </div>
    </div>
  );
};

export default Home;

const Buyer = () => {
  const cardsData = [
    {
      id: '1',
      title: 'Реклама',
      description:
        'Покупайте и продавайте рекламу быстро, выгодно и без обмана.',
      icon: '/images/icons/trade-up-blue.svg',
    },
    {
      id: '2',
      title: 'Магазины',
      description:
        'Покупайте множество товаров напрямую у авторов телеграм каналов.',
      icon: '/images/icons/home-blue.svg',
    },
    {
      id: '3',
      title: 'Услуги и Работа',
      description:
        'Найдутся решение для любых задач, от топ специалистов, до новичков.',
      icon: '/images/icons/work.svg',
    },
    {
      id: '4',
      title: 'Биржа каналов',
      description:
        'Покупайте и продавайте каналы, чаты и боты, с avocx гарантом.',
      icon: '/images/icons/canal.svg',
    },
    {
      id: '5',
      title: 'Биржа подарков',
      description: 'Покупайте и продавайте NFT подарки быстро и надежно.',
      icon: '/images/icons/gift.svg',
    },
    {
      id: '6',
      title: 'TON Two teams',
      description:
        'Есть две версии, чея окажется верной разделят приз на всю команду',
      icon: '/images/icons/diamon.svg',
    },
    {
      id: '7',
      title: 'Обмен валют',
      description: 'Легальные обмены валют и криптовалют по всему миру.',
      icon: '/images/icons/change-valute.svg',
    },
    {
      id: '8',
      title: 'Розыгрыши',
      description:
        'Создайте или участвуйте в розыгрыше подарков, подписок, звёзд или других призов.',
      icon: '/images/icons/flag.svg',
    },
  ];

  return (
    <div className='grid grid-cols-2 gap-[10px]'>
      {cardsData.map((card) => (
        <CardUI key={card.id} className='!p-[12px] rounded-base !bg-[#1E1E1E] min-h-[92px]'>
          <div className='flex items-center gap-2 mb-3'>
            <img
              src={card.icon}
              alt={`${card.title} icon`}
              className='w-4'
            />
            <span className='text-sm font-semibold text-white'>
              {card.title}
            </span>
          </div>
          <p className='text-[10px] leading-full text-grayCustom'>{card.description}</p>
        </CardUI>
      ))}
    </div>
  );
};

const Seller = () => {
  const cardsData2 = [
    {
      id: '1',
      title: 'Реклама',
      description:
        'Покупайте и продавайте рекламу быстро, выгодно и без обмана.',
      icon: '/images/icons/trade-up-blue.svg',
    },
    {
      id: '2',
      title: 'Магазины',
      description:
        'Покупайте множество товаров напрямую у авторов телеграм каналов.',
      icon: '/images/icons/home-blue.svg',
    },
    {
      id: '3',
      title: 'Услуги и Работа',
      description:
        'Найдутся решение для любых задач, от топ специалистов, до новичков.',
      icon: '/images/icons/work.svg',
    },
    {
      id: '4',
      title: 'Биржа каналов',
      description:
        'Покупайте и продавайте каналы, чаты и боты, с avocx гарантом.',
      icon: '/images/icons/canal.svg',
    },
    {
      id: '5',
      title: 'Биржа подарков',
      description: 'Покупайте и продавайте NFT подарки быстро и надежно.',
      icon: '/images/icons/gift.svg',
    },
    {
      id: '6',
      title: 'TON Two teams',
      description:
        'Есть две версии, чея окажется верной разделят приз на всю команду',
      icon: '/images/icons/diamon.svg',
    },
    {
      id: '7',
      title: 'Обмен валют',
      description: 'Легальные обмены валют и криптовалют по всему миру.',
      icon: '/images/icons/change-valute.svg',
    },
    {
      id: '8',
      title: 'Розыгрыши',
      description:
        'Создайте или участвуйте в розыгрыше подарков, подписок, звёзд или других призов.',
      icon: '/images/icons/flag.svg',
    },
  ];

  return (
    <div className='grid grid-cols-2 gap-[10px]'>
      {cardsData2.map((card) => (
        <CardUI key={card.id} className='!p-[12px] rounded-base !bg-[#1E1E1E] min-h-[92px]'>
          <div className='flex items-center gap-2 mb-3'>
            <img
              src={card.icon}
              alt={`${card.title} icon`}
              className='w-4'
            />
            <span className='text-sm font-semibold text-white'>
              {card.title}
            </span>
          </div>
          <p className='text-[10px] leading-full text-grayCustom'>{card.description}</p>
        </CardUI>
      ))}
    </div>
  );
};
