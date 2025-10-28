import { useState } from "react";
import {
  CardUI,
  Categories,
  Date,
  ExpandableAdButtons,
  Sort,
} from "../components";
import { CustomSelect } from "../components/CustomSelect";
import { ToggleIconButton } from "../components/ToggleFeatured";
import { Header } from "../layouts";
import { CategoriesModal } from "../components/modals";

const categoryOptions2 = [
  "Счастье Сейчас",
  "Счастье Сейчас 2",
  "Счастье Сейчас 3",
];
const categories = [
  { label: "Горячее", to: "#!" },
  { label: "На трафике", to: "#!" },
  { label: "Проверенное", to: "#!" },
  { label: "Свежие", to: "#!" },
];
const options = [
  { value: "sell", label: "Реклама в канале " },
  { value: "buy", label: "Реклама в канале 2" },
  { value: "rent", label: "Реклама в канале 3" },
];
export const Exchange = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (modalName) => setOpenModal(modalName);
  const handleClose = () => setOpenModal(null);
  return (
    <>
      <div>
        <Header
          settingBtn={true}
          search={true}
          action="Кабинет"
          actionIcon="/images/icons/trade-up.svg"
        />
        <div className="space-y-[6px]">
          <div className="flex gap-1 mb-[6px] h-[54px]">
            <Sort
              label="Канал"
              icon={true}
              iconPath="/images/icons/stars.svg"
              options={categoryOptions2}
              className="item-width h-full"
            />
            <button
              onClick={() => handleOpen("categories-modal")}
              className="flex-1 h-full justify-between duration-300 w-full text-15 rounded-15 pr-4 bg-carbon pl-[16px]"
            >
              <div className="flex gap-1 items-center">
                <img src={"/images/icons/category.svg"} alt="filter" />
                <span className="text-grayCustom leading-full font-semibold">
                  Категория
                </span>
              </div>
              <span className="overflow-hidden text-left block mt-[1px] whitespace-nowrap font-semibold translate-y-[3px]">
                Все
              </span>
            </button>
            <ToggleIconButton className="w-[35px] h-full flex items-center justify-center bg-charcoal rounded-[15px]" />
          </div>
          <Date />
          <div className="flex gap-[5px]">
            <div className="h-[54px] rounded-15 bg-charcoal flex items-center justify-center flex-1">
              <img src="/images/icons/eye.svg" alt="" />
            </div>
            <div className="h-[54px] rounded-15 bg-charcoal flex items-center justify-center flex-1">
              <img src="/images/icons/er.svg" alt="" />
            </div>
            <div className="h-[54px] rounded-15 bg-charcoal flex items-center justify-center flex-1">
              <img src="/images/icons/discount.svg" alt="" />
            </div>
            <div className="h-[54px] rounded-15 bg-charcoal flex items-center justify-center flex-1">
              <img src="/images/icons/filter.svg" alt="" />
            </div>
          </div>
          <div className="bg-charcoal rounded-[20px] p-3">
            <CustomSelect
              options={options}
              placeholder="Реклама в канале"
              className="!h-[42px] mb-[6px]"
            />
            <Categories categories={categories} />
          </div>
          <div className="space-y-1">
            <div className="bg-charcoal rounded-[20px] pt-3 pl-[14px] pb-[14px] pr-[14px]">
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
                <ToggleIconButton activeIcon="/images/icons/active-heart.svg" />
              </div>

              {/* Первая карточка с уникальным ID и данными */}
              <ExpandableAdButtons
                cardId="card1"
                buttonsData={[
                  { format: "1/48", price: "650₽" },
                  { format: "1/72", price: "890₽" },
                  { format: "1/168", price: "1200₽" },
                  { format: "Story", price: "1500₽" },
                ]}
              />
            </div>
            <div className="bg-charcoal rounded-[20px] pt-3 pl-[14px] pb-[14px] pr-[14px]">
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
                <ToggleIconButton activeIcon="/images/icons/active-heart.svg" />
              </div>

              {/* Первая карточка с уникальным ID и данными */}
              <ExpandableAdButtons
                cardId="card1"
                buttonsData={[
                  { format: "1/48", price: "650₽" },
                  { format: "1/72", price: "890₽" },
                  { format: "1/168", price: "1200₽" },
                  { format: "Story", price: "1500₽" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <CategoriesModal
        isOpen={openModal === "categories-modal"}
        onClose={handleClose}
      />
    </>
  );
};
