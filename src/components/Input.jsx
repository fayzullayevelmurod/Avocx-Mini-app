export const Input = ({
  type = "text",
  placeHolder,
  value,
  disabled = false,
  className,
  leftIcon,
}) => {
  return (
    <div className="relative">
      {leftIcon && (
        <img
          className="absolute top-1/2 -translate-y-1/2 left-5 filter brightness-0 invert"
          src={`/images/icons/${leftIcon}`}
        />
      )}
      <input
        className={`w-full h-[55px] py-2  bg-dark rounded-[20px] placeholder:text-iron text-sm text-white disabled:opacity-100 disabled:text-white ${className} ${
          leftIcon ? "pl-[47px]" : "px-[15px]"
        }`}
        type={type}
        placeholder={placeHolder}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};
