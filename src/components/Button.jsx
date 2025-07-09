// Button.jsx
const Button = ({ className = '', children, gray, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} font-semibold text-15 w-full h-[48px] flex items-center justify-center gap-2 rounded-[15px] ${
        gray ? 'bg-dark' : 'bg-primary'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
