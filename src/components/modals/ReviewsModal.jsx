import { CardUI } from "../CardUI";
import { Sort } from "../Sort";
import { ModalUI } from "./ModalUI";

export const ReviewsModal = ({ isOpen, onClose }) => {
  const categoryOptions3 = ["От последних", "От последних 2", "От последних 3"];
  return (
    <ModalUI isOpen={isOpen} className="!py-3 !px-[13px]">
      <div className="space-y-[7px]">
        <CardUI className="!pl-4 justify-between pr-4 !py-[10px] h-[44px] flex items-center relative !rounded-[25px]">
          <div className="flex items-center">
            <h3 className="font-semibold text-15 mr-[7px]">Рейтинг</h3>
            <img
              src="/images/icons/orange-star.svg"
              alt=""
              width={20}
              height={20}
            />
            <span className="font-semibold pl-[5px]">4.9</span>
            <span className="font-semibold pl-3">(Отзывов: 234)</span>
          </div>
          <button onClick={onClose}>
            <img className="" src="/images/icons/close.svg" alt="" width={20} />
          </button>
        </CardUI>
        <Sort
          label="Сортировка"
          icon={true}
          options={categoryOptions3}
          className="!border-[#303030]"
        />
        <div className="flex gap-5 justify-center h-10 items-center">
          <span className="font-semibold">Только этот товар</span>
          <span className="font-semibold text-[#707070]">
            Все отзывы магазина
          </span>
        </div>
        <div className="p-[10px] rounded-[15px] bg-[#303030]">
          <div className="flex gap-[3px] items-center">
            <div className="flex gap-[7px] items-center">
              <img src="/images/icons/starr.svg" alt="" />
              <span className="w-6 font-semibold">5</span>
            </div>
            <span className="font-semibold">18.08.25 в 18:30</span>
          </div>
          <p className="text-[13px] mt-[6px]">
            Заказал рюкзак томми, продавец быстро отправил, ничего не забыл,
            товар оригинал, я проверил через коды, буду брать ещё!
          </p>
        </div>
        <div className="p-[10px] rounded-[15px] bg-[#303030]">
          <div className="flex gap-[3px] items-center">
            <div className="flex gap-[7px] items-center">
              <img src="/images/icons/starr.svg" alt="" />
              <span className="w-6 font-semibold">5</span>
            </div>
            <span className="font-semibold">18.08.25 в 18:30</span>
          </div>
          <p className="text-[13px] mt-[6px]">
            Заказал рюкзак томми, продавец быстро отправил, ничего не забыл,
            товар оригинал, я проверил через коды, буду брать ещё!
          </p>
        </div>
      </div>
    </ModalUI>
  );
};
