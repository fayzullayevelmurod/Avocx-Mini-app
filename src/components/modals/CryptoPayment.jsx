import { useEffect, useState } from "react";
import { Tab } from "../Tab";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { CopyModal } from "./CopyModal";
import { Tab2Compoonent } from "../Tab2";

const Tab1 = () => {
  const [activeBank, setActiveBank] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const banks = [
    { id: 1, name: "Т-Банк", number: "1234 5678 9101 1121" },
    { id: 2, name: "Сбер", number: "1234 5678 9101 1121" },
  ];

  return (
    <>
      {banks.map((bank) => (
        <div
          key={bank.id}
          onClick={() => setActiveBank(bank.id)}
          className={`flex h-[50px] items-center justify-between py-3 pl-3 pr-[14px] rounded-xl bg-[#3B382B80] w-full cursor-pointer transition-all`}
        >
          <div className="flex items-center gap-3">
            <div className="w-[21px] h-[21px] rounded-full border-2 border-iron flex items-center justify-center">
              {activeBank === bank.id && (
                <div className="bg-[#59BFFF] rounded-full w-[13px] h-[13px]"></div>
              )}
            </div>
            <div>
              <span className="text-[10px] font-medium mb-2 block leading-[7px] text-[#59BFFF]">
                {bank.name}
              </span>
              <h3 className="text-[15px] font-semibold leading-[11px] text-[#59BFFF]">
                {bank.number}
              </h3>
            </div>
          </div>

          <img
            onClick={(e) => {
              e.stopPropagation(); // parent click’ni to‘xtatadi
              setIsOpenModal(true);
            }}
            src="/images/icons/copy-2.svg"
            alt=""
          />
        </div>
      ))}
      <CopyModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
    </>
  );
};

const Tab2 = () => {
  const [activeBank, setActiveBank] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const banks = [{ id: 1, name: "Т-Банк, Сбер.", number: "+7 999 999 99 99" }];

  return (
    <>
      {banks.map((bank) => (
        <div
          key={bank.id}
          onClick={() => setActiveBank(bank.id)}
          className={`flex gap-1 h-[50px] items-center justify-between py-3 pl-3 pr-[14px] rounded-xl bg-[#3B382B80] w-full cursor-pointer transition-all`}
        >
          <div className="flex items-center gap-3">
            <div className="w-[21px] h-[21px] rounded-full border-2 border-iron flex items-center justify-center">
              {activeBank === bank.id && (
                <div className="bg-[#59BFFF] rounded-full w-[13px] h-[13px]"></div>
              )}
            </div>
            <div>
              <span className="text-[10px] font-medium mb-2 block leading-[7px] text-[#59BFFF]">
                {bank.name}
              </span>
              <h3 className="text-[15px] font-semibold leading-[11px] text-[#59BFFF]">
                {bank.number}
              </h3>
            </div>
          </div>

          <img
            onClick={(e) => {
              e.stopPropagation(); // parent click’ni to‘xtatadi
              setIsOpenModal(true);
            }}
            src="/images/icons/copy-2.svg"
            alt=""
          />
        </div>
      ))}
      <CopyModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
    </>
  );
};

const Tab3 = () => {
  const [activeBank, setActiveBank] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const banks = [
    {
      id: 1,
      name: "Счёт в банке: Т-банк",
      number: "45678908765435678998765445678",
    },
    {
      id: 2,
      name: "Интернет",
      number: "Эквайринг",
      button: true,

    },
  ];

  return (
    <>
      {banks.map((bank) => (
        <div
          key={bank.id}
          onClick={() => setActiveBank(bank.id)}
          className={`flex gap-1 h-[50px] items-center justify-between py-3 pl-3 pr-[14px] rounded-xl bg-[#3B382B80] w-full cursor-pointer transition-all`}
        >
          <div className="flex items-center gap-3">
            <div className="w-[21px] h-[21px] rounded-full border-2 border-iron flex items-center justify-center">
              {activeBank === bank.id && (
                <div className="bg-[#59BFFF] rounded-full w-[13px] h-[13px]"></div>
              )}
            </div>
            <div>
              <span className="text-[10px] font-medium mb-2 block leading-[7px] text-[#59BFFF]">
                {bank.name}
              </span>
              <h3 className="text-[15px] font-semibold leading-[11px] text-[#59BFFF]">
                {bank.number}
              </h3>
            </div>
          </div>

         {bank.button ? (
          <div className="w-[129px] h-[30px] flex items-center justify-center bg-[#59BFFF] rounded-lg text-[#303030] text-xs font-bold text-[#303030]">Оплатить</div>
         ) :  <img
            onClick={(e) => {
              e.stopPropagation();
              setIsOpenModal(true);
            }}
            src="/images/icons/copy-2.svg"
            alt=""
          />}
        </div>
      ))}
      <CopyModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
    </>
  );
};

const tabData = [
  {
    id: "1",
    label: "На карту",
    icon: "/images/icons/card-pay-white.svg",
    content: <Tab1 />,
  },
  {
    id: "2",
    label: "По номеру",
    icon: "/images/icons/mobile-phone.svg",
    content: <Tab2 />,
  },
  {
    id: "3",
    label: "ИП",
    icon: "/images/icons/ip.svg",
    content: <Tab3 />,
  },
];

export const CryptoPayment = ({ isOpen, onClose }) => {
  const [check, setCheck] = useState(false);
  const [time, setTime] = useState(7200); // 1:59:59 = 7200 sekund

  // Timer
  useEffect(() => {
    if (!isOpen) return; // modal yopiq bo‘lsa, timer ishlamasin

    // har safar ochilganda qayta 1:59:59 dan boshlaydi
    setTime(7200);

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          return 7200; // vaqt tugasa, boshidan
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // modal yopilganda tozalaydi
  }, [isOpen]);

  // vaqtni formatlash (HH:MM:SS)
  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(1, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <div
        className={`modal duration-300 ${
          isOpen ? "bottom-0" : "-bottom-[150%]"
        }`}
      >
        <div className="flex items-center justify-between px-[13px]">
          <div className="flex items-center gap-2">
            <img src="/images/icons/logo-a.svg" alt="" />
            <span className="text-15 font-bold">Реквизиты продавца</span>
          </div>
          <button onClick={onClose}>
            <img src="/images/icons/close.svg" alt="" />
          </button>
        </div>
        <div className="bg-[#242424] pt-[10px] px-[14px] rounded-15 mt-[23px] pb-[12px]">
          <div className="flex gap-[6px] items-center justify-center">
            <img src="/images/icons/shield-done.svg" alt="" />
            <span className="font-semibold">Обратите внимание</span>
          </div>
          <p className="mt-[6px] leading-full text-[#A3A3A3] text-center">
            Сервис не несёт ответственность за переводы денежных средств, и не
            даёт гарантий.
          </p>
        </div>
        <h3 className="text-15 font-bold text-center text-white mt-3 mb-[1px] leading-[18px]">
          Переведите:
        </h3>
        <h2 className="text-[50px] leading-[61px] mt-2 font-bold text-center">
          3828<span className="text-xl font-medium text-[#A3A3A3]">₽</span>
        </h2>
        <div className="flex items-center justify-center gap-[7px] mt-[7px] mb-3">
          <img src="/images/icons/time-blue.svg" alt="" />
          <span className="text-[#59BFFF] font-bold">{formatTime(time)}</span>
        </div>
        <h4 className="text-center mb-3 leading-4 font-semibold">
          Отметьте выбранный вариант
        </h4>
        <div className="space-y-[6px] media-size-small">
          <Tab2Compoonent tabData={tabData} />
        </div>
        <h3 className="text-15 text-center font-bold leading-[14px] my-3">
          Загрузите чек оплаты
        </h3>
        <Button type="lightGray">
          <img src="/images/icons/upload-file.svg" alt="" />
          <span>Загрузить чек</span>
        </Button>

        <div className="flex gap-[6px] mt-[14px] mb-2">
          <div className="mt-0.5">
            <Checkbox checked={check} onChange={() => setCheck(!check)} />
          </div>
          <span className="text-xs font-semibold text-[#A3A3A3] max-w-[361px] leading-[115%]">
            Я подтверждаю, что перевёл указанную сумму денежных средства по
            указанным реквизитам.
          </span>
        </div>
        <Button>Я перевёл</Button>
      </div>
    </>
  );
};
