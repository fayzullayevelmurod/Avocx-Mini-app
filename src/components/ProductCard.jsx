import { Link } from 'react-router-dom';
import Button from './Button';

const ProductCard = ({ data, btns }) => {
  const {
    image,
    imageAlt,
    companyLogo,
    companyLogoAlt,
    title,
    groupCount,
    cartCount,
    description,
  } = data || {};

  return (
    <div
      className={`overflow-hidden pb-3 rounded-[20px] bg-charcoal p-1 border border-iron`}
    >
      <div>
        <div className='w-full h-[178px] relative'>
          <img
            className='w-full object-cover h-full rounded-2xl'
            src={image}
            alt={imageAlt}
            loading='lazy'
          />
          <button className='absolute top-[5px] right-[5px] w-[27px] h-[27px] flex items-center justify-center'>
            <img
              className='w-full h-full'
              src='/images/icons/star-shadow.png'
              alt=''
            />
          </button>
        </div>
        <div className='flex gap-2 items-center mt-[11px] px-[10px]'>
          <img
            className='rounded-full w-12 h-12 object-cover'
            src={companyLogo}
            alt={companyLogoAlt}
            loading='lazy'
          />
          <div className='mt-[-2px]'>
            <div className='flex items-center gap-[10px]'>
              {/* <h3 className='font-semibold text-base'>{title}</h3> */}
              <h3 className='font-semibold text-base truncate max-w-[150px] whitespace-nowrap overflow-hidden'>
                {title}
              </h3>
              <div className='flex items-center gap-[9px]'>
                <div className='flex items-center gap-1'>
                  <img src='/images/icons/group.svg' alt='group icon' />
                  <span className='text-xs font-medium text-grayCustom'>
                    {/* {groupCount?.toLocaleString()} */}
                    {groupCount}
                  </span>
                </div>
                <div className='flex items-center gap-1'>
                  <img
                    className='mt-[-3px]'
                    src='/images/icons/cart.svg'
                    alt='cart icon'
                  />
                  <span className='text-xs font-medium text-grayCustom'>
                    {cartCount}
                  </span>
                </div>
              </div>
            </div>
            <p className='text-xxs text-grayCustom mt-1 leading-full line-clamp-2'>
              {description}
            </p>
          </div>
        </div>
      </div>
      {btns && (
        <div className='mt-[14px] px-[8px]'>
          <Link className='w-full' to='#!'>
            <Button gray={true}>Открыть</Button>
          </Link>
          <div className='flex gap-1 mt-1'>
            <Button gray={true} className='text-[13px]'>
              <img src='/images/icons/plus.svg' alt='plus' />
              <span>Добавить товар</span>
            </Button>
            <Button gray={true} className='text-[13px]'>
              <img src='/images/icons/settings-2.svg' alt='settings' />
              <span>Управление</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
