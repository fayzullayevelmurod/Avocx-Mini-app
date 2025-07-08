import { useState } from 'react';

const Tab = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]?.id || '');

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className='space-y-4'>
      <ul className='flex gap-2'>
        {tabData.map((item) => (
          <li
            key={item.id}
            className={`text-[13px] border p-[10px] cursor-pointer rounded-base transition-colors duration-200 bg-charcoal w-full text-center text-white ${
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
