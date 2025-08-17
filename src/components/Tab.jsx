import { useState } from "react";

const Tab = ({ tabData, sizeXl }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]?.id || "");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <ul className="flex border border-iron bg-carbon rounded-[20px] p-[1px] h-[49px]">
        {tabData.map((item) => (
          <li
            key={item.id}
            className={`${
              sizeXl &&
              "!h-[46px] !text-[15px] leading-full p-0 flex items-center justify-center"
            }  border flex relative items-center justify-center p-[10px] text-15 font-bold bg-carbon cursor-pointer rounded-[17px] border-transparent transition-colors duration-200  w-full text-center ${
              activeTab === item.id
                ? "shadow-btn-inset text-base-white"
                : "text-grayCustom"
            }`}
            onClick={() => handleTabClick(item.id)}
          >
            <div className="relative">
              {item.subLabel && (
                <span className=" text-[#FFD26F] text-[11px] font-semibold absolute right-0 top-[-10px]">
                  {item.subLabel}
                </span>
              )}
              {item.label}
            </div>
          </li>
        ))}
      </ul>
      <div className="tab-content mt-[6px]">
        {tabData.map((item) => (
          <div
            key={item.id}
            className={`${activeTab === item.id ? "block" : "hidden"}`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tab;
