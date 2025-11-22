import {
  Button,
  CardUI,
  Categories,
  ChanelSelect,
  Date,
  ExpandableAdButtons,
  Sort,
} from "../components";
import { ToggleIconButton } from "../components/ToggleFeatured";

export const AdvertisingExchange = () => {
  const categoryOptions2 = ["Счастье Сейчас", "Счастье Сейчас 2", "Счастье Сейчас 3"];
  const categoryOptions3 = ["Text 1", "Text 2", "Text 3"];
  const categories = [
    { label: "Горячее", to: "/hype", className: "bg-orange" },
    { label: "На трафике", to: "/bestsellers", className: "bg-primary" },
    { label: "Проверенное", to: "/brands", className: "bg-purple" },
    { label: "Свежие", to: "/discounts", className: "bg-green" },
  ];
  return (
    <div>
      <div className="space-y-[7px]">
        <Button type="gray" className="border border-[#303030] bg-charcoal">
          <img src="/images/icons/file-plus.svg" alt="" />
          <span>Создать рекламный пост</span>
        </Button>
        <div className="flex gap-1">
          <Sort
            label="Канал"
            icon={true}
            iconPath="/images/icons/category.svg"
            options={categoryOptions2}
          />
          <Sort label="Фильтр" icon={true} options={categoryOptions3} />
          <ToggleIconButton className="w-[35px] h-[55px] flex items-center justify-center bg-charcoal rounded-[15px]" />
        </div>

        <ChanelSelect />
        <Date />
        <Categories categories={categories} />
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
                <h4 className="text-[15px] font-semibold leading-full mt-[3px]">
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
            <ToggleIconButton activeIcon="/images/icons/active-heart.svg" />
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
                <h4 className="text-[15px] font-semibold leading-full mt-[3px]">
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
            <ToggleIconButton activeIcon="/images/icons/active-heart.svg" />
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
