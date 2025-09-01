import { Link } from "react-router-dom";

export const Header = ({ title, search, activeType }) => {
  return (
    <header className="rounded-b-[30px] bg-charcoal p-[13px] shadow-header-shadow mb-2 w-[calc(100%_+_28px)] -ml-[14px]">
      <div className="flex items-center justify-between mb-2 pl-[17px]">
        <Link to="/home">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <div className="flex items-center gap-6">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.9268 0C19.536 0 21.084 0.647778 22.2228 1.81011C23.3628 2.97 24 4.53444 24 6.17222V15.8278C24 19.2378 21.276 22 17.9268 22H6.072C2.7228 22 0 19.2378 0 15.8278V6.17222C0 2.76222 2.7108 0 6.072 0H17.9268ZM19.8361 7.99344L19.9321 7.89566C20.2189 7.54122 20.2189 7.02788 19.9189 6.67344C19.7521 6.49133 19.5229 6.3801 19.2841 6.35566C19.0321 6.34222 18.7921 6.42899 18.6109 6.6001L13.2001 11.0001C12.5041 11.588 11.5069 11.588 10.8001 11.0001L5.40011 6.6001C5.02691 6.31899 4.51091 6.35566 4.20011 6.68566C3.87611 7.01566 3.84011 7.54122 4.11491 7.90788L4.27211 8.06677L9.73211 12.4057C10.4041 12.9434 11.2189 13.2368 12.0721 13.2368C12.9229 13.2368 13.7521 12.9434 14.4229 12.4057L19.8361 7.99344Z"
              fill={activeType === "envelope" ? "#1A72FF" : "#E8E8E8"}
            />
          </svg>

          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.9227 6.57776H24C24 2.42561 21.5573 0 17.4187 0H6.58133C2.44267 0 0 2.42561 0 6.5248V15.4752C0 19.5744 2.44267 22 6.58133 22H17.4187C21.5573 22 24 19.5744 24 15.4752V15.0939H18.9227C16.5663 15.0939 14.656 13.197 14.656 10.857C14.656 8.51704 16.5663 6.62013 18.9227 6.62013V6.57776ZM18.9227 8.3995H23.104C23.5988 8.3995 24 8.79785 24 9.28924V12.3822C23.9942 12.8712 23.5964 13.2662 23.104 13.2719H19.0187C17.8257 13.2878 16.7826 12.4768 16.512 11.3229C16.3765 10.6067 16.5667 9.86757 17.0317 9.3037C17.4966 8.73983 18.1888 8.40886 18.9227 8.3995ZM19.104 11.6514H19.4986C20.0053 11.6514 20.416 11.2436 20.416 10.7405C20.416 10.2374 20.0053 9.82954 19.4986 9.82954H19.104C18.8617 9.82671 18.6283 9.92032 18.456 10.0895C18.2836 10.2586 18.1866 10.4893 18.1866 10.7299C18.1866 11.2347 18.5956 11.6456 19.104 11.6514ZM5.6854 6.57766H12.4587C12.9654 6.57766 13.3761 6.16983 13.3761 5.66673C13.3761 5.16364 12.9654 4.75581 12.4587 4.75581H5.6854C5.18291 4.75577 4.77391 5.15719 4.76807 5.65614C4.76803 6.16098 5.17705 6.57186 5.6854 6.57766Z"
              fill={activeType === "wallet" ? "#1A72FF" : "#E8E8E8"}
            />
          </svg>

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
