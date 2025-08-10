export const Chanel = () => {
  return (
    <div className="bg-carbon rounded-[20px] w-full h-[55px] px-[18px] py-[13px] flex items-center justify-between">
      <div className="flex gap-[6px] items-center">
        <span className="text-15 font-semibold text-grayCustom">Канал:</span>
        <img src="/images/icons/logo.svg" alt="" />
        <span className="font-semibold">Cчастье Сейчас</span>
      </div>
      <svg
        class="w-5 h-5 transition-transform duration-300 "
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.018 9.22749L10.0532 12.1923L7.08834 9.22749M18.9476 10.2158C18.9476 5.30348 14.9654 1.32129 10.0532 1.32129C5.14088 1.32129 1.15869 5.30348 1.15869 10.2158C1.15869 15.128 5.14088 19.1102 10.0532 19.1102C14.9654 19.1102 18.9476 15.128 18.9476 10.2158Z"
          stroke="#E8E8E8"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
};
