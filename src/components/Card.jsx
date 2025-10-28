import { Button } from "./Button";
import { ToggleIconButton } from "./ToggleFeatured";

export const Card = ({ data, btns, intelligence, vip, noFeatured = false }) => {
  const {
    image,
    imageAlt,
    companyLogo,
    title,
    groupCount,
    cartCount,
    description,
  } = data || {};
  console.log(noFeatured);

  return (
    <div
      className={`overflow-hidden rounded-[25px] bg-charcoal p-1 border relative ${
        intelligence ? "pb-1" : "pb-[6px]"
      } ${vip ? "border-[#FF9462] shadow-vip" : "border-iron"}`}
    >
      {vip && (
        <div className="absolute top-0 left-6 flex items-center justify-center w-11 h-[22px] rounded-b-[7px] bg-vip z-10">
          VIP
        </div>
      )}
      <div>
        <div className="w-full h-[176px] relative">
          <div className="absolute bottom-1 bg-[#272727B2] backdrop-blur-4 px-[11px] left-[10px] rounded-[18px] h-[31px] flex items-center gap-[10px]">
            <div className="flex items-center gap-[3px]">
              <img src="/images/icons/orange-star.svg" alt="" />
              <span className="text-xs leading-full">4.9</span>
            </div>
            <div className="flex items-center gap-[3px] ml-0.5">
              <img src="/images/icons/group.svg" alt="" />
              <span className="text-xs leading-full">{groupCount}</span>
            </div>
            <div className="flex items-center gap-[3px] -ml-1">
              <img src="/images/icons/cart.svg" alt="" width={14} />
              <span className="text-xs leading-full">{cartCount}</span>
            </div>
          </div>
          <img
            className="w-full object-cover object-top h-full rounded-[21px]"
            src={image}
            alt={imageAlt}
            loading="lazy"
          />

          {!noFeatured && (
            <div className="absolute top-[5px] right-[5px] w-[27px] h-[27px] flex items-center justify-center">
              <ToggleIconButton
                defaultIcon="/images/icons/featured-border.svg"
                activeIcon="/images/icons/active-heart.svg"
                className="!w-4"
              />
            </div>
          )}
        </div>
        <div className="flex gap-2 items-center px-[10px] -ml-0.5 mt-[5px]">
          <div className="relative min-w-[50px] max-w-[50px] h-[50px]">
            <img
              className={`w-full h-full rounded-full border object-cover ${
                vip ? "border-[#FF9462]" : "border-primary"
              }`}
              src={companyLogo}
              alt="product company logo"
            />
            <div
              className={`absolute bottom-0 left-1/2 -translate-x-1/2  flex items-center gap-[1px] h-[10px] rounded-[5px] w-[30px] justify-center ${
                vip ? "bg-[#FF9462]" : "bg-primary"
              }`}
            >
              <img src="/images/icons/trophy.svg" alt="" />
              <span className="text-[8px] font-semibold leading-full">189</span>
            </div>
          </div>
          <div className="mt-0.5">
            <div className="flex items-center gap-[3px] h-[14px]">
              {!vip && (
                <div className="flex items-center justify-center w-5 h-[14px] rounded-[5px] bg-primary">
                  <img src="/images/icons/veirf.svg" alt="" />
                </div>
              )}
              <div className="flex items-center justify-center w-5 h-[14px] rounded-[5px] bg-[#FF9462]">
                <img src="/images/icons/crown2.svg" alt="" />
              </div>
              <h3
                className={`font-semibold text-base truncate max-w-[150px] whitespace-nowrap overflow-hidden ${
                  vip ? "text-vip" : ""
                }`}
              >
                {title}
              </h3>
            </div>
            <p className="text-[9px] mt-1 leading-[117%] line-clamp-2">
              {description}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex gap-[3px] items-center">
                <img src="/images/icons/location.svg" alt="" />
                <span className="text-grayCustom text-[10px]">Anonymous</span>
              </div>
              <div className="flex gap-[3px] items-center">
                <img src="/images/icons/truck.svg" alt="" />
                <span className="text-grayCustom text-[10px]">Worldwide</span>
              </div>
            </div>
          </div>
        </div>
        {intelligence && (
          <div className="w-[calc(100%_-_12px)] mx-auto h-[26px] flex items-center mt-[7px] justify-center gap-[6px] rounded-[20px] bg-[#303030]">
            <span className="text-xs font-medium text-grayCustom ml-3">
              Сведения
            </span>{" "}
            <img src="/images/icons/chevron-down.svg" alt="" />
          </div>
        )}
      </div>
      {btns && (
        <div className="grid grid-cols-2 gap-y-[5px] gap-x-0.5 mt-[9px] w-[calc(100%_-_12px)] mx-auto pb-[5px]">
          <Button type="gray">
            <img
              className="filter brightness-0 invert"
              src="/images/icons/document.svg"
              alt="plus"
            />
            <span>Товары</span>
          </Button>
          <Button type="gray" className="!gap-[7px]">
            <img src="/images/icons/filter2.svg" alt="settings" />
            <span>Управление</span>
          </Button>
          <Button type="gray" className="!gap-[7px]">
            <img src="/images/icons/graph.svg" alt="plus" />
            <span>Аналитика</span>
          </Button>
          <Button type="gray" className="!gap-[7px]">
            <img
              className="filter brightness-0 invert"
              src="/images/icons/ticket.svg"
              alt="settings"
            />
            <span>Заказы</span>
          </Button>
        </div>
      )}
    </div>
  );
};
