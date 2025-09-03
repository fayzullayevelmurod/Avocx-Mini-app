import { Button, List, ProductCard, ProfileBox } from "../components";
import { Header } from "../layouts";

export const AddingProductTwo = () => {
  const categoryOptions = [
    "Добавление нового товара",
    "Добавление нового товара 2",
    "Добавление нового товара 3",
  ];
  return (
    <>
      <Header search={true} />
      <div className="space-y-[7px]">
        <ProfileBox />
        <List options={categoryOptions} icon={true} />
        <h3 className="text-center text-15 font-semibold">
          Добавление нового товара
        </h3>
        <p className="text-center text-[13px] !mt-[11px] leading-[129%]">
          Выберите подходящий шаблон, или создайте свой <br /> собственный.
        </p>
        <div className="flex gap-[5px]">
          <Button
            type="gray"
            className="!font-semibold !bg-[#272727] border !border-[#303030]"
          >
            <img src="/images/icons/upload-file.svg" alt="" />
            <span>Импортировать из файла</span>
          </Button>
          <Button
            type="gray"
            className="min-w-[50px] max-w-[50px] !bg-[#272727] border !border-[#303030]"
          >
            <img src="/images/icons/info.svg" alt="" />
          </Button>
        </div>

        <div className="flex gap-1">
          <ProductCard title="Pattern (USD)" />
          <ProductCard title="Pattern (RUB)" />
        </div>
        <h3 className="text-center font-semibold">Мои шаблоны</h3>
        <div className="flex w-fit">
          <ProductCard actions={true} title="Pattern: Name" />
        </div>
      </div>
    </>
  );
};
