import { useState } from "react";
import { Button } from "../Button";
import { Sort } from "../Sort";
import { InlineIconSelect } from "../InlineIconText";
import { Checkbox } from "../Checkbox";
import { RadioComponent } from "../RadioComponent";
import { PaymentFiat } from "./PaymentFiat";
import { Footer } from "../../layouts";
import { SelectChannel } from "../SelectChannel";

const categoryOptions3 = [
  "Название канала 1",
  "Название канала 2",
  "Название канала 3",
];

const languageOptions = [
  { label: "ТОП", icon: "/images/icons/flash.svg" },
  { label: "ТОП 2", icon: "/images/icons/flash.svg" },
];

export const SubscriptionModal = ({ isOpen, onClose }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [check, setCheck] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(null);
  const handleOpen = (modalName) => setOpenModal(modalName);
  return (
    <>
      <div
        className={`modal flex flex-col justify-between duration-300 !p-0 ${
          isOpen ? "bottom-0" : "-bottom-[150%]"
        }`}
      >
        <div className="overflow-y-auto h-[calc(100vh_-_120px)] no-scrollbar px-[13px]">
          <div className="flex items-center justify-between px-[13px]">
            <div className="flex items-center gap-2">
              <img src="/images/icons/logo-a.svg" alt="" />
              <span className="text-15 font-bold">Оформление подписки</span>
            </div>
            <button onClick={onClose}>
              <img src="/images/icons/close.svg" alt="" />
            </button>
          </div>

          <img
            className="w-full h-auto aspect-[16/7] object-cover object-left mt-[23px] mb-[11px] rounded-[25px]"
            src="/images/modal-banner.png"
            alt=""
          />

          <h3 className="text-center font-bold text-17 mb-1 leading-[21px]">
            Подписка
          </h3>
          <span className="text-[#A3A3A3] text-xs leading-[15px] text-center mb-3 block">
            Действует по: 25.10.2025
          </span>
          <div className="space-y-[7px]">
            <SelectChannel
              label="Каналы для подписки"
              icon={true}
              iconPath="/images/icons/stars.svg"
              options={categoryOptions3}
              className="!border-[#303030]"
            />
            <InlineIconSelect
              options={languageOptions}
              selected={selectedLanguage}
              placeholder="12 месяцев: 319₽/месяц"
              onChange={(val) => setSelectedLanguage(val)}
              rightIcon={true}
              className="!h-[49px]"
            />
            <div className="bg-[#242424] rounded-15 p-[10px] pl-4 flex items-center">
              <div className="flex gap-[7px] items-center flex-1">
                <img src="/images/icons/promocode.svg" alt="" />
                <input
                  className="bg-transparent w-[85%] border-none text-white placeholder:text-[#464646] font-semibold"
                  type="text"
                  placeholder="Промокод"
                />
              </div>
              <button className="w-[129px] h-[30px] bg-[#59BFFF] rounded-lg flex items-center justify-center text-[#242424] text-xs font-semibold">
                Применить
              </button>
            </div>
            <div className="bg-[#242424] rounded-15 p-[14px] pr-[15px] flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <RadioComponent
                  checked={check}
                  onChange={() => setCheck(!check)}
                />
                <span className="text-[">Выровнять дни подписки</span>
              </div>
              <img src="/images/icons/question.svg" alt="" />
            </div>
          </div>
          <h3 className="text-center font-bold text-17 mb-1 leading-[14px] mt-3">
            За месяц: 319₽
          </h3>
          <p className="text-xs text-center font-medium mt-[7px] mb-1 leading-[15px]">
            Всего за 12 месяцев: 3828₽ ({" "}
            <span className="text-[#59BFFF]">-720₽</span> )
          </p>
          <span className="text-[#A3A3A3] font-medium text-xs leading-[15px] text-center mb-3 block pb-[100px]">
            Без промокода
          </span>
        </div>

        <div className="pt-[17px] mt-4 border-t border-charcoal w-full fixed bottom-0 left-0 z-[100] bg-[#1C1C1C] px-[13px] pb-5">
          <Button onClick={() => handleOpen("payment-fiat")} className="">
            <img src="/images/icons/pay.svg" alt="" />
            <span>Перейти к оплате</span>
          </Button>
        </div>
      </div>

      <PaymentFiat
        isOpen={openModal === "payment-fiat"}
        onClose={handleClose}
      />
    </>
  );
};
