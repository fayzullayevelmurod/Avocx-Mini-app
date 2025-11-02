export const RadioComponent = ({ checked, onChange }) => {
  return (
    <div className="bg-[#464646] w-[38px] h-[22px] rounded-xl p-[3px]" onClick={onChange}>
      <div
        className={`w-4 h-4 duration-200 block rounded-full ${checked ? "bg-[#59BFFF] mr-auto" : "bg-[#707070] ml-auto"}`}
      ></div>
    </div>
  );
};
