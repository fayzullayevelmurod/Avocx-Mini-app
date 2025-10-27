import { useState } from "react";
import { Button } from "../components";
import {
  CategoriesModal,
  CryptoDeposit,
  CryptoPayment,
  CryptoWithdrawal,
  LetsModal,
  PaymentFiat,
  ProductAnalytics,
  ReviewsModal,
  StoreAnalytics,
} from "../components/modals";
import { Header } from "../layouts";

export const SlideWindow = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (modalName) => setOpenModal(modalName);
  const handleClose = () => setOpenModal(null);

  return (
    <div>
      <Header title="SlideWindow" />
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
        {/* ====== */}
        <Button onClick={() => handleOpen("categories-modal")}>
          Категории
        </Button>
        <Button onClick={() => handleOpen("reviews-modal")}>Отзывы</Button>
        <Button onClick={() => handleOpen("store-analytics")}>
          Аналитика магазина
        </Button>
        <Button onClick={() => handleOpen("product-analytics")}>
          Аналитика товара
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
      <CategoriesModal
        isOpen={openModal === "categories-modal"}
        onClose={handleClose}
      />
      <ReviewsModal
        isOpen={openModal === "reviews-modal"}
        onClose={handleClose}
      />
      <StoreAnalytics
        isOpen={openModal === "store-analytics"}
        onClose={handleClose}
      />
      <ProductAnalytics
        isOpen={openModal === "product-analytics"}
        onClose={handleClose}
      />
    </div>
  );
};
