export const ModalUI = ({ children, className, isOpen }) => {
  isOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");
  return (
    <div
      className={`px-[13px] pt-[25px] z-[99999] bg-[#1C1C1C] shadow-option-shadow fixed left-0 h-full w-full overflow-y-auto no-scrollbar duration-300 ${
        isOpen ? "bottom-0" : "-bottom-[150%]"
      } ${className}`}
    >
      {children}
    </div>
  );
};
