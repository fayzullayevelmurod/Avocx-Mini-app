import { Button, Card, Categories, ProductCard, Sort } from "../components";
import { Header } from "../layouts";

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
          <Button className="!w-[35px] h-[55px] !bg-[#242424]" type="gray">
            <img src="/images/icons/featured.svg" alt="" />
          </Button>
        </div>
        <Categories />
        <div className="flex gap-[30px] bg-[#242424] rounded-[20px] px-4 h-10 items-center">
          <span className="font-bold">Магазины</span>
          <span className="text-[#707070] font-bold">Товары</span>
        </div>
        <h3 className="text-center font-semibold">Актуальное</h3>
        <div className="grid grid-cols-2 gap-1">
          <div
            className={`mx-auto bg-[#272727] border border-[#303030] pb-2 rounded-[20px]`}
          >
            <div className="h-[282px] rounded-[19px] bg-[#303030] flex items-center justify-center flex-col relative">
              <button className="absolute top-[10px] right-[10px]">
                <img src="/images/icons/featured-border.svg" alt="" />
              </button>
              <img className="w-full h-full object-cover rounded-[19px]" src="/images/bag.png" />
              <button className="bg-iron absolute -bottom-[21px] right-3 rounded-[20px] shadow-cart-btn w-[55px] h-[45px] flex items-center justify-center border-4 border-[#272727]">
                <img src="/images/icons/cart.svg" alt="cart" />
              </button>
            </div>

            <div className="pt-[5px] px-3">
              <h3 className="text-sm font-bold leading-full mt-0.5">
                25.000₽
                <span className="text-[10px] text-grayCustom line-through font-normal pl-1">
                  37.500
                </span>
              </h3>
              <span className="text-[9px] font-semibold text-[#96BBF7] block mt-[1px] leading-full">
                Gucci legend
              </span>
              <span className="text-[10px] block mt-[1px] leading-full">
                Рюкзак Tommy Helfiger 25 из на..
              </span>
            </div>
          </div>
          <div
            className={`mx-auto bg-[#272727] border border-[#303030] pb-2 rounded-[20px]`}
          >
            <div className="h-[282px]  rounded-[19px] bg-[#303030] flex items-center justify-center flex-col relative">
              <div className="w-[51px] h-[15px] bg-[#E679FF] rounded-r-[5px] flex items-center justify-center font-bold text-[10px] left-0 bottom-[6px] absolute shadow-discount">– 33%</div>
              <button className="absolute top-[10px] right-[10px]">
                <img src="/images/icons/featured-border.svg" alt="" />
              </button>
              <img className="w-full h-full object-cover rounded-[19px]" src="/images/bag.png" />
              <button className="bg-iron absolute -bottom-[21px] right-3 rounded-[20px] shadow-cart-btn w-[55px] h-[45px] flex items-center justify-center border-4 border-[#272727]">
                <img src="/images/icons/cart.svg" alt="cart" />
              </button>
            </div>

            <div className="pt-[5px] px-3">
              <h3 className="text-sm font-bold leading-full mt-0.5 text-[#E679FF]">
                25.000₽
                <span className="text-[10px] text-grayCustom line-through font-normal pl-1">
                  37.500
                </span>
              </h3>
              <span className="text-[9px] font-semibold text-[#96BBF7] block mt-[1px] leading-full">
                Gucci legend
              </span>
              <span className="text-[10px] block mt-[1px] leading-full">
                Рюкзак Tommy Helfiger 25 из на..
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
