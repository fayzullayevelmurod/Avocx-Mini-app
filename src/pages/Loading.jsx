import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  // Animate progress bar from 0% to 100% over 2 seconds
  useEffect(() => {
    const duration = 4000; // 2 seconds
    const increment = 100 / (duration / 16); // Approximate 60fps (1000ms / 60 ≈ 16ms per frame)
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        // Redirect to /not-found after progress reaches 100%
        // navigate('/not-found');
      }
      setProgress(currentProgress);
    }, 16); // Update every ~16ms for smooth animation

    return () => clearInterval(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className='absolute left-1/2 -translate-x-1/2 mt-[240px] text-center'>
      <span className='text-base-white text-center text-[17px] uppercase mb-'>SUPERSERVICE</span>
      <h1 className='text-[75px] italic font-bold leading-[100%]'>avocx</h1>
      <div className='w-[235px] h-[7px] bg-dark-gray mt-[34px] rounded-lg'>
        {/* Progress bar with dynamic width */}
        <div
          className='h-full bg-loader shadow-loader-shadow rounded-lg transition-all duration-[16ms] ease-linear'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
