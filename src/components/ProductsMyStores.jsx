import Card from "./Card";
import CardUI from "./CardUI";
import { Header } from "./Header";
import Sort from "./Sort";

export const ProductsMyStores = () => {
  const cardProducts = [
    {
      id: 1,
      image: "/images/product-img-3.png",
      imageAlt: "product image",
      brand: "Hugo BOSS",
      title: "Футболка «RED»",
      condition: "Состояние: Отличное",
      size: "Размер: L",
      price: "2.500₽",
      favoriteIcon: "/images/icons/star.svg",
      favoriteIconAlt: "favorite icon",
    },
    {
      id: 2,
      image: "/images/product-img-3.png",
      imageAlt: "product image",
      brand: "Hugo BOSS",
      title: "Футболка «RED»",
      condition: "Состояние: Отличное",
      size: "Размер: L",
      price: "2.500₽",
      favoriteIcon: "/images/icons/star.svg",
      favoriteIconAlt: "favorite icon",
    },
  ];

  const categoryOptions = [
    "Товары в магазине",
    "Товары в магазине 2",
    "Товары в магазине 3",
  ];
  const sortOptions = ["От новых", "От новых 2", "От новых 3"];
  const statusOptions = ["Все", "Все 2", "Все 3"];
  return (
    <div>
      <Header />
      <CardUI className="!pl-[10px] !pr-[17px] h-[65px] !py-[0] flex items-center relative -mt-[5px]">
        <div className="flex items-center justify-between gap-[11px]">
          <img
            className="w-12 h-12 rounded-full"
            src="/images/company-logo.svg"
            alt="product company logo"
          />
          <div className="mt-1">
            <h3 className="text-base font-semibold leading-full mb-[6px]">
              SHLZ.STORE 🥇
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 ml-[-3px]">
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
            <img
              className="absolute top-1/2 -translate-y-1/2 right-[22px]"
              src="/images/icons/star.svg"
              alt=""
            />
          </div>
        </div>
      </CardUI>
      <div className="mt-[10px] mb-[17px]">
        <Sort
          label="Категория"
          iconPath="/images/icons/category.svg"
          options={categoryOptions}
          icon={true}
        />
        <div className="flex gap-[9px] mt-[6px]">
          <Sort
            label="Сортировка"
            iconPath="/images/icons/filter.svg"
            options={sortOptions}
            icon={true}
          />
          <Sort
            label="Статус"
            iconPath="/images/icons/flag-icon.svg"
            options={statusOptions}
            icon={true}
          />
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold leading-full">
          Список товаров в магазине
        </h2>
        <p className="mt-0.5">Можно изменить или удалить товар.</p>
      </div>

      <div className="grid grid-cols-2 gap-[9px] mt-[23px]">
        {cardProducts.map((product) => (
          <Card key={product.id} data={product} actions={true} />
        ))}
      </div>
    </div>
  );
};
