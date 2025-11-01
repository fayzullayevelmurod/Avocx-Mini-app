import { Button, Sort } from "../components";
import { Header } from "../layouts";

const categoryOptions2 = ["От новых", "От новых 2", "От новых 3"];
const categoryOptions1 = ["Все", "Все 2", "Все 3"];
const categoryOptions3 = [
  "Счастье Сейчас",
  "Счастье Сейчас 2",
  "Счастье Сейчас 3",
];

export const BuyerAdvertisingOrdersThree = () => {
  return (
    <div>
      <Header
        search={true}
        settingBtn={true}
        action="История"
        actionIcon="/images/icons/open-book.svg"
      />
      <div className="space-y-2">
        <div className="flex gap-3">
          <Sort
            label="Фильтр"
            icon={true}
            iconPath="/images/icons/filter.svg"
            options={categoryOptions2}
            className="item-width !h-[54px]"
          />
          <Sort
            label="Статус"
            icon={true}
            iconPath="/images/icons/flag.svg"
            options={categoryOptions1}
            className="item-width !h-[54px]"
          />
        </div>
        <Sort
          label="Канал"
          icon={true}
          iconPath="/images/icons/stars.svg"
          options={categoryOptions3}
          className="item-width !h-[54px]"
        />
        <div className="bg-blue-black h-[73px] flex items-center justify-center flex-col text-center rounded-15">
          <h3 className="text-15 font-bold">Всего заказовв: 134</h3>
          <div className="flex gap-[22px] items-center mt-[9px]">
            <div className="flex gap-[5px] items-center ">
              <img src="/images/icons/chek.svg" alt="" />
              <span>Выполнено: 134</span>
            </div>
            <div className="flex gap-[5px] items-center ">
              <img src="/images/icons/chek-cencel.svg" alt="" />
              <span>Выполнено: 134</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 space-y-[7px]">
        <Button type="gray">
          <img src="/images/icons/check-btn.svg" alt="" />
          <span>Принять все</span>
        </Button>
        <div className="rounded-[20px] bg-[#242424] pt-3 pb-[13px]">
          <div className="pb-3 border-b border-[#303030] flex items-center justify-between pl-[14px] pr-[13px]">
            <div className="flex items-center gap-[5px]">
              <img src="/images/icons/bullhorn.svg" alt="" />
              <span className="leading-[15px] font-semibold text-xs">
                №2143
              </span>
            </div>
            <span className="text-xs font-semibold leading-[15px] ml-[-23px]">
              29.06.25 в 12:19
            </span>
            <span className="text-xs font-semibold leading-[15px] text-[#FF9462]">
              Ждём
            </span>
          </div>
          <div className="pt-[7px] pl-[13px] pr-[13px]">
            <div className="pl-1 flex items-start justify-between">
              <div>
                <p className="leading-[17px] font-semibold text-sm pb-[1px]">
                  <span className="text-[#A3A3A3]">Что:</span> Название канала 1
                </p>
                <p className="leading-[17px] font-semibold text-sm">
                  <span className="text-[#A3A3A3]">Где:</span> Название канала 1
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex items-center gap-1">
                    <img
                      className="w-[17px] h-[13px] filter invert brightness-0"
                      src="/images/icons/card-pay.svg"
                      alt=""
                    />
                    <span className="text-[#A3A3A3] text-xs font-semibold">
                      0₽
                    </span>
                  </div>
                  <div className="flex items-center gap-1 pl-[7px] pr-1">
                    <img src="/images/icons/add-user.svg" alt="" />
                    <span className="text-[#A3A3A3] text-xs font-semibold">
                      0
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="/images/icons/diagnostik.svg" alt="" />
                    <span className="text-[#A3A3A3] text-xs font-semibold">
                      0₽
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-10 h-10 bg-[#303030] rounded-15 flex items-center justify-center">
                <img src="/images/icons/trash.svg" alt="" />
              </button>
            </div>
            <div className="flex gap-1 mt-[9px]">
              <div className=" bg-[#303030] divide-x divide-[#464646] flex rounded-15  flex-1 min-w-0">
                <div className="px-3  h-[50px] flex items-center justify-center flex-col">
                  <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                    Формат
                  </span>
                  <span className="text-[13px] font-semibold leading-[10px]">
                    1 / 48
                  </span>
                </div>
                <div className="px-3  h-[50px] flex items-center justify-center flex-col">
                  <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                    Время
                  </span>
                  <span className="text-[13px] font-semibold leading-[10px]">
                    10:21
                  </span>
                </div>
                <div className="px-3  h-[50px] flex items-center justify-center flex-col">
                  <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                    Дата
                  </span>
                  <span className="text-[13px] font-semibold leading-[10px]">
                    01.07.25
                  </span>
                </div>
              </div>
              <div className="bg-[#303030] rounded-15 h-[50px] flex pl-3 justify-center flex-col w-[135px]">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Пост
                </span>
                <span className="text-[13px] font-semibold leading-[10px] text-[#468FF5]">
                  №17
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] bg-[#242424] pt-3 pb-[13px]">
          <div className="pb-3 border-b border-[#303030] flex items-center justify-between pl-[14px] pr-[13px]">
            <div className="flex items-center gap-[5px]">
              <img src="/images/icons/bullhorn.svg" alt="" />
              <span className="leading-[15px] font-semibold text-xs">
                №2143
              </span>
            </div>
            <span className="text-xs font-semibold leading-[15px] ml-[-23px]">
              29.06.25 в 12:19
            </span>
            <span className="text-xs font-semibold leading-[15px] text-[#468FF5]">
              Работает
            </span>
          </div>
          <div className="pt-[7px] pl-[13px] pr-[13px]">
            <div className="pl-1 flex items-start justify-between">
              <div>
                <p className="leading-[17px] font-semibold text-sm pb-[1px]">
                  <span className="text-[#A3A3A3]">Что:</span> Название канала 1
                </p>
                <p className="leading-[17px] font-semibold text-sm">
                  <span className="text-[#A3A3A3]">Где:</span> Название канала 1
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex items-center gap-1">
                    <img
                      className="w-[17px] h-[13px] filter invert brightness-0"
                      src="/images/icons/card-pay.svg"
                      alt=""
                    />
                    <span className="text-[#A3A3A3] text-xs font-semibold">
                      0₽
                    </span>
                  </div>
                  <div className="flex items-center gap-1 pl-[7px] pr-1">
                    <img src="/images/icons/add-user.svg" alt="" />
                    <span className="text-[#A3A3A3] text-xs font-semibold">
                      0
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="/images/icons/diagnostik.svg" alt="" />
                    <span className="text-[#A3A3A3] text-xs font-semibold">
                      0₽
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-10 h-10 bg-[#303030] rounded-15 flex items-center justify-center">
                <img src="/images/icons/graph.svg" alt="" width={20} />
              </button>
            </div>
            <div className="flex gap-1 mt-[9px]">
              <div className=" bg-[#303030] divide-x divide-[#464646] flex rounded-15  flex-1 min-w-0">
                <div className="px-3  h-[50px] flex items-center justify-center flex-col">
                  <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                    Формат
                  </span>
                  <span className="text-[13px] font-semibold leading-[10px]">
                    1 / 48
                  </span>
                </div>
                <div className="px-3  h-[50px] flex items-center justify-center flex-col">
                  <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                    Время
                  </span>
                  <span className="text-[13px] font-semibold leading-[10px]">
                    10:21
                  </span>
                </div>
                <div className="px-3  h-[50px] flex items-center justify-center flex-col">
                  <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                    Дата
                  </span>
                  <span className="text-[13px] font-semibold leading-[10px]">
                    01.07.25
                  </span>
                </div>
              </div>
              <div className="bg-[#303030] rounded-15 h-[50px] flex pl-3 justify-center flex-col w-[135px]">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Пост
                </span>
                <span className="text-[13px] font-semibold leading-[10px] text-[#468FF5]">
                  №17
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
