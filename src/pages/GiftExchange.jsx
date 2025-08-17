import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { OrangeBtn } from "../components/OrangeBtn";
import Search from "../components/Search";
import Tab from "../components/Tab";
import Button from "../components/Button";
import SortTwo from "../components/Sort2";

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
  const collectionOptions = [
    {
      id: 1,
      icon: "/images/icons/thumb.webp",
      label: "Label 1",
    },
    {
      id: 2,
      icon: "/images/icons/thumb.webp",
      label: "Label 2",
    },
    {
      id: 3,
      icon: "/images/icons/thumb.webp",
      label: "Label 3",
    },
  ];
  const modelOptions = [
    {
      id: 1,
      icon: "/images/icons/thumb.webp",
      label: "Label 1",
      checkbox: true,
    },
    {
      id: 2,
      icon: "/images/icons/thumb.webp",
      label: "Label 2",
      checkbox: true,
    },
    {
      id: 3,
      icon: "/images/icons/thumb.webp",
      label: "Label 3",
      checkbox: true,
    },
  ];
  const backdropOptions = [
    {
      id: 1,
      icon: "/images/icons/circle-box.svg",
      label: "Label 1",
      checkbox: true,
    },
    {
      id: 2,
      icon: "/images/icons/circle-box.svg",
      label: "Label 2",
      checkbox: true,
    },
    {
      id: 3,
      icon: "/images/icons/circle-box.svg",
      label: "Label 3",
      checkbox: true,
    },
  ];
  return (
    <div className="mt-[11px] mb-[50px]">
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
      <div className="space-y-[6px]">
        <SortTwo label="Collection" options={collectionOptions} />
        <div className="grid grid-cols-2 gap-[9px] ">
          <SortTwo label="Model" options={modelOptions} />
          <SortTwo label="Backdrop" options={backdropOptions} />
        </div>
      </div>
    </div>
  );
};
