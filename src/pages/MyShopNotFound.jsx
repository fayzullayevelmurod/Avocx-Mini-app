import Button from "../components/Button";
import { Header } from "../components/Header";
import Title from "../components/Title";

export const MyShopNotFound = () => {
  return (
    <>
      <Header blueBtn={true} btnIcon='/images/icons/plus-circle.svg' />
      <Title label='Мои магазины'/>
      <div className="text-center mt-[57px]">
        <img className="mx-auto w-[207px] h-[207px]" src="/gif/6.gif" alt="" />
        <h3 className="text-[30px] italic font-semibold mt-[37px]">Их нет!</h3>
        <p className="text-15 leading-[109%] mb-6 mt-5">
          Создайте свой магазин в{" "}
          <a className="text-primary" href="#!">
            @avocx
          </a>{" "}
          и <br /> продавайте быстро, выгодно и удобно.
        </p>
        <Button className="!w-[284px] mx-auto !rounded-[20px]">Создать</Button>
      </div>
    </>
  );
};
