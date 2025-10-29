import { Button } from "../Button";
import { ModalUI } from "./ModalUI";

export const LetsModal = ({ isOpen, onClose }) => {
  return (
    <ModalUI isOpen={isOpen} className="flex flex-col justify-between">
      <button className="ml-auto" onClick={onClose}>
        <img src="/images/icons/close.svg" alt="" />
      </button>
      <div>
        <img
          className="w-[207px] h-[207px] mx-auto -translate-x-[29px]"
          src="/gif/5.gif"
          alt=""
        />
        <h3 className="text-xl font-bold text-center mt-[19px]">Запускаем!</h3>
        <p className="text-center text-sm mx-auto font-medium mb-[23px] max-w-[320px]">
          С минуты на минуту ваше объявление появится на бирже.
        </p>
      </div>
      <div className="px-[13px] py-[18px] w-[calc(100%_+_26px)] -ml-[13px] border-t border-[#242424]">
        <Button onClick={onClose}>Хорошо</Button>
      </div>
    </ModalUI>
  );
};
