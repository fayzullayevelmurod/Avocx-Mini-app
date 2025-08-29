export  const CardUI = ({ className, children }) => {
  return (
    <div
      className={`${className} border border-[#242424] rounded-[20px] py-[13px] px-3 bg-charcoal`}
    >
      {children}
    </div>
  );
};
