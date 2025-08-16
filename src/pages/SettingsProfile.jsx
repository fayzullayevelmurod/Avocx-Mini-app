import Button from "../components/Button";
import CardUI from "../components/CardUI";
import { CustomSelect } from "../components/Form";
import SearchTitle from "../components/SearchTitle";

export const SettingsProfile = () => {
  const options = [
    { value: "sell", label: "Язык: Russian" },
    { value: "buy", label: "Язык: UZB" },
    { value: "rent", label: "Язык: EN" },
  ];
  const options3 = [
    { value: "sell", label: "Тема интерфейса: Dark space" },
    { value: "buy", label: "Тема интерфейса: Dark space" },
    { value: "rent", label: "Тема интерфейса: Dark space" },
  ];
  const options2 = [
    { value: "sell", label: "Валюта: Russian ruble (₽)" },
    { value: "buy", label: "Валюта: Russian ruble (₽)" },
    { value: "rent", label: "Валюта: Russian ruble (₽)" },
  ];
  return (
    <div>
      <SearchTitle label="Настройки" />
      <div className="rounded-[30px] border border-iron bg-charcoal mt-[21px]">
        <div className="bg-iron rounded-[30px] py-[18px] px-[22px]">
          <h4 className="font-semibold text-15 mb-1">Avocx wallet balance:</h4>
          <div className="flex items-center gap-[23px]">
            <div className="flex gap-1 items-center">
              <span className="text-[30px] block leading-full font-bold">
                0
              </span>
              <span className="text-[25px] block leading-full font-semibold text-grayCustom">
                TON
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="text-[30px] leading-full font-bold">0</span>
              <span className="text-[25px] leading-full font-semibold text-grayCustom">
                Stars
              </span>
            </div>
          </div>
          <div className="flex gap-4 mt-[10px]">
            <Button gray={true} className="rounded-[20px]">
              <img src="/images/icons/plus-bold.svg" alt="" />
              <span>Deposit</span>
            </Button>
            <Button gray={true} className="rounded-[20px]">
              <img src="/images/icons/up.svg" alt="" />
              <span>Withdraw</span>
            </Button>
          </div>
        </div>
        <div className="py-3 pr-[29px] pl-[35px] flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <img src="/images/icons/cards.svg" alt="" />
            <p className="text-xs font-semibold">
              Connected wallet:{" "}
              <span className="text-grayCustom">UJC6D...kIGSG</span>
            </p>
          </div>
          <span className="text-[#FF8077] text-xs font-semibold">
            Disconnect
          </span>
        </div>
      </div>
      <CardUI className="mt-[9px] rounded-[30px] pb-[12px]">
        <h4 className="text-center text-17 leading-full font-semibold -ml-6">
          Подписка: Pro
        </h4>
        <h4 className="text-center text-17 leading-full font-semibold mt-0.5 -ml-6">
          Действует до: 25.10.2025
        </h4>
        <button className="gradient-btn mt-[18px]">Оформить подписку</button>
      </CardUI>
      <div className="mt-[9px] space-y-2 mb-3">
        <CustomSelect
          selected={true}
          placeholder="Язык: Russian"
          rightIcon={true}
          options={options}
          className="!h-[49px] border border-iron"
        />
        <CustomSelect
          placeholder="Валюта: Russian ruble (₽) "
          rightIcon={true}
          options={options2}
          className="!h-[49px] border border-iron"
        />
        <CustomSelect
          placeholder="Тема интерфейса:       Dark space"
          rightIcon={true}
          options={options3}
          className="!h-[49px] border border-iron"
        />
      </div>
      <Button gray={true} className="h-[52px]">
        <img src="/images/icons/operator.svg" alt="" />
        <span>Поддержка</span>
      </Button>
      <h4 className="text-center text-17 font-bold mb-[11px] mt-[15px]">
        Реферальная програма
      </h4>
      <p className="text-center font-semibold leading-[115%] mb-[19px]">
        Приглашайте друзей и получайте 15% с их <br /> покупок на протяжении 3
        месяцев.
      </p>
      <Button gray={true} className="justify-between px-5 h-[52px]">
        <span>https://t.me/+FhdgrCiNxln5YTZi</span>
        <img
          className="w-6 -mt-0.5 -mr-1"
          src="/images/icons/copy.svg"
          alt=""
        />
      </Button>
      <Button gray={true} className="justify-between px-5 h-[52px] mt-[7px]">
        Рефералов: 0 / Доход: 0 Stars
      </Button>
    </div>
  );
};
