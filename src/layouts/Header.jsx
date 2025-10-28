import { Link } from "react-router-dom";
import { Button } from "../components";

export const Header = ({ title, search, settingBtn, action, actionIcon }) => {
  return (
    <header className="h-[72px] bg-[#1C1C1C] pr-0.5 py-[13px] flex gap-[7px] items-center justify-between pb-[13px] relative mb-3">
      <div className="w-[calc(100%_+_26px)] border border-[#242424] absolute bottom-0 -left-[13px]"></div>
      {search && (
        <div className="min-w-[143px] flex-1 h-[46px] rounded-15 bg-charcoal flex items-center gap-1 px-[14px]">
          <img src="/images/icons/search.svg" alt="" />
          <input
            className="bg-transparent border-none outline-none w-full placeholder:text-[#707070] text-xs font-semibold"
            type="text"
            placeholder="Поиск"
          />
        </div>
      )}
      {title && (
        <div className="py-[13px] w-full flex-1 min-w-0 bg-[#242424] rounded-[15px] flex items-center justify-center h-[46px]">
          <h2 className="font-bold text-xs">Настройки</h2>
        </div>
      )}
      {action && (
        <Button className="w-[139px] !h-[46px]">
          <img src={actionIcon} alt="" />
          <span className="text-xs text-[#1C1C1C]">{action}</span>
        </Button>
      )}
      <Link
        to="/settings"
        className={`bg-[#242424] rounded-[15px] min-w-[50px] max-w-[50px] h-[46px] flex items-center justify-center ${settingBtn}`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0365 0H6.97548C2.6053 0 0 2.604 0 6.972V17.016C0 21.396 2.6053 24 6.97548 24H17.0245C21.3947 24 24 21.396 24 17.028V6.972C24.012 2.604 21.4067 0 17.0365 0ZM6.80739 4.2C6.80739 3.708 7.2156 3.3 7.70784 3.3C8.20009 3.3 8.60829 3.708 8.60829 4.2V8.88C8.60829 9.372 8.20009 9.78 7.70784 9.78C7.2156 9.78 6.80739 9.372 6.80739 8.88V4.2ZM8.96269 17.3473C8.75721 17.433 8.60829 17.6252 8.60829 17.8478V19.8C8.60829 20.292 8.20009 20.7 7.70784 20.7C7.2156 20.7 6.80739 20.292 6.80739 19.8V17.8478C6.80739 17.6252 6.65845 17.433 6.45302 17.3472C5.27006 16.8531 4.44221 15.6963 4.44221 14.34C4.44221 12.54 5.90694 11.064 7.70784 11.064C9.50874 11.064 10.9855 12.528 10.9855 14.34C10.9855 15.6963 10.1475 16.8533 8.96269 17.3473ZM17.2046 19.8C17.2046 20.292 16.7964 20.7 16.3041 20.7C15.8119 20.7 15.4037 20.292 15.4037 19.8V15.12C15.4037 14.628 15.8119 14.22 16.3041 14.22C16.7964 14.22 17.2046 14.628 17.2046 15.12V19.8ZM16.3041 12.924C14.5032 12.924 13.0265 11.46 13.0265 9.648C13.0265 8.29166 13.8644 7.13473 15.0493 6.6407C15.2548 6.55503 15.4037 6.36278 15.4037 6.14016V4.2C15.4037 3.708 15.8119 3.3 16.3041 3.3C16.7964 3.3 17.2046 3.708 17.2046 4.2V6.15216C17.2046 6.37478 17.3535 6.567 17.5589 6.6528C18.7419 7.14688 19.5697 8.30375 19.5697 9.66C19.5697 11.46 18.105 12.924 16.3041 12.924Z"
            fill={`${settingBtn ? "#707070" : "#E8E8E8"}`}
          />
        </svg>
      </Link>
      <div className="min-w-[59px] max-w-[59px] relative h-[46px] rounded-[15px] p-[3px] flex items-center gap-[3px] bg-[#242424]">
        <img
          className="w-10 h-10 rounded-[13px] object-cover"
          src="/images/header-user-img.jpg"
          alt="header user img"
        />
        <span className="-rotate-90 absolute top-1/2 -translate-y-1/2 text-[8px] font-bold right-0.5">
          Pro
        </span>
      </div>
    </header>
  );
};
