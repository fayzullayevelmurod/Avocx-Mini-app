import Button from "../components/Button";
import CardUI from "../components/CardUI";
import { InputForm, TextareaForm } from "../components/Form";
import SearchTitle from "../components/SearchTitle";
import Sort from "../components/Sort";

export const Control = () => {
  const categoryOptions = [
    "Настройки сведений о магазине",
    "Настройки сведений о магазине 2",
    "Настройки сведений о магазине 3",
  ];
  return (
    <div>
      <SearchTitle label="Управление магазином" />
      <CardUI className="!px-[9px] !py-[10px] h-[65px] flex items-center relative mb-[11px] mt-[33px]">
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
      <CardUI className="mt-[10px] pt-4 rounded-[30px]">
        <h3 className="text-15 font-semibold leading-full text-center mb-3">
          Выберите рабочие дни магазина:
        </h3>
        <div className="grid grid-cols-7 gap-[10px]">
          <button
            className={`bg-dark border border-primary rounded-base flex items-center justify-center text-15 w-[46px] h-[46px]`}
          >
            ПН
          </button>
          <button
            className={`bg-dark border border-primary rounded-base flex items-center justify-center text-15 w-[46px] h-[46px]`}
          >
            ВТ
          </button>
          <button
            className={`bg-dark border border-primary rounded-base flex items-center justify-center text-15 w-[46px] h-[46px]`}
          >
            СР
          </button>
          <button
            className={`bg-dark border border-primary rounded-base flex items-center justify-center text-15 w-[46px] h-[46px]`}
          >
            ЧТ
          </button>
          <button
            className={`bg-dark border border-primary rounded-base flex items-center justify-center text-15 w-[46px] h-[46px]`}
          >
            ПТ
          </button>
          <button
            className={`bg-dark rounded-base flex items-center justify-center text-15 w-[46px] h-[46px]`}
          >
            СБ
          </button>
          <button
            className={`bg-dark rounded-base flex items-center justify-center text-15 w-[46px] h-[46px]`}
          >
            ВС
          </button>
        </div>
        <h3 className="text-15 font-semibold leading-full text-center mt-[22px] mb-[11px]">
          Рабочее время
        </h3>
        <InputForm placeHolder="00:00 — 00:00" />
        <h3 className="text-15 font-semibold leading-full text-center mt-[18px] mb-[11px]">
          Куда доставляете товары:
        </h3>
        <TextareaForm placeHolder="Россия и СНГ" className="h-[100px]" />
        <h3 className="text-15 font-semibold leading-full text-center mt-[13px] mb-3">
          Принимаете оплату в:
        </h3>
        <div className="grid grid-cols-7 gap-[10px] mb-5">
          <button
            className={`bg-dark border border-primary rounded-base flex items-center justify-center text-15 w-[46px] h-[46px]`}
          >
            TON
          </button>
          <button
            className={`bg-dark border border-primary rounded-base flex items-center justify-center text-15 w-[46px] h-[46px]`}
          >
            Stars
          </button>
          <button
            className={`bg-dark border border-primary rounded-base flex items-center justify-center text-15 w-[46px] h-[46px]`}
          >
            ₽
          </button>
          <button
            className={`bg-dark border border-primary rounded-base flex items-center justify-center text-15 w-[46px] h-[46px]`}
          >
            $
          </button>
          <button
            className={`bg-dark border border-primary rounded-base flex items-center justify-center text-15 w-[46px] h-[46px]`}
          >
            BYN
          </button>
          <button
            className={`bg-dark rounded-base flex items-center justify-center text-15 w-[46px] h-[46px]`}
          >
            €
          </button>
          <button
            className={`bg-dark rounded-base flex items-center justify-center text-15 w-[46px] h-[46px]`}
          >
            ₸
          </button>
        </div>
        <Button>Сохранить изменения</Button>
      </CardUI>
    </div>
  );
};
