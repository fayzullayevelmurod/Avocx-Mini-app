import { useState } from "react";
export const DateTab = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]?.id || "");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      {/* Tab headers */}
      <div className="h-[50px]  p-1 rounded-[15px] flex bg-[#303030] w-[calc(100%_-_41px)] -translate-x-[1px] mx-auto">
        {tabData?.map((item) => (
          <div
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={`flex-1 ${
              activeTab === item.id ? "bg-[#59BFFF]" : "bg-transparent"
            } rounded-[12px] flex items-center justify-center gap-[5px] cursor-pointer`}
          >
            <div className="relative">
              {item.count && (
                <div className="absolute z-10 mt-[1px] top-1/2 -translate-y-1/2 -left-[5px] bg-[#59BFFF] rounded-full w-[14px] h-[14px] text-[10px] font-bold text-[#242424] flex items-center justify-center border border-[#242424]">
                  {item.count}
                </div>
              )}
              {item.icon ? (
                <img
                  src={item.icon}
                  alt=""
                  className={`w-[20px] h-[20px] transition-all duration-200 ${
                    activeTab === item.id ? "icon-white" : "icon-gray"
                  }`}
                />
              ) : null}
            </div>
            <span
              className={`text-[15px] font-bold ${
                activeTab === item.id ? "text-[#303030]" : "text-[#707070]"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {tabData.map((item) =>
          item.id === activeTab ? <div key={item.id}>{item.content}</div> : null
        )}
      </div>
    </>
  );
};
