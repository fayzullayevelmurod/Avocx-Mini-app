import { useState } from "react";
import CardUI from "../components/CardUI";
import { TextareaForm } from "../components/Form";
import Search from "../components/Search";
import SearchTitle from "../components/SearchTitle";
import { CustomRadio } from "../components/Radio";
import Button from "../components/Button";

export const SettingsChanel = () => {
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
    "Lorem 2",
    "Lorem 3",
    "Lorem 4",
    "Lorem 5",
    "Lorem 6",
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div>
      <SearchTitle label="Создание объявления" />
      <p className="leading-[120%] text-center mb-[25px] text-base max-w-[360px] mx-auto  mt-[39px]">
        Укажите ключевые слова, для поиска рекламодателями. То что относится к
        каналу и контенту в нём.
      </p>
      <CardUI className="py-[10px] pl-[14px] pr-3">
        <div className="flex items-center gap-[14px] justify-center mb-[6px]">
          <img src="/images/icons/logo.svg" alt="" />
          <span className="text-lg font-semibold -translate-x-1">
            Cчастье Сейчас
          </span>
        </div>
        <TextareaForm
          className="!pt-1 h-[114px]"
          placeHolder="Аффирмации, любовь к жизни — от 5 слов. "
        />
        <h3 className="text-center mt-[7px] text-lg font-semibold">
          Выберите нишу
        </h3>
        <span className="text-[#888888] text-center mt-[3px] mb-2 block">
          Максимум три ниши.
        </span>
        <div className="mt-1">
          <Search className="!border-none bg-dark" />
        </div>
        <div className="mt-[18px] ">
          <CustomRadio
            options={categories}
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>
        <Button className="mt-2">Готово</Button>
      </CardUI>
    </div>
  );
};
