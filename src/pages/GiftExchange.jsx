import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { OrangeBtn } from "../components/OrangeBtn";
import Search from "../components/Search";
import Tab from "../components/Tab";
import Button from "../components/Button";
import Sort from "../components/Sort";

export const GiftExchange = () => {
  const tabData = [
    { id: "1", label: "Все подарки", content: <Gifts /> },
    { id: "3", label: "Коллекции", content: null, subLabel: "скоро" },
  ];
  return (
    <div>
      <div className="flex items-center gap-[9px] h-[45px] mb-[16px]">
        <Link className="mr-1" to="#!">
          <img
            className="stroke-2 min-w-[28px]"
            src="/images/icons/prev-arrow.svg"
            alt="prev arrow"
          />
        </Link>
        <div className="max-w-[226px] w-full">
          <Search />
        </div>
        <OrangeBtn label="Office" icon="gift-2.svg" className="min-w-[107px]" />
        <button className="ml-auto h-[45px] flex items-center justify-end">
          <img
            src="/images/icons/refresh.svg"
            alt="refresh icon"
            width={20}
            height={21}
          />
        </button>
      </div>
      <Tab tabData={tabData} />
    </div>
  );
};

const Gifts = () => {
  const collectionOptions = ["All", "All 2"];
  const modelOptions = ["All", "All 2"];
  const backdropOptions = ["All", "All 2"];
  const sortOptions = ["По убыванию цены", "По убыванию цены 2"];
  return (
    <div className="mt-[11px]">
      <img
        className="rounded-[20px] h-[137px] object-cover"
        src="/images/avox-fit.png"
        alt=""
      />
      <Button
        gray={true}
        className="border border-[#303030] h-12 mt-[13px] mb-1"
      >
        <img src="/images/icons/purchase.svg" alt="" />
        <span>Auto purchase</span>
      </Button>
     <div  className="space-y-[6px]">
       <Sort label="Collection" options={collectionOptions} />
      <div className="grid grid-cols-2 gap-[9px] ">
        <Sort label="Model" options={modelOptions} />
        <Sort label="Backdrop" options={backdropOptions} />
      </div>
       <Sort icon={true} options={sortOptions} />

     </div>
    </div>
  );
};
