import Button from "../components/Button";
import CardUI from "../components/CardUI";
import { CategoryForm, CustomSelect, InputForm } from "../components/Form";
import { Header } from "../components/Header";
import Sort from "../components/Sort";

export const ManagementCharacteristics = () => {
  const options = [
    { value: "sell", label: "Название 1" },
    { value: "buy", label: "Название 2" },
    { value: "rent", label: "Название 3" },
  ];

  const options1 = [
    { value: "sell1", label: "Название 2" },
    { value: "buy", label: "Название 2" },
    { value: "rent", label: "Название 3" },
  ];
  const categoryOptions = [
    "Характеристики для товаров",
    "Характеристики для товаров 2",
    "Характеристики для товаров 3",
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
      <p className="text-xl leading-[121%] font-semibold mb-[23px] mt-5 text-center">
        Создайте или выберите <br /> характеристики для вашего товара.
      </p>
      <CardUI className="rounded-[30px] mb-[80px]">
        <div className="space-y-2">
          <InputForm placeHolder="Название" />
          <CategoryForm label="Вариант 1" />
        </div>
        <div className="mt-[14px] mb-[22px] space-y-[7px]">
          <Button>Готово</Button>
          <Button className="bg-transparent border-2 border-[#1A72FF] !shadow-none before:hidden after:hidden">
            Добавить в сохраненные
          </Button>
        </div>
        <h3 className="text-xl font-semibold leading-full mb-3 text-center">
          Сохраненные характеристики
        </h3>
        <div className="space-y-2">
          <CustomSelect
            options={options}
            leftIcon={true}
            placeholder="Название 1"
            selected={true}
            trashIcon={true}
            className="!h-[45px] rounded-[20px]"
          />
          <CustomSelect
            options={options1}
            leftIcon={true}
            placeholder="Название 2"
            selected={true}
            trashIcon={true}
            className="!h-[45px] rounded-[20px]"
          />
        </div>
      </CardUI>
    </div>
  );
};
