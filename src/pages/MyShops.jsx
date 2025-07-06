import { Link } from 'react-router-dom';
import Search from '../components/Search';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import Title from '../components/Title';

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

const MyShops = () => {
  return (
    <div>
      {/* search */}
      <div className='flex items-center gap-2'>
        <Link className='mr-2 w-10' to='#!'>
          <img src='/images/icons/prev-arrow.svg' alt='prev arrow' />
        </Link>
        <Search />
        <Button className='min-w-[50px] max-w-[50px] h-[45px]'>
          <img src='/images/icons/plus.svg' alt='shop icon' />
        </Button>
        <button className='w-[50px] h-[45px] flex items-center justify-center'>
          <img
            src='/images/icons/refresh.svg'
            alt='refresh icon'
            width={17}
            height={21}
          />
        </button>
      </div>
      <Title label='Мои магазины' />
      {/* products */}
      <div className='space-y-1'>
        {products.map((product) => (
          <ProductCard key={product.id} data={product} btns={true} />
        ))}
      </div>
    </div>
  );
};
export default MyShops;
