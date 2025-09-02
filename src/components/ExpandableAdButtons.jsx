import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export const ExpandableAdButtons = ({ cardId, buttonsData }) => {
  const [expandedButton, setExpandedButton] = useState(null);
  const [ripple, setRipple] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setExpandedButton(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = (format) => {
    if (expandedButton === format) {
      setExpandedButton(null);
    } else {
      setExpandedButton(format);
    }
  };

  const handleCartClick = (e, format, price) => {
    e.stopPropagation();
    setRipple(true);
    setTimeout(() => setRipple(false), 400);
    console.log(`Card ${cardId}: Added ${format} for ${price} to cart`);
  };

  return (
    <div
      ref={containerRef}
      className="bg-iron p-[1px] flex items-center rounded-2xl mt-[7px] gap-[2px] h-[38px] border border-[#707070]"
    >
      {buttonsData.map((button) => {
        const isExpanded = expandedButton === button.format;

        return (
          <div
            key={`${cardId}-${button.format}`}
            className={`
              flex items-center justify-between  rounded-base bg-charcoal cursor-pointer
              transition-all duration-300 ease-out ml-0
              ${
                isExpanded
                  ? "h-[34.55686569213867px] gap-[15px]"
                  : "w-10 h-[34.55686569213867px] justify-center"
              }
            `}
            onClick={() => handleButtonClick(button.format)}
          >
            {/* Format text */}
            <span
              className={`text-[11px] transition-all w-10 h-[34px] flex items-center justify-center duration-300 ${
                isExpanded ? "ml-[1px]" : ""
              }`}
            >
              {button.format}
            </span>

            {/* Price - slides in */}
            <span
              className={` -ml-2
                text-[11px] font-bold whitespace-nowrap
                transition-all duration-300 ease-out
                ${
                  isExpanded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4 w-0 overflow-hidden"
                }
              `}
            >
              {button.price}
            </span>

            {/* Cart button - appears with spring effect */}
            <div
              className={`
                transition-all duration-400 ease-out
                ${
                  isExpanded
                    ? "opacity-100 scale-100 translate-x-0"
                    : "opacity-0 scale-75 translate-x-2 w-0 overflow-hidden"
                }
              `}
              style={{
                transitionTimingFunction: isExpanded
                  ? "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                  : "ease-out",
              }}
            >
              <motion.button
                onClick={(e) => handleCartClick(e, button.format, button.price)}
                whileTap={{ scale: 0.9 }}
                className="relative overflow-hidden min-w-[34.89236831665039px] min-h-[31.20182991027832px] max-w-[34.89236831665039px] max-h-[31.20182991027832px] shadow-btn-inset !rounded-[13px] bg-primary  flex items-center justify-center mr-[1px] shadow-cart-btn border border-[#E0ECFF]"
              >
                <img src="/images/icons/cart.svg" alt="" />
                {ripple && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0.6 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute w-16 h-16 bg-blue-400 rounded-full pointer-events-none"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                )}
              </motion.button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
