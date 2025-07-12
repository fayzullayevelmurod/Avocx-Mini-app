import { useState } from 'react';
import Title from '../../components/Title';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import Successfully from './Successfully';

const Step = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 6)); // Max step is 6 (Successfully)
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1)); // Min step is 1
  };

  const getStepNumberStyles = (step) =>
    `text-[30px] leading-[100%] font-bold ${
      step <= currentStep ? 'text-primary' : 'text-dark-gray'
    }`;

  return (
    <div>
      <div className='flex items-center justify-center relative'>
        <button
          className='w-10 absolute top-1/2 left-5 -translate-y-1/2'
          onClick={handlePrevStep}
          disabled={currentStep === 1} // Disable on first step
        >
          <img src='/images/icons/prev-arrow.svg' alt='previous step' />
        </button>
        <Title label='Создание магазина' />
      </div>

      <div
        className={`flex gap-5 justify-center mb-[19px] mt-[6px] ${
          currentStep === 6 ? 'hidden' : ''
        }`}
      >
        {[1, 2, 3, 4, 5].map((step) => (
          <span key={step} className={getStepNumberStyles(step)}>
            {step}
          </span>
        ))}
      </div>

      <div>
        {currentStep === 1 && <StepOne onNext={handleNextStep} />}
        {currentStep === 2 && <StepTwo onNext={handleNextStep} />}
        {currentStep === 3 && <StepThree onNext={handleNextStep} />}
        {currentStep === 4 && <StepFour onNext={handleNextStep} />}
        {currentStep === 5 && <StepFive onNext={handleNextStep} />}
        {currentStep === 6 && <Successfully />}
      </div>
    </div>
  );
};

export default Step;
