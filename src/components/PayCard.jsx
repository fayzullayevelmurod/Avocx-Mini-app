export const PayCard = ({ title, icon, text, isSelected, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-[#323232] py-[17px] px-6 rounded-[20px] h-[70px] ${
        isSelected ? "bg-[#CBDFFF] text-[#272727] shadow-pay-card" : "bg-[#323232]"
      } ${className}`}
    >
      <div className="flex items-center gap-[6px]">
        <img src={icon} alt="" width={20} />
        <span className="font-bold">{title}</span>
      </div>
      <span className={`text-xs font-semibold mt-[6px] ${isSelected ? "text-iron" : "text-grayCustom"}`}>
        {text}
      </span>
    </div>
  );
};
