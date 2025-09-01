import { Button, CardUI, PayCard, Sort } from "../components";
import { CustomSelect } from "../components/CustomSelect";
import { Header } from "../layouts";

export const Wallet = () => {
  const options = [
    "От нового к старому",
    "От нового к старому 2",
    "От нового к старому 3",
  ];
  return (
    <div>
      <Header title="Кошелёк" activeType="wallet" />
      <CardUI className="rounded-[30px] !p-0 mt-[9px]">
        <div className="bg-dark rounded-[30px] border-b border-[#303030] pt-[14px] pb-[11px] px-[11px]">
          <div className="flex items-center gap-2 justify-center pb-[10px]">
            <img src="/images/icons/wallet.svg" alt="" width={20} height={18} />
            <span className="font-bold">Авокс кошелёк</span>
          </div>
          <div className="flex justify-center gap-[25px]">
            <h3 className="text-xl font-bold text-[#CBDFFF]">
              2500{" "}
              <span className="font-semibold text-15 text-grayCustom">₽</span>
            </h3>
            <h3 className="text-xl font-bold text-[#CBDFFF]">
              13.22{" "}
              <span className="font-semibold text-15 text-grayCustom">TON</span>
            </h3>
            <h3 className="text-xl font-bold text-[#CBDFFF]">
              0{" "}
              <span className="font-semibold text-15 text-grayCustom">
                Stars
              </span>
            </h3>
          </div>
          <div className="flex justify-between gap-[11px] mt-3">
            <Button type="gray">
              <img src="/images/icons/plus.svg" alt="" />
              <span>Внести</span>
            </Button>
            <Button type="gray">
              <img src="/images/icons/up-arrow.svg" alt="" />
              <span>Вывести</span>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between pr-[38px] pl-[31px] pt-[6px] pb-2">
          <div className="flex gap-1 items-center">
            <img src="/images/icons/note.svg" alt="" />
            <h4 className="text-[13px] font-bold">
              Wallet: <span className="text-grayCustom">UJC6D...kIGSG</span>
            </h4>
          </div>
          <button className="text-[13px] font-semibold text-[#FF8077]">
            Отключить
          </button>
        </div>
      </CardUI>

      <PayCard
        title="Карта для покупок"
        text="Привязать"
        icon="/images/icons/card-pay.svg"
        isSelected={false}
        className="!bg-[#272727]  mt-[6px] mb-2"
      />
      <h3 className="text-center font-semibold text-15 mb-[14px]">Операции</h3>
      <div className="space-y-[7px]">
        <Sort options={options} icon={true} />
        <div className="flex h-[68px] items-start justify-between rounded-[20px]  border border-[#30303000] bg-[#1E1E1E] py-[11px] px-4">
          <div>
            <span className="text-grayCustom">Вывод</span>
            <div className="flex items-center gap-[5px] mt-0.5">
              <img src="/images/icons/blue-arrow-up.svg" alt="" />
              <p className="text-xl font-bold">
                5000 <span className="text-15 font-semibold">₽</span>
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-grayCustom text-xs font-medium">
              18.08.25 в 18:35
            </span>
            <span className="text-xs block font-semibold">В процессе</span>
          </div>
        </div>
        <div className="flex h-[68px] items-start justify-between rounded-[20px]  border border-[#30303000] bg-[#1E1E1E] py-[11px] px-4">
          <div>
            <span className="text-grayCustom">Пополнение</span>
            <div className="flex items-center gap-[5px] mt-0.5">
              <img src="/images/icons/plus-green.svg" alt="" />
              <p className="text-xl font-bold">
                5000 <span className="text-15 font-semibold">₽</span>
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-grayCustom text-xs font-medium">
              18.08.25 в 18:35
            </span>
            <span className="text-xs block font-semibold">Успешно</span>
          </div>
        </div>
      </div>
    </div>
  );
};
