import { Link } from 'react-router-dom';
import Search from '../components/Search';
import Button from '../components/Button';
import Categories from '../components/Categories';
import Title from '../components/Title';
import ProductCard from '../components/ProductCard';
import BottomBar from '../layouts/BottomBar';

// products data
const products = [
  {
    id: 1,
    image: '/images/product-img-1.png',
    imageAlt: 'product img',
    companyLogo: '/images/company-logo.svg',
    companyLogoAlt: 'company logo',
    title: 'GUCCI legend',
    groupCount: 15788,
    cartCount: 7332,
    description:
      'Только оригинальные вещи от Gucci. Огромная коллекция вещей со всего мира, есть очень редкие экземпляры.',
  },
  {
    id: 2,
    image: '/images/product-img.png',
    imageAlt: 'product img',
    companyLogo: '/images/company-logo.svg',
    companyLogoAlt: 'company logo',
    title: 'GUCCI legend',
    groupCount: 15788,
    cartCount: 7332,
    description:
      'Только оригинальные вещи от Gucci. Огромная коллекция вещей со всего мира, есть очень редкие экземпляры.',
  },
  {
    id: 3,
    image: '/images/product-img.png',
    imageAlt: 'product img',
    companyLogo: '/images/company-logo.svg',
    companyLogoAlt: 'company logo',
    title: 'GUCCI legend',
    groupCount: 15788,
    cartCount: 7332,
    description:
      'Только оригинальные вещи от Gucci. Огромная коллекция вещей со всего мира, есть очень редкие экземпляры.',
  },
];

const HomePage = () => {
  return (
    <>
      <div>
        {/* search */}
        <div className='flex items-center gap-2'>
          <Link className='mr-2 w-10' to='#!'>
            <img src='/images/icons/prev-arrow.svg' alt='prev arrow' />
          </Link>
          <Search />
          <Button className='min-w-[50px] max-w-[50px] h-[45px]'>
            <img src='/images/icons/shop.svg' alt='shop icon' />
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
        {/* filter */}
        <div className='flex gap-2 mt-3 mb-2'>
          <button className='flex-1 flex items-center gap-[10px] px-4 bg-carbon h-12 rounded-base'>
            <img src='/images/icons/menu-2.svg' alt='menu' />
            <span>Категории</span>
          </button>
          <button className='flex-1 flex items-center gap-[10px] px-4 bg-carbon h-12 rounded-base'>
            <img src='/images/icons/filter.svg' alt='filter' />
            <span>Категории</span>
          </button>
          <button className='w-[35px] flex items-center justify-center bg-carbon h-12 rounded-base'>
            <img src='/images/icons/star.svg' alt='star' />
          </button>
        </div>
        <Categories />
        <Title label='Магазины' />

        <div className='space-y-1'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              imageAlt={product.imageAlt}
              companyLogo={product.companyLogo}
              companyLogoAlt={product.companyLogoAlt}
              title={product.title}
              groupCount={product.groupCount}
              cartCount={product.cartCount}
              description={product.description}
            />
          ))}
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default HomePage;
