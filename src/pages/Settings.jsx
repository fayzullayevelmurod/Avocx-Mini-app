import { useEffect, useState } from "react";
import { Button, InlineIconSelect, Tab } from "../components";
import { Footer, Header } from "../layouts";
import { SubscriptionModal } from "../components/modals";
import { Link } from "react-router-dom";

const languageOptions = [
  { label: "RU", icon: "/images/icons/russion-flag.svg" },
  { label: "EN", icon: "/images/icons/english-flag.svg" },
];

const currency = [
  { value: "buy", label: "₽" },
  { value: "sell", label: "$" },
  { value: "rent", label: "€" },
];
const tabData = [
  {
    id: "1",
    count: "2",
    label: "Покупатель",
    icon: "/images/icons/profile.svg",
    content: "<Cart />",
  },
  {
    id: "2",
    count: "5",
    label: "Продавец",
    icon: "/images/icons/work-bag.svg",
    content: "<Order />",
  },
];
export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [selectedLanguage2, setSelectedLanguage2] = useState(currency[0]);

  const [openModal, setOpenModal] = useState(false);

  const handleOpen = (modalName) => setOpenModal(modalName);
  const handleClose = () => setOpenModal(null);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  }, [isOpen]);

  return (
    <>
      <div className="pb-[160px]">
        <Header title="Настройки" />
        <Tab tabData={tabData} />
        <div className="text-center mt-3">
          <h3 className="text-[17px] font-bold leading-[21px]">Подписка</h3>
          <span className="text-sm font-semibold mb-3 mt-1 leading-[17px]">
            Действует по: 25.10.2025
          </span>
          <Button onClick={() => handleOpen("payment-fiat")}>
            <img src="/images/icons/pay.svg" alt="" />
            Оформить
          </Button>
          <h3 className="leading-[21px] my-3 font-bold text-17">Настройки</h3>
        </div>
        <div className="space-y-[7px]">
          <div className="flex gap-[9px]">
            <InlineIconSelect
              options={languageOptions}
              selected={selectedLanguage}
              placeholder="Язык:"
              onChange={(val) => setSelectedLanguage(val)}
              rightIcon={true}
              className="!h-[49px]"
            />

            <InlineIconSelect
              options={currency}
              selected={selectedLanguage2}
              placeholder="Валюта:"
              onChange={(val) => setSelectedLanguage2(val)}
              rightIcon={true}
              className="!h-[49px]"
            />
          </div>
          <Link to="/setting-up-details" className="w-full">
            <Button type="gray">
              <img src="/images/icons/wallet.svg" alt="" />
              Реквизиты
            </Button>
          </Link>
          <div className="flex gap-[10px]">
            <Button type="gray">
              <img src="/images/icons/operator.svg" alt="" />
              Поддержка
            </Button>
            <Button type="gray">Блог сервиса</Button>
          </div>
          <div className="bg-[#242424] rounded-[15px] text-center py-3">
            <h3 className="pb-2 leading-[20px] border-b border-[#303030] text-15 font-bold">
              Реферальная програма
            </h3>
            <div className="flex gap-[5px] items-center justify-center mt-3 mb-[7px]">
              <img src="/images/icons/contact.svg" alt="" />
              <span className="leading-[14px] text-15 font-semibold text-[#DADADA]">
                Рефералов: 0 / Награда 0₽
              </span>
            </div>
            <div className="flex gap-[7px] h-10 max-w-[287px] mx-auto w-full">
              <div
                onClick={() => setIsOpen(true)}
                className="flex-1 flex items-center gap-[6px] justify-center min-w-0 bg-[#283134] rounded-xl px-[13px] py-[10px]"
              >
                <img src="/images/icons/copy.svg" alt="" />
                <span className="text-15 font-semibold text-[#59BFFF]">
                  t.me/+FhdgrCiNxln5YTZi
                </span>
              </div>
              <div className="flex items-center justify-center gap-[6px] w-10 bg-[#283134] rounded-xl px-[13px] py-[10px]">
                <img src="/images/icons/share.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscriptionModal isOpen={openModal} onClose={handleClose} />
      {/* copy modal */}
      <div
        className={`fixed top-0 z-[99999] left-0 w-full h-full flex items-center justify-center bg-[#1F1F1F80] backdrop-blur-[5px] ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="bg-[#303030B2] w-[302px] space-y-[7px] rounded-15 pt-[12px] p-[13px]">
          <div className="flex gap-[6px] items-center justify-center">
            <img src="/images/icons/check-rounded.svg" alt="" />
            <span className="text-15 font-bold leading-[18px] text-[#468FF5]">
              Скопировано
            </span>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};
