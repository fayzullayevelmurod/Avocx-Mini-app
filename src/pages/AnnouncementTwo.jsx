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
                <div className='flex items-center gap-4 my-[2px] mt-[-3px]'>
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
                </div>
              </div>
            </div>
          </div>
          <div className='bg-iron p-[2px] rounded-2xl mt-[7px] flex gap-[2px] h-[38px]'>
            <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
              <span className='text-[11px]'>1/72</span>
            </div>
            <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
              <span className='text-[11px]'>1/168</span>
            </div>
            <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
              <span className='text-[11px]'>1/168</span>
            </div>
            <div className='bg-charcoal rounded-base w-10 flex items-center justify-center'>
              <span className='text-[11px]'>Story</span>
            </div>
          </div>
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
                <div className='flex items-center gap-[7px] my-[2px] mt-[-3px]'>
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
                </div>
              </div>
            </div>
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
