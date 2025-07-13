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

  // ⬇️ Tugma width'ini aniqlash va gapni yangilash
  useEffect(() => {
    const updateGap = () => {
      const width = buttonRef.current?.offsetWidth || 0;
      setGap(width <= 60 ? '-10px' : '-20px');
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
        gray ? 'bg-dark text-white' : 'bg-primary text-white'
      } ${className} font-semibold text-15 h-[48px] flex items-center justify-center gap-2 rounded-[15px] w-full`}
      style={{ '--gap': gap }}
    >
      {children}
    </button>
  );
};

export default Button;

// import { useState } from 'react';

// const Button = ({ className = '', children, gray, onClick }) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = (e) => {
//     setIsActive(true);
//     setTimeout(() => setIsActive(false), 600); // 0.6s = animatsiya davomiyligi

//     if (onClick) onClick(e);
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className={`button--moema ${isActive ? 'active' : ''} ${
//         gray ? 'bg-dark text-white' : 'bg-primary text-white'
//       } ${className} font-semibold text-15 w-full h-[48px] flex items-center justify-center gap-2 rounded-[15px]`}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
