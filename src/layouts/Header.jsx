import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Select } from '../components/Form';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);

  const options = [
    { value: 'ruble', label: 'Валюта: ₽' },
    { value: 'usd', label: 'Валюта: $' },
  ];
  const options2 = [
    { value: 'ruble', label: 'Язык: Russian' },
    { value: 'usd', label: 'Язык: Uzbek' },
  ];

  const menuItems = [
    'Корзина',
    'Мои заказы',
    'Реклама',
    'Моя реклама',
    'Биржа каналов',
    'Магазины',
    'Мои магазины',
    'Аналитика',
    'Настройки',
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = (theme) => {
    setIsLightTheme(theme === 'light');
  };

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    document.body.classList.toggle('light-theme', isLightTheme);
    return () => {
      document.body.classList.remove('overflow-hidden', 'light-theme');
    };
  }, [isMenuOpen, isLightTheme]);

  return (
    <div>
      <header className='pt-6 mb-[18px] px-9'>
        <div className='max-w-[368px] mx-auto flex items-center justify-between'>
          <Link to='/home'>
            <svg
              className='header-logo'
              width='70'
              height='27'
              viewBox='0 0 70 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.764 13.176C4.85467 13.176 4.01133 12.9707 3.234 12.56C2.45667 12.1347 1.83333 11.526 1.364 10.734C0.894667 9.942 0.66 8.98867 0.66 7.874C0.66 6.87667 0.821333 5.96 1.144 5.124C1.48133 4.288 1.95067 3.562 2.552 2.946C3.15333 2.33 3.85 1.85333 4.642 1.516C5.434 1.164 6.28467 0.988 7.194 0.988C8.17667 0.988 9.02 1.17133 9.724 1.538C10.428 1.90467 10.9487 2.47667 11.286 3.254C11.638 4.01667 11.7627 5.00667 11.66 6.224C11.5867 7.61733 11.3007 8.842 10.802 9.898C10.3033 10.9393 9.62867 11.746 8.778 12.318C7.942 12.89 6.93733 13.176 5.764 13.176ZM6.82 10.338C7.49467 10.338 8.08867 10.1767 8.602 9.854C9.13 9.51667 9.54067 9.062 9.834 8.49C10.142 7.90333 10.296 7.22133 10.296 6.444C10.296 5.63733 10.054 4.99933 9.57 4.53C9.10067 4.06067 8.44067 3.826 7.59 3.826C6.93 3.826 6.336 3.99467 5.808 4.332C5.28 4.65467 4.862 5.10933 4.554 5.696C4.26067 6.268 4.114 6.94267 4.114 7.72C4.114 8.52667 4.34867 9.16467 4.818 9.634C5.302 10.1033 5.96933 10.338 6.82 10.338ZM9.174 13L9.636 10.646L10.406 7.126L10.868 3.606L11.352 1.164H14.784L12.43 13H9.174ZM18.8195 13L16.2015 1.164H19.5895L21.7675 11.35H20.0075L26.2775 1.164H29.7095L22.3615 13H18.8195ZM34.6156 13.176C33.413 13.176 32.3643 12.956 31.4696 12.516C30.575 12.076 29.8783 11.46 29.3796 10.668C28.8956 9.876 28.6536 8.94467 28.6536 7.874C28.6536 6.554 28.9616 5.38067 29.5776 4.354C30.1936 3.31267 31.037 2.49133 32.1076 1.89C33.193 1.28867 34.425 0.988 35.8036 0.988C37.021 0.988 38.0696 1.208 38.9496 1.648C39.8443 2.088 40.5336 2.704 41.0176 3.496C41.5163 4.27333 41.7656 5.20467 41.7656 6.29C41.7656 7.59533 41.4576 8.76867 40.8416 9.81C40.2256 10.8513 39.3823 11.6727 38.3116 12.274C37.241 12.8753 36.009 13.176 34.6156 13.176ZM34.8356 10.36C35.5103 10.36 36.1043 10.1987 36.6176 9.876C37.1456 9.53867 37.5563 9.07667 37.8496 8.49C38.143 7.90333 38.2896 7.22133 38.2896 6.444C38.2896 5.652 38.055 5.014 37.5856 4.53C37.1163 4.046 36.4563 3.804 35.6056 3.804C34.931 3.804 34.3296 3.97267 33.8016 4.31C33.2883 4.63267 32.8776 5.08733 32.5696 5.674C32.2763 6.26067 32.1296 6.94267 32.1296 7.72C32.1296 8.52667 32.3643 9.172 32.8336 9.656C33.303 10.1253 33.9703 10.36 34.8356 10.36ZM49.0762 13.176C47.8588 13.176 46.7955 12.956 45.8862 12.516C44.9915 12.076 44.2948 11.46 43.7962 10.668C43.2975 9.876 43.0482 8.94467 43.0482 7.874C43.0482 6.554 43.3562 5.38067 43.9722 4.354C44.5882 3.31267 45.4388 2.49133 46.5242 1.89C47.6095 1.28867 48.8562 0.988 50.2642 0.988C51.5255 0.988 52.6182 1.252 53.5422 1.78C54.4662 2.29333 55.1482 3.02667 55.5882 3.98L52.6842 5.432C52.4348 4.87467 52.0828 4.47133 51.6282 4.222C51.1882 3.958 50.6602 3.826 50.0442 3.826C49.3695 3.826 48.7682 3.99467 48.2402 4.332C47.7122 4.65467 47.2942 5.10933 46.9862 5.696C46.6782 6.268 46.5242 6.93533 46.5242 7.698C46.5242 8.50467 46.7588 9.15 47.2282 9.634C47.7122 10.1033 48.3942 10.338 49.2742 10.338C49.8755 10.338 50.4255 10.2133 50.9242 9.964C51.4228 9.7 51.8408 9.29667 52.1782 8.754L54.7082 10.338C54.1508 11.2327 53.3735 11.9293 52.3762 12.428C51.3935 12.9267 50.2935 13.176 49.0762 13.176ZM53.9629 13L60.7829 6.004L60.3429 7.742L56.7349 1.164H60.2989L62.7629 5.718L61.1789 5.696L65.4689 1.164H69.2529L62.7409 7.94L63.0269 6.114L66.8549 13H63.2249L60.6949 8.292H62.3009L57.8789 13H53.9629Z'
                fill='#E8E8E8'
              />
            </svg>
          </Link>
          <div className='flex items-center gap-2'>
            <Link className='text-15 text-base-white' to='#!'>
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
              <div className='bg-purple italic text-xxs font-semibold h-5 -ml-1 px-2 rounded-r-3xl flex items-center justify-center text-white'>
                Pro
              </div>
            </div>
          </div>
          <button onClick={toggleMenu}>
            <svg
              width='27'
              height='21'
              viewBox='0 0 27 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='light-icon'
            >
              <path
                d='M11.6286 19.4555H25.8M1 10.5H25.8M11.6286 1.54443H25.8'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </header>
      {/* media menu */}
      <div
        className={`media-menu fixed top-0 right-0 w-full h-[100dvh] overflow-y-auto bg-nav pr-[25px] py-8 z-[999] transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className='ml-auto block' onClick={closeMenu}>
          <img src='/images/icons/close.svg' alt='close icon' />
        </button>
        <ul className='my-9'>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                className='border-b w-full font-medium flex items-center justify-end text-right border-[#303030]  text-[23px] text-base-white leading-[196%] h-[42px]'
                to='#!'
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className='w-[318px] ml-auto'>
          <div className='flex gap-4 mb-[13px]'>
            <div className='flex-1'>
              <Select
                options={options}
                rightIcon={true}
                selected={true}
                bgColor='bg-charcoal'
              />
            </div>
            <div className='w-[112px] bg-charcoal rounded-base overflow-hidden flex'>
              <button
                className={`w-14 flex duration-200 items-center justify-center  h-full rounded-base ${
                  isLightTheme ? '' : 'bg-primary'
                }`}
                onClick={() => toggleTheme('dark')}
              >
                <img src='/images/icons/moon.svg' alt='moon icon' />
              </button>
              <button
                className={`w-14 flex duration-200 items-center justify-center  h-full rounded-base ${
                  isLightTheme ? 'bg-primary' : ''
                }`}
                onClick={() => toggleTheme('light')}
              >
                <img src='/images/icons/soon.svg' alt='soon icon' />
              </button>
            </div>
          </div>
          <Select
            options={options2}
            rightIcon={true}
            selected={true}
            bgColor='bg-charcoal'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
