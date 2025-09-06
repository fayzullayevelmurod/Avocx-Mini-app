import { Button } from "./Button";

export const TextareaForm = ({ placeHolder, value, acctions, className }) => {
  return (
    <div className={`relative h-[105px] ${className}`}>
      <textarea
        className="w-full resize-none h-full pt-[14px] leading-[120%]  pb-2 px-[10px] bg-dark rounded-[20px] placeholder:text-iron text-15 text-white"
        placeholder={placeHolder}
        value={value}
      />
      {acctions && (
        <div className="flex gap-[5px] absolute bottom-[11px] left-3">
          <Button className="shadow-ai-btn !w-[126px] !h-[39px] border border-[#CFCFCF] !rounded-[15px]">
            <img src="/images/icons/stars.svg" alt="" />
            <span className="text-sm font-bold ">Ai Gen</span>
          </Button>
          <button className="min-w-[39px] h-[39px] flex items-center justify-center border border-iron bg-[#272727] rounded-[15px]">
            <img src="/images/icons/ai-edit.svg" alt="" />
          </button>
          <button className="min-w-[39px] h-[39px] flex items-center justify-center border border-iron bg-[#272727] rounded-[15px]">
            <img src="/images/icons/red-trash.svg" alt="" />
          </button>
        </div>
      )}
    </div>
  );
};
