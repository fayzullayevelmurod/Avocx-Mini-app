// Button.jsx
const Button = ({ className = '', children }) => {
  return (
    <button
      className={`${className} bg-primary w-full h-[50px] flex items-center justify-center gap-2 rounded-[15px]`}
    >
      {children}
    </button>
  );
};

export default Button;
