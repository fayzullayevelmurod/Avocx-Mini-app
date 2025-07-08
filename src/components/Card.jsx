import Button from './Button';

const Card = ({ data }) => {
  const {
    image,
    imageAlt,
    brand,
    title,
    condition,
    size,
    price,
    favoriteIcon,
    favoriteIconAlt,
  } = data || {};

  return (
    <div className='bg-charcoal p-[1px] rounded-[20px] border border-iron'>
      <img
        className='w-full h-[201px] object-cover rounded-[19px]'
        src={image}
        alt={imageAlt}
        loading='lazy'
      />
      <div className='px-3 pt-2 pb-1'>
        <h4 className='text-xs font-normal text-grayCustom'>{brand}</h4>
        <h3 className='text-[13px] font-bold mb-2'>{title}</h3>
        <div className='space-y-1'>
          <span className='block text-xxs text-grayCustom font-normal leading-[100%]'>
            Состояние: {condition}
          </span>
          <span className='block text-xxs text-grayCustom font-normal leading-[100%]'>
            Размер: {size}
          </span>
        </div>
        <div className='flex gap-1 mt-2'>
          <Button className='!h-10 w-full' gray={true}>
            <span className='text-[13px]'>{price}</span>
            <svg
              width='15'
              height='15'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4.18618 4.46117H3.20944C2.17121 4.46117 1.65253 4.46117 1.28327 4.67244C0.959222 4.85783 0.71013 5.15069 0.580059 5.49998C0.431929 5.89777 0.517194 6.40805 0.687663 7.42823L0.68802 7.43015L1.43363 11.8923C1.56011 12.6492 1.62377 13.0279 1.81312 13.3119C1.98004 13.5622 2.21434 13.7602 2.48937 13.8832C2.80137 14.0228 3.18589 14.0229 3.95525 14.0229H10.8082C11.5776 14.0229 11.9619 14.0228 12.2739 13.8832C12.5489 13.7602 12.7834 13.5622 12.9503 13.3119C13.1396 13.0279 13.203 12.6492 13.3294 11.8923L14.075 7.43015L14.0758 7.42704C14.2461 6.40765 14.3313 5.89762 14.1833 5.49998C14.0532 5.15069 13.8047 4.85783 13.4806 4.67244C13.1114 4.46117 12.5919 4.46117 11.5536 4.46117H10.5771M4.18618 4.46117H10.5771M4.18618 4.46117C4.18618 2.7009 5.61683 1.27393 7.38164 1.27393C9.14644 1.27393 10.5771 2.7009 10.5771 4.46117'
                stroke='#707070'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Button>
          <Button className='!h-10 max-w-[61px] min-w-[61px]' gray={true}>
            <img src={favoriteIcon} alt={favoriteIconAlt} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
