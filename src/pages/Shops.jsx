import { Link } from 'react-router-dom';
import Search from '../components/Search';
import Button from '../components/Button';
import Categories from '../components/Categories';
import Title from '../components/Title';
import ProductCard from '../components/ProductCard';


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

const Shops = () => {
  return (
    <div className='shops-page'>
      <div>
        {/* search */}
        <div className='flex items-center gap-2'>
          <Link className='mr-2 w-10' to='#!'>
            <svg
              width='26'
              height='16'
              viewBox='0 0 26 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='light-icon'
            >
              <path
                d='M1 7.86018L7.6909 14.5111M1 7.86018L7.6909 1.20923M1 7.86018H25.0872'
                stroke='#E8E8E8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
          <Search />
          <Button className='min-w-[50px] max-w-[50px] h-[45px]'>
            <img src='/images/icons/shop.svg' alt='shop icon' />
          </Button>
          <button className='w-[45px] h-[45px] flex items-center justify-end'>
            <svg
              width='20'
              height='24'
              viewBox='0 0 20 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='light-icon'
            >
              <path
                d='M7.84912 16.9984H1.79044V23.0901M12.6961 7.25163H18.7547V1.15991M1.28516 8.47412C1.96456 6.78337 3.10207 5.31816 4.56841 4.24503C6.03474 3.1719 7.77261 2.53362 9.58161 2.40324C11.3906 2.27286 13.1986 2.65531 14.8022 3.50719C16.4058 4.35906 17.7384 5.64651 18.6507 7.22254M19.2607 15.7765C18.5813 17.4672 17.4438 18.9324 15.9775 20.0055C14.5111 21.0787 12.775 21.7161 10.966 21.8465C9.15703 21.9769 7.34754 21.5945 5.74397 20.7426C4.14039 19.8908 2.80687 18.6035 1.89457 17.0275'
                stroke='#E8E8E8'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </button>
        </div>
        {/* filter */}
        <div className='flex gap-2 mt-[9px] mb-2'>
          <button className='flex-1 flex items-center gap-[10px] px-4 bg-carbon h-12 rounded-base'>
            <svg
              width='19'
              height='11'
              viewBox='0 0 19 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='light-icon'
            >
              <path
                d='M1.43994 10.1886H17.5439M1.43994 5.65937H17.5439M1.43994 1.13013H17.5439'
                stroke='#F5F5F5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <span>Категории</span>
          </button>
          <button className='flex-1 flex items-center gap-[10px] px-4 bg-carbon h-12 rounded-base'>
            <svg
              width='15'
              height='16'
              viewBox='0 0 15 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='light-icon'
            >
              <path
                d='M14.417 2.42806C14.417 1.96915 14.4167 1.73953 14.3276 1.56425C14.2492 1.41007 14.1245 1.28481 13.9706 1.20625C13.7957 1.11694 13.5662 1.11694 13.1082 1.11694H2.64065C2.18265 1.11694 1.95388 1.11694 1.77894 1.20625C1.62507 1.28481 1.50006 1.41007 1.42165 1.56425C1.33252 1.73953 1.33252 1.96915 1.33252 2.42806V3.03216C1.33252 3.23258 1.33252 3.33286 1.35511 3.42716C1.37515 3.51077 1.40827 3.59064 1.45311 3.66395C1.50367 3.74661 1.57451 3.81759 1.71585 3.95922L5.85606 8.1076C5.99749 8.24931 6.06783 8.31978 6.1184 8.40247C6.16323 8.47578 6.19681 8.55592 6.21684 8.63953C6.2392 8.73287 6.2392 8.83197 6.2392 9.02833V12.9252C6.2392 13.6276 6.2392 13.9791 6.38685 14.1906C6.51577 14.3753 6.71466 14.4985 6.93719 14.5314C7.19203 14.5691 7.50571 14.4122 8.13271 14.0981L8.78694 13.7704C9.04949 13.6388 9.18046 13.5728 9.27637 13.4747C9.36119 13.3879 9.42607 13.2837 9.4656 13.1689C9.5103 13.0391 9.51032 12.8916 9.51032 12.5975V9.03443C9.51032 8.83401 9.51032 8.73383 9.53292 8.63953C9.55295 8.55592 9.58607 8.47578 9.63091 8.40247C9.68115 8.32033 9.75129 8.25005 9.89085 8.11022L9.89366 8.1076L14.0339 3.95922C14.1753 3.8175 14.2456 3.74664 14.2962 3.66395C14.341 3.59064 14.3746 3.51077 14.3946 3.42716C14.417 3.33382 14.417 3.23462 14.417 3.03826V2.42806Z'
                stroke='#F5F5F5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <span>Сортировка</span>
          </button>
          <button className='w-[35px] flex items-center justify-center bg-carbon h-12 rounded-base'>
            <img src='/images/icons/star.svg' alt='star' />
          </button>
        </div>
        <Categories />
        <Title label='Магазины' className='!mb-[15px]' />

        <div className='space-y-1'>
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shops;
