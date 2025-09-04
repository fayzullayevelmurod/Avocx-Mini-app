// export const ProductCard = ({
//   image = "/images/empty-photo.png",
//   title = "Pattern (RUB)",
//   price = "00.000₽",
//   oldPrice = "37.500",
//   storeName = "Название вашего магазина",
//   description = "Краткое ключевое описание",
//   className=""
// }) => {
//   return (
//     <div className={`w-[212px] mx-auto bg-[#272727] border border-[#303030] pb-2 rounded-[20px] ${className}`}>
//       <div className="h-[282px] rounded-[19px] bg-[#303030] flex items-center justify-center flex-col relative">
//         <div className="flex gap-2 absolute top-2 left-2">
//           <div className="bg-[#242424] w-[41px] h-[41px] rounded-[15px] flex items-center justify-center">
//             <img src="/images/icons/red-trash.svg" alt="" />
//           </div>
//           <div className="bg-[#242424] w-[41px] h-[41px] rounded-[15px] flex items-center justify-center">
//             <img src="/images/icons/edit.svg" alt="" />
//           </div>
//         </div>
//         <img src={image} alt={title} width={97} height={97} />
//         <span className="text-grayCustom font-bold text-center mt-[5px]">
//           {title}
//         </span>
//         <button className="bg-iron absolute -bottom-[21px] right-3 rounded-[20px] shadow-cart-btn w-[55px] h-[45px] flex items-center justify-center border-4 border-[#272727]">
//           <img src="/images/icons/cart.svg" alt="cart" />
//         </button>
//       </div>

//       <div className="pt-[5px] px-3">
//         <h3 className="text-sm font-bold leading-full mt-0.5">
//           {price}{" "}
//           <span className="text-[10px] text-grayCustom line-through font-normal pl-1">
//             {oldPrice}
//           </span>
//         </h3>
//         <span className="text-[9px] font-semibold text-[#96BBF7] block mt-[1px] leading-full">
//           {storeName}
//         </span>
//         <span className="text-[10px] block mt-[1px] leading-full">
//           {description}
//         </span>
//       </div>
//     </div>
//   );
// };

export const ProductCard = ({
  image = "/images/empty-photo.png",
  title = "Pattern (RUB)",
  price = "00.000₽",
  oldPrice = "37.500",
  storeName = "Название вашего магазина",
  description = "Краткое ключевое описание",
  discount = null,
  className = "",
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
        <button className="absolute top-[10px] right-[10px]">
          <img src="/images/icons/featured-border.svg" alt="featured" />
        </button>
        <img
          className="w-full h-full object-cover rounded-[19px]"
          src={image}
          alt={title}
        />
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
