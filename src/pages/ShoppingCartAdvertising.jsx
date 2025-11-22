import { useState } from "react";
import { Button, Checkbox, SelectChannel, Sort } from "../components";
import { Footer, Header } from "../layouts";
import { SendModal } from "../components/modals/SendModal";

const categoryOptions = [
  "Счастье Сейчас",
  "Счастье Сейчас 2",
  "Счастье Сейчас 3",
];

const categoryOptions2 = ["От новых", "От новых 2", "От новых 3"];
const categoryOptions3 = ["Все", "Все 2", "Все 3"];

export const ShoppingCartAdvertising = () => {
  const [check, setCheck] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <Header search={true} settingBtn={true} />
        <div className="space-y-2">
          <div className="flex gap-3 h-[54px]">
            <Sort
              label="Фильтр"
              icon={true}
              iconPath="/images/icons/filter.svg"
              options={categoryOptions2}
              className="item-width h-full"
            />
            <Sort
              label="Статус"
              icon={true}
              iconPath="/images/icons/flag.svg"
              options={categoryOptions3}
              className="item-width h-full"
            />
          </div>
          <SelectChannel
            label="Канал"
            icon={true}
            iconPath="/images/icons/stars.svg"
            options={categoryOptions}
            className="item-width !h-[54px]"
          />
          <div className="flex gap-3">
            <div className="text-center flex items-center justify-center bg-[#262E38] rounded-15 text-xs font-semibold text-[#59BFFF] flex-1 h-10">
              Охват: ~754
            </div>
            <div className="text-center flex items-center justify-center bg-[#262E38] rounded-15 text-xs font-semibold text-[#59BFFF] flex-1 h-10">
              Охват: ~754
            </div>
          </div>
        </div>
        <div className="space-y-[7px] mt-[7px]">
          <div className="flex gap-3">
            <div className="text-center flex items-center gap-1 justify-center  rounded-15 text-xs font-semibold  bg-[#242424] flex-1 h-10">
              Выбрано: <span className="text-[#468FF5]">1</span>
            </div>
            <div className="text-center flex items-center justify-center bg-[#242424] rounded-15 text-xs font-semibold text-base-white flex-1 h-10">
              Запросить
            </div>
            <div className="text-center gap-1 flex items-center justify-center bg-[#242424] rounded-15 text-xs font-semibold text-base-white flex-1 h-10">
              <img
                className="filter invert brightness-0"
                src="/images/icons/trash.svg"
                alt=""
              />
              <span>Удалить</span>
            </div>
          </div>

          {/* card */}
          <div className="bg-[#242424] rounded-[20px] p-[13px]">
            <div className="flex items-center justify-between">
              <div className="flex gap-[7px] items-center">
                <Checkbox checked={check} onChange={() => setCheck(!check)} />
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="/images/icons/logo.svg"
                  alt=""
                />
                <div>
                  <h3 className="text-xs font-semibold leading-[12px]">
                    Счастье Сейчас
                  </h3>
                  <div className="flex items-center gap-[5px] mt-[3px]">
                    <div className="flex items-center gap-[5px]">
                      <img
                        className="filter invert brightness-0 w-[14px] h-[12px]"
                        src="images/icons/user-group.svg"
                        alt="er"
                      />
                      <span className="text-xs text-grayCustom">17345</span>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <img
                        className="filter invert brightness-0 w-[14px] h-[12px]"
                        src="images/icons/er.svg"
                        alt="see"
                      />
                      <span className="text-xs text-grayCustom">21%</span>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <img
                        className="filter invert brightness-0 w-[14px] h-[12px]"
                        src="images/icons/eye.svg"
                        alt="see"
                      />
                      <span className="text-xs text-grayCustom">567, 754</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-[-7px]">
                <img src="/images/icons/trash.svg" alt="" />
              </button>
            </div>
            <div className="flex gap-1 mt-[7px]">
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
              <div className="bg-[#303030] rounded-15 h-[50px] flex pl-3 justify-center flex-col max-w-[100px] w-full">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Пост
                </span>
                <span className="text-[13px] font-semibold leading-[10px] text-[#59BFFF]">
                  Выбрать
                </span>
              </div>
            </div>
            <Button
              className="gap-[10px] w-full mt-[7px] !rounded-[12px] !h-10"
              onClick={() => setIsOpen(true)}
            >
              <span>650₽</span>
              <img src="/images/icons/say-hello.svg" alt="" />
              <span>Запросить на оплату</span>
            </Button>
          </div>
        </div>
      </div>

      <SendModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Footer />
    </>
  );
};
