import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  { label: 'На хайпе', to: '/hype', className: 'bg-orange' },
  { label: 'Бестселлеры', to: '/bestsellers', className: 'bg-primary' },
  { label: 'Бренды', to: '/brands', className: 'bg-purple' },
  { label: 'Скидки', to: '/discounts', className: 'bg-green' },
];

const Categories = ({ categoriesData = categories }) => {
  return (
    <div className='relative'>
      {/* <div className='absolute top-0 -right-[17px] rounded-l-base w-[48px] h-full z-10 bg-green-dark-gradient'></div> */}
      <div className='categories-container overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth -mx-4 pl-4 pr-4 relative'>
        <div className='flex gap-2 whitespace-nowrap pr-4 mr-4'>
          {categoriesData.map((category, index) => (
            <Link
              key={index}
              to={category.to}
              className={`${category.className} ${
                index === categoriesData.length - 1 ? 'bg-green-dark-gradient' : ''
              } shadow-inset-light h-[35px] flex items-center justify-center min-w-[110px] rounded-base text-xs font-semibold snap-center flex-shrink-0 transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500`}
            >
              {category.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
