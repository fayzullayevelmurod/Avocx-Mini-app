export const Order = ({ className, reklamaBg, rightText, rightTextColor }) => {
  return (
    <div
      className={`border border-iron rounded-[25px] overflow-hidden ${className} ${
        reklamaBg ? reklamaBg : "bg-[#8A38F5]"
      }`}
    >
      <div
        className={`rounded-[inherit] pl-4 pr-[11px] pt-[7px] pb-[7px] flex items-center justify-between`}
      >
        <div className="flex gap-[10px] items-center">
          <div className="flex gap-1 items-center">
            <img src="/images/icons/order-price.svg" alt="" />
            <p>
              Заказ: №<span className="font-bold italic">2143</span>
            </p>
          </div>
          <span>29.06.2025 в 12:19</span>
        </div>
        <span className={rightTextColor ? rightTextColor : ""}>
          {rightText ? rightText : "Через 5 ч"}
        </span>
      </div>
      <div className="rounded-[inherit] pb-2 bg-charcoal pr-[6px] pt-[10px] pl-[15px] border border-iron">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
              <img className="w-[30px] h-[30px]" src="/images/icons/logo.svg" alt="" />
            <div>
              <span className="text-17 font-semibold">Cчастье Сейчас</span>
              <div className="text-[13px] font-semibold">
                Сумма: <span className="text-green">650₽</span>
              </div>
            </div>
          </div>
          <svg
            className={`w-5 h-5 mr-1 -mt-1 transition-transform duration-300`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.018 9.22749L10.0532 12.1923L7.08834 9.22749M18.9476 10.2158C18.9476 5.30348 14.9654 1.32129 10.0532 1.32129C5.14088 1.32129 1.15869 5.30348 1.15869 10.2158C1.15869 15.128 5.14088 19.1102 10.0532 19.1102C14.9654 19.1102 18.9476 15.128 18.9476 10.2158Z"
              stroke="#E8E8E8"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div className="flex gap-1 mt-[7px] ml-[-6px]">
          <div className="py-0.5 px-[17px] bg-[#303030] rounded-[30px] text-center h-[36px]">
            <span className="text-xxs block">Формат</span>
            <span className="text-[13px] block">1 / 48</span>
          </div>
          <div className="pt-0.5 px-3 bg-[#303030] rounded-[30px] text-center h-[36px]">
            <span className="text-xxs block">Время </span>
            <span className="text-[13px] block">10:21</span>
          </div>
          <div className="pt-0.5 pl-[20px] pr-[22px] bg-[#303030] rounded-[30px] text-center h-[36px]">
            <span className="text-xxs block">Дата</span>
            <span className="text-[13px] block">01.07.2025</span>
          </div>
          <div className="pt-0.5 flex-1 flex items-center justify-center bg-primary rounded-[30px] text-center h-[36px]">
            <span className="text-[13px] block">Ознакомится</span>
          </div>
        </div>
      </div>
    </div>
  );
};
