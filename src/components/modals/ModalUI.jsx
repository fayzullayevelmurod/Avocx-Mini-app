export const ModalUI = ({ children, className, isOpen }) => {
  isOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");
  return (
    <div
      className={`py-[23px] px-[27px] z-[99999] rounded-t-[30px] bg-[#242424] border-t border-[#464646] shadow-option-shadow fixed left-0 h-full w-full overflow-y-auto no-scrollbar duration-300 ${
        isOpen ? "bottom-0" : "-bottom-[150%]"
      } ${className}`}
    >
      {children}
    </div>
  );
};
