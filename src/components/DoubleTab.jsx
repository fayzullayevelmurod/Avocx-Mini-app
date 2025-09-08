import { useState } from "react";

export const DoubleTab = ({ tabData, sizeXl, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]?.id || "");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  // Rang va shadowlar ro'yxati
  const tabStyles = [
    {
      color: "#B200EE",
      shadow: "inset 0px 0px 5px #FFFFFF, 0px 0px 15px #B200EE",
    },
    {
      color: "#303030",
      shadow: "inset 0px 0px 5px 0px #FFFFFF, 0px 0px 15px 0px #464646",
    },
  ];

  // defaultTab active style
  const defaultTabStyle = {
    background: "#1A72FF",
    boxShadow: "0px 0px 5px 0px #FFFFFF inset",
    color: "#fff",
    border: "none",
  };

  return (
    <>
      <ul className="flex items-center px-0.5 border border-[#303030] bg-carbon rounded-[20px] py-[1px] h-[49px]">
        {tabData.map((item, index) => {
          const isActive = activeTab === item.id;

          // faqat active tab uchun style tanlash
          const style = isActive
            ? defaultTab
              ? defaultTabStyle
              : {
                  color: "#fff",
                  backgroundColor: tabStyles[index]?.color,
                  boxShadow: tabStyles[index]?.shadow,
                }
            : {};

          return (
            <li
              key={item.id}
              className={`${
                sizeXl &&
                "!h-[43px]  !text-[15px] leading-full p-0 flex items-center justify-center"
              }  flex gap-1 h-[43px] items-center justify-center p-[10px] text-15 font-bold bg-transparent cursor-pointer rounded-[17px] transition-colors duration-200 w-full text-center ${
                isActive ? "" : "text-grayCustom"
              }`}
              style={style}
              onClick={() => handleTabClick(item.id)}
            >
              <img
                className={`max-w-5 w-auto ${
                  isActive ? "filter brightness-0 invert" : ""
                }`}
                src={item.icon}
                alt=""
              />
              {item.label}
            </li>
          );
        })}
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
