import { useState } from "react";
import { Search } from "../Search";
import { ModalUI } from "./ModalUI";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";

const categories = [
  "Авто и мото",
  "Бизнес и финансы",
  "Видеоигры",
  "Животные",
  "Дети и родители",
  "Другое",
  "Еда и кулинария",
  "Здоровье и медицина",
  "Шоубизнес",
  "Спорт и отдых",
  "Туризм",
  "Наука и технологии",
  "Музыка",
  "Образование",
];

export const CategoriesModal = ({ isOpen, onClose }) => {
  const [selectedSet, setSelectedSet] = useState(() => new Set());

  const toggleSelect = (category) => {
    setSelectedSet((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  const resetAll = () => setSelectedSet(new Set());

  return (
    <ModalUI isOpen={isOpen} className="!p-0 flex flex-col justify-between">
      {/* Header */}
      <div className="px-[27px] pt-[23px]">
        <div className="flex items-center justify-between mb-[18px]">
          <div className="flex items-center gap-[7px]">
            <h3 className="text-17 font-bold">Категории</h3>
            <div
              className="text-[#A3A3A3] text-[10px] bg-[#303030] rounded-[5px] h-[20px] leading-[8px] p-[6px] flex items-center justify-center cursor-pointer"
              onClick={resetAll}
            >
              Сбросить
            </div>
          </div>
          <button onClick={onClose}>
            <img src="/images/icons/close.svg" alt="" width={18} />
          </button>
        </div>

        <Search />

        {/* Category List */}
        <ul className="mt-3 space-y-1 max-h-[calc(100vh_-_206px)] pb-4 no-scrollbar overflow-y-auto">
          {categories.map((cat) => {
            const checked = selectedSet.has(cat);
            return (
              <li
                key={cat}
                onClick={() => toggleSelect(cat)}
                className="rounded-[15px] bg-[#242424] px-[15px] gap-[7px] h-[42px] flex items-center cursor-pointer"
              >
                <Checkbox
                  checked={checked}
                  onChange={(e) => {
                    e.stopPropagation();
                    toggleSelect(cat);
                  }}
                />
                <span>{cat}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="pt-[16px] px-[13px] pb-5 border-t border-[#242424]">
        <Button onClick={onClose}>Применить</Button>
      </div>
    </ModalUI>
  );
};
