import { Link } from "react-router-dom";
import Search from "../components/Search";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";
import Card from "../components/Card";
import { Header } from "../components/Header";
import Sort from "../components/Sort";

const products = [
  {
    id: 1,
    image: "/images/product-img.png",
    imageAlt: "product image",
    companyLogo: "/images/company-logo.svg",
    companyLogoAlt: "company logo",
    title: "SHLZ.STORE 🥇",
    groupCount: 15788,
    cartCount: 7332,
    description:
      "Только оригинальные вещи от Gucci. Огромная коллекция вещей со всего мира, есть очень редкие экземпляры.",
  },
];

const cardProducts = [
  {
    id: 1,
    image: "/images/product-img-3.png",
    imageAlt: "product image",
    brand: "Christian Dior",
    title: "Monogram Panel cap",
    condition: "Отличное",
    size: "S (54)",
    price: "2.500₽",
    favoriteIcon: "/images/icons/star.svg",
    favoriteIconAlt: "favorite icon",
  },
  {
    id: 2,
    image: "/images/product-img-3.png",
    imageAlt: "product image",
    brand: "Christian Dior",
    title: "Monogram Panel cap",
    condition: "Отличное",
    size: "S (54)",
    price: "2.500₽",
    favoriteIcon: "/images/icons/star.svg",
    favoriteIconAlt: "favorite icon",
  },
];

const MyShopsTwo = () => {
  const categoryOptions = ["Все", "Все 1", "Все 2"];
  const sortOptions = ["Все", "Все 1", "Все 2"];
  return (
    <div>
      {/* search */}
      <Header grayBtn={true} grayBtnIcon="/images/icons/link.svg" />

      {/* products */}
      <div className="space-y-1 mt-[-5px]">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} intelligence={true} />
        ))}
      </div>

      {/* filter */}
      <div className="flex gap-[5px] items-center mt-[7px]">
        <Sort
          label="Категория"
          icon={true}
          iconPath="/images/icons/category.svg"
          options={categoryOptions}
        />
        <Sort
          label="Категория"
          icon={true}
          // iconPath="/images/icons/filter.svg"
          options={sortOptions}
        />
        <button className="min-w-[35px] h-[55px] max-w-[35px] flex items-center justify-center bg-carbon rounded-base">
          <img src="/images/icons/star.svg" alt="star" />
        </button>
      </div>
      <Title label="Новое" className="!mt-[11px]" />
      <div className="grid grid-cols-2 gap-[6px]">
        {cardProducts.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
export default MyShopsTwo;
