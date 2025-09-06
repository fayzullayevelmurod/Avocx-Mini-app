export const Checkbox = ({ checked, onChange }) => {
  return (
    <button
      onClick={onChange}
      className={`w-5 h-5 flex items-center justify-center border-2 rounded-[6px] ${
        checked
          ? "bg-[#E679FF] border-transparent"
          : "bg-[#272727] border-dark-gray"
      }`}
    >
      {checked && <img src="images/icons/check.svg" alt="checkbox" />}
    </button>
  );
};
