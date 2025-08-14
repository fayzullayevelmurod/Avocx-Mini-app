import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import CardUI from "../components/CardUI";
import {
  CategoryForm,
  CustomSelect,
  DropDown,
  InputForm,
  SelectedBox,
  TextareaForm,
  UploadFile,
  UploadImg,
} from "../components/Form";
import { Header } from "../components/Header";
import Sort from "../components/Sort";

export const AddingProduct = () => {
  // Barcha kategoriyalar va ularning elementlari
  const categories = [
    { label: "Одежда", items: ["Футболки", "Куртки", "Штаны"] },
    { label: "Обувь", items: ["Кроссовки", "Ботинки", "Туфли"] },
    { label: "Аксессуары", items: ["Сумки", "Ремни", "Шапки"] },
  ];

  // Tanlangan elementlarni saqlash uchun obyekt
  const [selectedItems, setSelectedItems] = useState({});

  const handleSelect = (categoryLabel, item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [categoryLabel]: item, // Har bir kategoriya uchun tanlangan element
    }));
  };

  const cardProducts = [
    {
      id: 1,
      image: "",
      imageAlt: "Standart",
      brand: "Текст 1",
      title: "Текст 2",
      condition: "Характеристика: значение",
      size: "Характеристика: значение",
      price: "2.500₽",
      favoriteIcon: "/images/icons/star.svg",
      favoriteIconAlt: "favorite icon",
    },
  ];

  const categoryOptions = [
    "Настройки магазина",
    "Настройки магазина 2",
    "Настройки магазина 3",
  ];

  const options = [
    { value: "sell", label: "Процесс оплаты: Без согласования" },
    { value: "buy", label: "Я покупаю" },
    { value: "rent", label: "Я арендаю" },
  ];

  const options1 = [
    { value: "sell1", label: "Способы доставки: Посылка" },
    { value: "buy", label: "Я покупаю" },
    { value: "rent", label: "Я арендаю" },
  ];

  return (
    <div>
      <Header />
      <CardUI className="!px-[9px] !py-[10px] h-[65px] flex items-center relative mb-[10px] mt-[-5px]">
        <div className="flex items-center justify-between gap-[10px]">
          <img
            className="w-12 h-12 rounded-full"
            src="/images/company-logo.svg"
            alt="product company logo"
          />
          <div className="mt-[3px]">
            <h3 className="text-base font-semibold leading-full mb-[6px]">
              SHLZ.STORE 🥇
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <img src="/images/icons/group.svg" alt="group icon" />
                <span className="text-xs font-medium text-grayCustom">
                  5879
                </span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/images/icons/cart.svg" alt="cart icon" />
                <span className="text-xs font-medium text-grayCustom">
                  2334
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardUI>

      <Sort
        label="Категория"
        options={categoryOptions}
        icon={true}
        iconPath="/images/icons/category.svg"
      />

      <h3 className="text-xl text-center leading-full mt-[19px]">
        Добавление товара
      </h3>
      <p className="mb-4 text-center leading-[132%] mt-[5px] w-[97%] mx-auto tracking-[0.7px]">
        Заполните все необходимую информацию о <br /> товаре, его карточку и
        подробности.
      </p>

      <div className="max-w-[202px] mx-auto">
        {cardProducts.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>

      <CardUI className="pt-5 mt-[19px]">
        <h2 className="text-xl leading-full mb-[18px] font-semibold text-center">
          Добавление товара
        </h2>

        <div className="space-y-[6px]">
          <InputForm placeHolder="Текст 1 вторичный" />
          <InputForm placeHolder="Текст 2 вторичный" />
        </div>

        <div className="text-center mt-5 mb-[15px]">
          <h3 className="text-xl text-center">Характеристики</h3>
          <p className="text-15">Для выбора вида, размера, цвета и т.д.</p>
        </div>

        <Button className="before:hidden after:hidden !shadow-none bg-transparent border-2 border-primary">
          <img src="/images/icons/plus-bold.svg" alt="" />
          <span>Добавить характеристики</span>
        </Button>

        <div className="text-center mt-5">
          <h3 className="text-xl text-center">Дополнительные данные</h3>
          <p className="text-15 mt-1">Незаполненные данные не будут видны</p>
        </div>

        <div className="space-y-[6px] mt-[16px] mb-[6px]">
          <InputForm placeHolder="Местонахождение" />
          <InputForm placeHolder="Доставка (Europe, USA, Russia)" />
          <CustomSelect
            options={options}
            rightIcon={true}
            placeholder="Тип кнопки: Цена"
            selected={true}
            className="border border-iron !h-[49px]"
          />
          <CustomSelect
            options={options1}
            rightIcon={true}
            placeholder="Валюта: ₽"
            selected={true}
            className="border border-iron !h-[49px]"
          />
          <InputForm placeHolder="Цена (только цифры)" />
          <InputForm placeHolder="Количество товара (на складе)" />
        </div>

        <div className="mt-[17px]">
          <h3 className="text-xl font-semibold text-center mb-[6px]">
            Фото, видео и описание товара
          </h3>

          <div className="space-y-[6px] mb-[7px]">
            <UploadImg label="Главное фото" />
            <UploadImg label="Другие фото и видео" />
            <TextareaForm
              placeHolder="Описание товара, можно ввести ключевые слова и нажать «Ai Описание» "
              className="h-[136px]"
              acctions={true}
            />
          </div>

          <h3 className="text-xl font-semibold text-center mb-[10px] mt-[27px]">
            Выберите категорию товара
          </h3>

          {/* Dinamik kategoriyalar */}
          <DropDown className="space-y-[7px]" isOpen={true}>
            {categories.map((cat) => (
              <DropDown
                key={cat.label}
                className="space-y-[7px] w-[356px] ml-auto"
                isOpen={false}
                label={cat.label}
              >
                <div className="max-w-[319px] ml-auto space-y-[6px]">
                  {cat.items.map((item) => (
                    <SelectedBox
                      key={item}
                      label={item}
                      selected={selectedItems[cat.label] === item}
                      onClick={() => handleSelect(cat.label, item)}
                    />
                  ))}
                </div>
              </DropDown>
            ))}
          </DropDown>
          <DropDown
            className="space-y-[7px] mt-[7px]"
            isOpen={false}
            label="Женское"
          >
            {categories.map((cat) => (
              <DropDown
                key={cat.label}
                className="space-y-[7px] w-[356px] ml-auto"
                isOpen={false}
                label={cat.label}
              >
                <div className="max-w-[319px] ml-auto space-y-[6px]">
                  {cat.items.map((item) => (
                    <SelectedBox
                      key={item}
                      label={item}
                      selected={selectedItems[cat.label] === item}
                      onClick={() => handleSelect(cat.label, item)}
                    />
                  ))}
                </div>
              </DropDown>
            ))}
          </DropDown>
          <div className="space-y-[6px] mt-[10px]">
            <Button>Добавить товар</Button>
            <UploadFile
            className="bg-transparent"
              label="Сохранить как шаблон"
              iconPath="/images/icons/uploaded.svg"
            />
          </div>
        </div>
      </CardUI>
    </div>
  );
};
