import { CardUI } from "./CardUI";

export const ProfileBox = ({className}) => {
  return (
    <CardUI className={`!px-[7px] !py-[10px] h-[65px] flex items-center relative !rounded-[25px] ${className}`}>
      <div className="flex items-center justify-between gap-[10px]">
        <div className="relative w-[50px] h-[50px]">
          <img
            className="w-full h-full rounded-full border border-[#E679FF] object-cover"
            src="/images/profile-img.jpg"
            alt="product company logo"
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#E679FF] flex items-center gap-[1px] h-[10px] rounded-[5px] w-[30px] justify-center">
            <img src="/images/icons/trophy.svg" alt="" />
            <span className="text-[8px] font-semibold leading-full">189</span>
          </div>
        </div>
        <div className="mt-[3px]">
          <div className="flex items-center gap-1  mb-[6px]">
            <img src="/images/icons/status-trade-up.svg" alt="" />
          <h3 className="text-base font-semibold leading-full">
            Gucci Legend
          </h3>
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="flex items-center gap-1">
              <img src="/images/icons/group.svg" alt="group icon" />
              <span className="text-xs font-medium text-grayCustom">5879</span>
            </div>
            <div className="flex items-center gap-1">
              <img src="/images/icons/cart.svg" alt="cart icon" width={13} />
              <span className="text-xs font-medium text-grayCustom">2334</span>
            </div>
            <div className="flex items-center gap-0.5">
              <img src="/images/icons/orange-star.svg" alt="cart icon" width={13} />
              <span className="text-xs font-medium text-grayCustom">4.9</span>
            </div>
          </div>
        </div>
      </div>
    </CardUI>
  );
};
