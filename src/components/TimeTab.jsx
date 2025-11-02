import { useState } from "react";
import { TimeInput } from "./TimeInput";
import CustomRangeSlider from "./Range";

export const TimeTabs = () => {
  const [activeTab, setActiveTab] = useState("range");

  return (
    <div className="w-full">
      {/* Tabs boshi */}
      <div className="flex bg-[#303030] rounded-[15px] p-1 w-full mb-3">
        {/* Точное время */}
        <button
          onClick={() => setActiveTab("exact")}
          className={`flex-1 rounded-xl text-xs leading-3 font-bold flex items-center justify-center h-[42px] transition-all
            ${
              activeTab === "exact"
                ? "bg-[#59BFFF] text-[#303030]"
                : "text-[#707070] bg-transparent"
            }`}
        >
          Точное время
        </button>

        {/* Диапазон */}
        <button
          onClick={() => setActiveTab("range")}
          className={`flex-1 rounded-xl text-xs leading-3 font-bold flex items-center justify-center h-[42px] transition-all
            ${
              activeTab === "range"
                ? "bg-[#59BFFF] text-[#303030]"
                : "text-[#707070] bg-transparent"
            }`}
        >
          Диапазон
        </button>
      </div>

      {/* Tabs kontenti */}
      <div>
        {activeTab === "exact" && <TimeInput />}
        {activeTab === "range" && <CustomRangeSlider />}
      </div>
    </div>
  );
};
