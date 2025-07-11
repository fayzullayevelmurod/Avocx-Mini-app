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
        navigate('/not-found');
      }
      setProgress(currentProgress);
    }, 16); // Update every ~16ms for smooth animation

    return () => clearInterval(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
      <img className="mx-auto" src='/images/logo2.svg' alt='' />
      <div className='w-[235px] h-[7px] bg-[#333333] my-[43px] rounded-lg overflow-hidden'>
        {/* Progress bar with dynamic width */}
        <div
          className='h-full bg-primary rounded-lg transition-all duration-[16ms] ease-linear'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className='text-xl italic leading-full text-[#676767]'>avocx</span>
    </div>
  );
};

export default Loading;
