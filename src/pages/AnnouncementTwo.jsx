import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Search from '../components/Search';
import Tab from '../components/Tab';
import CardUI from '../components/CardUI';

const AnnouncementTwo = () => {
  const tabData = [
    { id: '1', label: 'Активные' },
    { id: '2', label: 'Неактивные' },
  ];
  return (
    <div>
      {/* search */}
      <div className='flex items-center gap-2'>
        <Link className='mr-2 w-10' to='#!'>
          <img src='/images/icons/prev-arrow.svg' alt='prev arrow' />
        </Link>
        <Search />
        <Button className='min-w-[50px] max-w-[50px] h-[45px]'>
          <img src='/images/icons/plus.svg' alt='shop icon' />
        </Button>
        <button className='w-[50px] h-[45px] flex items-center justify-center'>
          <img
            src='/images/icons/refresh.svg'
            alt='refresh icon'
            width={17}
            height={21}
          />
        </button>
      </div>
      <h2 className='text-xl text-center font-semibold leading-full mt-[27px] mb-[14px]'>
        Объявление рекламы в каналах
      </h2>
      <div className='px-[35px]'>
        <Tab tabData={tabData} />
      </div>
      <div className='space-y-1'>
        <CardUI className='!p-[11px]'>
          <div className='flex items-start justify-between'>
            <div className='flex items-start gap-2'>
              <div className='bg-[#3B3B3B] rounded-t-[79px] rounded-b-[10px] w-[53px] h-[65px] p-[2px] flex justify-between flex-col items-center'>
                <img
                  className='w-[47px] h-[47px]'
                  src='images/icons/logo.svg'
                  alt='logo'
                />
                <span className='text-[7px] text-grayCustom'>Diamond</span>
              </div>
              <div>
                <h4 className='text-[17px] font-semibold leading-full'>
                  Тайнология
                </h4>
                <p className='text-[10px] font-normal text-grayCustom'>
                  Познавательное, История, Политика.F
                </p>
                <div className='flex items-center gap-4 my-[2px]'>
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
                <div className='flex items-center gap-4'>
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
              </div>
            </div>
            <div className='flex gap-5 pr-1'>
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
          </div>
          <div className='bg-iron p-[2px] rounded-2xl mt-2 flex gap-[2px] h-[38px]'>
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
        <CardUI className='!p-[11px]'>
          <div className='flex items-start justify-between'>
            <div className='flex items-start gap-2'>
              <div className='bg-[#3B3B3B] rounded-t-[79px] rounded-b-[10px] w-[53px] h-[65px] p-[2px] flex justify-between flex-col items-center'>
                <img
                  className='w-[47px] h-[47px]'
                  src='images/icons/logo.svg'
                  alt='logo'
                />
                <span className='text-[7px] text-grayCustom'>Diamond</span>
              </div>
              <div>
                <h4 className='text-[17px] font-semibold leading-full'>
                  Тайнология
                </h4>
                <p className='text-[10px] font-normal text-grayCustom'>
                  Познавательное, История, Политика.F
                </p>
                <div className='flex items-center gap-4 my-[2px]'>
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
                <div className='flex items-center gap-4'>
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
              </div>
            </div>
            <div className='flex gap-5 pr-1'>
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
          </div>
          <div className='bg-iron p-[2px] rounded-2xl mt-2 flex gap-[2px] h-[38px]'>
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
      </div>
    </div>
  );
};

export default AnnouncementTwo;
