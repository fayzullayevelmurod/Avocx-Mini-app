import { useRef, useState } from "react";

export const TimeInput = () => {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  const minuteRef = useRef(null);

  // Inputdagi raqamlarni cheklash va avtomatik focus
  const handleHourChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // faqat raqam
    if (value.length <= 2) {
      setHour(value);
      if (value.length === 2 && minuteRef.current) {
        minuteRef.current.focus(); // keyingi inputga o'tish
      }
    }
  };

  const handleMinuteChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 2) {
      setMinute(value);
    }
  };

  // Tanlangan vaqtni inputlarga joylash
  const handleSelectTime = (time) => {
    const [h, m] = time.split(":");
    setHour(h);
    setMinute(m);
  };

  return (
    <div className="py-[10px] pr-[6px] flex items-center justify-between">
      {/* Soat input qismi */}
      <div className="flex items-center gap-[7px]">
        <img className="" src="images/icons/time.svg" alt="time icon" />
        <div className="text-[#464646] font-semibold flex gap-1 items-center">
          <input
            className="text-[#fff] font-semibold bg-transparent border-none outline-none w-[17px] placeholder:text-[#464646] text-center"
            type="text"
            placeholder="00"
            value={hour}
            onChange={handleHourChange}
            maxLength={2}
          />
          <span className="text-base-white">:</span>
          <input
            ref={minuteRef}
            className="text-[#fff] font-semibold bg-transparent border-none outline-none w-[17px] placeholder:text-[#464646] text-center"
            type="text"
            placeholder="00"
            value={minute}
            onChange={handleMinuteChange}
            maxLength={2}
          />
        </div>
      </div>

      {/* Tanlanadigan vaqtlar */}
      <div className="flex gap-1">
        {["9:00", "10:00", "13:00", "17:00"].map((time) => (
          <div
            key={time}
            onClick={() => handleSelectTime(time)}
            className="w-[54px] h-[30px] rounded-lg bg-[#303030] flex items-center justify-center text-xs font-semibold text-[#A3A3A3] cursor-pointer hover:bg-[#59BFFF] hover:text-[#303030] transition-all"
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};
