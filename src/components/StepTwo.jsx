import { Button } from "./Button";
import { CardUI } from "./CardUI";

export const StepTwo = () => {
  return (
    <div className="">
      <CardUI className="!p-[14px] rounded-[30px] space-y-[18px]">
        <div>
          <img
            className="w-full h-[202px] rounded-[15px] mb-[6px]"
            src="/images/step-img-1.png"
            alt=""
          />
          <Button type="gray">
            <img src="/images/icons/plus.svg" alt="" />
            <span>Логотип магазина</span>
          </Button>
        </div>
        <div>
          <img
            className="w-full h-[202px] rounded-[15px] mb-[6px]"
            src="/images/step-img-2.png"
            alt=""
          />
          <Button type="gray">
            <img src="/images/icons/plus.svg" alt="" />
            <span>Баннер магазина (20,5х9)</span>
          </Button>
          <Button className="mt-[10px]">Далее</Button>
        </div>
      </CardUI>
    </div>
  );
};
