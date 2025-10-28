import { useState } from "react";

export const ToggleIconButton = ({
  defaultIcon = "/images/icons/heart.svg",
  activeIcon = "/images/icons/active-heart.svg",
  className = "",
  onToggle,
}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => {
      const newState = !prev;
      if (onToggle) onToggle(newState);
      return newState;
    });
  };

  return (
    <div onClick={handleClick} className={`cursor-pointer ${className}`}>
      <img
        src={active ? activeIcon : defaultIcon}
        alt="toggle-icon"
        className="transition-all duration-300"
      />
    </div>
  );
};
