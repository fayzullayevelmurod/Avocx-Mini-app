import { useState } from "react";
import Button from "../components/Button";
import CardUI from "../components/CardUI";
import { DepositModal } from "../components/DepositModal";
import { Header } from "../components/Header";
import { PaymentModal } from "../components/PaymentModal copy";
import { ProModal } from "../components/ProModal";
import { WithdrawModal } from "../components/WithdrawModal";
import { NotFoundModal } from "../components/NotFoundModal";

export const Window = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (modalName) => setOpenModal(modalName);
  const handleClose = () => setOpenModal(null);

  return (
    <div>
      <Header />
      <CardUI className="!px-[9px] !py-[10px] h-[65px] flex items-center relative mb-[10px]">
        <div className="flex items-center justify-between gap-[10px]">
          <img
            className="w-12 h-12 rounded-full"
            src="/images/company-logo.svg"
            alt="product company logo"
          />
          <div className="mt-[3px]">
            <h3 className="text-base font-semibold leading-full mb-[6px]">
              SHLZ.STORE 🥇
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <img src="/images/icons/group.svg" alt="group icon" />
                <span className="text-xs font-medium text-grayCustom">
                  5879
                </span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/images/icons/cart.svg" alt="cart icon" />
                <span className="text-xs font-medium text-grayCustom">
                  2334
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardUI>

      <div className="space-y-2">
        <Button onClick={() => handleOpen("not-found")}>Opss..</Button>
        <Button onClick={() => handleOpen("pro")}>
          Нейдоступно без подписки
        </Button>
        <Button onClick={() => handleOpen("payment")}>
          Оплата TON and Stars
        </Button>
        <Button onClick={() => handleOpen("deposit")}>Deposit</Button>
        <Button onClick={() => handleOpen("withdraw")}>Withdraw</Button>
      </div>

      {/* Modallar */}
      <NotFoundModal isOpen={openModal === "not-found"} onClose={handleClose} />
      <ProModal isOpen={openModal === "pro"} onClose={handleClose} />
      <PaymentModal isOpen={openModal === "payment"} onClose={handleClose} />
      <DepositModal isOpen={openModal === "deposit"} onClose={handleClose} />
      <WithdrawModal isOpen={openModal === "withdraw"} onClose={handleClose} />
    </div>
  );
};
