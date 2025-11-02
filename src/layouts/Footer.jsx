import { Link, useLocation } from "react-router-dom";
import { Button } from "../components";

export const Footer = ({ btn, btnIcon, btnOnClick }) => {
  const location = useLocation();

  // Footer menyu elementlari (array)
  const navItems = [
    {
      label: "Биржа",
      paths: ["/creating-exchange", "/my-ads-exchange", "/exchange"],
      icon: "/images/icons/footer-icon-1.svg",
    },
    {
      label: "Моя реклама",
      paths: [
        "/setting-up-details",
        "/announcements-exchange",
        "/creating-advertising-post",
        "/my-created-ads"
      ],
      icon: "/images/icons/footer-icon-2.svg",
    },
    {
      label: "Заказы",
      paths: [
        "/buyer-advertising-orders-two",
        "/buyer-advertising-orders-three",
      ],
      icon: "/images/icons/footer-icon-3.svg",
      count: "1",
    },
    {
      label: "Корзина",
      paths: ["/shopping-cart-advertising"],
      icon: "/images/icons/footer-icon-4.svg",
      count: "1",
    },
  ];
  return (
    <footer
      className={`max-w-[500px] z-[888] mx-auto border-t border-[#242424] bg-[#1C1C1C] fixed bottom-0 left-1/2 -translate-x-1/2 w-full pt-3 ${
        btn ? "h-[151px]" : "h-[87px]"
      }`}
    >
      {btn && (
        <Button
          onClick={btnOnClick}
          className="mb-[13px] !w-[calc(100%_-_26px)] mx-auto"
        >
          {btnIcon && <img src={btnIcon} alt="" />}
          <span>{btn}</span>
        </Button>
      )}

      <div className="flex items-center justify-between pl-[63px] pr-[56px]">
        {navItems.map((item) => {
          // Tekshiradi: joriy path item.paths ichida bormi
          const isActive = item.paths.some((p) =>
            location.pathname.startsWith(p)
          );

          return (
            <Link
              key={item.label}
              to={item.paths[0]} // asosiy path
              className="flex flex-col justify-between gap-0.5 relative"
            >
              {item.count && (
                <div className="w-3 z-10 h-3 rounded-full bg-[#59BFFF] border border-[#1C1C1C] absolute -top-1 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <span className="text-[#1C1C1C] leading-[12px] font-bold text-[9px]">
                    {item.count}
                  </span>
                </div>
              )}
              <img
                className={`mx-auto block transition-all ${
                  isActive ? "filter invert brightness-0" : ""
                }`}
                src={item.icon}
                alt={item.label}
                width={24}
                height={24}
              />
              <span
                className={`text-[9px] text-center font-bold transition-all ${
                  isActive ? "text-base-white" : "text-[#707070]"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </footer>
  );
};
