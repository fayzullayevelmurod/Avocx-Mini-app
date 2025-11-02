import { Button } from "../Button";

export const CopyModal = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 z-[99999] left-0 w-full h-full flex items-center justify-center bg-[#1F1F1F80] backdrop-blur-[5px] ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div className="bg-[#303030B2] w-[302px] space-y-[7px] rounded-15 pt-[12px] p-[13px]">
        <div className="flex gap-[6px] items-center justify-center">
          <img src="/images/icons/check-rounded.svg" alt="" />
          <span className="text-15 font-bold leading-[18px] text-[#468FF5]">
            Скопировано
          </span>
        </div>
        <Button
          type="primary"
          className="!h-10 !rounded-[12px]"
          onClick={() => setIsOpen(false)}
        >
          Ок
        </Button>
      </div>
    </div>
  );
};
