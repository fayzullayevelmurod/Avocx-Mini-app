import { Button } from "./Button";
import { CardUI } from "./CardUI";
import { CustomSelect } from "./CustomSelect";
import { Input } from "./Input";
import { TextareaForm } from "./TextareaForm";

export const StepOne = ({ onNext }) => {
  const options = [
    { value: "sell", label: "Ниша: Без согласования " },
    { value: "buy", label: "Ниша: Без согласования 2" },
    { value: "rent", label: "Ниша: Без согласования 3" },
  ];

  const options2 = [
    { value: "sell", label: "Доступ: Посылка " },
    { value: "buy", label: "Доступ: Посылка 2" },
    { value: "rent", label: "Доступ: Посылка 3" },
  ];
  const options3 = [
    { value: "sell", label: "Методы доставки: Весь Мир " },
    { value: "buy", label: "Методы доставки: Весь Мир 2" },
    { value: "rent", label: "Методы доставки: Весь Мир 3" },
  ];
  const options4 = [
    { value: "sell", label: "Страны доставки: Весь Мир " },
    { value: "buy", label: "Страны доставки: Весь Мир 2" },
    { value: "rent", label: "Страны доставки: Весь Мир 3" },
  ];

  return (
    <div>
      <CardUI className="space-y-[10px] !py-[13px] !px-3">
        <Input placeHolder="Название магазина" className="!h-[45px]" />
        <div className="relative">
          <TextareaForm
            placeHolder="Краткое описание магазина, до 60 символов."
            className="82px"
          />
          <span className="text-[#3C3C3C] text-[10px] absolute bottom-[7px] right-[9px]">
            0 / 60
          </span>
        </div>
        <CustomSelect
          options={options}
          placeholder="Процесс оплаты: Без согласования"
          selected={true}
          rightIcon={true}
          className="!h-[49px] !font-semibold"
        />
        <CustomSelect
          options={options2}
          placeholder="Процесс оплаты: Без согласования"
          selected={true}
          rightIcon={true}
          className="!h-[49px] !font-semibold"
        />
        <CustomSelect
          options={options3}
          placeholder="Процесс оплаты: Без согласования"
          selected={true}
          rightIcon={true}
          className="!h-[49px] !font-semibold"
        />
        <CustomSelect
          options={options4}
          placeholder="Процесс оплаты: Без согласования"
          selected={true}
          rightIcon={true}
          className="!h-[49px] !font-semibold"
        />
        <Button onClick={onNext}>Далее</Button>
      </CardUI>
    </div>
  );
};
