export const InputForm = ({
  type = "text",
  placeHolder,
  value,
  disabled = false,
  className
}) => {
  return (
    <input
      className={`w-full h-[55px] pt-[23px] py-2 px-[10px] bg-dark rounded-[20px] placeholder:text-iron text-sm text-white disabled:opacity-100 disabled:text-white ${className}`}
      type={type}
      placeholder={placeHolder}
      value={value}
      disabled={disabled}
    />
  );
};
