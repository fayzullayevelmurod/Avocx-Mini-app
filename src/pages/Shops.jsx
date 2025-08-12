import { Link } from "react-router-dom";
import Search from "../components/Search";
import Button from "../components/Button";
import Categories from "../components/Categories";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import { Header } from "../components/Header";
import Sort from "../components/Sort";
import CardUI from "../components/CardUI";

// products data
const products = [
  {
    id: 1,
    image: "/images/product-img-1.png",
    imageAlt: "product img",
    companyLogo: "/images/company-logo.svg",
    companyLogoAlt: "company logo",
    title: "GUCCI legend loremloremlorem",
    groupCount: 15788,
    cartCount: 7332,
    description:
      "Только оригинальные вещи от Gucci. Огромная коллекция вещей со всего мира, есть очень редкие экземпляры.",
  }
];

const Shops = () => {
  const categoryOptions = ["Все", "Все 1", "Все 2"];
  const sortOptions = ["Text", "Text  1", "Text  2"];
  const singleProduct = [
    {
      id: 3,
      image: "/images/product-img.png",
      imageAlt: "product img",
      companyLogo: "/images/company-logo.svg",
      companyLogoAlt: "company logo",
      title: "GUCCI legend",
      groupCount: 15788,
      cartCount: 7332,
      description:
        "Только оригинальные вещи от Gucci. Огромная коллекция вещей со всего мира, есть очень редкие экземпляры.",
    },
  ];
  return (
    <div className="shops-page">
      <Header blueBtn={true} btnIcon="/images/icons/kluch.svg" />
      <div className="flex gap-[5px] items-center mb-[7px] mt-[-7px]">
        {/* <Category /> */}
        <Sort
          options={categoryOptions}
          label="Категория"
          icon={true}
          iconPath="/images/icons/category.svg"
        />
        <Sort options={sortOptions} icon={true} />
        <button className="min-w-[35px] h-[55px] max-w-[35px] flex items-center justify-center bg-carbon rounded-base">
          <img src="/images/icons/star.svg" alt="star" />
        </button>
      </div>
      <div>
        <Categories />
        <Title label="Магазины" className="!mt-[10px] !mb-[6px]" />
        <div className="rounded-[30px] mx-[-13px] gradient-border-big h-[327px] -mt-[10px]">
          <div className="px-[13px] pb-[21px] pt-2">
            <Title className="gradient-text !mb-[7px]" label="VIP" />
            {singleProduct.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        </div>
        <Title label="Подборка дня" className="!mt-[-3px] !mb-3" />
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shops;
