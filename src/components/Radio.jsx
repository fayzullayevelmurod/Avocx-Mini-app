export const CustomRadio = ({ options, selected, onChange }) => {
  return (
  <div className="space-y-[13px] overflow-y-auto h-[323px] custom-scrollbar pb-2">
      {options.map((option, index) => (
        <label
          key={index}
          className="flex items-center gap-[13px] cursor-pointer"
        >
          <input
            type="radio"
            name="custom-radio"
            checked={selected === option}
            onChange={() => onChange(option)}
            className="hidden"
          />
          <span
            className={`w-[23px] h-[23px] inline-flex items-center justify-center rounded-full border border-iron`}
          >
            {selected === option && (
              <span className="w-[15px] h-[15px] bg-primary rounded-full"></span>
            )}
          </span>
          <span className="text-white">{option}</span>
        </label>
      ))}
    </div>
  );
};
