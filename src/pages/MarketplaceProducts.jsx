import { Categories, ProductCard, Sort } from "../components";
import { ToggleIconButton } from "../components/ToggleFeatured";
import { Header } from "../layouts";

const productData = [
  {
    image: "/images/bag.png",
    title: "Gucci legend",
    price: "25.000₽",
    oldPrice: "37.500",
    storeName: "Gucci legend",
    description: "Рюкзак Tommy Helfiger 25 из на..",
    discount: null,
    className: "!w-full",
  },
  {
    image: "/images/bag.png",
    title: "Gucci legend",
    price: "25.000₽",
    oldPrice: "37.500",
    storeName: "Gucci legend",
    description: "Рюкзак Tommy Helfiger 25 из на..",
    discount: "– 33%",
    className: "!w-full",
  },
];

export const MarketplaceProducts = () => {
  const categoryOptions2 = ["От новых", "От новых 2", "От новых 3"];
  const categoryOptions3 = ["Все", "Все 2", "Все 3"];
  return (
    <div>
      <Header search={true} workBtn={true} />
      <div className="space-y-[7px]">
        <div className="flex gap-1">
          <Sort
            label="Категория"
            icon={true}
            iconPath="/images/icons/category.svg"
            options={categoryOptions3}
          />
          <Sort label="Фильтр" icon={true} options={categoryOptions2} />
          <ToggleIconButton className="!w-[35px] h-[55px] bg-[#242424] flex items-center justify-center rounded-[15px]" />
        </div>
        <Categories />
        <div className="flex gap-[30px] bg-[#242424] rounded-[20px] px-4 h-10 items-center">
          <span className="font-bold">Магазины</span>
          <span className="text-[#707070] font-bold">Товары</span>
        </div>
        <h3 className="text-center font-semibold">Актуальное</h3>
        <div className="grid grid-cols-2 gap-1">
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={false}
              price={product.price}
              oldPrice={product.oldPrice}
              storeName={product.storeName}
              description={product.description}
              discount={product.discount}
              className={product.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
