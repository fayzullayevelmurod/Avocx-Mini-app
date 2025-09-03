export const ProductCard = ({
  image = "/images/empty-photo.png",
  title = "Pattern (RUB)",
  price = "00.000₽",
  oldPrice = "37.500",
  storeName = "Название вашего магазина",
  description = "Краткое ключевое описание",
}) => {
  return (
    <div className="w-[212px] mx-auto bg-[#272727] border border-[#303030] pb-2 rounded-[20px]">
      <div className="h-[282px] rounded-[19px] bg-[#303030] flex items-center justify-center flex-col relative">
        <div className="flex gap-2 absolute top-2 left-2">
          <div className="bg-[#242424] w-[41px] h-[41px] rounded-[15px] flex items-center justify-center">
            <img src="/images/icons/red-trash.svg" alt="" />
          </div>
          <div className="bg-[#242424] w-[41px] h-[41px] rounded-[15px] flex items-center justify-center">
            <img src="/images/icons/edit.svg" alt="" />
          </div>
        </div>
        <img src={image} alt={title} width={97} height={97} />
        <span className="text-grayCustom font-bold text-center mt-[5px]">
          {title}
        </span>
        <button className="bg-iron absolute -bottom-[21px] right-3 rounded-[20px] shadow-cart-btn w-[55px] h-[45px] flex items-center justify-center border-4 border-[#272727]">
          <img src="/images/icons/cart.svg" alt="cart" />
        </button>
      </div>

      <div className="pt-[5px] px-3">
        <h3 className="text-sm font-bold leading-full mt-0.5">
          {price}{" "}
          <span className="text-[10px] text-grayCustom line-through font-normal">
            {oldPrice}
          </span>
        </h3>
        <span className="text-[9px] font-semibold text-[#96BBF7] block mt-[1px] leading-full">
          {storeName}
        </span>
        <span className="text-[10px] block mt-[1px] leading-full">
          {description}
        </span>
      </div>
    </div>
  );
};
