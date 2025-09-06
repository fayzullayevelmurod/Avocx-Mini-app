import { Button } from "../components";
import { Header } from "../layouts";

export const MyShops = () => {
  return (
    <div>
      <Header search="Искать на Авокс.." addBtn={true} />
      <h3 className="text-center font-semibold text-17 mt-[23px] mb-6">
        Мои магазины
      </h3>
      <img
        className="mx-auto"
        src="/gif/6.gif"
        alt=""
        width={209}
        height={209}
      />
      <h3 className="text-[30px] font-semibold mt-[22px] text-center">Их нет!</h3>
      <p className="text-15 leading-[109%] mb-6 mt-5 text-center">
        Создайте свой магазин в{" "}
        <a className="text-primary font-semibold" href="#!">
          @avocx
        </a>{" "}
        и <br /> продавайте быстро, выгодно и удобно.
      </p>
      <Button className="!w-[284px] mx-auto">Создать</Button>
    </div>
  );
};
