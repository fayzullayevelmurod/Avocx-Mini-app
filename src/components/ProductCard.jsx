import { Link } from "react-router-dom";
import Button from "./Button";

const ProductCard = ({ data, btns, intelligence }) => {
  const {
    image,
    imageAlt,
    companyLogo,
    companyLogoAlt,
    title,
    groupCount,
    cartCount,
    description,
  } = data || {};

  return (
    <div
      className={`overflow-hidden rounded-[25px] bg-charcoal p-1 border border-iron ${
        intelligence ? "pb-1" : "pb-3"
      }`}
    >
      <div>
        <div className="w-full h-[176px] relative">
          <div className="absolute bottom-1 bg-[#272727B2] backdrop-blur-4 px-[8px] left-[6px] rounded-[18px] h-[31px] flex items-center gap-[10px]">
            <div className="flex items-center gap-[3px]">
              <img src="/images/icons/nishon.svg" alt="" />
              <span className="text-xs leading-full">4.8</span>
            </div>
            <div className="flex items-center gap-[3px]">
              <img src="/images/icons/user-group.svg" alt="" />
              <span className="text-xs leading-full">{groupCount}</span>
            </div>
            <div className="flex items-center gap-[3px]">
              <img src="/images/icons/blue-basket.svg" alt="" />
              <span className="text-xs leading-full">{cartCount}</span>
            </div>
          </div>
          <img
            className="w-full object-cover h-full rounded-[21px]"
            src={image}
            alt={imageAlt}
            loading="lazy"
          />
          <button className="absolute top-[5px] right-[5px] w-[27px] h-[27px] flex items-center justify-center">
            <img
              className="w-full h-full"
              src="/images/icons/star-shadow.png"
              alt=""
            />
          </button>
        </div>
        <div className="flex gap-2 items-center mt-[13px] px-[10px]">
          <img
            className="rounded-full w-12 h-12 object-cover mt-0.5"
            src={companyLogo}
            alt={companyLogoAlt}
            loading="lazy"
          />
          <div className="mt-[-2px]">
            <div className="flex items-center gap-[10px]">
              {/* <h3 className='font-semibold text-base'>{title}</h3> */}
              <h3 className="font-semibold text-base truncate max-w-[150px] whitespace-nowrap overflow-hidden">
                {title}
              </h3>
            </div>
            <p className="text-xxs text-grayCustom mt-1 leading-[117%] line-clamp-2">
              {description}
            </p>
          </div>
        </div>
        {intelligence && (
          <div className="w-[calc(100%_-_12px)] mx-auto h-[26px] mt- flex items-center mt-[10px] justify-center gap-[6px] rounded-[20px] bg-[#303030]">
            <span className="text-xs font-medium text-grayCustom">
              Сведения
            </span>{" "}
            <img src="/images/icons/chevron-down.svg" alt="" />
          </div>
        )}
      </div>
      {btns && (
        <div className="mt-[14px] px-[8px]">
          <Link className="w-full" to="#!">
            <Button gray={true}>Открыть</Button>
          </Link>
          <div className="flex gap-1 mt-1">
            <Button gray={true} className="text-[13px]">
              <img src="/images/icons/plus.svg" alt="plus" />
              <span>Добавить товар</span>
            </Button>
            <Button gray={true} className="text-[13px]">
              <img src="/images/icons/settings-2.svg" alt="settings" />
              <span>Управление</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
