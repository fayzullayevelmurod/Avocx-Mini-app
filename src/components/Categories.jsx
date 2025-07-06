import { Link } from 'react-router-dom';

const categories = [
  { label: 'На хайпе', to: '/hype', className: 'bg-orange' },
  { label: 'Бестселлеры', to: '/bestsellers', className: 'bg-primary' },
  { label: 'Бренды', to: '/brands', className: 'bg-purple' },
  { label: 'Скидки', to: '/discounts', className: 'bg-green-dark-gradient' },
];

const Categories = () => {
  return (
    <div className='overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth -mx-4 pl-4 pr-4'>
      <div className='flex gap-2 whitespace-nowrap pr-4'>
        {categories.map((category, index) => (
          <Link
            key={index}
            to='#!'
            className={`${category.className} shadow-inset-light h-[35px] flex items-center justify-center min-w-[110px] rounded-base text-xs font-semibold snap-center flex-shrink-0 transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500`}
          >
            {category.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
