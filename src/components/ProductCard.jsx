export const ProductCard = ({
  image = "/images/empty-photo.png",
  title = "Pattern (RUB)",
  price = "00.000₽",
  oldPrice = "37.500",
  storeName = "Название вашего магазина",
  description = "Краткое ключевое описание",
  discount = null,
  className = "",
  noFeatured = false,
  actions,
}) => {
  return (
    <div
      className={`w-[212px] mx-auto bg-[#272727] border border-[#303030] pb-2 rounded-[20px] ${className}`}
    >
      <div className="h-[282px] rounded-[19px] bg-[#303030] flex items-center justify-center flex-col relative">
        {discount && (
          <div className="w-[51px] h-[15px] bg-[#E679FF] rounded-r-[5px] flex items-center justify-center font-bold text-[10px] left-0 bottom-[6px] absolute shadow-discount">
            {discount}
          </div>
        )}
        {!noFeatured && (
          <button className="absolute top-[10px] right-[10px]">
            <img src="/images/icons/featured-border.svg" alt="featured" />
          </button>
        )}

        {actions && (
          <div className="absolute top-2 left-2 flex gap-2">
            <button className="w-[41px] bg-[#242424] rounded-[15px] h-[41px] flex items-center justify-center">
              <img src="/images/icons/red-trash.svg" alt="" />
            </button>
            <button className="w-[41px] bg-[#242424] rounded-[15px] h-[41px] flex items-center justify-center">
              <img src="/images/icons/edit.svg" alt="" />
            </button>
          </div>
        )}

        {image === "/images/empty-photo.png" ? (
          <img
            className="object-contain rounded-[19px]"
            src={image}
            alt={title}
          />
        ) : (
          <img
            className="w-full h-full object-cover rounded-[19px]"
            src={image}
            alt={title}
          />
        )}
        {title && (
          <span className="text-center mt-[5px] text-grayCustom font-bold">
            {title}
          </span>
        )}
        <button className="bg-iron absolute -bottom-[21px] right-3 rounded-[20px] shadow-cart-btn w-[55px] h-[45px] flex items-center justify-center border-4 border-[#272727]">
          <img src="/images/icons/cart.svg" alt="cart" />
        </button>
      </div>

      <div className="pt-[5px] px-3">
        <h3
          className={`text-sm font-bold leading-full mt-0.5 ${
            discount ? "text-[#E679FF]" : ""
          }`}
        >
          {price}
          <span className="text-[10px] text-grayCustom line-through font-normal pl-1">
            {oldPrice}
          </span>
        </h3>
        <span className="text-[9px] font-semibold text-[#96BBF7] block mt-[1px] leading-full">
          {storeName}
        </span>
        <span className="text-[10px] block mt-[1px] leading-full truncate">
          {description}
        </span>
      </div>
    </div>
  );
};
