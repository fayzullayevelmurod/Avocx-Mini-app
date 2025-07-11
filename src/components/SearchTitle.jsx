import { Link } from 'react-router-dom';
import Title from './Title';

const SearchTitle = ({ label, className }) => {
  return (
    <div className={`flex items-center justify-center ${className} relative`}>
      <Link
        className='mr-2 w-10 absolute top-1/2 -translate-y-1/2 left-0'
        to='#!'
      >
        <img src='/images/icons/prev-arrow.svg' alt='prev arrow' />
      </Link>
      <Title label={label} className='!m-0' />
      <button className='h-[22px] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0'>
        <img
          src='/images/icons/refresh.svg'
          alt='refresh icon'
          width={17}
          height={21}
        />
      </button>
    </div>
  );
};

export default SearchTitle;
