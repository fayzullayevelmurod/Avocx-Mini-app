import { EarnedChart } from "../EarnedChart";
import { ModalUI } from "./ModalUI";

const data = [
  { date: "01.09", value: 10 },
  { date: "05.09", value: 20 },
  { date: "10.09", value: 40 },
];
const data2 = [
  { date: "01.09", value: 100 },
  { date: "05.09", value: 20 },
  { date: "10.09", value: 400 },
];
export const ProductAnalytics = ({ isOpen, onClose }) => {
  return (
    <ModalUI isOpen={isOpen}>
      <div className="flex items-center justify-between mb-[18px]">
        <h3 className="text-17 font-bold">Аналитика товара</h3>
        <button onClick={onClose}>
          <img src="/images/icons/close.svg" alt="" width={20} />
        </button>
      </div>
      <div className="flex gap-[7px] items-start">
        <div className="min-w-[99px] max-w-[99px] h-[131px] rounded-[19px] overflow-hidden">
          <img
            className="w-full h-full rounded-[19px] object-cover"
            src="/images/bag.png"
            alt=""
          />
        </div>
        <div>
          <div className="w-[184px] h-10 rounded-[15px] bg-[#303030] pl-3 px-[10px] flex items-center justify-between">
            <p className="text-sm font-semibold">
              <span className="text-grayCustom">ID:</span> 2352:86
            </p>
            <img
              className="filter brightness-0 invert"
              src="/images/icons/copy.svg"
              alt=""
            />
          </div>
          <p className="mt-[7px] font-semibold leading-[15px]">
            Рюкзак Tommy Helfiger 25 из натуральной кожи черного цвета
          </p>
        </div>
      </div>
      <div className="space-y-[7px] mt-3">
        {/* chart */}
        <EarnedChart title="Заработано:" subTitle="185.000₽" data={data} />
        <EarnedChart title="Уровень спроса:" subTitle="+5%" data={data2} />
        {/* chart */}
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
      </div>
    </ModalUI>
  );
};
