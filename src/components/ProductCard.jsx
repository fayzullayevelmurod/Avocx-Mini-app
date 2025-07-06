const ProductCard = ({
  image,
  imageAlt,
  companyLogo,
  companyLogoAlt,
  title,
  groupCount,
  cartCount,
  description,
}) => {
  return (
    <div className='overflow-hidden rounded-[20px] bg-charcoal p-1 border border-iron'>
      <img
        className='w-full object-cover h-[178px] rounded-2xl'
        src={image}
        alt={imageAlt}
        loading='lazy'
      />
      <div className='flex gap-2 items-center mt-3'>
        <img
          className='rounded-full w-12 h-12 object-cover'
          src={companyLogo}
          alt={companyLogoAlt}
          loading='lazy'
        />
        <div>
          <div className='flex items-center gap-5'>
            <h3 className='font-semibold text-base'>{title}</h3>
            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-1'>
                <img src='/images/icons/group.svg' alt='group icon' />
                <span className='text-xs font-medium text-grayCustom'>
                  {groupCount.toLocaleString()}
                </span>
              </div>
              <div className='flex items-center gap-1'>
                <img src='/images/icons/cart.svg' alt='cart icon' />
                <span className='text-xs font-medium text-grayCustom'>
                  {cartCount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          <p className='text-xxs text-grayCustom mt-[1px] line-clamp-2'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
