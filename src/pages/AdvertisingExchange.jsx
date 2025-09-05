import { Header } from "../layouts";
import {
  Button,
  CardUI,
  Categories,
  Date,
  ExpandableAdButtons,
  Sort,
} from "../components";
import { ToggleIconButton } from "../components/ToggleFeatured";

export const AdvertisingExchange = () => {
  const categoryOptions2 = ["Все", "От новых 2", "От новых 3"];
  const categoryOptions3 = ["Text 1", "Text 2", "Text 3"];
  const categories = [
    { label: "Горячее", to: "/hype", className: "bg-orange" },
    { label: "На трафике", to: "/bestsellers", className: "bg-primary" },
    { label: "Проверенное", to: "/brands", className: "bg-purple" },
    { label: "Свежие", to: "/discounts", className: "bg-green" },
  ];
  return (
    <div>
      <Header search="Искать на Авокс.." cabinet={true} />
      <div className="space-y-[7px]">
        <Button type="gray" className="border border-[#303030] bg-charcoal">
          <img src="/images/icons/file-plus.svg" alt="" />
          <span>Создать рекламный пост</span>
        </Button>
        <div className="flex gap-1">
          <Sort
            label="Категория"
            icon={true}
            iconPath="/images/icons/category.svg"
            options={categoryOptions2}
          />
          <Sort label="Фильтр" icon={true} options={categoryOptions3} />
          <ToggleIconButton
            className="w-[35px] h-[55px] flex items-center justify-center bg-charcoal rounded-[15px]"
          />
        </div>
        <div className="flex justify-between items-center bg-[#242424] rounded-[20px] px-4 h-[50px]">
          <div className="flex gap-1 items-center">
            <span className="text-grayCustom font-semibold">Канал:</span>
            <span className="font-semibold">Cчастье Сейчас</span>
          </div>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 transition-transform duration-300 "
          >
            <path
              d="M10.5 0C16.01 0 20.5 4.48 20.5 10C20.5 15.51 16.01 20 10.5 20C4.98 20 0.5 15.51 0.5 10C0.5 4.48 4.98 0 10.5 0ZM14.5 8.01953C14.2 7.72978 13.7304 7.73042 13.4404 8.03027L10.5 10.9805L7.55957 8.03027C7.26964 7.73043 6.79 7.72979 6.5 8.01953C6.2 8.31953 6.2 8.79008 6.5 9.08008L9.96973 12.5703C10.1097 12.7103 10.3 12.79 10.5 12.79C10.7 12.79 10.8903 12.7103 11.0303 12.5703L14.5 9.08008C14.65 8.94008 14.7197 8.74957 14.7197 8.55957C14.7196 8.35973 14.6499 8.16942 14.5 8.01953Z"
              fill="#707070"
            ></path>
          </svg>
        </div>
        <Date />
        <Categories categoriesData={categories} />
        <CardUI className="!p-[11px] mt-[1px] !rounded-[25px] border-[#FF9462] shadow-vip relative">
          <div className="absolute top-0 right-9 h-[22px] w-11 flex items-center justify-center bg-vip rounded-b-[7px]">
            VIP
          </div>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-[5px]">
              <div className="bg-[#3B3B3B] rounded-t-[79px] rounded-b-[25px] w-[53px] h-[65px] p-[2px] flex justify-between flex-col items-center">
                <img
                  className="w-[50px] h-[50px]"
                  src="images/icons/logo.svg"
                  alt="logo"
                />
                <div className="flex gap-[1px] justify-center items-center bg-[#FF9462] min-h-[10px] max-h-[10px] rounded-[5px] px-1 mt-[-9px]">
                  <img src="/images/icons/trophy.svg" alt="" />
                  <span className="text-[8px] font-semibold leading-full">
                    189
                  </span>
                </div>
                <span className="text-[7px] text-grayCustom">Diamond</span>
              </div>
              <div>
                <h4 className="text-[17px] font-semibold leading-full mt-[3px]">
                  Cчастье Сейчас
                </h4>
                <p className="text-[10px] font-normal text-grayCustom leading-full mt-[2px] mb-[6px]">
                  Психология, Цитаты, Литература.
                </p>
                <div className="flex items-center gap-[10px] my-[2px] mt-[-3px]">
                  <div className="flex items-center gap-[5px]">
                    <img src="images/icons/user.svg" alt="" />
                    <span className="text-xs text-grayCustom">17.345</span>
                  </div>
                  <div className="flex gap-[2px]">
                    <img src="images/icons/plus-2.svg" alt="" />
                    <img src="images/icons/plus-2.svg" alt="" />
                    <img src="images/icons/minus.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center gap-[10px] mt-[3px]">
                  <div className="flex items-center gap-[5px]">
                    <img src="images/icons/er.svg" alt="er" />
                    <span className="text-xs text-grayCustom">21%</span>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <img src="images/icons/eye.svg" alt="see" />
                    <span className="text-xs text-grayCustom">
                      567, 754, 1145
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute top-3 right-[10px] w-[23px] h-[23px]"
              src="images/icons/featured.svg"
              alt="star icon"
            />
          </div>

          {/* Первая карточка с уникальным ID и данными */}
          <ExpandableAdButtons
            cardId="card1"
            buttonsData={[
              { format: "1/48", price: "650₽" },
              { format: "1/72", price: "890₽" },
              { format: "1/168", price: "1200₽" },
              { format: "Story", price: "1500₽" },
            ]}
          />
        </CardUI>
        <h3 className="text-center font-semibold text-17 pb-[3px] pt-[1px]">
          Подборка
        </h3>
        <CardUI className="!p-[11px] mt-[1px] !rounded-[25px] relative">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-[5px]">
              <div className="bg-[#3B3B3B] rounded-t-[79px] rounded-b-[25px] w-[53px] h-[65px] p-[2px] flex justify-between flex-col items-center">
                <img
                  className="w-[50px] h-[50px]"
                  src="images/icons/logo.svg"
                  alt="logo"
                />
                <div className="flex gap-[1px] justify-center items-center bg-[#FF9462] min-h-[10px] max-h-[10px] rounded-[5px] px-1 mt-[-9px]">
                  <img src="/images/icons/trophy.svg" alt="" />
                  <span className="text-[8px] font-semibold leading-full">
                    189
                  </span>
                </div>
                <span className="text-[7px] text-grayCustom">Diamond</span>
              </div>
              <div>
                <h4 className="text-[17px] font-semibold leading-full mt-[3px]">
                  Cчастье Сейчас
                </h4>
                <p className="text-[10px] font-normal text-grayCustom leading-full mt-[2px] mb-[6px]">
                  Психология, Цитаты, Литература.
                </p>
                <div className="flex items-center gap-[10px] my-[2px] mt-[-3px]">
                  <div className="flex items-center gap-[5px]">
                    <img src="images/icons/user.svg" alt="" />
                    <span className="text-xs text-grayCustom">17.345</span>
                  </div>
                  <div className="flex gap-[2px]">
                    <img src="images/icons/plus-2.svg" alt="" />
                    <img src="images/icons/plus-2.svg" alt="" />
                    <img src="images/icons/minus.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center gap-[10px] mt-[3px]">
                  <div className="flex items-center gap-[5px]">
                    <img src="images/icons/er.svg" alt="er" />
                    <span className="text-xs text-grayCustom">21%</span>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <img src="images/icons/eye.svg" alt="see" />
                    <span className="text-xs text-grayCustom">
                      567, 754, 1145
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute top-3 right-[10px] w-[23px] h-[23px]"
              src="images/icons/featured.svg"
              alt="star icon"
            />
          </div>

          {/* Первая карточка с уникальным ID и данными */}
          <ExpandableAdButtons
            cardId="card1"
            buttonsData={[
              { format: "1/48", price: "650₽" },
              { format: "1/72", price: "890₽" },
              { format: "1/168", price: "1200₽" },
              { format: "Story", price: "1500₽" },
            ]}
          />
        </CardUI>
      </div>
    </div>
  );
};
