import { useEffect, useRef, useState } from 'react';

const Button = ({ className = '', children, gray, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const [gap, setGap] = useState('-20px'); // Default gap
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 600);

    if (onClick) onClick(e);
  };

  useEffect(() => {
    const updateGap = () => {
      const width = buttonRef.current?.offsetWidth || 0;
      setGap(width <= 60 ? '-10px' : '-15px');
    };

    updateGap();
    window.addEventListener('resize', updateGap);
    return () => window.removeEventListener('resize', updateGap);
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`button--moema ${isActive ? 'active' : ''} ${
        gray ? 'bg-charcoal text-base-white' : 'bg-primary blue-btn text-base-white'
      } ${className} font-semibold text-15 h-[50px] flex items-center justify-center gap-2 rounded-[20px] w-full`}
      style={{ '--gap': gap }}
    >
      {children}
    </button>
  );
};

export default Button;
