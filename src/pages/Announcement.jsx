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
import { useEffect, useRef, useState } from 'react';

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

          {/* Первая карточка с уникальным ID и данными */}
          <ExpandableAdButtons
            cardId='card1'
            buttonsData={[
              { format: '1/48', price: '650₽' },
              { format: '1/72', price: '890₽' },
              { format: '1/168', price: '1200₽' },
              { format: 'Story', price: '1500₽' },
            ]}
          />
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

          {/* Вторая карточка с уникальным ID и другими данными */}
          <ExpandableAdButtons
            cardId='card2'
            buttonsData={[
              { format: '1/24', price: '450₽' },
              { format: '1/48', price: '650₽' },
              { format: '1/72', price: '890₽' },
              { format: 'Story', price: '1200₽' },
            ]}
          />
        </CardUI>
        {/* <CardUI className='!p-[11px] !rounded-[20px] relative'>
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
          <ExpandableAdButtons />
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
          <ExpandableAdButtons />
        </CardUI> */}
      </div>
    </div>
  );
};

export default Announcement;

// Универсальный компонент с уникальным ID
const ExpandableAdButtons = ({ cardId, buttonsData }) => {
  const [expandedButton, setExpandedButton] = useState(null);
  const [ripple, setRipple] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setExpandedButton(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = (format) => {
    if (expandedButton === format) {
      setExpandedButton(null);
    } else {
      setExpandedButton(format);
    }
  };

  const handleCartClick = (e, format, price) => {
    e.stopPropagation();
    setRipple(true);
    setTimeout(() => setRipple(false), 400);
    console.log(`Card ${cardId}: Added ${format} for ${price} to cart`);
  };

  return (
    <div
      ref={containerRef}
      className='bg-iron p-[2px] rounded-2xl mt-[7px] flex gap-[2px] h-[38px]'
    >
      {buttonsData.map((button) => {
        const isExpanded = expandedButton === button.format;

        return (
          <div
            key={`${cardId}-${button.format}`}
            className={`
              flex items-center gap-0 justify-between pl-0 rounded-base bg-charcoal cursor-pointer
              transition-all duration-300 ease-out
              ${
                isExpanded
                  ? 'w-[127.82685852050781px] pl-2 pr-[1px] h-[34.55686569213867px]'
                  : 'w-10 h-[34.55686569213867px] justify-center'
              }
            `}
            onClick={() => handleButtonClick(button.format)}
          >
            {/* Format text */}
            <span
              className={`text-[11px] transition-all w-10 h-[34px] flex items-center justify-center duration-300 ${
                isExpanded ? 'ml-[1px]' : ''
              }`}
            >
              {button.format}
            </span>

            {/* Price - slides in */}
            <span
              className={`
                text-[11px] font-bold whitespace-nowrap
                transition-all duration-300 ease-out
                ${
                  isExpanded
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4 w-0 overflow-hidden'
                }
              `}
            >
              {button.price}
            </span>

            {/* Cart button - appears with spring effect */}
            <div
              className={`
                transition-all duration-400 ease-out
                ${
                  isExpanded
                    ? 'opacity-100 scale-100 translate-x-0'
                    : 'opacity-0 scale-75 translate-x-2 w-0 overflow-hidden'
                }
              `}
              style={{
                transitionTimingFunction: isExpanded
                  ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                  : 'ease-out',
              }}
            >
              <motion.button
                onClick={(e) => handleCartClick(e, button.format, button.price)}
                whileTap={{ scale: 0.9 }}
                className='relative overflow-hidden min-w-[34.89236831665039px] min-h-[31.20182991027832px] max-w-[34.89236831665039px] max-h-[31.20182991027832px] shadow-btn-inset !rounded-[13px] bg-blue-600 flex items-center justify-center mr-[1px]'
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
            </div>
          </div>
        );
      })}
    </div>
  );
};
// // Добавьте этот компонент в начало файла или в отдельный файл
// const ExpandableAdButtons = () => {
//   const [expandedButton, setExpandedButton] = useState('1/48'); // По умолчанию первая кнопка расширена
//   const [ripple, setRipple] = useState(false);
//   const containerRef = useRef(null);

//   const buttons = [
//     { format: '1/48', price: '650₽' },
//     { format: '1/72', price: '890₽' },
//     { format: '1/168', price: '1200₽' },
//     { format: 'Story', price: '1500₽' },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         containerRef.current &&
//         !containerRef.current.contains(event.target)
//       ) {
//         setExpandedButton(null);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleButtonClick = (format) => {
//     if (expandedButton === format) {
//       setExpandedButton(null);
//     } else {
//       setExpandedButton(format);
//     }
//   };

//   const handleCartClick = (e, format, price) => {
//     e.stopPropagation();
//     setRipple(true);
//     setTimeout(() => setRipple(false), 400);
//     console.log(`Added ${format} for ${price} to cart`);
//   };

//   return (
//     <div
//       ref={containerRef}
//       className='bg-iron p-[2px] rounded-2xl mt-[7px] flex gap-[2px] h-[38px]'
//     >
//       {buttons.map((button) => {
//         const isExpanded = expandedButton === button.format;

//         return (
//           <div
//             key={button.format}
//             className={`
//               flex items-center gap-0 justify-between  pl-0 rounded-base bg-charcoal cursor-pointer
//               transition-all duration-300 ease-out
//               ${
//                 isExpanded
//                   ? 'w-[127.82685852050781px] pl-2 pr-[1px] h-[34.55686569213867px]'
//                   : 'w-10 h-[34.55686569213867px] justify-center'
//               }
//             `}
//             onClick={() => handleButtonClick(button.format)}
//           >
//             {/* Format text */}
//             <span
//               className={`text-[11px] transition-all duration-300 w-[40px] h-[34px] flex items-center justify-center ${
//                 isExpanded ? 'ml-[1px]' : ''
//               }`}
//             >
//               {button.format}
//             </span>

//             {/* Price - slides in */}
//             <span
//               className={`
//                 text-[11px] font-bold whitespace-nowrap
//                 transition-all duration-300 ease-out
//                 ${
//                   isExpanded
//                     ? 'opacity-100 translate-x-0'
//                     : 'opacity-0 translate-x-4 w-0 overflow-hidden'
//                 }
//               `}
//             >
//               {button.price}
//             </span>

//             {/* Cart button - appears with spring effect */}
//             <div
//               className={`
//                 transition-all duration-400 ease-out
//                 ${
//                   isExpanded
//                     ? 'opacity-100 scale-100 translate-x-0'
//                     : 'opacity-0 scale-75 translate-x-2 w-0 overflow-hidden'
//                 }
//               `}
//               style={{
//                 transitionTimingFunction: isExpanded
//                   ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
//                   : 'ease-out',
//               }}
//             >
//               <motion.button
//                 onClick={(e) => handleCartClick(e, button.format, button.price)}
//                 whileTap={{ scale: 0.9 }}
//                 className='relative overflow-hidden min-w-[34.89236831665039px] min-h-[31.20182991027832px] max-w-[34.89236831665039px] max-h-[31.20182991027832px] shadow-btn-inset !rounded-[13px] bg-blue-600 flex items-center justify-center mr-[1px]'
//               >
//                 <img src='/images/icons/white-cart.svg' alt='' />
//                 {ripple && (
//                   <motion.span
//                     initial={{ scale: 0, opacity: 0.6 }}
//                     animate={{ scale: 2.5, opacity: 0 }}
//                     transition={{ duration: 0.4, ease: 'easeOut' }}
//                     className='absolute w-16 h-16 bg-blue-400 rounded-full pointer-events-none'
//                     style={{
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                     }}
//                   />
//                 )}
//               </motion.button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
