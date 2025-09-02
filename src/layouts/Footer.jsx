import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="fixed max-w-[441px] left-1/2 px-[53px] pt-3 -translate-x-1/2 mx-auto bottom-0 bg-charcoal rounded-t-[30px] h-[87px] z-[999] w-full flex justify-between">
      <Link className="text-center" to="#!">
        <img
          className="mx-auto block mb-1"
          src="/images/icons/store.svg"
          alt=""
        />
        <span className="text-[#707070] text-[9px]">Market</span>
      </Link>
      <Link className="text-center" to="#!">
        <img
          className="mx-auto block mb-1"
          src="/images/icons/trade-up.svg"
          alt=""
        />
        <span className="text-[#707070] text-[9px]">Ads</span>
      </Link>
      <Link className="text-center" to="#!">
        <img
          className="mx-auto block mb-1"
          src="/images/icons/home.svg"
          alt=""
        />
        <span className="text-[#707070] text-[9px]">Home</span>
      </Link>
      <Link className="text-center" to="#!">
        <img
          className="mx-auto block mb-1"
          src="/images/icons/freelance.svg"
          alt=""
        />
        <span className="text-[#707070] text-[9px]">Freelance</span>
      </Link>
      <Link className="text-center" to="#!">
        <img
          className="mx-auto block mb-1"
          src="/images/icons/basket.svg"
          alt=""
        />
        <span className="text-[#707070] text-[9px]">Basket</span>
      </Link>
    </footer>
  );
};
