import Button from "./Button";

export const NotFoundModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed flex flex-col justify-end  left-0 z-[999] w-full h-screen bg-[#1616161A] backdrop-blur-20 duration-300 ${
        isOpen ? "bottom-0" : "-bottom-full"
      }`}
    >
      <div className="relative modal-content  z-[9999] h-[calc(100vh_-_136px)] shadow-option-shadow rounded-t-[45px]">
        <button
          onClick={onClose}
          className="absolute top-[36px] right-8 z-[999]"
        >
          <img src="/images/icons/white-close.svg" alt="white-close" />
        </button>
        <div className="bg-[#161616d4] h-full rounded-[inherit] pt-[30px]">
          <img
            className="mx-auto block w-[206px] h-[206px]"
            src="/gif/1.gif"
            alt=""
          />
          <h2 className="text-[40px] leading-full italic mt-[15px] font-bold text-center">
            Opss..
          </h2>
          <p className="leading-[117%] text-center text-xl font-medium mt-[9px]">
            Для этой функции, необходима <br /> подписка на{" "}
            <a className="text-primary" href="#!">
              @avocx.
            </a>
          </p>
          <Button className="!w-[284px] !rounded-[20px] mx-auto mt-[36px] !h-[51px] !text-base">
            Подробнее о подписке
          </Button>
        </div>
      </div>
    </div>
  );
};
