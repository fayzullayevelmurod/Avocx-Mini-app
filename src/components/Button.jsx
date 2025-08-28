export const Button = ({
  className = "",
  onClick,
  children,
  type = "white",
}) => {
  const variants = {
    white: "bg-white text-[#272727]",
    primary: "bg-primary text-white",
    gray: "bg-[#303030] text-white",
  };

  return (
    <button
      className={`font-bold gap-1 w-full flex items-center justify-center h-[50px] rounded-[20px] ${variants[type]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
