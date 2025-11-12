import { useState } from "react";

export const MyTable = () => {
  const [activeSearch, setActiveSearch] = useState({
    kogda: false,
    platform: false,
    post: false,
    topic: false,
  });

  const [clickedHeaders, setClickedHeaders] = useState({
    kogda: false,
    price: false,
    reach: false,
    cpm: false,
    status: false,
    pdp: false,
    avg_price: false,
  });

  const toggleSearch = (key) => {
    setActiveSearch((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleHeader = (key) => {
    setClickedHeaders((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderSearchCell = (label, key) => (
    <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030] relative">
      <div className="flex items-center justify-between pr-[10px] pl-[10px] relative">
        <span className="leading-[9px] text-[10px] font-semibold">{label}</span>

        {/* 🔍 Icon */}
        <svg
          onClick={() => toggleSearch(key)}
          className="cursor-pointer transition-colors duration-200"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9346 10.958C11.2051 10.6894 11.6386 10.6894 11.9092 10.958L13.6973 12.4014H13.7285C14.0903 12.767 14.0903 13.3599 13.7285 13.7256C13.3668 14.0912 12.7807 14.0911 12.4189 13.7256L10.9346 12.0254C10.7943 11.8841 10.7158 11.6914 10.7158 11.4912C10.7159 11.2911 10.7943 11.0993 10.9346 10.958ZM6.00391 0C7.5963 0 9.12398 0.639288 10.25 1.77734C11.376 2.91548 12.0088 4.45977 12.0088 6.06934C12.0085 9.42086 9.31986 12.1377 6.00391 12.1377C2.68816 12.1375 0.00025444 9.42071 0 6.06934C0 2.71774 2.688 0.000239679 6.00391 0Z"
            fill={activeSearch[key] ? "#59BFFF" : "#464646"}
          />
        </svg>
      </div>

      {/* 🔽 Search input */}
      <div
        className={`absolute top-full left-full -ml-8 transition-all duration-300 ${
          activeSearch[key]
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{
          zIndex: activeSearch[key] ? 999 : 0,
        }}
      >
        <input
          type="text"
          placeholder="Поиск"
          className="border text-xs pr-[38px] font-semibold placeholder:text-[#707070] border-[#464646] bg-[#303030] rounded-[15px] px-[15px] h-[40px] w-[250px] focus:outline-none"
        />
        <img
          className="absolute top-1/2 -translate-y-1/2 right-[13px]"
          src="/images/icons/arrow-right.svg"
          alt=""
        />
      </div>
    </td>
  );

  const renderHeaderWithSort = (label, key) => (
    <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030]">
      <div className="flex items-center justify-between pr-[10px] pl-[10px]">
        <span className="leading-[9px] text-[10px] font-semibold">{label}</span>
        <svg
          onClick={() => toggleHeader(key)}
          className="cursor-pointer transition-colors duration-200"
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.48431 10.2723C8.82771 9.91128 9.38425 9.91128 9.73949 10.2602C9.91711 10.4407 10 10.6694 10 10.91C10 11.1386 9.91711 11.3673 9.73949 11.5357L5.63055 15.7353C5.46477 15.9037 5.23979 16 5.00296 16C4.76613 16 4.54115 15.9037 4.37537 15.7353L0.26643 11.5357C-0.08881 11.1868 -0.08881 10.6212 0.26643 10.2602C0.609828 9.91128 1.17821 9.91128 1.52161 10.2723L5.00296 13.822L8.48431 10.2723Z"
            fill={clickedHeaders[key] ? "#59BFFF" : "#464646"}
          />
          <path
            d="M1.51569 5.72773C1.17229 6.08872 0.615747 6.08872 0.260507 5.73977C0.0828875 5.55927 -1.01437e-06 5.33064 -9.93327e-07 5.08998C-9.7334e-07 4.86135 0.0828875 4.63272 0.260507 4.46426L4.36945 0.264727C4.53523 0.0962646 4.76021 4.95598e-07 4.99704 5.16302e-07C5.23387 5.37006e-07 5.45885 0.0962647 5.62463 0.264727L9.73357 4.46426C10.0888 4.81322 10.0888 5.37877 9.73357 5.73977C9.39017 6.08872 8.82179 6.08872 8.47839 5.72773L4.99704 2.17798L1.51569 5.72773Z"
            fill="#464646"
          />
        </svg>
      </div>
    </td>
  );

  return (
    <div className="overflow-hidden rounded-15 bg-[#1F1F1F]">
      <div className="overflow-x-auto custom-table no-scrollbar">
        <table className="w-[1250px]">
          <thead className="">
            <tr>
              {/* <td className="bg-[#1F1F1F] h-[35px] rounded-tl-15 w-[117px]">
                <div className="flex items-center justify-between pr-[10px] pl-[14px] relative">
                  <div className="flex items-center gap-[5px]">
                    <span className="leading-[9px] text-[10px] font-semibold">
                      Когда
                    </span>
                    <svg
                      width="10"
                      height="16"
                      viewBox="0 0 10 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.48431 10.2723C8.82771 9.91128 9.38425 9.91128 9.73949 10.2602C9.91711 10.4407 10 10.6694 10 10.91C10 11.1386 9.91711 11.3673 9.73949 11.5357L5.63055 15.7353C5.46477 15.9037 5.23979 16 5.00296 16C4.76613 16 4.54115 15.9037 4.37537 15.7353L0.26643 11.5357C-0.08881 11.1868 -0.08881 10.6212 0.26643 10.2602C0.609828 9.91128 1.17821 9.91128 1.52161 10.2723L5.00296 13.822L8.48431 10.2723Z"
                        fill="#464646"
                      />
                      <path
                        d="M1.51569 5.72773C1.17229 6.08872 0.615747 6.08872 0.260507 5.73977C0.0828875 5.55927 -1.01437e-06 5.33064 -9.93327e-07 5.08998C-9.7334e-07 4.86135 0.0828875 4.63272 0.260507 4.46426L4.36945 0.264727C4.53523 0.0962646 4.76021 4.95598e-07 4.99704 5.16302e-07C5.23387 5.37006e-07 5.45885 0.0962647 5.62463 0.264727L9.73357 4.46426C10.0888 4.81322 10.0888 5.37877 9.73357 5.73977C9.39017 6.08872 8.82179 6.08872 8.47839 5.72773L4.99704 2.17798L1.51569 5.72773Z"
                        fill="#464646"
                      />
                    </svg>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9346 10.958C11.2051 10.6894 11.6386 10.6894 11.9092 10.958L13.6973 12.4014H13.7285C14.0903 12.767 14.0903 13.3599 13.7285 13.7256C13.3668 14.0912 12.7807 14.0911 12.4189 13.7256L10.9346 12.0254C10.7943 11.8841 10.7158 11.6914 10.7158 11.4912C10.7159 11.2911 10.7943 11.0993 10.9346 10.958ZM6.00391 0C7.5963 0 9.12398 0.639288 10.25 1.77734C11.376 2.91548 12.0088 4.45977 12.0088 6.06934C12.0085 9.42086 9.31986 12.1377 6.00391 12.1377C2.68816 12.1375 0.00025444 9.42071 0 6.06934C0 2.71774 2.688 0.000239679 6.00391 0Z"
                      fill="#464646"
                    />
                  </svg>
                </div>
              </td> */}
              <td className="bg-[#1F1F1F] h-[35px] rounded-tl-[15px] w-[117px] relative">
                <div className="flex items-center justify-between pr-[10px] pl-[14px] relative">
                  <div
                    className="flex items-center gap-[5px] cursor-pointer"
                    onClick={() => toggleHeader("kogda")}
                  >
                    <span className="leading-[9px] text-[10px] font-semibold">
                      Когда
                    </span>
                    <svg
                      width="10"
                      height="16"
                      viewBox="0 0 10 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.48431 10.2723C8.82771 9.91128 9.38425 9.91128 9.73949 10.2602C9.91711 10.4407 10 10.6694 10 10.91C10 11.1386 9.91711 11.3673 9.73949 11.5357L5.63055 15.7353C5.46477 15.9037 5.23979 16 5.00296 16C4.76613 16 4.54115 15.9037 4.37537 15.7353L0.26643 11.5357C-0.08881 11.1868 -0.08881 10.6212 0.26643 10.2602C0.609828 9.91128 1.17821 9.91128 1.52161 10.2723L5.00296 13.822L8.48431 10.2723Z"
                        fill={clickedHeaders["kogda"] ? "#59BFFF" : "#464646"}
                      />
                      <path
                        d="M1.51569 5.72773C1.17229 6.08872 0.615747 6.08872 0.260507 5.73977C0.0828875 5.55927 -1.01437e-06 5.33064 -9.93327e-07 5.08998C-9.7334e-07 4.86135 0.0828875 4.63272 0.260507 4.46426L4.36945 0.264727C4.53523 0.0962646 4.76021 4.95598e-07 4.99704 5.16302e-07C5.23387 5.37006e-07 5.45885 0.0962647 5.62463 0.264727L9.73357 4.46426C10.0888 4.81322 10.0888 5.37877 9.73357 5.73977C9.39017 6.08872 8.82179 6.08872 8.47839 5.72773L4.99704 2.17798L1.51569 5.72773Z"
                        fill="#464646"
                      />
                    </svg>
                  </div>
                  <svg
                    onClick={() => toggleSearch("kogda")}
                    className="cursor-pointer transition-colors duration-200"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9346 10.958C11.2051 10.6894 11.6386 10.6894 11.9092 10.958L13.6973 12.4014H13.7285C14.0903 12.767 14.0903 13.3599 13.7285 13.7256C13.3668 14.0912 12.7807 14.0911 12.4189 13.7256L10.9346 12.0254C10.7943 11.8841 10.7158 11.6914 10.7158 11.4912C10.7159 11.2911 10.7943 11.0993 10.9346 10.958ZM6.00391 0C7.5963 0 9.12398 0.639288 10.25 1.77734C11.376 2.91548 12.0088 4.45977 12.0088 6.06934C12.0085 9.42086 9.31986 12.1377 6.00391 12.1377C2.68816 12.1375 0.00025444 9.42071 0 6.06934C0 2.71774 2.688 0.000239679 6.00391 0Z"
                      fill={activeSearch["kogda"] ? "#59BFFF" : "#464646"}
                    />
                  </svg>
                </div>

                {/* Search input for Когда */}
                <div
                  className={`absolute top-full left-full -ml-8 transition-all duration-300 ${
                    activeSearch["kogda"]
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  style={{
                    zIndex: activeSearch["kogda"] ? 999 : 0,
                  }}
                >
                  <input
                    type="text"
                    placeholder="Поиск"
                    className="border text-xs pr-[38px] font-semibold placeholder:text-[#707070] border-[#464646] bg-[#303030] rounded-[15px] px-[15px] h-[40px] w-[250px] focus:outline-none"
                  />
                  <img
                    className="absolute top-1/2 -translate-y-1/2 right-[13px]"
                    src="/images/icons/arrow-right.svg"
                    alt=""
                  />
                </div>
              </td>
              {renderSearchCell("Площадка", "platform")}
              {renderHeaderWithSort("Цена", "price")}
              {renderHeaderWithSort("Охват", "reach")}
              {renderHeaderWithSort("CPM", "cpm")}
              {renderHeaderWithSort("Статус", "status")}
              <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030]">
                <div className="flex items-center justify-between pr-[10px] pl-[10px]">
                  <span className="leading-[9px] text-[10px] font-semibold">
                    Формат
                  </span>
                </div>
              </td>
              {renderSearchCell("Пост", "post")}
              {renderSearchCell("Тематика", "topic")}
              {renderHeaderWithSort("ПДП всего", "pdp")}

              <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030]">
                <div className="flex items-center justify-between pr-[10px] pl-[10px]">
                  <span className="leading-full text-[10px] font-semibold">
                    Отписки <br /> всего
                  </span>
                </div>
              </td>
              <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030]">
                <div className="flex items-center justify-between pr-[10px] pl-[10px]">
                  <span className="leading-full text-[10px] font-semibold">
                    Ср. цена за оставшихся <br /> ПДП после 24ч
                  </span>
                </div>
              </td>
              {renderHeaderWithSort("Ср. цена за ПДП", "avg_price")}
            </tr>
          </thead>
          <tbody className="text-[10px] font-semibold">
            <tr className="border-t border-[#303030]">
              <td className="h-[32px] bg-[#242424]">
                <div className="pl-[14px] pr-[10px]">29.06.25 в 12:19</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[113px] text-center">
                <div>Название канала</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[64px] pl-[10px]">
                <div>650₽</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[68px] pl-[10px]">
                <div>880</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[68px] pl-[10px]">
                <div>738</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l text-[#468FF5] border-[#303030] w-[75px] pl-[10px]">
                <div>Work</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[62px] pl-[10px]">
                <div>1 / 48</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[124px] pl-[10px]">
                <div>№13 Каждая жен...</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[186px] pl-[10px]">
                <div>Психология, вдохновение</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[71px] pl-[10px]">
                <div>30</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[71px] pl-[10px]">
                <div>0</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[149px] pl-[10px]">
                <div>21,6 ₽</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[106px] pl-[10px]">
                <div>21,6 ₽</div>
              </td>
            </tr>
            <tr className="border-t border-[#303030]">
              <td className="h-[32px] bg-[#242424]">
                <div className="pl-[14px] pr-[10px]">29.06.25 в 12:19</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[113px] text-center">
                <div>Название канала</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[64px] pl-[10px]">
                <div>650₽</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[68px] pl-[10px]">
                <div>880</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[68px] pl-[10px]">
                <div>738</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l text-[#468FF5] border-[#303030] w-[75px] pl-[10px]">
                <div>Work</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[62px] pl-[10px]">
                <div>1 / 48</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[124px] pl-[10px]">
                <div>№13 Каждая жен...</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[186px] pl-[10px]">
                <div>Психология, вдохновение</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[71px] pl-[10px]">
                <div>30</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[71px] pl-[10px]">
                <div>0</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[149px] pl-[10px]">
                <div>21,6 ₽</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[106px] pl-[10px]">
                <div>21,6 ₽</div>
              </td>
            </tr>
            <tr className="border-t border-[#303030]">
              <td className="h-[32px] bg-[#242424]">
                <div className="pl-[14px] pr-[10px]">29.06.25 в 12:19</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[113px] text-center">
                <div>Название канала</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[64px] pl-[10px]">
                <div>650₽</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[68px] pl-[10px]">
                <div>880</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[68px] pl-[10px]">
                <div>738</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l text-[#468FF5] border-[#303030] w-[75px] pl-[10px]">
                <div>Work</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[62px] pl-[10px]">
                <div>1 / 48</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[124px] pl-[10px]">
                <div>№13 Каждая жен...</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[186px] pl-[10px]">
                <div>Психология, вдохновение</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[71px] pl-[10px]">
                <div>30</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[71px] pl-[10px]">
                <div>0</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[149px] pl-[10px]">
                <div>21,6 ₽</div>
              </td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[106px] pl-[10px]">
                <div>21,6 ₽</div>
              </td>
            </tr>
            <tr className="border-t border-[#303030]">
              <td className="h-[32px] bg-[#242424]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[113px] text-center"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[64px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[68px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[68px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l text-[#468FF5] border-[#303030] w-[75px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[62px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[124px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[186px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[71px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[71px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[149px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[106px] pl-[10px]">
                <div></div>
              </td>
            </tr>
            <tr className="border-t border-[#303030]">
              <td className="h-[32px] bg-[#242424]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[113px] text-center"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[64px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[68px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[68px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l text-[#468FF5] border-[#303030] w-[75px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[62px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[124px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[186px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[71px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[71px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[149px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[106px] pl-[10px]">
                <div></div>
              </td>
            </tr>
            <tr className="border-y border-[#303030]">
              <td className="h-[32px] bg-[#242424]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[113px] text-center"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[64px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[68px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[68px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l text-[#468FF5] border-[#303030] w-[75px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[62px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[124px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[186px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[71px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[71px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[149px] pl-[10px]"></td>
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[106px] pl-[10px]">
                <div></div>
              </td>
            </tr>
          </tbody>
          {/* <tfoot className="bg-[#1F1F1F]  h-[54px]">
          <tr>
            <td colSpan={5} className="pl-[11px] pr-[13px] rounded-b-15">
              <div className="flex gap-[7px]">
                <div className="w-[100px] flex items-center justify-center h-[30px] bg-[#242424] rounded-lg">
                  <img src="/images/icons/prev.svg" alt="" />
                </div>
                <div className="min-w-0 flex-1 h-[30px] bg-[#242424] rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold">1/1</span>
                </div>
                <div className="w-[100px] flex items-center justify-center h-[30px] bg-[#242424] rounded-lg">
                  <img src="/images/icons/next.svg" alt="" />
                </div>
              </div>
            </td>
          </tr>
        </tfoot> */}
        </table>
      </div>
      <div className="pl-[11px] pr-[13px] rounded-b-15 bg-[#1F1F1F]  h-[54px] flex flex-col justify-center items-center w-full">
        <div className="flex gap-[7px] w-full">
          <div className="w-[100px] flex items-center justify-center h-[30px] bg-[#242424] rounded-lg">
            <img src="/images/icons/prev.svg" alt="" />
          </div>
          <div className="min-w-0 flex-1 h-[30px] bg-[#242424] rounded-lg flex items-center justify-center">
            <span className="text-xs font-semibold">1/1</span>
          </div>
          <div className="w-[100px] flex items-center justify-center h-[30px] bg-[#242424] rounded-lg">
            <img src="/images/icons/next.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
