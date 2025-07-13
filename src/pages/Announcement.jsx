import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Search from '../components/Search';
import Date from '../components/Date';
import Categories from '../components/Categories';
import Title from '../components/Title';
import CardUI from '../components/CardUI';
import Sort from '../components/Sort';

// import { motion } from 'framer-motion';
// import { useState } from 'react';

// export const ShopButton = () => {
//   const [ripple, setRipple] = useState(false);

//   const handleClick = () => {
//     setRipple(true);
//     setTimeout(() => setRipple(false), 400);
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className='relative overflow-hidden w-[34.89px] h-[31.20px] shadow-btn-inset !rounded-[13px] bg-blue-600 flex items-center justify-center mr-[1px]'
//     >
//       {/* Silkinuvchi fon */}
//       <motion.div
//         whileTap={{ scale: 0.9 }}
//         className='absolute inset-0 rounded-[13px]'
//       />

//       {/* Ikonka – silkinmaydi */}
//       <img
//         src='/images/icons/white-cart.svg'
//         alt=''
//         className='relative z-10 pointer-events-none'
//       />

//       {/* Ripple effekti */}
//       {ripple && (
//         <motion.span
//           initial={{ scale: 0, opacity: 0.6 }}
//           animate={{ scale: 2.5, opacity: 0 }}
//           transition={{ duration: 0.4, ease: 'easeOut' }}
//           className='absolute w-16 h-16 bg-blue-400 rounded-full pointer-events-none z-0'
//           style={{
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//           }}
//         />
//       )}
//     </button>
//   );
// };

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';

export const ShopButton = () => {
  const [ripple, setRipple] = useState(false);

  const handleClick = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 400); // Ripple animatsiyasini tozalash
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.9 }} // "Prujina" effekti
      className='relative overflow-hidden w-[34.89236831665039px] h-[31.20182991027832px] shadow-btn-inset !rounded-[13px] bg-blue-600 flex items-center justify-center mr-[1px]'
    >
      <img src='/images/icons/white-cart.svg' alt='' />

      {ripple && (
        <motion.span
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className='absolute w-16 h-16 bg-blue-400 rounded-full pointer-events-none'
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </motion.button>
  );
};

const Announcement = () => {
  const categories = [
    { label: 'Горячее', to: '/hype', className: 'bg-orange' },
    { label: 'На трафике', to: '/bestsellers', className: 'bg-primary' },
    { label: 'Проверенное', to: '/brands', className: 'bg-purple' },
    { label: 'Свежие', to: '/discounts', className: 'bg-green' },
  ];
  return (
    <div>
      {/* search */}
      <div className='flex items-center gap-2 h-[45px]'>
        <Link className='mr-2 w-10' to='#!'>
          <img src='/images/icons/prev-arrow.svg' alt='prev arrow' />
        </Link>
        <Search />
        <Button className='min-w-[50px] max-w-[50px] !h-[45px]'>
          <img src='/images/icons/plus.svg' alt='shop icon' />
        </Button>
        <Button className='min-w-[50px] max-w-[50px] !h-[45px]'>
          <img src='/images/icons/trade-up.svg' alt='shop icon' />
        </Button>
        <button className='w-[50px] h-[45px] flex items-center justify-end'>
          <img
            src='/images/icons/refresh.svg'
            alt='refresh icon'
            width={20}
            height={21}
          />
        </button>
      </div>
      {/* filter */}
      <div className='space-y-2'>
        <div className='flex gap-2 mt-3'>
          <button className='flex-1 flex text-15 items-center gap-[10px] pr-4 bg-carbon h-12 rounded-base pl-[14px]'>
            <img src='/images/icons/menu-2.svg' alt='menu' />
            <span>Категории</span>
          </button>
          <Sort />
          <button className='min-w-[35px] max-w-[35px] flex items-center justify-center bg-carbon h-12 rounded-base'>
            <img src='/images/icons/star.svg' alt='star' />
          </button>
        </div>
        <Date />
        <Button className='!bg-[#242424] !mt-[10px]'>
          <img src='images/icons/ai.svg' alt='' />
          <span>Ai Mass Ads</span>
        </Button>
        <Categories categoriesData={categories} />
      </div>
      <Title label='Подборка дня' className='!mt-[19px]' />
      <div className='space-y-[3px]'>
        <CardUI className='!p-[11px] !rounded-[20px] relative'>
          <div className='flex items-start justify-between'>
            <div className='flex items-start gap-[5px]'>
              <div className='bg-[#3B3B3B] rounded-t-[79px] rounded-b-[25px] w-[53px] h-[65px] p-[2px] flex justify-between flex-col items-center'>
                <img
                  className='w-[48px] h-[47px]'
                  src='images/icons/logo.svg'
                  alt='logo'
                />
                <span className='text-[7px] text-grayCustom'>Diamond</span>
              </div>
              <div>
                <h4 className='text-[17px] font-semibold leading-full mt-[3px]'>
                  Cчастье Сейчас
                </h4>
                <p className='text-[10px] font-normal text-grayCustom leading-full mt-[1px] mb-[5px]'>
                  Психология, Цитаты, Литература.
                </p>
                <div className='flex items-center gap-[9px] my-[2px] mt-[-3px]'>
                  <div className='flex items-center gap-[5px] min-w-[60px]'>
                    <img src='images/icons/users.svg' alt='' />
                    <span className='text-xs text-grayCustom'>17.345</span>
                  </div>
                  <div className='flex gap-[2px]'>
                    <img src='images/icons/trade-down.svg' alt='' />
                    <img src='images/icons/trade-success.svg' alt='' />
                    <img src='images/icons/trade-success.svg' alt='' />
                  </div>
                </div>
                <div className='flex items-center gap-[9px] mt-[3px]'>
                  <div className='flex items-center gap-[5px] min-w-[60px]'>
                    <img src='images/icons/er.svg' alt='er' />
                    <span className='text-xs text-grayCustom'>21%</span>
                  </div>
                  <div className='flex items-center gap-[5px]'>
                    <img src='images/icons/see.svg' alt='see' />
                    <span className='text-xs text-grayCustom'>
                      567, 754, 1145
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img
              className='absolute top-[10px] right-[10px] w-[19px] h-[19px]'
              src='images/icons/star.svg'
              alt='star icon'
            />
          </div>
          <div className='bg-iron p-[2px] rounded-2xl mt-[7px] flex gap-[2px] h-[38px]'>
            <div className='flex items-center gap-0 justify-between p-[2px] rounded-base bg-charcoal  w-[127.82685852050781px] pl-2 pr-[1px] h-[34.55686569213867px]'>
              <span className='text-[11px] ml-[1px]'>1/48</span>
              <span className='text-[11px] font-bold'>650₽</span>
              {/* <ShopButton /> */}
              <Button className='min-w-[34.89236831665039px] min-h-[31.20182991027832px] max-w-[34.89236831665039px] max-h-[31.20182991027832px] shadow-btn-inset !rounded-[13px] bg-blue-600 flex items-center justify-center mr-[1px] small-effect'>
                <img src="/images/icons/white-cart.svg" alt="" />
              </Button>
            </div>
            <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
              <span className='text-[11px]'>1/72</span>
            </div>
            <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
              <span className='text-[11px]'>1/168</span>
            </div>
            <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
              <span className='text-[11px]'>Story</span>
            </div>
          </div>
        </CardUI>

        <CardUI className='!p-[11px] !rounded-[20px] relative'>
          <div className='flex items-start justify-between'>
            <div className='flex items-start gap-[5px]'>
              <div className='bg-[#3B3B3B] rounded-t-[79px] rounded-b-[25px] w-[53px] h-[65px] p-[2px] flex justify-between flex-col items-center'>
                <img
                  className='w-[48px] h-[47px]'
                  src='images/icons/logo.svg'
                  alt='logo'
                />
                <span className='text-[7px] text-grayCustom'>Diamond</span>
              </div>
              <div>
                <h4 className='text-[17px] font-semibold leading-full mt-[3px]'>
                  Тайнология
                </h4>
                <p className='text-[10px] font-normal text-grayCustom leading-full mt-[1px] mb-[5px]'>
                  Познавательное, История, Политика.
                </p>
                <div className='flex items-center gap-[9px] my-[2px] mt-[-3px]'>
                  <div className='flex items-center gap-[5px] min-w-[60px]'>
                    <img src='images/icons/users.svg' alt='' />
                    <span className='text-xs text-grayCustom'>735</span>
                  </div>
                  <div className='flex gap-[2px]'>
                    <img src='images/icons/trade-down.svg' alt='' />
                    <img src='images/icons/trade-down.svg' alt='' />
                    <img src='images/icons/trade-success.svg' alt='' />
                  </div>
                </div>
                <div className='flex items-center gap-[9px] mt-[3px]'>
                  <div className='flex items-center gap-[5px] min-w-[60px]'>
                    <img src='images/icons/er.svg' alt='er' />
                    <span className='text-xs text-grayCustom'>13%</span>
                  </div>
                  <div className='flex items-center gap-[5px]'>
                    <img src='images/icons/see.svg' alt='see' />
                    <span className='text-xs text-grayCustom'>
                      231, 313, 420
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img
              className='absolute top-[10px] right-[10px] w-[19px] h-[19px]'
              src='images/icons/star.svg'
              alt='star icon'
            />
          </div>
          <div className='bg-iron p-[2px] rounded-2xl mt-[7px] flex gap-[2px] h-[38px]'>
            <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
              <span className='text-[11px]'>1/24</span>
            </div>
            <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
              <span className='text-[11px]'>1/48</span>
            </div>
            <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
              <span className='text-[11px]'>1/72</span>
            </div>
          </div>
        </CardUI>
      </div>
    </div>
  );
};

export default Announcement;
