export const TextareaForm = ({ placeHolder, value, acctions, className }) => {
  return (
    <div className={`relative h-[105px] ${className}`}>
      <textarea
        className="w-full resize-none h-full pt-[14px] leading-[120%]  pb-2 px-[10px] bg-dark rounded-[20px] placeholder:text-iron text-15 text-white"
        placeholder={placeHolder}
        value={value}
      />
      {acctions && (
        <div className="flex gap-[6px] absolute bottom-[10px] left-[10px]">
          <button className="ai-btn">Ai Описание</button>
          <button className="w-[39px] h-[39px] flex items-center justify-center rounded-base border border-[#505050]">
            <img src="/images/icons/gray-trash.svg" alt="gray-trash" />
          </button>
        </div>
      )}
    </div>
  );
};
