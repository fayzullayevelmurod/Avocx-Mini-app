export const OrangeBtn = ({ label, icon, className }) => {

  return (
    <button
      className={`${className} h-[46px] rounded-[20px] bg-orange-gradient py-[15px] px-[18px] border border-white flex items-center justify-center gap-0.5 shadow-orange-btn-shadow`}
    >
      <img src={`/images/icons/${icon}`} alt="" />
      <span>{label}</span>
    </button>
  );
};
