import { useState } from "react";
import { Button } from "../Button";
import { PayCard } from "../PayCard";

export const CryptoWithdrawal = ({ isOpen, onClose }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("TON");
  const [value, setValue] = useState("");

  const options = ["TON", "RUB", "USD"];

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
  };

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
      <h4 className="font-bold text-center mt-[57px] text-15">Вывод:</h4>
      <div className="flex items-center gap-[7px] justify-center mt-2 mb-[22px] ml-5">
        <input
          type="number"
          placeholder="0"
          className="placeholder:text-grayCustom  max-w-[100px] text-white font-bold text-[40px] bg-transparent outline-none"
          style={{ width: `${Math.max(1, value.length)}ch` }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="relative">
          {/* Trigger */}
          <div
            className="font-semibold w-[90px] h-[50px] flex items-center justify-center rounded-[20px] bg-[#303030] cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div className="flex gap-[10px] items-center">
              <span>{selected}</span>
              <img
                src="/images/icons/arrow-down-circle.svg"
                alt="arrow"
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {/* Dropdown */}
          {open && (
            <div className="absolute top-[55px] left-0 w-full bg-[#303030] rounded-[20px] shadow-lg overflow-hidden z-50">
              {options.map((opt) => (
                <div
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  className={`px-4 py-2 cursor-pointer hover:bg-[#404040] ${
                    selected === opt ? "bg-[#404040]" : ""
                  }`}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Button type="primary">
        <img src="/images/icons/up-arrow.svg" alt="up-arrow" />
        <span>Вывести</span>
      </Button>
      <p className="font-semibold mt-2 mb-[29px] text-center">
        Баланс: 2500 <span className="text-grayCustom">₽ /</span> 13.22{" "}
        <span className="text-grayCustom">TON</span>
      </p>
      <div className="text-center pt-[17px] pb-[18px] rounded-[20px] w-full bg-[#303030]">
        <h4 className="text-15 font-bold mb-3">Комиссия за вывод: 0.1 TON</h4>
        <p className="text-xs font-semibold">
          24h{" "}
          <span className="text-grayCustom">Max: 50000₽, $3000, 1000 TON</span>
        </p>
        <p className="text-xs font-semibold mt-[1px]">
          24h{" "}
          <span className="text-grayCustom">
            Min: 2000₽, $20, 10 TON, 1000 Stars
          </span>
        </p>
      </div>
    </div>
  );
};
