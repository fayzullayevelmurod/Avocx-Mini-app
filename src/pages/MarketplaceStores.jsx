import { Button, Card, Categories, Sort } from "../components";
import { ToggleIconButton } from "../components/ToggleFeatured";
import { Header } from "../layouts";

const products = [
  {
    id: 1,
    image: "/images/product-img.jpg",
    imageAlt: "product image",
    companyLogo: "/images/profile-img.jpg",
    companyLogoAlt: "company logo",
    title: "GUCCI legend",
    groupCount: 5879,
    cartCount: 2334,
    description: "Только оригинальные вещи от Gucci. Огромная коллекция бренда",
  },
];

const products1 = [
  {
    id: 1,
    image: "/images/product-img.jpg",
    imageAlt: "product image",
    companyLogo: "/images/profile-img.jpg",
    companyLogoAlt: "company logo",
    title: "GUCCI legend",
    groupCount: 5879,
    cartCount: 2334,
    description: "Только оригинальные вещи от Gucci. Огромная коллекция бренда",
  },
];

export const MarketplaceStores = () => {
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

        {products.map((product) => (
          <Card key={product.id} data={product} vip={true} />
        ))}
      </div>
      <h3 className="mt-[7px] mb-[10px] text-center font-semibold">
        Актуальное
      </h3>
      {products1.map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </div>
  );
};
