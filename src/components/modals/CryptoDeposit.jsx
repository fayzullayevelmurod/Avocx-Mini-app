import { useState } from "react";
import { Button } from "../Button";
import { PayCard } from "../PayCard";

const methods = [
  {
    id: 1,
    title: "Банковская карта",
    text: "Привязанная карта: МИР ****3434",
    icon: "/images/icons/wallet.svg",
    selected: true,
  },
  {
    id: 2,
    title: "Банковская карта",
    text: "По QR коду",
    icon: "/images/icons/card-pay.svg",
  },
  {
    id: 3,
    title: "СБП",
    text: "Доступны: TON, USDT/TON",
    icon: "/images/icons/tether.svg",
  },
];
export const CryptoDeposit = ({ isOpen, onClose }) => {
  const [selected, setSelected] = useState(
    methods.find((m) => m.selected)?.id || null
  );

  return (
    <div
      className={`modal duration-300 ${isOpen ? "bottom-0" : "-bottom-[150%]"}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/images/icons/wallet.svg"
            alt="wallet"
            width={20}
            height={18}
          />
          <span className="font-bold">Авокс кошелёк</span>
        </div>
        <button onClick={onClose}>
          <img src="/images/icons/close.svg" alt="close" />
        </button>
      </div>
      <h4 className="font-bold text-center mt-[57px] text-15">Сумма:</h4>
      <div className="flex items-center gap-[7px] justify-center mt-2 mb-[22px] ml-5">
        <h3 className="font-bold text-[40px] leading-full">5000</h3>
        <div className="font-semibold w-[90px] h-[50px] flex items-center justify-center rounded-[20px] bg-[#303030]">
          RUB
        </div>
      </div>
      <Button type="primary">
        <img src="/images/icons/pay.svg" alt="pay" />
        <span>Оплатить</span>
      </Button>
      <p className="font-semibold mt-2 mb-[29px] text-center">
        Баланс: 2500 <span className="text-grayCustom">₽ /</span> 13.22{" "}
        <span className="text-grayCustom">TON</span>
      </p>
      <h4 className="font-bold text-center mb-[7px] text-15">
        Способ пополнения:
      </h4>
      <div className="space-y-1">
        {methods.map((m) => (
          <PayCard
            key={m.id}
            title={m.title}
            text={m.text}
            icon={m.icon}
            isSelected={selected === m.id}
            onClick={() => setSelected(m.id)}
          />
        ))}
      </div>
    </div>
  );
};
