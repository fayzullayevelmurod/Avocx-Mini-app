import { Link } from 'react-router-dom';
import Search from '../components/Search';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import Title from '../components/Title';
import Card from '../components/Card';

const products = [
  {
    id: 1,
    image: '/images/product-img.png',
    imageAlt: 'product image',
    companyLogo: '/images/company-logo.svg',
    companyLogoAlt: 'company logo',
    title: 'SHLZ.STORE 🥇',
    groupCount: 15788,
    cartCount: 7332,
    description:
      'Только оригинальные вещи от Gucci. Огромная коллекция вещей со всего мира, есть очень редкие экземпляры.',
  },
];

const cardProducts = [
  {
    id: 1,
    image: '/images/product-img-3.png',
    imageAlt: 'product image',
    brand: 'Christian Dior',
    title: 'Monogram Panel cap',
    condition: 'Отличное',
    size: 'S (54)',
    price: '2.500₽',
    favoriteIcon: '/images/icons/star.svg',
    favoriteIconAlt: 'favorite icon',
  },
    {
    id: 2,
    image: '/images/product-img-3.png',
    imageAlt: 'product image',
    brand: 'Christian Dior',
    title: 'Monogram Panel cap',
    condition: 'Отличное',
    size: 'S (54)',
    price: '2.500₽',
    favoriteIcon: '/images/icons/star.svg',
    favoriteIconAlt: 'favorite icon',
  },
];

const MyShopsTwo = () => {
  return (
    <div>
      {/* search */}
      <div className='flex items-center gap-2'>
        <Link className='mr-2 w-10' to='#!'>
          <img src='/images/icons/prev-arrow.svg' alt='prev arrow' />
        </Link>
        <Search />
        <button className='ml-[3px] w-[30px] h-[45px] flex items-center justify-center'>
          <img
            src='/images/icons/refresh.svg'
            alt='refresh icon'
            width={17}
            height={21}
          />
        </button>
      </div>

      {/* products */}
      <div className='space-y-1 mt-[18px]'>
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>

      {/* filter */}
      <div className='flex gap-2 mt-3 mb-2'>
        <button className='flex-1 flex items-center gap-[10px] px-4 bg-carbon h-12 rounded-base'>
          <img src='/images/icons/menu-2.svg' alt='menu' />
          <span>Категории</span>
        </button>
        <button className='flex-1 flex items-center gap-[10px] px-4 bg-carbon h-12 rounded-base'>
          <img src='/images/icons/filter.svg' alt='filter' />
          <span>Сортировка</span>
        </button>
        <button className='w-[35px] flex items-center justify-center bg-carbon h-12 rounded-base'>
          <img src='/images/icons/star.svg' alt='star' />
        </button>
      </div>
      <Title label='Новое' />
      <div className='grid grid-cols-2 gap-[6px]'>
        {cardProducts.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
export default MyShopsTwo;
