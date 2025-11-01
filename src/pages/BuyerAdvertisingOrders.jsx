import { Sort } from "../components";
import { Header } from "../layouts";

const categoryOptions2 = ["От новых", "От новых 2", "От новых 3"];
const categoryOptions1 = ["Все", "Все 2", "Все 3"];
const categoryOptions3 = [
  "Счастье Сейчас",
  "Счастье Сейчас 2",
  "Счастье Сейчас 3",
];

export const BuyerAdvertisingOrders = () => {
  return (
    <div>
      <Header
        search={true}
        settingBtn={true}
        action="История"
        actionIcon="/images/icons/open-book.svg"
      />
      <div className="flex gap-3 mb-2">
        <Sort
          label="Фильтр"
          icon={true}
          iconPath="/images/icons/filter.svg"
          options={categoryOptions2}
          className="item-width !h-[54px]"
        />
        <Sort
          label="Статус"
          icon={true}
          iconPath="/images/icons/flag.svg"
          options={categoryOptions1}
          className="item-width !h-[54px]"
        />
      </div>
      <Sort
        label="Канал"
        icon={true}
        iconPath="/images/icons/stars.svg"
        options={categoryOptions3}
        className="item-width !h-[54px]"
      />
    </div>
  );
};
