import { useState } from "react";
import {
  Button,
  CardUI,
  List,
  MultiSelect,
  ProfileBox,
  SelectTime,
  Sort,
} from "../components";
import { Header } from "../layouts";

export const StoreManagement = () => {
  const [openId, setOpenId] = useState(null);

  const categoryOptions = [
    "Настройки сведений о магазине",
    "Настройки сведений о магазине 2",
    "Настройки сведений о магазине 3",
  ];
  const categories = ["Lorem 4", "Lorem 5", "Lorem 6"];
  const categories2 = ["RUB (₽)", "RUB (₽) 2", "RUB (₽) 3"];
  return (
    <div>
      <Header title="Управление магазином" />
      <div className="space-y-[7px] pb-16">
        <ProfileBox />
        <List options={categoryOptions} icon={true} />
        <CardUI className="!rounded-[30px] !pt-4">
          <h3 className="text-center text-15 font-semibold mb-[14px]">
            Выберите рабочие дни и время:
          </h3>
          <SelectTime className="pb-[12px] mb-[7px]" />
          <Button type="gray">
            <img src="/images/icons/plus.svg" alt="" />
            <span>Добавить ещё время</span>
          </Button>
          <h3 className="text-center text-15 font-semibold my-3">
            Куда доставляете товары:
          </h3>
          <MultiSelect
            id="select1"
            categories={categories}
            openId={openId}
            setOpenId={setOpenId}
          />
          <h3 className="text-center text-15 font-semibold my-3">
            Какой валюте принимаете оплату:
          </h3>
          <MultiSelect
            id="select2"
            categories={categories2}
            openId={openId}
            setOpenId={setOpenId}
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
