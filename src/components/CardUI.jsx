const CardUI = ({ className, children }) => {
  return (
    <div
      className={`${className} border border-iron rounded-[25px] py-[13px] px-3 bg-charcoal`}
    >
      {children}
    </div>
  );
};

export default CardUI;
