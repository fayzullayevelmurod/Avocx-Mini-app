import { Link } from "react-router-dom";

export const Header = ({ title, search }) => {
  return (
    <header className="rounded-b-[30px] bg-charcoal p-[13px] shadow-header-shadow mb-2 w-[calc(100%_+_28px)] -ml-[14px]">
      <div className="flex items-center justify-between mb-2 pl-[17px]">
        <Link to="/home">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <div className="flex gap-6">
          <img src="/images/icons/envelop.svg" alt="" />
          <img src="/images/icons/wallet.svg" alt="" />
          <div className="flex items-center w-12 bg-primary rounded-xl">
            <div className="bg-charcoal border-charcoal border-2 border-solid rounded-xl -m-0.5">
              <img
                className="rounded-xl w-[30px] h-[30px]"
                src="/images/user-img.jpg"
                alt="user-img"
              />
            </div>
            <div className="-rotate-90 translate-x-0.5 text-[8px] font-bold text-base-white">
              Pro
            </div>
          </div>
        </div>
      </div>
      {search && (
        <div className="relative border border-[#303030] rounded-[20px] flex gap-[13px] items-center h-[46px] px-[17px]">
          <button className="">
            <img src="/images/icons/arrow.svg" alt="" />
          </button>
          <div className="flex gap-1 items-center w-full">
            <img src="/images/icons/search.svg" alt="search.svg" />
            <input
              type="text"
              className="w-full h-full bg-transparent outline-none text-sm font-semibold"
              placeholder="Искать на Авокс.."
            />
          </div>
        </div>
      )}
      {!search && (
        <div className="border border-[#303030] rounded-[20px] h-[46px] flex items-center justify-center relative">
          <button className="absolute top-1/2 -translate-y-1/2 left-[17px]">
            <img src="/images/icons/arrow.svg" alt="" />
          </button>
          <h3 className="text-15 font-bold">{title}</h3>
        </div>
      )}
    </header>
  );
};
