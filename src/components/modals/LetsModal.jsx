import { Button } from "../Button";

export const LetsModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-start justify-center pt-[130px] px-[45px] ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="w-full h-full absolute top-0 left-0 z-10 blur-10  bg-[#000000ba]" onClick={onClose}></div>
      <div className="bg-[#1E1E1ED9] min-w-[350px] max-w-[350px] h-[430px] border border-[#303030] relative z-20 rounded-[45px]  px-[33px] pt-[41px] pb-[31px]">
        <button className="absolute top-[33px] right-[33px]" onClick={onClose}>
          <img src="/images/icons/close.svg" alt="" />
        </button>
        <img
          className="w-[207px] h-[207px] mx-auto -translate-x-[29px]"
          src="/gif/5.gif"
          alt=""
        />
        <h3 className="text-xl font-bold text-center mt-[17px]">Запускаем!</h3>
        <p className="text-center text-xs mb-[23px]">
          С минуты на минуту ваше объявление появится на бирже.
        </p>
        <Button onClick={onClose}>Ок</Button>
      </div>
    </div>
  );
};
