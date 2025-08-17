import { useState } from "react";

const TabTwo = ({ tabData, sizeXl }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]?.id || "");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  // Rang va shadowlar ro'yxati
  const tabStyles = [
    {
      color: "#03AA6F",
      shadow: "inset 0px 0px 5px #FFFFFF, 0px 0px 15px #03AA6F",
    },
    {
      color: "#B200EE",
      shadow: "inset 0px 0px 5px #FFFFFF, 0px 0px 15px #B200EE",
    },
    {
      color: "#DCA21B",
      shadow: "inset 0px 0px 5px #FFFFFF, 0px 0px 15px #DCA21B",
    },
  ];

  return (
    <>
      <ul className="flex items-center px-0.5 border border-iron bg-carbon rounded-[20px] py-[1px] h-[49px]">
        {tabData.map((item, index) => {
          const isActive = activeTab === item.id;
          const style = isActive
            ? {
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
                "!h-[43px] !text-[15px] leading-full p-0 flex items-center justify-center"
              } border flex h-[43px] items-center justify-center p-[10px] text-15 font-bold bg-transparent cursor-pointer rounded-[17px] border-transparent transition-colors duration-200 w-full text-center ${
                isActive ? "" : "text-grayCustom"
              }`}
              style={style}
              onClick={() => handleTabClick(item.id)}
            >
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

export default TabTwo;
