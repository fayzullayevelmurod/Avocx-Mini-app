export const MyTable = () => {
  return (
    <div>
      <div className="overflow-x-auto custom-table no-scrollbar">
        <table className="w-[1250px]">
          <thead className="">
            <tr>
              <td className="bg-[#1F1F1F] h-[35px] rounded-tl-15 w-[117px]">
                <div className="flex items-center justify-between pr-[10px] pl-[14px]">
                  <div className="flex items-center gap-[5px]">
                    <span className="leading-[9px] text-[10px] font-semibold">
                      Когда
                    </span>
                    <img src="/images/icons/sort.svg" alt="" />
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
              </td>
              <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030]">
                <div className="flex items-center justify-between pr-[10px] pl-[10px]">
                  <span className="leading-[9px] text-[10px] font-semibold">
                    Площадка
                  </span>
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
              </td>
              <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030]">
                <div className="flex items-center justify-between pr-[10px] pl-[10px]">
                  <span className="leading-[9px] text-[10px] font-semibold">
                    Цена
                  </span>
                  <img src="/images/icons/sort.svg" alt="" />
                </div>
              </td>
              <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030]">
                <div className="flex items-center justify-between pr-[10px] pl-[10px]">
                  <span className="leading-[9px] text-[10px] font-semibold">
                    Охват
                  </span>
                  <img src="/images/icons/sort.svg" alt="" />
                </div>
              </td>
              <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030]">
                <div className="flex items-center justify-between pr-[10px] pl-[10px]">
                  <span className="leading-[9px] text-[10px] font-semibold">
                    CPM
                  </span>
                  <img src="/images/icons/sort.svg" alt="" />
                </div>
              </td>
              <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030]">
                <div className="flex items-center justify-between pr-[10px] pl-[10px]">
                  <span className="leading-[9px] text-[10px] font-semibold">
                    Статус
                  </span>
                  <img src="/images/icons/sort.svg" alt="" />
                </div>
              </td>
              <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030]">
                <div className="flex items-center justify-between pr-[10px] pl-[10px]">
                  <span className="leading-[9px] text-[10px] font-semibold">
                    Формат
                  </span>
                </div>
              </td>
              <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030]">
                <div className="flex items-center justify-between pr-[10px] pl-[10px]">
                  <span className="leading-[9px] text-[10px] font-semibold">
                    Пост
                  </span>
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
              </td>
              <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030]">
                <div className="flex items-center justify-between pr-[10px] pl-[10px]">
                  <span className="leading-[9px] text-[10px] font-semibold">
                    Тематика
                  </span>
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
              </td>
              <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030]">
                <div className="flex items-center justify-between pr-[10px] pl-[10px]">
                  <span className="leading-full text-[10px] font-semibold">
                    ПДП <br /> всего
                  </span>
                  <img src="/images/icons/sort.svg" alt="" />
                </div>
              </td>
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
              <td className="bg-[#1F1F1F] h-[35px] border-l border-[#303030]">
                <div className="flex items-center justify-between pr-[10px] pl-[10px]">
                  <span className="leading-full text-[10px] font-semibold">
                    Ср. цена <br /> за ПДП
                  </span>
                  <img src="/images/icons/sort.svg" alt="" />
                </div>
              </td>
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
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[106px] pl-[10px]"></td>
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
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[106px] pl-[10px]"></td>
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
              <td className="h-[32px] bg-[#242424] border-l border-[#303030] w-[106px] pl-[10px]"></td>
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
