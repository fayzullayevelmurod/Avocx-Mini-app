export const Button = ({
  className = "",
  onClick,
  children,
  type = "green",
}) => {
  const variants = {
    green: "bg-[#52E063] text-[#242424]",
    primary: "bg-primary text-white",
    gray: "bg-[#242424] text-white",
    lightGray: "bg-[#303030] text-[#E8E8E8]",
  };

  return (
    <button
      className={`font-bold gap-1 w-full flex items-center justify-center h-[50px] rounded-[15px] ${variants[type]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
