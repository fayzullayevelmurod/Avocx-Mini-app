import { Link } from 'react-router-dom';
import Search from '../components/Search';
import Button from '../components/Button';
import CardUI from '../components/CardUI';
import { Select } from '../components/Form';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const ProductCard = () => {
  // Sample image data (replace with your own images)
  const images = [
    { src: 'images/product-img-2.png', alt: 'product img 1' },
    { src: 'images/product-img-2.png', alt: 'product img 2' },
    { src: 'images/product-img-2.png', alt: 'product img 3' },
  ];
  const options = [
    { value: 'sell', label: 'Размер: L' },
    { value: 'sell2', label: 'Размер: M' },
    { value: 'sell3', label: 'Размер: S' },
  ];

  const options1 = [
    { value: 'sell1', label: 'Цвет: Black' },
    { value: 'buy', label: 'Цвет: Red' },
    { value: 'rent', label: 'Цвет: Yellow' },
  ];
  return (
    <div className=''>
      {/* search */}
      <div className='flex items-center gap-[5px] mb-4 -mt-[9px]'>
        <Link className='mr-2 w-8' to='#!'>
          <img src='/images/icons/prev-arrow.svg' alt='prev arrow' />
        </Link>
        <Search />
        <button className='w-[37px] h-[45px] flex items-center justify-end'>
          <img
            className='w-5'
            src='/images/icons/refresh.svg'
            alt='refresh icon'
            width={20}
          />
        </button>
      </div>
      <CardUI className='!px-6 !py-[10px] h-[67px] !rounded-[20px] flex items-center relative'>
        <div className='flex items-center justify-between gap-[11px]'>
          <img
            className='w-12 h-12 rounded-full'
            src='/images/company-logo.svg'
            alt='product company logo'
          />
          <div className=''>
            <h3 className='text-base font-semibold leading-full mb-[6px]'>
              SHLZ.STORE 🥇
            </h3>
            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-1'>
                <img src='/images/icons/group.svg' alt='group icon' />
                <span className='text-xs font-medium text-grayCustom'>
                  5879
                </span>
              </div>
              <div className='flex items-center gap-1'>
                <img src='/images/icons/cart.svg' alt='cart icon' />
                <span className='text-xs font-medium text-grayCustom'>
                  2334
                </span>
              </div>
            </div>
            <img
              className='absolute top-1/2 -translate-y-1/2 right-[22px]'
              src='/images/icons/star.svg'
              alt=''
            />
          </div>
        </div>
      </CardUI>

      <div className='-mx-[14px] mt-4'>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className='swiper product-card__swiper'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className='swiper-slide'>
              <img
                className='rounded-base h-[440px] w-full'
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <CardUI className='!pt-6 !pb-5 !px-[23px] space-y-6 -mt-[30px] relative z-10 !bg-[#1A1A1A]'>
          <div className='flex items-center justify-between'>
            <div>
              <span className='text-15 font-normal leading-full text-grayCustom'>
                Hugo BOSS
              </span>
              <h4 className='text-xl leading-full font-bold italic mt-[5px]'>
                Футболка «RED»
              </h4>
            </div>
            <img
              className='absolute top-6 right-[27px] w-[26px]'
              src='/images/icons/star.svg'
              alt='star icon'
              width={26}
            />
          </div>
          <div>
            <div className='grid grid-cols-2 gap-[14px] mb-3'>
              <Select
                options={options}
                selected={true}
                rightIcon={true}
                bgColor='bg-[#232323]'
                className='!h-[51px]'
              />
              <Select
                options={options1}
                selected={true}
                rightIcon={true}
                bgColor='bg-[#232323]'
                className='!h-[51px]'
              />
            </div>
            <Button className='w-full h-[51px]'>
              <span>2.500₽</span>
              <svg
                className='w-[22px] h-auto mt-[-3px] '
                width='22px'
                height='22'
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
          <div className='!mt-5'>
            <h4 className='text-xl mb-2'>Описание</h4>
            <p className='text-15 leading-[114%]  font-normal italic mt-[-3px]'>
              Изготовленная из премиального хлопка, она сочетает комфорт
              повседневной носки с безупречным качеством легендарного бренда.{' '}
            </p>
            <p className='text-15 leading-[114%]  font-normal italic mt-[22px]'>
              Минималистичный крой и фирменный логотип делают ее универсальной
              основой для любого образа — от дерзкого casual до элегантного
              smart casual.
            </p>
          </div>
          <Button
            className='!bg-[#232323] !mt-[30px] h-[51px] !font-medium relative gap-[22px]'
            gray={true}
          >
            <span>Задать вопрос по товару</span>
            <img
              src='images/icons/chat.svg'
              alt='chat icon'
            />
          </Button>
        </CardUI>
      </div>
    </div>
  );
};

export default ProductCard;
