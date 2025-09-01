import { Header } from "../layouts";

export const Notifications = () => {
  return (
    <div>
      <Header title="Уведомления" activeType='envelope' />
      <div className="bg-[#1E1E1E] rounded-[20px] py-[14px] px-[17px] relative">
        <button className="absolute top-[15px] right-[15px]">
          <img src="/images/icons/trash.svg" alt="" />
        </button>
        <div className="flex items-center gap-4">
          <h3 className="text-15 font-bold">Уведомление</h3>
          <span className="text-xs">18.08.25 в 18:30</span>
        </div>
        <p className="text-grayCustom text-xs pt-3 leading-[124%]">
          Новый заказ остался без обработки, примите заказ или он будет
          автоматически отменён через 10ч, ваш рейтинг понизится из-за
          неактивности.
        </p>
      </div>
    </div>
  );
};
