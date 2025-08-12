import { Link } from "react-router-dom";
import Search from "../components/Search";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";
import { Header } from "../components/Header";

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

const MyShops = () => {
  return (
    <div>
      {/* search */}
      <Header blueBtn={true} btnIcon="images/icons/plus.svg" />
      <Title className='!my-[18px]' label="Мои магазины" />
      {/* products */}
      <div className="space-y-1">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} intelligence={true} btns={true} />
        ))}
      </div>
    </div>
  );
};
export default MyShops;
