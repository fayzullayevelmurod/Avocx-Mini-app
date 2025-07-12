import { Link } from 'react-router-dom';
import Search from '../components/Search';
import CardUI from '../components/CardUI';
import ProductCard from '../components/ProductCard';
import Card from '../components/Card';

const ProductCardTwo = () => {
  const cardProducts = [
    {
      id: 1,
      image: null,
      imageAlt: 'Standart',
      brand: 'Текст 1',
      title: 'Текст 2',
      condition: 'Характеристика: значение',
      size: 'Характеристика: значение',
      price: '2.500₽',
      favoriteIcon: '/images/icons/star.svg',
      favoriteIconAlt: 'favorite icon',
    },
  ];

  const cardProducts2 = [
    {
      id: 1,
      image: null,
      imageAlt: 'Шаблон 1',
      brand: 'Avocx Superbot',
      title: 'Avocx Pro',
      condition: 'Подписка: Avocx Pro 1 месяц',
      size: 'Акция: + shop costructor',
      price: '2.500₽',
      favoriteIcon: '/images/icons/star.svg',
      favoriteIconAlt: 'favorite icon',
    },
  ];
  return (
    <div>
      {/* search */}
      <div className='flex items-center gap-[5px] mb-4 -mt-[9px]'>
        <Link className='mr-2 w-8' to='#!'>
          <img src='/images/icons/prev-arrow.svg' alt='prev arrow' />
        </Link>
        <Search />
        <button className='w-[37px] h-[45px] flex items-center justify-end'>
          <img
            className='w-5'
            src='/images/icons/refresh.svg'
            alt='refresh icon'
            width={20}
          />
        </button>
      </div>
      <CardUI className='!px-6 !py-[10px] h-[67px] !rounded-[20px] flex items-center relative'>
        <div className='flex items-center justify-between gap-[11px]'>
          <img
            className='w-12 h-12 rounded-full'
            src='/images/company-logo.svg'
            alt='product company logo'
          />
          <div className=''>
            <h3 className='text-base font-semibold leading-full mb-[6px]'>
              SHLZ.STORE 🥇
            </h3>
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
        </div>
      </CardUI>
      <div className='text-center mt-[18px] mb-5'>
        <h4 className='text-xl font-bold leading-full mb-[7px]'>
          Добавление нового товара
        </h4>
        <p className='text-base leading-[111%]'>
          Выберите подходящий шаблон, или создайте свой собственный.
        </p>
      </div>
      <div className='grid grid-cols-2 gap-[6px]'>
        {cardProducts.map((product) => (
          <Card key={product.id} data={product} />
        ))}
        <CardUI className='flex items-center justify-center text-iron !rounded-[20px]'>
          <span className='text-xl font-bold'>+ Создать</span>
        </CardUI>
      </div>
      <h4 className='text-xl font-bold leading-full mb-[19px] text-center mt-[22px]'>
        Мои шаблоны
      </h4>
      <div className='w-[202px]'>
        {cardProducts2.map((product) => (
          <Card key={product.id} data={product} actions={true} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardTwo;
