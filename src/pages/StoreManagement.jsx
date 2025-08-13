import { Link } from "react-router-dom";
import Title from "../components/Title";
import CardUI from "../components/CardUI";
import {
  CustomSelect,
  InputForm,
  Select,
  TextareaForm,
  UploadImg,
} from "../components/Form";
import Button from "../components/Button";
import SearchTitle from "../components/SearchTitle";
import Sort from "../components/Sort";

const StoreManagement = () => {
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

  const options2 = [
    { value: "sell2", label: "Страны доставки: Весь Мир" },
    { value: "buy", label: "Я покупаю" },
    { value: "rent", label: "Я арендаю" },
  ];
  const categoryOptions = [
    "Настройки магазина",
    "Настройки магазина 2",
    "Настройки магазина 3",
  ];
  return (
    <div className="mt-[6px]">
      <SearchTitle label="Управление магазином" className="mb-[34px]" />
      <CardUI className="!px-[9px] !py-[10px] h-[65px] flex items-center relative mb-[10px]">
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
      <CardUI className="!px-[13px] !pt-[2px] mt-[10px] !rounded-[30px]">
        <div className="space-y-[9px] mt-3">
          <InputForm placeHolder="SHLZ.STORE" value="SHLZ.STORE" />
          <TextareaForm value="Топовые вещи за вкусный прайс.500+ настоящих отзывов. Вещи б/у из семейного гардероба." />
          <UploadImg label="Загрузите новый логотип" />
          <UploadImg label="Загрузите новый баннер" />
          <CustomSelect
            options={options}
            rightIcon={true}
            placeholder="Процесс оплаты: Без согласования"
            selected={true}
          />
          <CustomSelect
            options={options1}
            rightIcon={true}
            placeholder="Способы доставки: Посылка"
            selected={true}
          />
          <CustomSelect
            options={options2}
            rightIcon={true}
            placeholder="Страны доставки: Весь Мир"
            selected={true}
          />
          <Button>Сохранить изменения</Button>
        </div>
      </CardUI>
    </div>
  );
};

export default StoreManagement;
