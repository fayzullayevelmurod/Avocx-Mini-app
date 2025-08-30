export const CardUI = ({ className, children }) => {
  return (
    <div
      className={`${className} border border-[#303030] border-solid rounded-[20px] py-[13px] px-3 bg-charcoal`}
    >
      {children}
    </div>
  );
};
