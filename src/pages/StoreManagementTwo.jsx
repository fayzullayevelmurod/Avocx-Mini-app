import Button from "../components/Button";
import CardUI from "../components/CardUI";
import {
  CategoryForm,
  DropDown,
  Select,
  SelectedBox,
  UploadFile,
} from "../components/Form";
import SearchTitle from "../components/SearchTitle";
import Sort from "../components/Sort";
import Title from "../components/Title";

const StoreManagementTwo = () => {
  const categoryOptions = [
    "Настройки магазина",
    "Настройки магазина 2",
    "Настройки магазина 3",
  ];
  return (
    <div>
      <SearchTitle label="Управление магазином" className="mb-[21px] mt-[13px]" />
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
      <p className="text-center text-[17px] my-[17px] mx-auto w-[92%] leading-[120%]">
        Можно добавить, переименовать и удалить, при удалении, существующий
        товар сделает шаг назад по категориям.
      </p>
      <CardUI>
        <DropDown className="space-y-[7px]" isOpen={true}>
          <div className="pl-8">
            <SelectedBox />
          </div>
          <div className="pl-[69px]">
            <CategoryForm
              label="Подподкатегория"
              icon="/images/icons/plus-2.svg"
            />
          </div>
          <div className="pl-8">
            <CategoryForm
              label="Подкатегория"
              icon="/images/icons/plus-2.svg"
            />
          </div>
          <CategoryForm />
          <div className="w-[356px]"></div>
        </DropDown>
        <div className="pt-4 space-y-[7px]">
          <Button>Сохранить изменения</Button>
          <UploadFile />
        </div>
      </CardUI>
    </div>
  );
};

export default StoreManagementTwo;
