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
    <ModalUI isOpen={isOpen} className="pb-2">
      <div className="flex items-center justify-between mb-[18px]">
        <h3 className="text-17 font-bold">Аналитика товара</h3>
        <button onClick={onClose}>
          <img src="/images/icons/close.svg" alt=""  />
        </button>
      </div>
      <div className="space-y-[7px] mt-3">
        {/* chart */}
        <EarnedChart
          title="Заработано:"
          subTitle="71 150₽"
          title2="Расходы:"
          subTitle2="54 300"
          title3="Прибыль:"
          subTitle3="125 450"
          data={data}
        />
        <div className="grid grid-cols-2 gap-[5px]">
          <div className="rounded-15 bg-charcoal p-[14px] h-[60px] flex items-center gap-[10px]">
            <img src="/images/icons/chart-icon-1.svg" alt="" />
            <div>
              <span className="text-[10px] text-[#A3A3A3] leading-[15px] font-semibold">
                Подписчиков
              </span>
              <p className="text-15 mt-[3px] leading-[15px]">2455</p>
            </div>
          </div>
          <div className="rounded-15 bg-charcoal p-[14px] h-[60px] flex items-center gap-[10px]">
            <img src="/images/icons/chart-icon-2.svg" alt="" />
            <div>
              <span className="text-[10px] text-[#A3A3A3] leading-[15px] font-semibold">
                Охват 24ч
              </span>
              <p className="text-15 mt-[3px] leading-[15px]">676</p>
            </div>
          </div>
          <div className="rounded-15 bg-charcoal p-[14px] h-[60px] flex items-center gap-[10px]">
            <img src="/images/icons/chart-icon-3.svg" alt="" />
            <div>
              <span className="text-[10px] text-[#A3A3A3] leading-[15px] font-semibold">
                ER 24
              </span>
              <p className="text-15 mt-[3px] leading-[15px]">18 %</p>
            </div>
          </div>
          <div className="rounded-15 bg-charcoal p-[14px] h-[60px] flex items-center gap-[10px]">
            <img src="/images/icons/chart-icon-2.svg" alt="" />
            <div>
              <span className="text-[10px] text-[#A3A3A3] leading-[15px] font-semibold">
                Охват 48ч
              </span>
              <p className="text-15 mt-[3px] leading-[15px]">880</p>
            </div>
          </div>
          <div className="rounded-15 bg-charcoal p-[14px] h-[60px] flex items-center gap-[10px]">
            <img src="/images/icons/chart-icon-4.svg" alt="" />
            <div>
              <span className="text-[10px] text-[#A3A3A3] leading-[15px] font-semibold">
                Premium users
              </span>
              <p className="text-15 mt-[3px] leading-[15px]">247</p>
            </div>
          </div>
          <div className="rounded-15 bg-charcoal p-[14px] h-[60px] flex items-center gap-[10px]">
            <img src="/images/icons/chart-icon-5.svg" alt="" />
            <div>
              <span className="text-[10px] text-[#A3A3A3] leading-[15px] font-semibold">
                Сред. чек продажи
              </span>
              <p className="text-15 mt-[3px] leading-[15px]">750 ₽</p>
            </div>
          </div>
          <div className="rounded-15 bg-charcoal p-[14px] h-[60px] flex items-center gap-[10px]">
            <img src="/images/icons/chart-icon-6.svg" alt="" />
            <div>
              <span className="text-[10px] text-[#A3A3A3] leading-[15px] font-semibold">
                Продано реклам шт.
              </span>
              <p className="text-15 mt-[3px] leading-[15px]">183</p>
            </div>
          </div>
          <div className="rounded-15 bg-charcoal p-[14px] h-[60px] flex items-center gap-[10px]">
            <img src="/images/icons/chart-icon-7.svg" alt="" />
            <div>
              <span className="text-[10px] text-[#A3A3A3] leading-[15px] font-semibold">
                Куплено реклам шт.
              </span>
              <p className="text-15 mt-[3px] leading-[15px]">281</p>
            </div>
          </div>
        </div>
        <EarnedChart title="Уровень спроса:" subTitle="+5%" data={data2} />
        <EarnedChart title="Уровень спроса:" subTitle="+5%" data={data2} />
      </div>
    </ModalUI>
  );
};
