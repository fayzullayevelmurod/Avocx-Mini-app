export const Checkbox = ({ checked, onChange }) => {
  return (
    <button
      onClick={onChange}
      className={`min-w-5 max-w-5 h-5 flex items-center justify-center border-2 bg-[#272727] rounded-[6px] ${
        checked ? "border-none" : "border-[#464646]"
      }`}
    >
      {checked && <img src="images/icons/checked.svg" alt="checkbox" />}
    </button>
  );
};
