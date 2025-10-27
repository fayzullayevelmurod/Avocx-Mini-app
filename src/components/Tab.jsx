import { useState } from "react";

export const Tab = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]?.id || "");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <div className="w-full h-[50px] bg-[#242424] p-1 rounded-[15px] flex">
        {tabData?.map((item) => (
          <div
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={`flex-1 ${
              activeTab === item.id ? "bg-[#303030]" : "bg-transparent"
            } rounded-[12px] flex items-center justify-center gap-[5px] cursor-pointer`}
          >
            <div className="relative">
              {item.count && (
                <div className="absolute z-10 mt-[1px] top-1/2 -translate-y-1/2 -left-[5px] bg-[#52E063] rounded-full w-3 h-3 text-[9px] font-bold text-[#242424] flex items-center justify-center border border-[#242424]">
                  {item.count}
                </div>
              )}
              <img
                src={item.icon}
                alt=""
                className={`w-[20px] h-[20px] transition-all duration-200 ${
                  activeTab === item.id ? "icon-white" : "icon-gray"
                }`}
              />
            </div>
            <span
              className={`text-[15px] font-bold ${
                activeTab === item.id ? "text-white" : "text-[#707070]"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
