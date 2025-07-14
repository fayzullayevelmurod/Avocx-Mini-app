// import { Link } from 'react-router-dom';
// import Button from '../components/Button';
// import Search from '../components/Search';
// import Tab from '../components/Tab';
// import CardUI from '../components/CardUI';

// const AnnouncementTwo = () => {
//   const tabData = [
//     { id: '1', label: 'Активные' },
//     { id: '2', label: 'Неактивные' },
//   ];
//   return (
//     <div>
//       {/* search */}
//       <div className='flex items-center gap-2 h-[46px]'>
//         <Link className='mr-2 w-10' to='#!'>
//           <img src='/images/icons/prev-arrow.svg' alt='prev arrow' />
//         </Link>
//         <Search />
//         <Button className='min-w-[50px] max-w-[50px] !h-[45px]'>
//           <img src='/images/icons/plus.svg' alt='shop icon' />
//         </Button>
//         <button className='w-[39px] h-[45px] flex items-center justify-end'>
//           <img
//             src='/images/icons/refresh.svg'
//             alt='refresh icon'
//             width={20}
//             height={21}
//           />
//         </button>
//       </div>
//       <h2 className='text-xl text-center font-semibold leading-full mt-[29px] mb-[15px]'>
//         Объявление рекламы в каналах
//       </h2>
//       <div className='px-[35px] mb-[-2px]'>
//         <Tab tabData={tabData} sizeXl={true} />
//       </div>
//       <div className='space-y-1'>
//         <CardUI className='!p-[11px] !rounded-[20px] relative'>
//           <div className='flex items-start justify-between'>
//             <div className='flex items-start gap-[5px]'>
//               <div className='bg-[#3B3B3B] rounded-t-[79px] rounded-b-[25px] w-[53px] h-[65px] p-[2px] flex justify-between flex-col items-center'>
//                 <img
//                   className='w-[48px] h-[47px]'
//                   src='images/icons/logo.svg'
//                   alt='logo'
//                 />
//                 <span className='text-[7px] text-grayCustom'>Diamond</span>
//               </div>
//               <div>
//                 <h4 className='text-[17px] font-semibold leading-full mt-[3px]'>
//                   Cчастье Сейчас
//                 </h4>
//                 <p className='text-[10px] font-normal text-grayCustom leading-full mt-[1px] mb-[5px]'>
//                   Психология, Цитаты, Литература.
//                 </p>
//                 <div className='flex items-center gap-4 my-[2px] mt-[-3px]'>
//                   <div className='flex items-center gap-[5px]'>
//                     <img src='images/icons/users.svg' alt='' />
//                     <span className='text-xs text-grayCustom'>17.345</span>
//                   </div>
//                   <div className='flex gap-[2px] mt-[1px] ml-[-2px]'>
//                     <img src='images/icons/trade-down.svg' alt='' />
//                     <img src='images/icons/trade-success.svg' alt='' />
//                     <img src='images/icons/trade-success.svg' alt='' />
//                   </div>
//                 </div>
//                 <div className='flex items-center gap-[11px] mt-[3px]'>
//                   <div className='flex items-center gap-[5px]'>
//                     <img src='images/icons/er.svg' alt='er' />
//                     <span className='text-xs text-grayCustom'>21%</span>
//                   </div>
//                   <div className='flex items-center gap-[5px]'>
//                     <img src='images/icons/see.svg' alt='see' />
//                     <span className='text-xs text-grayCustom'>
//                       567, 754, 1145
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='bg-iron p-[2px] rounded-2xl mt-[7px] flex gap-[2px] h-[38px]'>
//             <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
//               <span className='text-[11px]'>1/72</span>
//             </div>
//             <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
//               <span className='text-[11px]'>1/168</span>
//             </div>
//             <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
//               <span className='text-[11px]'>1/168</span>
//             </div>
//             <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
//               <span className='text-[11px]'>Story</span>
//             </div>
//           </div>
//           <div className='flex gap-5 pr-1 absolute top-4 right-[11px]'>
//             <button>
//               <img
//                 className='w-[17px] h-[17px]'
//                 src='/images/icons/pen.svg'
//                 alt='pen'
//               />
//             </button>
//             <button>
//               <img
//                 className='w-[17px] h-[17px]'
//                 src='/images/icons/trash.svg'
//                 alt='pen'
//               />
//             </button>
//           </div>
//         </CardUI>

//         <CardUI className='!p-[11px] !rounded-[20px] relative'>
//           <div className='flex items-start justify-between'>
//             <div className='flex items-start gap-[5px]'>
//               <div className='bg-[#3B3B3B] rounded-t-[79px] rounded-b-[25px] w-[53px] h-[65px] p-[2px] flex justify-between flex-col items-center'>
//                 <img
//                   className='w-[48px] h-[47px]'
//                   src='images/icons/logo.svg'
//                   alt='logo'
//                 />
//                 <span className='text-[7px] text-grayCustom'>Diamond</span>
//               </div>
//               <div>
//                 <h4 className='text-[17px] font-semibold leading-full mt-[3px]'>
//                   Тайнология
//                 </h4>
//                 <p className='text-[10px] font-normal text-grayCustom leading-full mt-[1px] mb-[5px]'>
//                   Познавательное, История, Политика.
//                 </p>
//                 <div className='flex items-center gap-[7px] my-[2px] mt-[-3px]'>
//                   <div className='flex items-center gap-[5px]'>
//                     <img src='images/icons/users.svg' alt='' />
//                     <span className='text-xs text-grayCustom'>735</span>
//                   </div>
//                   <div className='flex gap-[2px]'>
//                     <img src='images/icons/trade-down.svg' alt='' />
//                     <img src='images/icons/trade-down.svg' alt='' />
//                     <img src='images/icons/trade-success.svg' alt='' />
//                   </div>
//                 </div>
//                 <div className='flex items-center gap-[11px] mt-[3px]'>
//                   <div className='flex items-center gap-[5px]'>
//                     <img src='images/icons/er.svg' alt='er' />
//                     <span className='text-xs text-grayCustom'>13%</span>
//                   </div>
//                   <div className='flex items-center gap-[5px]'>
//                     <img src='images/icons/see.svg' alt='see' />
//                     <span className='text-xs text-grayCustom'>
//                       231, 313, 420
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='bg-iron p-[2px] rounded-2xl mt-[7px] flex gap-[2px] h-[38px]'>
//             <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
//               <span className='text-[11px]'>1/24</span>
//             </div>
//             <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
//               <span className='text-[11px]'>1/48</span>
//             </div>
//             <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
//               <span className='text-[11px]'>1/72</span>
//             </div>
//           </div>
//           <div className='flex gap-5 pr-1 absolute top-4 right-[11px]'>
//             <button>
//               <img
//                 className='w-[17px] h-[17px]'
//                 src='/images/icons/pen.svg'
//                 alt='pen'
//               />
//             </button>
//             <button>
//               <img
//                 className='w-[17px] h-[17px]'
//                 src='/images/icons/trash.svg'
//                 alt='pen'
//               />
//             </button>
//           </div>
//         </CardUI>
//       </div>
//     </div>
//   );
// };

// export default AnnouncementTwo;

import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Search from '../components/Search';
import Tab from '../components/Tab';
import CardUI from '../components/CardUI';
import { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Универсальный компонент для расширяющихся кнопок
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
              flex items-center justify-between  rounded-base bg-charcoal cursor-pointer
              transition-all duration-300 ease-out ml-0
              ${
                isExpanded
                  ? 'h-[34.55686569213867px] gap-[15px]'
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
              className={` -ml-2
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

const AnnouncementTwo = () => {
  const tabData = [
    { id: '1', label: 'Активные' },
    { id: '2', label: 'Неактивные' },
  ];

  return (
    <div>
      {/* search */}
      <div className='flex items-center gap-2 h-[46px]'>
        <Link className='mr-2 w-10' to='#!'>
          <img src='/images/icons/prev-arrow.svg' alt='prev arrow' />
        </Link>
        <Search />
        <Button className='min-w-[50px] max-w-[50px] !h-[45px]'>
          <img src='/images/icons/plus.svg' alt='shop icon' />
        </Button>
        <button className='w-[39px] h-[45px] flex items-center justify-end'>
          <img
            src='/images/icons/refresh.svg'
            alt='refresh icon'
            width={20}
            height={21}
          />
        </button>
      </div>

      <h2 className='text-xl text-center font-semibold leading-full mt-[29px] mb-[15px]'>
        Объявление рекламы в каналах
      </h2>

      <div className='px-[35px] mb-[-2px]'>
        <Tab tabData={tabData} sizeXl={true} />
      </div>

      <div className='space-y-1'>
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
                <div className='flex items-center gap-[10px] my-[2px] mt-[-3px]'>
                  <div className='flex items-center gap-[5px]'>
                    <img src='images/icons/users.svg' alt='' />
                    <span className='text-xs text-grayCustom'>17.345</span>
                  </div>
                  <div className='flex gap-[2px]'>
                    <img src='images/icons/trade-down.svg' alt='' />
                    <img src='images/icons/trade-success.svg' alt='' />
                    <img src='images/icons/trade-success.svg' alt='' />
                  </div>
                </div>
                <div className='flex items-center gap-[10px] mt-[3px]'>
                  <div className='flex items-center gap-[5px]'>
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
                {/* <div className='flex items-center gap-4 my-[2px] mt-[-3px]'>
                  <div className='flex items-center gap-[5px]'>
                    <img src='images/icons/users.svg' alt='' />
                    <span className='text-xs text-grayCustom'>17.345</span>
                  </div>
                  <div className='flex gap-[2px] mt-[1px] ml-[-2px]'>
                    <img src='images/icons/trade-down.svg' alt='' />
                    <img src='images/icons/trade-success.svg' alt='' />
                    <img src='images/icons/trade-success.svg' alt='' />
                  </div>
                </div>
                <div className='flex items-center gap-[11px] mt-[3px]'>
                  <div className='flex items-center gap-[5px]'>
                    <img src='images/icons/er.svg' alt='er' />
                    <span className='text-xs text-grayCustom'>21%</span>
                  </div>
                  <div className='flex items-center gap-[5px]'>
                    <img src='images/icons/see.svg' alt='see' />
                    <span className='text-xs text-grayCustom'>
                      567, 754, 1145
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Заменяем старые кнопки на расширяющиеся */}
          <ExpandableAdButtons
            cardId='announcement-card1'
            buttonsData={[
              { format: '1/48', price: '890₽' },
              { format: '1/72', price: '890₽' },
              { format: '1/168', price: '1200₽' },
              { format: 'Story', price: '1500₽' },
            ]}
          />

          <div className='flex gap-5 pr-1 absolute top-4 right-[11px]'>
            <button>
              <img
                className='w-[17px] h-[17px]'
                src='/images/icons/pen.svg'
                alt='pen'
              />
            </button>
            <button>
              <img
                className='w-[17px] h-[17px]'
                src='/images/icons/trash.svg'
                alt='pen'
              />
            </button>
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
                <div className='flex items-center gap-[10px] my-[2px] mt-[-3px]'>
                  <div className='flex items-center gap-[5px]'>
                    <img src='images/icons/users.svg' alt='' />
                    <span className='text-xs text-grayCustom'>175</span>
                  </div>
                  <div className='flex gap-[2px]'>
                    <img src='images/icons/trade-down.svg' alt='' />
                    <img src='images/icons/trade-success.svg' alt='' />
                    <img src='images/icons/trade-success.svg' alt='' />
                  </div>
                </div>
                <div className='flex items-center gap-[10px] mt-[3px]'>
                  <div className='flex items-center gap-[5px]'>
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
                {/* <div className='flex items-center gap-[7px] my-[2px] mt-[-3px]'>
                  <div className='flex items-center gap-[5px]'>
                    <img src='images/icons/users.svg' alt='' />
                    <span className='text-xs text-grayCustom'>735</span>
                  </div>
                  <div className='flex gap-[2px]'>
                    <img src='images/icons/trade-down.svg' alt='' />
                    <img src='images/icons/trade-down.svg' alt='' />
                    <img src='images/icons/trade-success.svg' alt='' />
                  </div>
                </div>
                <div className='flex items-center gap-[11px] mt-[3px]'>
                  <div className='flex items-center gap-[5px]'>
                    <img src='images/icons/er.svg' alt='er' />
                    <span className='text-xs text-grayCustom'>13%</span>
                  </div>
                  <div className='flex items-center gap-[5px]'>
                    <img src='images/icons/see.svg' alt='see' />
                    <span className='text-xs text-grayCustom'>
                      231, 313, 420
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Заменяем старые кнопки на расширяющиеся */}
          <ExpandableAdButtons
            cardId='announcement-card2'
            buttonsData={[
              { format: '1/24', price: '450₽' },
              { format: '1/48', price: '650₽' },
              { format: '1/72', price: '890₽' },
            ]}
          />

          <div className='flex gap-5 pr-1 absolute top-4 right-[11px]'>
            <button>
              <img
                className='w-[17px] h-[17px]'
                src='/images/icons/pen.svg'
                alt='pen'
              />
            </button>
            <button>
              <img
                className='w-[17px] h-[17px]'
                src='/images/icons/trash.svg'
                alt='pen'
              />
            </button>
          </div>
        </CardUI>
      </div>
    </div>
  );
};

export default AnnouncementTwo;
