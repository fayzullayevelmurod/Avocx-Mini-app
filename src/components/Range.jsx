import { useState } from "react";

export default function CustomRangeSlider() {
  const values = [0, 4, 8, 12, 16, 20, 24];
  const [minIndex, setMinIndex] = useState(3); // 11
  const [maxIndex, setMaxIndex] = useState(5); // 18

  const handleMinChange = (index) => {
    if (index <= maxIndex) {
      setMinIndex(index);
    }
  };

  const handleMaxChange = (index) => {
    if (index >= minIndex) {
      setMaxIndex(index);
    }
  };

  const minPercentage = (minIndex / (values.length - 1)) * 100;
  const maxPercentage = (maxIndex / (values.length - 1)) * 100;

  return (
    <div className="mt-3">
      <div className="flex gap-1 text-base-white text-15">
        <span className="font-semibold">Диапазон времени</span>
        <div className="bg-[#303030] rounded-[5px]  text-[10px] leading-[8px] text-[#A3A3A3] font-semibold w-fit p-[6px]">
          Отменить
        </div>
      </div>
      <div className=" w-full">
        {/* Value Labels */}
        <div className="flex justify-between text-sm text-slate-400 px-1 mt-[9px]">
          {values.map((val, idx) => (
            <span
              key={idx}
              className={`font-semibold text-xs leading-[9px] ${
                idx >= minIndex && idx <= maxIndex
                  ? "text-base-white font-semibold"
                  : "text-[#A3A3A3]"
              }`}
            >
              {val}
            </span>
          ))}
        </div>

        <div className="relative h-[34px]">
          {/* Track Background */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-2 bg-[#464646] rounded-lg"></div>

          {/* Active Track */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-2 bg-gradient-to-r from-[#E8E8E8] to-[#E8E8E8] rounded-lg"
            style={{
              left: `${minPercentage}%`,
              width: `${maxPercentage - minPercentage}%`,
            }}
          ></div>

          {/* Min Range Input */}
          <input
            type="range"
            min={0}
            max={values.length - 1}
            value={minIndex}
            onChange={(e) => handleMinChange(Number(e.target.value))}
            className="absolute top-1/2 -translate-y-1/2 w-full appearance-none bg-transparent pointer-events-none cursor-pointer slider"
          />

          {/* Max Range Input */}
          <input
            type="range"
            min={0}
            max={values.length - 1}
            value={maxIndex}
            onChange={(e) => handleMaxChange(Number(e.target.value))}
            className="absolute top-1/2 -translate-y-1/2 w-full appearance-none bg-transparent pointer-events-none cursor-pointer slider"
          />
        </div>

        <style jsx>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            pointer-events: auto;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #e8e8e8;
            cursor: pointer;
            border: 3px solid white;
            transition: all 0.2s;
          }

          .slider::-webkit-slider-thumb:hover {
            transform: scale(1.2);
          }

          .slider::-webkit-slider-thumb:active {
            transform: scale(1.15);
          }

          .slider::-moz-range-thumb {
            pointer-events: auto;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #e8e8e8;
            cursor: pointer;
            border: 3px solid white;
            transition: all 0.2s;
          }

          .slider::-moz-range-thumb:hover {
            transform: scale(1.2);
          }

          .slider::-moz-range-thumb:active {
            transform: scale(1.15);
          }
        `}</style>
      </div>
    </div>
  );
}
