export const Category = () => {
  return (
    <button className="flex-1 h-[55px] justify-between flex text-15 items-center gap-[10px] pr-4 bg-carbon rounded-[20px] pl-[14px]">
      <div className="text-left">
        <div className="flex gap-1 items-center ml-[2px]">
          <img src="/images/icons/category.svg" alt="" width={16} />
          <span className="text-grayCustom leading-full">Категории</span>
        </div>
        <span className="font-semibold leading-full ml-[1px] mt-[3px]">Все</span>
      </div>
      <svg
        className="w-5 h-5 transition-transform duration-300 "
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
    </button>
  );
};
