import { Search } from "../Search";
import { ModalUI } from "./ModalUI";

export const CategoriesModal = ({isOpen, onClose}) => {
  return (
    <ModalUI isOpen={isOpen}>
      <div className="flex items-center justify-between mb-[18px]">
        <h3 className="text-17 font-bold">Категории</h3>
        <button onClick={onClose}>
          <img src="/images/icons/close.svg" alt="" width={20} />
        </button>
      </div>
      <Search />
      <ul className="mt-3 space-y-1">
        <li className="rounded-[15px] bg-[#303030] px-[15px] gap-[7px] h-[42px] items-center flex">
          <div className="w-5">
            <img src="/images/icons/category-icon-1.svg" alt="" className="w-full" />
          </div>
          <span>Цифровые товары</span>
        </li>
        <li className="rounded-[15px] bg-[#303030] px-[15px] gap-[7px] h-[42px] items-center flex">
          <div className="w-5">
            <img src="/images/icons/category-icon-2.svg" alt="" className="w-full" />
          </div>
          <span>Эксклюзив</span>
        </li>
        <li className="rounded-[15px] bg-[#303030] px-[15px] gap-[7px] h-[42px] items-center flex">
          <div className="w-5">
            <img src="/images/icons/category-icon-3.svg" alt="" className="w-full" />
          </div>
          <span>Электроника</span>
        </li>
        <li className="rounded-[15px] bg-[#303030] px-[15px] gap-[7px] h-[42px] items-center flex">
          <div className="w-5">
            <img src="/images/icons/category-icon-4.svg" alt="" className="w-full" />
          </div>
          <span>Одежда</span>
        </li>
        <li className="rounded-[15px] bg-[#303030] px-[15px] gap-[7px] h-[42px] items-center flex">
          <div className="w-5">
            <img src="/images/icons/category-icon-5.svg" alt="" className="w-full" />
          </div>
          <span>Обувь</span>
        </li>
        <li className="rounded-[15px] bg-[#303030] px-[15px] gap-[7px] h-[42px] items-center flex">
          <div className="w-5">
            <img src="/images/icons/category-icon-3.svg" alt="" className="w-full" />
          </div>
          <span>Дом и сад</span>
        </li>
        <li className="rounded-[15px] bg-[#303030] px-[15px] gap-[7px] h-[42px] items-center flex">
          <div className="w-5">
            <img src="/images/icons/category-icon-3.svg" alt="" className="w-full" />
          </div>
          <span>Детские товары</span>
        </li>
        <li className="rounded-[15px] bg-[#303030] px-[15px] gap-[7px] h-[42px] items-center flex">
          <div className="w-5">
            <img src="/images/icons/category-icon-3.svg" alt="" className="w-full" />
          </div>
          <span>Красота и здаровье</span>
        </li>
        <li className="rounded-[15px] bg-[#303030] px-[15px] gap-[7px] h-[42px] items-center flex">
          <div className="w-5">
            <img src="/images/icons/category-icon-3.svg" alt="" className="w-full" />
          </div>
          <span>Бытовая техника</span>
        </li>
        <li className="rounded-[15px] bg-[#303030] px-[15px] gap-[7px] h-[42px] items-center flex">
          <div className="w-5">
            <img src="/images/icons/category-icon-3.svg" alt="" className="w-full" />
          </div>
          <span>Спорт и отдых</span>
        </li>
        <li className="rounded-[15px] bg-[#303030] px-[15px] gap-[7px] h-[42px] items-center flex">
          <div className="w-5">
            <img src="/images/icons/category-icon-3.svg" alt="" className="w-full" />
          </div>
          <span>Строительство и ремонт</span>
        </li>
        <li className="rounded-[15px] bg-[#303030] px-[15px] gap-[7px] h-[42px] items-center flex">
          <div className="w-5">
            <img src="/images/icons/category-icon-3.svg" alt="" className="w-full" />
          </div>
          <span>Продукты питания</span>
        </li>
        <li className="rounded-[15px] bg-[#303030] px-[15px] gap-[7px] h-[42px] items-center flex">
          <div className="w-5">
            <img src="/images/icons/category-icon-3.svg" alt="" className="w-full" />
          </div>
          <span>Аптека</span>
        </li>
        <li className="rounded-[15px] bg-[#303030] px-[15px] gap-[7px] h-[42px] items-center flex">
          <div className="w-5">
            <img src="/images/icons/category-icon-3.svg" alt="" className="w-full" />
          </div>
          <span>Для животных</span>
        </li>
      </ul>
    </ModalUI>
  );
};
