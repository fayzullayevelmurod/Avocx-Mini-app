import React, { useState } from "react";

const Filters = () => {
  const [activeBox, setActiveBox] = useState(null);
  const [checkedDays, setCheckedDays] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  // Har bir box uchun qiymatlar
  const [values, setValues] = useState({
    box1: { from: 0, to: 0 },
    box2: { from: "0%", to: "0%" },
    box3: { from: 0, to: 0 },
  });

  const toggleBox = (index) => {
    setActiveBox(activeBox === index ? null : index);
  };

  const handleChange = (e) => {
    setCheckedDays({ [e.target.id]: true });
  };

  // const handleInputChange = (boxKey, field, value) => {
  //   if (/^\d*%?$/.test(value)) {
  //     setValues((prev) => ({
  //       ...prev,
  //       [boxKey]: { ...prev[boxKey], [field]: value },
  //     }));
  //   }
  // };

  // 🔥 Asosiy o'zgarish shu yerda
  const handleInputChange = (boxKey, field, value) => {
    if (/^\d*%?$/.test(value)) {
      setValues((prev) => ({
        ...prev,
        [boxKey]: {
          ...prev[boxKey],
          [field]:
            // agar hozirgi qiymat 0 yoki 0% bo'lsa, foydalanuvchi yozishni boshlaganda uni tozalaymiz
            prev[boxKey][field] === "0" || prev[boxKey][field] === "0%"
              ? value.replace(/^0%?/, "")
              : value,
        },
      }));
    }
  };

  const handleFocus = (boxKey, field) => {
    setValues((prev) => {
      const current = prev[boxKey][field];
      // inputga focus bo'lganda agar qiymat 0 yoki 0% bo'lsa — uni o'chirib tashlaymiz
      if (current === "0" || current === "0%") {
        return {
          ...prev,
          [boxKey]: { ...prev[boxKey], [field]: "" },
        };
      }
      return prev;
    });
  };

  const handleReset = (boxKey) => {
    setValues((prev) => ({
      ...prev,
      [boxKey]: {
        from: boxKey === "box2" ? "0%" : 0,
        to: boxKey === "box2" ? "0%" : 0,
      },
    }));
  };

  return (
    <div
      className={`${
        activeBox !== null
          ? "bg-[#242424] shadow-option-shadow rounded-15 pb-[13px] overflow-hidden"
          : ""
      }`}
    >
      {/* Bosiladigan itemlar */}
      <div className="flex gap-[5px]">
        {[
          { icon: "/images/icons/eye.svg" },
          { icon: "/images/icons/er.svg" },
          { icon: "/images/icons/discount.svg" },
          { icon: "/images/icons/filter.svg" },
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => toggleBox(index)}
            className={`h-[54px] rounded-15 flex-1 flex items-center justify-center cursor-pointer duration-300 bg-charcoal`}
          >
            <img
              className={`${
                activeBox === index
                  ? "[filter:invert(56%)_sepia(70%)_saturate(2374%)_hue-rotate(165deg)_brightness(98%)_contrast(101%)]"
                  : ""
              }`}
              src={item.icon}
              alt=""
            />
          </div>
        ))}
      </div>

      {/* 1-box */}
      {activeBox === 0 && (
        <div className="mt-3 block">
          <div className="border rounded-[12px] border-[#303030] p-[10px] mx-[13px] flex justify-between">
            <div>
              <span className="text-xs font-semibold mb-[9px] text-[#A3A3A3] block">
                От
              </span>
              <input
                type="text"
                className="text-[18px] font-bold text-white bg-transparent outline-none w-[76px] h-[15px]"
                value={values.box1.from}
                 onFocus={() => handleFocus("box1", "from")}
                onChange={(e) =>
                  handleInputChange("box1", "from", e.target.value)
                }
              />
            </div>
            <div>
              <span className="text-xs font-semibold mb-[9px] text-[#A3A3A3] block">
                До
              </span>
              <input
                type="text"
                className="text-[18px] font-bold text-white bg-transparent outline-none w-[76px] h-[15px]"
                value={values.box1.to}
                onFocus={() => handleFocus("box1", "to")}
                onChange={(e) =>
                  handleInputChange("box1", "to", e.target.value)
                }
              />
            </div>
            <button onClick={() => handleReset("box1")}>
              <img src="/images/icons/trash.svg" alt="" />
            </button>
          </div>
        </div>
      )}

      {/* 2-box */}
      {activeBox === 1 && (
        <div className="mt-3 block">
          <div className="border rounded-[12px] border-[#303030] p-[10px] mx-[13px] flex justify-between">
            <div>
              <span className="text-xs font-semibold mb-[9px] text-[#A3A3A3] block">
                От
              </span>
              <input
                type="text"
                className="text-[18px] font-bold text-white bg-transparent outline-none w-[76px] h-[15px]"
                value={values.box2.from}
                 onFocus={() => handleFocus("box2", "from")}
                onChange={(e) =>
                  handleInputChange("box2", "from", e.target.value)
                }
              />
            </div>
            <div>
              <span className="text-xs font-semibold mb-[9px] text-[#A3A3A3] block">
                До
              </span>
              <input
                type="text"
                className="text-[18px] font-bold text-white bg-transparent outline-none w-[76px] h-[15px]"
                value={values.box2.to}
                onFocus={() => handleFocus("box2", "to")}
                onChange={(e) =>
                  handleInputChange("box2", "to", e.target.value)
                }
              />
            </div>
            <button onClick={() => handleReset("box2")}>
              <img src="/images/icons/trash.svg" alt="" />
            </button>
          </div>
        </div>
      )}

      {/* 3-box */}
      {activeBox === 2 && (
        <div className="mt-3 block">
          <div className="border rounded-[12px] border-[#303030] p-[10px] mx-[13px] flex justify-between">
            <div>
              <span className="text-xs font-semibold mb-[9px] text-[#A3A3A3] block">
                От
              </span>
              <input
                type="text"
                className="text-[18px] font-bold text-white bg-transparent outline-none w-[76px] h-[15px]"
                value={values.box3.from}
                onFocus={() => handleFocus("box3", "from")}
                onChange={(e) =>
                  handleInputChange("box3", "from", e.target.value)
                }
              />
            </div>
            <div>
              <span className="text-xs font-semibold mb-[9px] text-[#A3A3A3] block">
                До
              </span>
              <input
                type="text"
                className="text-[18px] font-bold text-white bg-transparent outline-none w-[76px] h-[15px]"
                value={values.box3.to}
                onFocus={() => handleFocus("box3", "to")}
                onChange={(e) =>
                  handleInputChange("box3", "to", e.target.value)
                }
              />
            </div>
            <button onClick={() => handleReset("box3")}>
              <img src="/images/icons/trash.svg" alt="" />
            </button>
          </div>
        </div>
      )}

      {/* 4-box */}
      <div
        className={` ${
          activeBox === 3
            ? "max-h-[300px] opacity-100 mt-3"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="border rounded-[12px] border-[#303030] p-[10px] mx-[13px] flex gap-6">
          <div className="space-y-4">
            <div className="radio-container">
              <input
                type="radio"
                name="hammasi"
                id="one"
                onChange={handleChange}
              />
              <label htmlFor="one">Больше охват</label>
            </div>
            <div className="radio-container">
              <input
                type="radio"
                name="hammasi"
                id="two"
                onChange={handleChange}
              />
              <label htmlFor="two">Меньше охват</label>
            </div>
            <div className="radio-container">
              <input
                type="radio"
                name="hammasi"
                id="three"
                onChange={handleChange}
              />
              <label htmlFor="three">C популярных</label>
            </div>
          </div>
          <div className="space-y-4 text-sm text-white">
            <div className="radio-container">
              <input
                type="radio"
                name="hammasi"
                id="four"
                onChange={handleChange}
              />
              <label htmlFor="four">Больше ER</label>
            </div>
            <div className="radio-container">
              <input
                type="radio"
                name="hammasi"
                id="five"
                onChange={handleChange}
              />
              <label htmlFor="five">Меньше ER</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
