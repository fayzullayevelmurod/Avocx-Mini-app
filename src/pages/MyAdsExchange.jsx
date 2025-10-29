import { Link } from "react-router-dom";
import { ExpandableAdButtons, Sort } from "../components";
import { ToggleIconButton } from "../components/ToggleFeatured";
import { Header } from "../layouts";
import { useState } from "react";
import { ProductAnalytics } from "../components/modals";

const categoryOptions2 = [
  "Счастье Сейчас",
  "Счастье Сейчас 2",
  "Счастье Сейчас 3",
];

export const MyAdsExchange = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (modalName) => setOpenModal(modalName);
  const handleClose = () => setOpenModal(null);

  return (
    <>
      <div>
        <Header title="Мои объявления" settingBtn={true} />
        <h3 className="text-center mb-[11px] leading-[18px] font-bold text-15">
          Мои объявления на бирже
        </h3>
        <Sort
          label="Канал"
          icon={true}
          iconPath="/images/icons/stars.svg"
          options={categoryOptions2}
          className="item-width h-[54px]"
        />
        <div className="bg-charcoal rounded-[20px] pt-3 pl-[14px] pb-[14px] pr-[14px] mt-2">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-[5px]">
              <div className="bg-[#1E1E1E] rounded-t-[79px] rounded-b-[15px] w-[52px] h-[64px] p-[2px] flex justify-between flex-col items-center">
                <img
                  className="w-[48] h-[48] rounded-full"
                  src="images/icons/logo.svg"
                  alt="logo"
                />
                <div className="flex gap-[1px] justify-center items-center bg-[#FF9462] min-h-[10px] max-h-[10px] rounded-[3px] px-1 mt-[-9px]">
                  <img src="/images/icons/trophy.svg" alt="" />
                  <span className="text-[8px] text-[#242424] font-semibold leading-full">
                    189
                  </span>
                </div>
                <span className="text-[7px] text-grayCustom leading-[9px]">
                  Diamond
                </span>
              </div>
              <div>
                <h4 className="text-[17px] font-semibold leading-full">
                  Cчастье Сейчас
                </h4>
                <p className="text-[10px] font-normal text-grayCustom leading-full mt-[2px] mb-[6px]">
                  Психология, Цитаты, Литература.
                </p>
                <div className="flex items-center gap-[10px] my-[2px] mt-[-3px]">
                  <div className="flex items-center gap-[5px]">
                    <img src="images/icons/user-group.svg" alt="" />
                    <span className="text-xs text-grayCustom">17.345</span>
                  </div>
                  <div className="flex gap-[2px]">
                    <img src="images/icons/plus.svg" alt="" />
                    <img src="images/icons/plus.svg" alt="" />
                    <img src="images/icons/minus.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center gap-[5px] mt-[3px]">
                  <div className="flex items-center gap-[5px]">
                    <img
                      className="filter invert brightness-0 w-[14px] h-[12px]"
                      src="images/icons/er.svg"
                      alt="er"
                    />
                    <span className="text-xs text-grayCustom">21%</span>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <img
                      className="filter invert brightness-0 w-[14px] h-[12px]"
                      src="images/icons/eye.svg"
                      alt="see"
                    />
                    <span className="text-xs text-grayCustom">
                      567, 754, 1145
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Первая карточка с уникальным ID и данными */}
          <ExpandableAdButtons
            cardId="card1"
            status={true}
            buttonsData={[
              { format: "1/48", price: "650₽" },
              { format: "1/72", price: "890₽" },
              { format: "1/168", price: "1200₽" },
              { format: "Story", price: "1500₽" },
            ]}
          />

          <div className="flex justify-between mt-[7px]">
            <button className="p-[10px] rounded-xl bg-[#303030] text-xs font-bold flex items-center gap-1">
              <img src="/images/icons/trash.svg" alt="" />
              <span>Del</span>
            </button>
            <div className="flex gap-1">
              <button className="p-[10px] rounded-xl bg-[#303030] text-xs font-bold flex items-center gap-1">
                <img src="/images/icons/pause.svg" alt="" />
                <span>Stop</span>
              </button>
              <button
                onClick={() => handleOpen("product-analytics")}
                className="p-[10px] rounded-xl bg-[#303030] text-xs font-bold flex items-center gap-1"
              >
                <img src="/images/icons/graph.svg" alt="" />
                <span>Data</span>
              </button>
              <Link
                to="/creating-exchange"
                className="p-[10px] rounded-xl bg-[#303030] text-xs font-bold flex items-center gap-1"
              >
                <img src="/images/icons/edit.svg" alt="" />
                <span>Edit</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ProductAnalytics
        isOpen={openModal === "product-analytics"}
        onClose={handleClose}
      />
    </>
  );
};
