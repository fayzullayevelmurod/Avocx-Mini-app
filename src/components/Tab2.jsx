import { useState } from "react";

export const Tab2Compoonent = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]?.id || "");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const activeContent = tabData.find((item) => item.id === activeTab)?.content;

  return (
    <>
      {/* Header (tab buttons) */}
      <div className="w-full h-[50px] bg-[#242424] p-1 rounded-[15px] flex">
        {tabData?.map((item) => (
          <div
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={`flex-1 ${
              activeTab === item.id ? "bg-[#303030]" : "bg-transparent"
            } rounded-[12px] flex items-center justify-center gap-[5px] cursor-pointer`}
          >
            <img
              src={item.icon}
              alt=""
              className={`w-[20px] h-[20px] transition-all duration-200 ${
                activeTab === item.id ? "icon-white" : "icon-gray"
              }`}
            />
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

      {/* Active content */}
      <div className="mt-2 space-y-1">{activeContent}</div>
    </>
  );
};
