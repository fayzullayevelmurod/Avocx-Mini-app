import { Button, CardUI, InputForm, List, ProfileBox } from "../components";
import { CustomSelect } from "../components/CustomSelect";
import { Header } from "../layouts";

export const ManagementCharacteristics = () => {
  const categoryOptions = [
    "Настройки сведений о магазине",
    "Настройки сведений о магазине 2",
    "Настройки сведений о магазине 3",
  ];
  const options = [
    { value: "sell", label: "Цвет " },
    { value: "buy", label: "Цвет 2" },
    { value: "rent", label: "Цвет 3" },
  ];
  const options2 = [
    { value: "sell", label: "Цвет " },
    { value: "buy", label: "Цвет 2" },
    { value: "rent", label: "Цвет 3" },
  ];
  const options3 = [
    { value: "sell", label: "Цвет " },
    { value: "buy", label: "Цвет 2" },
    { value: "rent", label: "Цвет 3" },
  ];
  const options4 = [
    { value: "sell", label: "Цвет " },
    { value: "buy", label: "Цвет 2" },
    { value: "rent", label: "Цвет 3" },
  ];
  const options5 = [
    { value: "sell", label: "Цвет " },
    { value: "buy", label: "Цвет 2" },
    { value: "rent", label: "Цвет 3" },
  ];
  const options6 = [
    { value: "sell", label: "Цвет " },
    { value: "buy", label: "Цвет 2" },
    { value: "rent", label: "Цвет 3" },
  ];
  return (
    <div>
      <Header search={true} />
      <div className="space-y-[7px]">
        <ProfileBox />
        <List options={categoryOptions} icon={true} />
      </div>
      <h3 className="text-center mt-[7px] mb-2 text-17 font-semibold w-[90%] mx-auto leading-[130%]">
        Создайте или выберите характеристики для вашего товара.
      </h3>
      <CardUI className="rounded-[30px] !pt-[18px] !pl-3 !pr-[15px] !pb-3 space-y-[7px]">
        <InputForm
          placeHolder="Название характеристики"
          className="!h-[50px] pt-[8px] pl-5"
        />
        <InputForm
          placeHolder="Вариант 1"
          className="!h-[50px] pt-[8px] pl-5"
        />
        <Button>Готово</Button>
        <Button type="gray">Добавить в сохраненные</Button>
        <h3 className="text-center font-semibold text-15 py-1">
          Базовые характеристики
        </h3>
        <CustomSelect
          options={options}
          placeholder="Фикс"
          leftIcon={true}
          bgColor="bg-[#1A1A1A]"
          className="!border !border-[#303030] h-[45px]"
        />
        <CustomSelect
          options={options2}
          placeholder="Фикс"
          leftIcon={true}
          bgColor="bg-[#1A1A1A]"
          className="!border !border-[#303030] h-[45px]"
        />
        <CustomSelect
          options={options3}
          placeholder="Фикс"
          leftIcon={true}
          bgColor="bg-[#1A1A1A]"
          className="!border !border-[#303030] h-[45px]"
        />
        <CustomSelect
          options={options4}
          placeholder="Фикс"
          leftIcon={true}
          bgColor="bg-[#1A1A1A]"
          className="!border !border-[#303030] h-[45px]"
        />
        <h3 className="text-center font-semibold text-15 py-1">
          Сохраненные характеристики
        </h3>
        <CustomSelect
          options={options5}
          placeholder="Фикс"
          leftIcon={true}
          bgColor="bg-[#1A1A1A]"
          className="!border !border-[#303030] h-[45px]"
          trashIcon={true}
        />
        <CustomSelect
          options={options6}
          placeholder="Фикс"
          leftIcon={true}
          bgColor="bg-[#1A1A1A]"
          className="!border !border-[#303030] h-[45px]"
          trashIcon={true}
        />
      </CardUI>
    </div>
  );
};
