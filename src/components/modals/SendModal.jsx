import { useEffect, useState } from "react";

export const SendModal = ({ isOpen, setIsOpen }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => setIsOpen(false), 300); // animatsiya tugashini kutadi
      }, 2000); // modal 2 soniya ko‘rinadi
      return () => clearTimeout(timer);
    }
  }, [isOpen, setIsOpen]);

  return (
    <div
      className={`fixed top-10 left-1/2 -translate-x-1/2 flex flex-col items-center   pointer-events-none z-[99999] transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-[#303030] w-[302px] space-y-[7px] rounded-15 pt-[12px] p-[13px] transition-all duration-300 ease-out transform ${
          visible ? "scale-100 opacity-100" : "scale-[.7] opacity-0"
        }`}
      >
        <div className="flex gap-[6px] items-center justify-center">
          <img src="/images/icons/check-rounded.svg" alt="" />
          <span className="text-15 font-semibold leading-[18px] text-[#52E063]">
            Запрос отправлен
          </span>
        </div>
        <p className="text-center font-medium text-[10px] text-[#A3A3A3]">
          На подтверждение админу, вам придёт уведомление в бот, с реквизитами
          для оплаты.
        </p>
      </div>
    </div>
  );
};
