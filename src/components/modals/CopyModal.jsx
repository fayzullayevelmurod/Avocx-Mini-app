import { useEffect, useState } from "react";

export const CopyModal = ({ isOpen, setIsOpen }) => {
  const [visible, setVisible] = useState(false);

  // animatsiya holatini boshqarish
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      // 2 soniyadan so‘ng avtomatik yopiladi
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => setIsOpen(false), 300); // animatsiya tugashini kutadi
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, setIsOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center pointer-events-none z-[99999] transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-[#303030] w-[302px] rounded-15 pt-[12px] p-[13px] flex items-center justify-center gap-[6px] transition-all duration-500 ease-out ${
          visible
            ? "translate-y-[30px] opacity-100"
            : "-translate-y-[100%] opacity-0"
        }`}
      >
        <img src="/images/icons/check-rounded.svg" alt="" />
        <span className="text-15 font-bold leading-[18px] text-[#52E063]">
          Скопировано
        </span>
      </div>
    </div>
  );
};
