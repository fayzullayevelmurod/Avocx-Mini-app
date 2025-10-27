import { Button, Card } from "../components";
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

export const MyShop = () => {
  return (
    <div>
      <h3 className="text-center text-15 font-semibold mb-[10px] mt-[11px]">
        Мои магазины
      </h3>
      <div className="space-y-1">
        {products.map((product) => (
          <Card
            key={product.id}
            data={product}
            intelligence={true}
            btns={true}
            noFeatured={true}
          />
        ))}
      </div>
      <p className="text-grayCustom font-semibold leading-[118%] text-center max-w-[341px] mx-auto mt-[22px] mb-[17px]">
        Создайте собственный магазина и продавайте товары по всему миру, выгодно
        и удобно.
      </p>
      <div className="px-[14px]">
        <Button type="gray">
          <img src="/images/icons/plus.svg" alt="" />
          <span>Создать магазин</span>
        </Button>
      </div>
    </div>
  );
};
