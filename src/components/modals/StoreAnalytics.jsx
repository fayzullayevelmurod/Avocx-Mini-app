import { CircleChart } from "../CircleChart";
import { EarnedChart } from "../EarnedChart";
import { ProfileBox } from "../ProfileBox";
import { ModalUI } from "./ModalUI";

const data = [
  { date: "01.09", value: 10 },
  { date: "05.09", value: 20 },
  { date: "10.09", value: 40 },
];
export const StoreAnalytics = ({ isOpen, onClose }) => {
  return (
    <ModalUI isOpen={isOpen}>
      <div className="flex items-center justify-between mb-[18px]">
        <h3 className="text-17 font-bold">Аналитика магазина</h3>
        <button onClick={onClose}>
          <img src="/images/icons/close.svg" alt="" width={20} />
        </button>
      </div>
      <div className="space-y-[7px]">
        <div className="w-[calc(100%_+_28px)] -ml-[14px]">
          <ProfileBox className="!bg-[#272727]" />
        </div>
        {/* chart */}
        <EarnedChart title="Заработано:" subTitle="185.000₽" data={data} />
        <div className="grid grid-cols-2 gap-[5px]">
          <div className="bg-[#303030] rounded-[20px] p-[14px] h-[60px] flex flex-col justify-center">
            <span className="text-xs font-semibold text-grayCustom">
              Кол-во товаров
            </span>
            <h5 className="text-15">1234</h5>
          </div>
          <div className="bg-[#303030] rounded-[20px] p-[14px] h-[60px] flex flex-col justify-center">
            <span className="text-xs font-semibold text-grayCustom">
              Кол-во товаров
            </span>
            <h5 className="text-15">1234</h5>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[5px]">
          <div className="bg-[#303030] rounded-[20px] p-[14px] h-[60px] flex flex-col justify-center">
            <span className="text-xs font-semibold text-grayCustom">
              Кол-во товаров
            </span>
            <h5 className="text-15">1234</h5>
          </div>
          <div className="bg-[#303030] rounded-[20px] p-[14px] h-[60px] flex flex-col justify-center">
            <span className="text-xs font-semibold text-grayCustom">
              Кол-во товаров
            </span>
            <h5 className="text-15">1234</h5>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[5px]">
          <div className="bg-[#303030] rounded-[20px] p-[14px] h-[60px] flex flex-col justify-center">
            <span className="text-xs font-semibold text-grayCustom">
              Кол-во товаров
            </span>
            <h5 className="text-15">1234</h5>
          </div>
          <div className="bg-[#303030] rounded-[20px] p-[14px] h-[60px] flex flex-col justify-center">
            <span className="text-xs font-semibold text-grayCustom">
              Кол-во товаров
            </span>
            <h5 className="text-15">1234</h5>
          </div>
        </div>
        {/* chart */}
        <CircleChart />
      </div>
    </ModalUI>
  );
};
