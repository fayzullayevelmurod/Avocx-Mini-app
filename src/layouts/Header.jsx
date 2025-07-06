import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='pt-6 mb-[18px]'>
      <div className='max-w-[368px] mx-auto flex items-center justify-between'>
        <Link to='/home'>
          <img src='/images/logo.svg' alt='logo' width={69} height={27} />
        </Link>
        <div className='flex items-center gap-2'>
          <Link className='text-15' to='#!'>
            @norffas
          </Link>
          <div className='flex items-center'>
            <div className='bg-purple w-8 h-8 rounded-full p-[1px] relative'>
              <img
                className='w-full h-full object-cover'
                src='/images/user.png'
                alt='user'
              />
            </div>
            <div className='bg-purple italic text-xxs font-semibold h-5 -ml-1 px-2 rounded-r-3xl flex items-center justify-center'>
              Pro
            </div>
          </div>
        </div>
        <button>
          <img src='/images/icons/menu.svg' alt='menu icon' />
        </button>
      </div>
    </header>
  );
};
export default Header;
