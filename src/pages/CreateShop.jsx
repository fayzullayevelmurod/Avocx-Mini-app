import { useState } from "react";
import { Header } from "../layouts";
import { StepOne } from "../components";
export const CreateShop = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const getStepNumberStyles = (step) =>
    `text-[30px] leading-[100%] font-bold ${
      step <= currentStep ? "text-primary" : "text-dark-gray"
    }`;
  return (
    <div>
      <Header title="Создание магазина" />
      <div
        className={`flex gap-5 justify-center mt-2 mb-3 h-8${
          currentStep === 5 ? "hidden" : ""
        }`}
      >
        {[1, 2].map((step) => (
          <span key={step} className={getStepNumberStyles(step)}>
            {step}
          </span>
        ))}
      </div>
      {currentStep === 1 && <StepOne onNext={handleNextStep} />}
    </div>
  );
};
