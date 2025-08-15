import { useState } from 'react';

const Tab = ({ tabData, sizeLg, sizeXl }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]?.id || '');

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className='space-y-4'>
      <ul className='flex gap-1 border border-iron rounded-[20px] p-[3px]'>
        {tabData.map((item) => (
          <li
            key={item.id}
            className={`${
              sizeLg ? 'text-15 font-semibold bg-[#1B1B1B]' : 'text-[13px] bg-charcoal'
            } ${sizeXl && '!h-[46px] !text-[15px] leading-full p-0 flex items-center justify-center'}  border p-[10px] cursor-pointer rounded-base transition-colors duration-200  w-full text-center text-white ${
              activeTab === item.id ? 'border-primary' : 'border-charcoal'
            }`}
            onClick={() => handleTabClick(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className='tab-content'>
        {tabData.map((item) => (
          <div
            key={item.id}
            className={`${activeTab === item.id ? 'block' : 'hidden'}`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
