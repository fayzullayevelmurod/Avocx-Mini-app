// Button.jsx
const Button = ({ className = '', children, gray }) => {
  return (
    <button
      className={`${className} font-semibold text-15 w-full h-[50px] flex items-center justify-center gap-2 rounded-[15px] ${
        gray ? 'bg-[#1B1B1B]' : 'bg-primary'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
