import { Card, List, ProductCard, ProfileBox, Sort } from "../components";
import { Header } from "../layouts";

export const ProductsMyStores = () => {
  const categoryOptions = [
    "Товары в магазине",
    "Товары в магазине 2",
    "Товары в магазине 3",
  ];
  const categoryOptions22 = ["Плитками", "Плитками 2", "Плитками 3"];
  const categoryOptions2 = ["От новых", "От новых 2", "От новых 3"];
  const categoryOptions3 = ["Все", "Все 2", "Все 3"];
  return (
    <div>
      <Header search={true} searchText="Поиск ID и названию" />
      <div className="space-y-[7px]">
        <ProfileBox />
        <List options={categoryOptions} icon={true} />
        <div className="grid grid-cols-2 gap-[9px] mt-[7px]">
          <Sort label="Фильтр" icon={true} options={categoryOptions2} />
          <Sort
            label="Статус"
            icon={true}
            iconPath="/images/icons/flag.svg"
            options={categoryOptions3}
          />
        </div>
        <List options={categoryOptions22} icon={true} />
        <div className="grid grid-cols-2 gap-1">
          {Array.from({ length: 2 }).map(() => (
            <div
              className={`w-full mx-auto bg-[#272727] border border-[#303030] pb-2 rounded-[20px]`}
            >
              <div className="h-[282px] rounded-[19px] bg-[#303030] flex items-center justify-center flex-col relative">
                <img
                  className="w-full h-full object-cover rounded-[19px]"
                  src="/images/bag.png"
                />
                <div className="flex gap-2 absolute top-[7px] right-[7px]">
                  <button className="w-10 h-10 rounded-[15px] flex items-center justify-center bg-[#242424]">
                    <img src="/images/icons/edit.svg" alt="" />
                  </button>
                  <button className="w-10 h-10 rounded-[15px] flex items-center justify-center bg-[#242424]">
                    <img src="/images/icons/graph.svg" alt="" />
                  </button>
                </div>
              </div>

              <div className="pt-[5px] px-3">
                <h3 className={`text-sm font-bold leading-full mt-0.5`}>
                  25.000₽
                  <span className="text-[10px] text-grayCustom line-through font-normal pl-1">
                    37.500
                  </span>
                </h3>
                <span className="text-[9px] font-semibold text-[#96BBF7] block mt-[1px] leading-full">
                  Gucci legend
                </span>
                <span className="text-[10px] block mt-[1px] leading-full truncate">
                  Рюкзак Tommy Helfiger 25 из на..
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
