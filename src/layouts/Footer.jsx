import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="max-w-[500px] z-[888] mx-auto border-t border-[#242424] bg-[#1C1C1C] fixed bottom-0 left-1/2 -translate-x-1/2 w-full h-[87px] pt-3">
      <div className="flex items-center justify-between pl-[63px] pr-[56px]">
        <Link to='#!' className="flex flex-col justify-between gap-0.5">
          <img className="mx-auto block" src="/images/icons/footer-icon-1.svg" alt="" width={24} height={24} />
          <span className="text-[9px] text-center font-bold text-[#707070]">
            Биржа
          </span>
        </Link>
        <Link to='#!' className="flex flex-col justify-between gap-0.5">
          <img className="mx-auto block" src="/images/icons/footer-icon-2.svg" alt="" width={24} height={24} />
          <span className="text-[9px] text-center font-bold text-[#707070]">
            Моя реклама
          </span>
        </Link>
        <Link to='#!' className="flex flex-col justify-between gap-0.5">
          <img className="mx-auto block" src="/images/icons/footer-icon-3.svg" alt="" width={25} height={20} />
          <span className="text-[9px] text-center font-bold text-[#707070]">
            Заказы
          </span>
        </Link>
        <Link to='#!' className="flex flex-col justify-between gap-0.5">
          <img className="mx-auto block" src="/images/icons/footer-icon-4.svg" alt="" width={24} height={24} />
          <span className="text-[9px] text-center font-bold text-[#707070]">
            Корзина
          </span>
        </Link>
      </div>
    </footer>
  );
};
