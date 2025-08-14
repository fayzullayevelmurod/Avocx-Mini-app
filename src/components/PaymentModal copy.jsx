export const PaymentModal = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed flex flex-col justify-end  left-0 z-[999] w-full h-screen bg-[#1616161A] backdrop-blur-20 duration-300 ${isOpen ? "bottom-0" : "-bottom-full"}`}>
      <div className="relative modal-content  z-[9999] h-[calc(100vh_-_136px)] shadow-option-shadow rounded-t-[45px]">
        <button className="absolute top-[36px] right-8" onClick={onClose}>
          <img src="/images/icons/white-close.svg" alt="white-close" />
        </button>
        <div className="bg-[#161616d4] h-full rounded-[inherit]">
          <img
            className="w-full h-[210px] object-cover rounded-[43px]"
            src="/images/avocx-pay.png"
            alt="avocx-pay"
          />
          <div className="pt-4 px-[25px]">
            <h3 className="text-[30px] leading-full font-bold">К оплате:</h3>
            <p className="my-[9px] font-semibold block">
              Connected wallet:{" "}
              <span className="text-grayCustom">UJC6D...kIGSG</span>
            </p>
            <div className="flex gap-[15px] items-center">
              <div className="flex items-center gap-[10px]">
                <span className="block leading-full text-[40px] font-bold">
                  0
                </span>
                <span className="block leading-full text-[#A3A3A3] text-[30px] font-semibold">
                  TON
                </span>
              </div>
              <img src="/images/icons/refresh.svg" alt="" />
              <span className="block leading-full text-[#A3A3A3] text-[30px] font-semibold">
                Stars
              </span>
            </div>
            <button className="gradient-btn mt-[23px]">Оплатить</button>
          </div>
        </div>
      </div>
    </div>
  );
};
