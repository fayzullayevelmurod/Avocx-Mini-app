import { useState } from "react";
import {
  CardUI,
  InputForm,
  List,
  ProductCard,
  ProfileBox,
  Input,
  TextareaForm,
  Button,
  Checkbox,
} from "../components";
import { CustomSelect } from "../components/CustomSelect";
import { Header } from "../layouts";

export const AddingProduct = () => {
    const [check, setCheck] = useState(false);

  const categoryOptions = [
    "Добавление нового товара",
    "Добавление нового товара 2",
    "Добавление нового товара 3",
  ];
  const options = [
    { value: "sell", label: "Добавить в группу: 1" },
    { value: "buy", label: "Добавить в группу: 2" },
    { value: "rent", label: "Добавить в группу: 3" },
  ];

  return (
    <div>

      <div className="space-y-[7px]">
        <ProfileBox />
        <List options={categoryOptions} icon={true} />
      </div>
      <CardUI className="rounded-[30px] mt-[7px]">
        <h3 className="text-center font-semibold">Добавление товара</h3>
        <p className="text-center max-w-[369px] mx-auto mt-[6px] text-xs mb-[10px]">
          Загрузите фото товара. Соотношение сторон: 3,5х4.64. Размер в
          пикселях: 1050х1392 или 1400х1856.
        </p>
        <ProductCard title="Pattern (RUB)" noFeatured={true} />
        <div className="flex gap-1 mx-[27px] mt-2 mb-3">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="rounded-[15px] bg-[#303030] w-[52px] h-[68px] flex items-center justify-center border border-[#707070] border-dashed"
              >
                <img
                  src="/images/empty-photo.png"
                  alt=""
                  width={23}
                  height={23}
                />
              </div>
            ))}
        </div>
        <div className="space-y-[7px]">
          <TextareaForm
            placeHolder="Краткое ключевое описание"
            className="h-[70px]"
          />
          <TextareaForm
            placeHolder="Полное описание товара. Для ИИ-генерации напишите самые ключевые слова, минимум 7 слов."
            className="h-[185px]"
            acctions={true}
          />
          <div className="grid grid-cols-2 gap-1">
            <Input className="!pt-2 !h-[50px]" placeHolder="Цена" />
            <Input className="!pt-2 !h-[50px]" placeHolder="Цена без скидки" />
          </div>
          <Input
            className="!pt-2 !h-[50px]"
            placeHolder="Штрихкод"
            leftIcon="barcode.svg"
          />
          <Input
            className="!pt-2 !h-[50px]"
            placeHolder="Бренд"
            leftIcon="build.svg"
          />
          <Input
            className="!pt-2 !h-[50px]"
            placeHolder="Название новой группы товара"
            leftIcon="document.svg"
          />
          <CustomSelect
            selected={true}
            options={options}
            placeholder="Добавить в группу:"
            leftImg="images/icons/document.svg"
            rightIcon={true}
            className="!h-[49px]"
          />
          <Input
            className="!pt-2 !h-[50px]"
            placeHolder="Количество товара на складе"
            leftIcon="warehouse.svg"
          />

          <div>
            <h3 className="text-center text-17 font-semibold mt-0 pt-[7px]">
              Характеристики
            </h3>
            <p className="text-sm text-center mt-[6px]">
              Выберите существующие или создайте новые.
            </p>
          </div>
          <Button type="gray">
            <img src="/images/icons/plus.svg" alt="" />
            <span>Добавить характеристики</span>
          </Button>
          <h3 className="text-center text-17 font-semibold mt-3 pt-[7px]">
            Габариты товара (мм)
          </h3>
          <div className="grid grid-cols-3 max-w-[308px] mx-auto pt-2 gap-1">
            <Input
              className="!h-[50px] text-center text-15"
              placeHolder="Длинна"
            />
            <Input
              className="!h-[50px] text-center text-15"
              placeHolder="Ширина"
            />
            <Input
              className="!h-[50px] text-center text-15"
              placeHolder="Высота"
            />
          </div>
          <h3 className="text-center text-17 font-semibold mt-3 pt-[7px] pb-2">
            Комплектация
          </h3>
          <TextareaForm
            placeHolder="Перечислите по пунктам комплектацию товара."
            className="h-[70px]"
          />
          <h3 className="text-center text-17 font-semibold mt-3 pt-[10px] pb-2">
            Дополнительные данные
          </h3>
          <div className="flex justify-between w-full items-center bg-dark p-[10px] rounded-[20px] pl-4 h-[46px] pr-[15px]">
            <div className="flex gap-[10px] items-center">
              <Checkbox checked={check} onChange={() => setCheck(!check)} />
              <div className="flex gap-0 items-center">
                <img src="/images/icons/clock.svg" alt="" />
                <span>Заказы ко времени</span>
              </div>
            </div>
            <img src="/images/icons/info.svg" alt="" />
          </div>
          <h3 className="text-center text-17 font-semibold mt-3 pt-[7px] pb-2">
            Категория товара
          </h3>
          <div className="flex items-center justify-between border border-[#303030] bg-[#1A1A1A] rounded-[20px] h-[46px] pr-2 pl-[19px]">
            <span className="font-semibold">Категория:</span>
            <img src="/images/icons/chevron-right.svg" alt="" />
          </div>
          <Button>
            <img src="/images/icons/black-box.svg" alt="" />
            <span>Загрузить товар</span>
          </Button>
          <Button>
            <img src="/images/icons/file-plus-black.svg" alt="" />
            <span>Сохранить как шаблон</span>
          </Button>
        </div>
      </CardUI>
    </div>
  );
};
