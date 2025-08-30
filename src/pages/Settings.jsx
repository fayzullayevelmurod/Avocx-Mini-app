import { Button, CardUI } from "../components";
import { CustomSelect } from "../components/CustomSelect";
import { Header } from "../layouts";
export const Settings = () => {
  const options = [
    { value: "buy", label: "Язык: Russian" },
    { value: "buy", label: "Язык: English" },
  ];
  const options3 = [
    { value: "sell", label: "Dark space" },
    { value: "buy", label: "Silver crown (Soon)" },
  ];
  const options2 = [
    { value: "sell", label: "US Dollar ($)" },
    { value: "buy", label: "Russian ruble (₽)" },
    { value: "rent", label: "Euro (€)" },
  ];
  return (
    <div>
      <Header title="Настройки профиля" />
      <CardUI className="!pt-[15px] !pb-3">
        <div className="flex items-center justify-center gap-1">
          <h3 className="text-17 font-bold">Подписка: </h3>
          <div className="flex gap-1 items-center bg-primary rounded-lg h-5 justify-center w-[63px]">
            <img src="/images/icons/crown.svg" alt="" />
            <span className="text-[11px] font-bold">Pro</span>
          </div>
        </div>
        <h4 className="text-center text-sm font-semibold mt-[3px] mb-[10px]">
          Действует по: 25.10.2025
        </h4>
        <Button>
          <img src="/images/icons/black-pay.svg" alt="" />
          <span>Оформить</span>
        </Button>
      </CardUI>
      <div className="mt-[9px] space-y-2 mb-[7px]">
        <CustomSelect
          selected={true}
          placeholder="Язык: Russian"
          rightIcon={true}
          options={options}
          className="!h-[49px] border border-iron"
        />
        <CustomSelect
          placeholder="Валюта: Russian ruble (₽)"
          rightIcon={true}
          options={options2}
          className="!h-[49px] border border-iron"
        />
        <CustomSelect
          placeholder="Тема интерфейса: Dark space"
          rightIcon={true}
          options={options3}
          className="!h-[49px] border border-iron"
        />
      </div>
      <Button type="gray" className="h-[52px] gap-2">
        <img src="/images/icons/support.svg" alt="" />
        <span>Поддержка</span>
      </Button>
      <h4 className="text-center text-15 font-bold mb-[7px] mt-[15px]">
        Реферальная програма
      </h4>
      <p className="text-center font-semibold leading-[115%] text-xs mb-[15px]">
        Приглашайте друзей и получайте 15% с их покупок на протяжении 3 месяцев.
      </p>
      <Button type="gray" className="justify-between px-5 h-[52px]">
        <div className="flex items-center gap-3 -ml-1">
          <img className="" src="/images/icons/share.svg" alt="" />
          <span>t.me/+FhdgrCiNxln5YTZi</span>
        </div>
        <img className="" src="/images/icons/copy.svg" alt="" />
      </Button>
      <Button type="gray" className="!justify-start px-5 h-[52px] mt-[7px]">
        <img src="/images/icons/contact.svg" alt="" />
        Рефералов: 0 / Доход: 0 Stars
      </Button>
    </div>
  );
};
