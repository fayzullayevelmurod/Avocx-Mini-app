import { useState } from "react";
import { CryptoPayment } from "./CryptoPayment";

export const PaymentFiat = ({ isOpen, onClose }) => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (modalName) => setOpenModal(modalName);
  const handleClose = () => setOpenModal(null);

  return (
    <>
      <div
        className={`modal duration-300 ${
          isOpen ? "bottom-0" : "-bottom-[150%]"
        }`}
      >
        <div className="px-[13px]">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2">
              <img src="/images/icons/logo-a.svg" alt="" />
              <span className="text-15 font-bold">Оплата подписки</span>
            </div>
            <button onClick={onClose}>
              <img src="/images/icons/close.svg" alt="" />
            </button>
          </div>
          <h3 className="text-center text-15 font-bold leading-[18px] mt-[23px] mb-2">
            К оплате:
          </h3>
          <h2 className="text-[50px] leading-[61px] font-bold text-center">
            3828<span className="text-xl font-medium text-[#A3A3A3]">₽</span>
          </h2>
          <div className="space-y-[7px] mt-[9px]">
            <h3 className="text-center text-15 font-bold leading-[18px]">
              Способы оплаты:
            </h3>
            <div
              onClick={() => handleOpen("crypto-payment")}
              className="bg-[#272727] h-[70px] rounded-15 pl-6 pr-[25px] py-[17px] flex items-center justify-between"
            >
              <div>
                <div className="flex items-center gap-[7px]">
                  <img src="/images/icons/card-pay.svg" alt="" />
                  <span className="font-bold leading-[12px]">
                    Онлайн оплата
                  </span>
                </div>
                <span className="text-xs text-[#707070] font-semibold mt-[6px] leading-[12px]">
                  Лучше использовать: СБП
                </span>
              </div>
              <img src="/images/icons/arrow-right.svg" alt="" />
            </div>
            <div className="bg-[#272727] h-[70px] rounded-15 pl-6 pr-[25px] py-[17px] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-[7px]">
                  <img src="/images/icons/tether.svg" alt="" />
                  <span className="font-bold leading-[12px]">
                    USDT (Все сети)
                  </span>
                </div>
                <span className="text-xs text-[#707070] font-semibold mt-[6px] leading-[12px]">
                  Выгодно: USDT (TON)
                </span>
              </div>
              <img src="/images/icons/arrow-right.svg" alt="" />
            </div>
            <div className="bg-[#272727] h-[70px] rounded-15 pl-6 pr-[25px] py-[17px] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-[7px]">
                  <img src="/images/icons/star.svg" alt="" />
                  <div className="flex items-center gap-[7px]">
                    <span className="font-bold leading-[12px]">
                      Telegram Stars
                    </span>
                    <img src="/images/icons/flash.svg" alt="" />
                    <span className="text-xs font-semibold text-[#52E063]">
                      ТОП
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#707070] font-semibold mt-[6px] leading-[12px]">
                  Выгодно: USDT (TON)
                </span>
              </div>
              <img src="/images/icons/arrow-right.svg" alt="" />
            </div>
          </div>
          <div className="mt-3 bg-charcoal text-center pt-[13px] p-3 rounded-15">
            <h3 className="pb-3 leading-[14px] font-semibold text-15 ">
              Как выгодно купить TG Stars?
            </h3>
            <p className="text-[10px] font-medium text-[#B1B1B1] leading-[114%]">
              Покупать звёзды лучше напрямую через официальную площадку от
              Telegram – <span className="text-[#E679FF]">Fragment.com</span>,
              но для того чтобы купить там, вам понадобится подключить
              внутренний TG кошелёк{" "}
              <span className="text-[#E679FF]">@wallet</span> и криптовалюта TON
              на нём.
            </p>
          </div>
        </div>
      </div>
      <CryptoPayment
        isOpen={openModal === "crypto-payment"}
        onClose={handleClose}
      />
    </>
  );
};
