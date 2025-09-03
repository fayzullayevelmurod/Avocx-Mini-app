import {
  Button,
  CardUI,
  InputForm,
  List,
  ProfileBox,
  TextareaForm,
} from "../components";
import { CustomSelect } from "../components/CustomSelect";
import { Header } from "../layouts";

export const StoreManagementTwo = () => {
  const categoryOptions = [
    "Настройки сведений о магазине",
    "Настройки сведений о магазине 2",
    "Настройки сведений о магазине 3",
  ];
  const options = [
    { value: "sell", label: "Процесс оплаты: Без согласования " },
    { value: "buy", label: "Процесс оплаты: Без согласования 2" },
    { value: "rent", label: "Процесс оплаты: Без согласования 3" },
  ];

  const options2 = [
    { value: "sell", label: "Способы доставки: Посылка " },
    { value: "buy", label: "Способы доставки: Посылка 2" },
    { value: "rent", label: "Способы доставки: Посылка 3" },
  ];
  const options3 = [
    { value: "sell", label: "Страны доставки: Весь Мир " },
    { value: "buy", label: "Страны доставки: Весь Мир 2" },
    { value: "rent", label: "Страны доставки: Весь Мир 3" },
  ];
  return (
    <div>
      <Header title="Управление магазином" />
      <div className="space-y-[7px]">
        <ProfileBox />
        <List options={categoryOptions} icon={true} />
        <CardUI className="!rounded-[30px] !pt-4 space-y-2">
          <InputForm
            className="pt-[3px] !h-[46px] !pl-[10px]"
            placeHolder="SHLZ.STORE"
            value="SHLZ.STORE"
          />
          <TextareaForm value="Топовые вещи за вкусный прайс.500+ настоящих отзывов. Вещи б/у из семейного гардероба." />
          <Button type="gray">
            <img src="/images/icons/plus.svg" alt="" />
            <span>Загрузите новый логотип</span>
          </Button>
          <Button type="gray">
            <img src="/images/icons/plus.svg" alt="" />
            <span>Загрузить новый баннер</span>
          </Button>
          <CustomSelect
            options={options}
            placeholder="Процесс оплаты: Без согласования"
            selected={true}
            rightIcon={true}
            className="!h-[49px] !font-bold"
          />
           <CustomSelect
            options={options2}
            placeholder="Процесс оплаты: Без согласования"
            selected={true}
            rightIcon={true}
            className="!h-[49px] !font-bold"
          />
           <CustomSelect
            options={options3}
            placeholder="Процесс оплаты: Без согласования"
            selected={true}
            rightIcon={true}
            className="!h-[49px] !font-bold"
          />
          <Button className="mt-[7px]">
            <img src="/images/icons/file-plus-black.svg" alt="" />
            <span>Сохранить и применить</span>
          </Button>
        </CardUI>
      </div>
    </div>
  );
};
