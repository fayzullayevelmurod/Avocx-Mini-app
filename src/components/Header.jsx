import { Link } from "react-router-dom";
import Search from "./Search";
import Button from "./Button";

export const Header = ({ blueBtn, btnIcon, grayBtn, grayBtnIcon }) => {
  return (
    <div className="flex items-center gap-[9px] mb-4 ">
      <Link className="mr-2 w-8" to="#!">
        <img src="/images/icons/prev-arrow.svg" alt="prev arrow" />
      </Link>
      <Search />
      {blueBtn ? (
        <Button className="max-w-[50px] h-[46px]" gray={true}>
          <img src={btnIcon} alt="" />
        </Button>
      ) : null}
      {grayBtn ? (
        <Button className="max-w-[50px] h-[46px]" gray={true}>
          <img src={grayBtnIcon} alt="" />
        </Button>
      ) : null}
      <button className="w-[37px] h-[45px] flex items-center justify-end">
        <img
          className="w-5"
          src="/images/icons/refresh.svg"
          alt="refresh icon"
          width={20}
        />
      </button>
    </div>
  );
};
