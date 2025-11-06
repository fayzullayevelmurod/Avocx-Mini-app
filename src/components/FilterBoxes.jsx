import React, { useState } from "react";

const Filters = () => {
  const [activeBox, setActiveBox] = useState(null);
  const [values, setValues] = useState({
    box1: { from: "", to: "" },
    box2: { from: "", to: "" },
    box3: { from: "", to: "" },
  });
  const [checkedDays, setCheckedDays] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const toggleBox = (index) => {
    setActiveBox(activeBox === index ? null : index);
  };

  const handleInputChange = (box, field, value) => {
    setValues((prev) => ({
      ...prev,
      [box]: {
        ...prev[box],
        [field]: value,
      },
    }));
  };

  const handleChange = (e) => {
    setCheckedDays({ ...checkedDays, [e.target.id]: true });
  };

  const handleReset = (boxKey) => {
    setValues((prev) => ({
      ...prev,
      [boxKey]: {
        from: "",
        to: "",
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
                className="text-[18px] font-bold text-white bg-transparent outline-none w-[76px] h-[15px] placeholder:text-[#464646]"
                placeholder="0"
                value={values.box1.from}
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
                className="text-[18px] font-bold text-white bg-transparent outline-none w-[76px] h-[15px] placeholder:text-[#464646]"
                placeholder="0"
                value={values.box1.to}
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
                От %
              </span>
              <input
                type="text"
                className="text-[18px] font-bold text-white bg-transparent outline-none w-[76px] h-[15px] placeholder:text-[#464646]"
                placeholder="0%"
                value={values.box2.from}
                onChange={(e) =>
                  handleInputChange("box2", "from", e.target.value)
                }
              />
            </div>
            <div>
              <span className="text-xs font-semibold mb-[9px] text-[#A3A3A3] block">
                До %
              </span>
              <input
                type="text"
                className="text-[18px] font-bold text-white bg-transparent outline-none w-[76px] h-[15px] placeholder:text-[#464646]"
                placeholder="0%"
                value={values.box2.to}
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
                className="text-[18px] font-bold text-white bg-transparent outline-none w-[76px] h-[15px] placeholder:text-[#464646]"
                placeholder="0"
                value={values.box3.from}
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
                className="text-[18px] font-bold text-white bg-transparent outline-none w-[76px] h-[15px] placeholder:text-[#464646]"
                placeholder="0"
                value={values.box3.to}
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
