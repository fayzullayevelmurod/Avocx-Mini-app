import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Search from '../components/Search';
import Date from '../components/Date';
import Categories from '../components/Categories';
import Title from '../components/Title';
import CardUI from '../components/CardUI';
import Sort from '../components/Sort';

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
            <div className='flex items-center gap-0 justify-between p-[2px] rounded-base bg-charcoal  w-[127px] pl-2 pr-[1px]'>
              <span className='text-[11px]'>1/48</span>
              <span className='text-[11px] font-bold'>650₽</span>
              <Button className='min-w-[34px] min-h-[32px] max-w-[34px] max-h-[32px] shadow-btn-inset !rounded-[13px]'>
                <svg
                  width='19'
                  height='19'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.18618 4.46117H3.20944C2.17121 4.46117 1.65253 4.46117 1.28327 4.67244C0.959222 4.85783 0.71013 5.15069 0.580059 5.49998C0.431929 5.89777 0.517194 6.40805 0.687663 7.42823L0.68802 7.43015L1.43363 11.8923C1.56011 12.6492 1.62377 13.0279 1.81312 13.3119C1.98004 13.5622 2.21434 13.7602 2.48937 13.8832C2.80137 14.0228 3.18589 14.0229 3.95525 14.0229H10.8082C11.5776 14.0229 11.9619 14.0228 12.2739 13.8832C12.5489 13.7602 12.7834 13.5622 12.9503 13.3119C13.1396 13.0279 13.203 12.6492 13.3294 11.8923L14.075 7.43015L14.0758 7.42704C14.2461 6.40765 14.3313 5.89762 14.1833 5.49998C14.0532 5.15069 13.8047 4.85783 13.4806 4.67244C13.1114 4.46117 12.5919 4.46117 11.5536 4.46117H10.5771M4.18618 4.46117H10.5771M4.18618 4.46117C4.18618 2.7009 5.61683 1.27393 7.38164 1.27393C9.14644 1.27393 10.5771 2.7009 10.5771 4.46117'
                    stroke='#fff'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
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
