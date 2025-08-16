export const ReklamaBlock = ({ className, reklamaBg }) => {
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
            <img src="/images/icons/bulhorn.svg" alt="" />
            <p>
              Реклама: №<span className="font-bold italic">23</span>
            </p>
          </div>
          <span>15.08.2025 в 10:21</span>
        </div>
        <span>Через 5 ч</span>
      </div>
      <div className="rounded-[inherit] pb-2 bg-charcoal pr-[6px] pt-[15px] pl-[15px] border border-iron">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm leading-full font-semibold">
              <span className="text-grayCustom">Что:</span> Название канала 1
            </p>
            <p className="text-sm leading-full font-semibold mt-1">
              <span className="text-grayCustom">Где:</span> Название канала 1
            </p>
          </div>
          <svg
            className={`w-5 h-5 mr-1 -mt-[15px] transition-transform duration-300`}
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
        <div className="flex gap-2 items-center mt-[7px]">
          <div className="flex items-center gap-1">
            <img src="/images/icons/wallet.svg" alt="" />
            <span className="text-[13px] font-semibold">650₽</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/images/icons/add-user.svg" alt="" />
            <span className="text-[13px] font-semibold">0</span>
          </div>
          <div className="flex items-center gap-1 pl-[9px]">
            <img src="/images/icons/justice.svg" alt="" />
            <span className="text-[13px] font-semibold">0₽</span>
          </div>
        </div>
        <div className="flex gap-1 mt-[11px] ml-[-6px]">
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
          <div className="pt-0.5 flex-1 bg-primary rounded-[30px] text-center h-[36px]">
            <span className="text-xxs block">Рекламный пост</span>
            <span className="text-[13px] block">Заменить (№17)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
