import { useState } from "react";
import { Button } from "../components";
import {
  CryptoDeposit,
  CryptoPayment,
  CryptoWithdrawal,
  LetsModal,
  PaymentFiat,
} from "../components/modals";
import { Header } from "../layouts";

export const SlideWindow = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (modalName) => setOpenModal(modalName);
  const handleClose = () => setOpenModal(null);

  return (
    <div>
      <Header title="SlideWindow"/>
      <div className="space-y-2 mt-10">
        <Button onClick={() => handleOpen("payment-fiat")}>
          Оплата фиатная
        </Button>
        <Button onClick={() => handleOpen("crypto-payment")}>
          Крипто оплата
        </Button>
        <Button onClick={() => handleOpen("crypto-withdrawal")}>
          Крипто вывод
        </Button>
        <Button onClick={() => handleOpen("crypto-deposit")}>
          Крипто депозит
        </Button>
        <Button onClick={() => handleOpen("lets-modal")}>
          Popup Запускаем!
        </Button>
      </div>

      {/* Modallar */}
      <PaymentFiat
        isOpen={openModal === "payment-fiat"}
        onClose={handleClose}
      />
      <CryptoPayment
        isOpen={openModal === "crypto-payment"}
        onClose={handleClose}
      />
      <CryptoDeposit
        isOpen={openModal === "crypto-deposit"}
        onClose={handleClose}
      />
      <CryptoWithdrawal
        isOpen={openModal === "crypto-withdrawal"}
        onClose={handleClose}
      />
      <LetsModal isOpen={openModal === "lets-modal"} onClose={handleClose} />
    </div>
  );
};
