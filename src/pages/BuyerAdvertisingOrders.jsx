import { useState } from "react";
import { Button, Checkbox, ExpandableAdButtons, Sort } from "../components";
import { ToggleIconButton } from "../components/ToggleFeatured";
import { Header } from "../layouts";
import { Link } from "react-router-dom";

export const BuyerAdvertisingOrders = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [check, setCheck] = useState(false);

  return (
    <div className="mb-[100px]">
      <Header
        search={true}
        settingBtn={true}
        action="История"
        actionIcon="/images/icons/open-book.svg"
      />

      <div className="space-y-4">
        <div className="bg-charcoal rounded-[20px] pt-3 pl-[14px] pb-[14px] pr-[14px]">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-[5px]">
              <div className="bg-[#1E1E1E] rounded-t-[79px] rounded-b-[15px] w-[52px] h-[64px] p-[2px] flex justify-between flex-col items-center">
                <img
                  className="w-[48] h-[48] rounded-full"
                  src="images/icons/logo.svg"
                  alt="logo"
                />
                <div className="flex gap-[1px] justify-center items-center bg-[#464646] min-h-[10px] max-h-[10px] rounded-[3px] px-1 mt-[-9px]">
                  <img src="/images/icons/trophy.svg" alt="" />
                  <span className="text-[8px] text-[#D9D9D9] font-semibold leading-full">
                    189
                  </span>
                </div>
                <span className="text-[7px] text-grayCustom leading-[9px]">
                  Diamond
                </span>
              </div>
              <div>
                <h4 className="text-[17px] font-semibold leading-full">
                  Cчастье Сейчас
                </h4>
                <p className="text-[10px] font-normal text-grayCustom leading-full mt-[2px] mb-[6px]">
                  Психология, Цитаты, Литература.
                </p>
                <div className="flex items-center gap-[10px] my-[2px] mt-[-3px]">
                  <div className="flex items-center gap-[5px]">
                    <img src="images/icons/user-group.svg" alt="" />
                    <span className="text-xs text-grayCustom">17.345</span>
                  </div>
                  <div className="flex gap-[2px]">
                    <img src="images/icons/plus.svg" alt="" />
                    <img src="images/icons/plus.svg" alt="" />
                    <img src="images/icons/gray-plus.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center gap-[5px] mt-[3px]">
                  <div className="flex items-center gap-[5px]">
                    <img
                      className="filter invert brightness-0 w-[14px] h-[12px]"
                      src="images/icons/er.svg"
                      alt="er"
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
            <ToggleIconButton activeIcon="/images/icons/active-heart.svg" />
          </div>

          {/* Первая карточка с уникальным ID и данными */}
          <ExpandableAdButtons
            cardId="card1"
            buttonsData={[
              { format: "1/48", price: "650₽" },
              { format: "1/72", price: "890₽" },
              { format: "1/168", price: "1200₽" },
              { format: "Story", price: "1500₽" },
            ]}
          />
        </div>

        <div className="bg-charcoal rounded-[20px] pt-3 pl-[14px] pb-[14px] pr-[14px] mt-2">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-[5px]">
              <div className="bg-[#1E1E1E] rounded-t-[79px] rounded-b-[15px] w-[52px] h-[64px] p-[2px] flex justify-between flex-col items-center">
                <img
                  className="w-[48] h-[48] rounded-full"
                  src="images/icons/logo.svg"
                  alt="logo"
                />
                <div className="flex gap-[1px] justify-center items-center bg-[#464646] min-h-[10px] max-h-[10px] rounded-[3px] px-1 mt-[-9px]">
                  <img src="/images/icons/trophy.svg" alt="" />
                  <span className="text-[8px] text-[#D9D9D9] font-semibold leading-full">
                    189
                  </span>
                </div>
                <span className="text-[7px] text-grayCustom leading-[9px]">
                  Diamond
                </span>
              </div>
              <div>
                <h4 className="text-[17px] font-semibold leading-full">
                  Cчастье Сейчас
                </h4>
                <p className="text-[10px] font-normal text-grayCustom leading-full mt-[2px] mb-[6px]">
                  Психология, Цитаты, Литература.
                </p>
                <div className="flex items-center gap-[10px] my-[2px] mt-[-3px]">
                  <div className="flex items-center gap-[5px]">
                    <img src="images/icons/user-group.svg" alt="" />
                    <span className="text-xs text-grayCustom">17.345</span>
                  </div>
                  <div className="flex gap-[2px]">
                    <img src="images/icons/plus.svg" alt="" />
                    <img src="images/icons/plus.svg" alt="" />
                    <img src="images/icons/gray-plus.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center gap-[5px] mt-[3px]">
                  <div className="flex items-center gap-[5px]">
                    <img
                      className="filter invert brightness-0 w-[14px] h-[12px]"
                      src="images/icons/er.svg"
                      alt="er"
                    />
                    <span className="text-xs text-grayCustom">21%</span>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <img
                      className="filter invert brightness-0 w-[14px] h-[12px]"
                      src="images/icons/eye.svg"
                      alt="see"
                    />
                    <span className="text-xs text-grayCustom">
                      567, 754, 1145
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ExpandableAdButtons
            cardId="card1"
            status={true}
            statusPaused={isRunning ? true : false}
            buttonsData={[
              { format: "1/48", price: "650₽" },
              { format: "1/72", price: "890₽" },
              { format: "1/168", price: "1200₽" },
              { format: "Story", price: "1500₽" },
            ]}
          />

          <div className="flex justify-between mt-[7px]">
            <button className="p-[10px] rounded-xl bg-[#303030] text-xs font-bold flex items-center gap-1">
              <img src="/images/icons/trash.svg" alt="" />
              <span>Del</span>
            </button>
            <div className="flex gap-1">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="p-[10px] rounded-xl bg-[#303030] text-xs font-bold flex items-center gap-1 transition-all"
              >
                {isRunning ? (
                  <>
                    {/* Start holati */}
                    <img src="/images/icons/play.svg" alt="Play" />
                    <span>Start</span>
                  </>
                ) : (
                  <>
                    {/* Stop holati */}
                    <img src="/images/icons/pause.svg" alt="Pause" />
                    <span>Stop</span>
                  </>
                )}
              </button>
              <button className="p-[10px] rounded-xl bg-[#303030] text-xs font-bold flex items-center gap-1">
                <img src="/images/icons/graph.svg" alt="" />
                <span>Data</span>
              </button>
              <Link
                to="/creating-exchange"
                className="p-[10px] rounded-xl bg-[#303030] text-xs font-bold flex items-center gap-1"
              >
                <img src="/images/icons/edit.svg" alt="" />
                <span>Edit</span>
              </Link>
            </div>
          </div>
        </div>

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
              <div className="px-3  h-[50px] flex items-start justify-center flex-col">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Формат
                </span>
                <span className="text-[13px] font-semibold leading-[10px]">
                  1 / 48
                </span>
              </div>
              <div className="px-3  h-[50px] flex items-start justify-center flex-col">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Время
                </span>
                <span className="text-[13px] font-semibold leading-[10px]">
                  10:21
                </span>
              </div>
              <div className="px-3  h-[50px] flex items-start justify-center flex-col">
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
          <Button className="gap-[10px] w-full mt-[7px] !h-10  rounded-xl">
            <span>650₽</span>
            <img src="/images/icons/say-hello.svg" alt="" />
            <span>Запросить на оплату</span>
          </Button>
        </div>

        {/* 2 */}
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
              <div className="px-3  h-[50px] flex items-start justify-center flex-col">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Формат
                </span>
                <span className="text-[13px] font-semibold leading-[10px]">
                  1 / 48
                </span>
              </div>
              <div className="px-3  h-[50px] flex items-start justify-center flex-col">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Время
                </span>
                <span className="text-[13px] font-semibold leading-[10px]">
                  10:21
                </span>
              </div>
              <div className="px-3  h-[50px] flex items-start justify-center flex-col">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Дата
                </span>
                <span className="text-[13px] font-semibold leading-[10px]">
                  01.07.25
                </span>
              </div>
            </div>
            <div className="bg-[#303030] relative rounded-15 h-[50px] flex pl-3 justify-center flex-col max-w-[100px] w-full">
              <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                Пост
              </span>
              <span className="text-[13px] font-semibold leading-[10px] text-[#59BFFF]">
                №17
              </span>
              <svg
                className="absolute top-1/2 -translate-y-1/2 right-[14px]"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5132 5.06751L5.68271 15.2308C5.32334 15.6923 4.79374 15.9519 4.22631 15.9615L1.10545 16C0.935224 16 0.793366 15.8846 0.755538 15.7212L0.0462524 12.6347C-0.0766904 12.0674 0.0462524 11.4809 0.405624 11.0289L5.95697 3.81753C6.05154 3.70215 6.22177 3.68388 6.33525 3.76946L8.67116 5.63481C8.82248 5.75981 9.03054 5.82711 9.24805 5.79827C9.71145 5.74057 10.0235 5.31751 9.97625 4.86559C9.94788 4.63483 9.83439 4.44252 9.68308 4.29829C9.63579 4.25983 7.41336 2.4714 7.41336 2.4714C7.27151 2.35602 7.24314 2.14449 7.35662 2.00122L8.23614 0.85605C9.04945 -0.192008 10.468 -0.28816 11.6123 0.625285L12.9269 1.67334C13.4659 2.09641 13.8253 2.65409 13.9482 3.24062C14.0901 3.8858 13.9388 4.51944 13.5132 5.06751Z"
                  fill="#59BFFF"
                />
              </svg>
            </div>
          </div>
          <Button className="gap-[10px] w-full mt-[7px] !h-10  rounded-xl">
            <span>650₽</span>
            <img src="/images/icons/say-hello.svg" alt="" />
            <span>Запросить на оплату</span>
          </Button>
        </div>
        {/* 3 */}
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
              <div className="px-3  h-[50px] flex items-start justify-center flex-col">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Формат
                </span>
                <span className="text-[13px] font-semibold leading-[10px]">
                  1 / 48
                </span>
              </div>
              <div className="px-3  h-[50px] flex items-start justify-center flex-col">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Время
                </span>
                <span className="text-[13px] font-semibold leading-[10px]">
                  10:21
                </span>
              </div>
              <div className="px-3  h-[50px] flex items-start justify-center flex-col">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Дата
                </span>
                <span className="text-[13px] font-semibold leading-[10px]">
                  01.07.25
                </span>
              </div>
            </div>
            <div className="bg-[#303030] relative rounded-15 h-[50px] flex pl-3 justify-center flex-col max-w-[100px] w-full">
              <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                Пост
              </span>
              <span className="text-[13px] font-semibold leading-[10px] text-[#59BFFF]">
                №17
              </span>
              <svg
                className="absolute top-1/2 -translate-y-1/2 right-[14px]"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5132 5.06751L5.68271 15.2308C5.32334 15.6923 4.79374 15.9519 4.22631 15.9615L1.10545 16C0.935224 16 0.793366 15.8846 0.755538 15.7212L0.0462524 12.6347C-0.0766904 12.0674 0.0462524 11.4809 0.405624 11.0289L5.95697 3.81753C6.05154 3.70215 6.22177 3.68388 6.33525 3.76946L8.67116 5.63481C8.82248 5.75981 9.03054 5.82711 9.24805 5.79827C9.71145 5.74057 10.0235 5.31751 9.97625 4.86559C9.94788 4.63483 9.83439 4.44252 9.68308 4.29829C9.63579 4.25983 7.41336 2.4714 7.41336 2.4714C7.27151 2.35602 7.24314 2.14449 7.35662 2.00122L8.23614 0.85605C9.04945 -0.192008 10.468 -0.28816 11.6123 0.625285L12.9269 1.67334C13.4659 2.09641 13.8253 2.65409 13.9482 3.24062C14.0901 3.8858 13.9388 4.51944 13.5132 5.06751Z"
                  fill="#59BFFF"
                />
              </svg>
            </div>
          </div>
          <Button className="gap-[10px] w-full mt-[7px] !h-10 rounded-xl">
            <span className="leading-[17px] -mt-0.5">650₽</span>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7998 6.85059C19.4597 6.85059 19.9998 7.38994 20 8.0498V13.0498C20 15.3398 18.1396 17.2002 15.8496 17.2002H4.13965C1.84996 17.2 0.000242399 15.3502 0 13.0605V8.0498C0.000159669 7.38994 0.540293 6.85059 1.2002 6.85059H18.7998ZM4 12.3506C3.59 12.3506 3.25 12.6906 3.25 13.1006C3.25027 13.5104 3.59016 13.8506 4 13.8506H6C6.40984 13.8506 6.74973 13.5104 6.75 13.1006C6.75 12.6906 6.41 12.3506 6 12.3506H4ZM8.5 12.3506C8.09 12.3506 7.75 12.6906 7.75 13.1006C7.75027 13.5104 8.09016 13.8506 8.5 13.8506H12.5C12.9098 13.8506 13.2497 13.5104 13.25 13.1006C13.25 12.6906 12.91 12.3506 12.5 12.3506H8.5ZM15.8496 0C18.1396 0 20 1.86039 20 4.15039C19.9998 4.81021 19.4597 5.34961 18.7998 5.34961H1.2002C0.540325 5.34961 0.000212965 4.81021 0 4.15039V4.13965C0.000189249 1.84993 1.84993 0.00018925 4.13965 0H15.8496Z"
                fill="#303030"
              />
            </svg>

            <span className="leading-[17px] -mt-0.5">Запросить на оплату</span>
          </Button>
        </div>
        {/* 4 */}
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
              <div className="px-3  h-[50px] flex items-start justify-center flex-col">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Формат
                </span>
                <span className="text-[13px] font-semibold leading-[10px]">
                  1 / 48
                </span>
              </div>
              <div className="px-3  h-[50px] flex items-start justify-center flex-col">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Время
                </span>
                <span className="text-[13px] font-semibold leading-[10px]">
                  10:21
                </span>
              </div>
              <div className="px-3  h-[50px] flex items-start justify-center flex-col">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Дата
                </span>
                <span className="text-[13px] font-semibold leading-[10px]">
                  01.07.25
                </span>
              </div>
            </div>
            <div className="bg-[#303030] relative rounded-15 h-[50px] flex pl-3 justify-center flex-col max-w-[100px] w-full">
              <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                Пост
              </span>
              <span className="text-[13px] font-semibold leading-[10px] text-[#59BFFF]">
                №17
              </span>
              <svg
                className="absolute top-1/2 -translate-y-1/2 right-[14px]"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5132 5.06751L5.68271 15.2308C5.32334 15.6923 4.79374 15.9519 4.22631 15.9615L1.10545 16C0.935224 16 0.793366 15.8846 0.755538 15.7212L0.0462524 12.6347C-0.0766904 12.0674 0.0462524 11.4809 0.405624 11.0289L5.95697 3.81753C6.05154 3.70215 6.22177 3.68388 6.33525 3.76946L8.67116 5.63481C8.82248 5.75981 9.03054 5.82711 9.24805 5.79827C9.71145 5.74057 10.0235 5.31751 9.97625 4.86559C9.94788 4.63483 9.83439 4.44252 9.68308 4.29829C9.63579 4.25983 7.41336 2.4714 7.41336 2.4714C7.27151 2.35602 7.24314 2.14449 7.35662 2.00122L8.23614 0.85605C9.04945 -0.192008 10.468 -0.28816 11.6123 0.625285L12.9269 1.67334C13.4659 2.09641 13.8253 2.65409 13.9482 3.24062C14.0901 3.8858 13.9388 4.51944 13.5132 5.06751Z"
                  fill="#59BFFF"
                />
              </svg>
            </div>
          </div>
          <div className="bg-[#303030] rounded-xl h-10 flex items-center mt-[7px]">
            <span className="text-xs font-semibold text-[#A3A3A3] px-[10px]">
              Отказ: не подходит пост
            </span>
          </div>
        </div>
        {/* ========= */}
        <div className="rounded-[20px] bg-[#242424] pt-3 pb-[13px]">
          <div className="pb-3 border-b border-[#303030] flex items-center justify-between pl-[14px] pr-[13px]">
            <div className="flex items-center gap-[5px]">
              <img src="/images/icons/bullhorn.svg" alt="" />
              <span className="text-xs font-semibold leading-[15px]">
                29.06.25 в 12:19
              </span>
            </div>

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
              <div className="bg-[#303030] rounded-15 h-[50px] flex pl-3 justify-center flex-col max-w-[135px] w-full">
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

        {/* 2 */}
        <div className="rounded-[20px] bg-[#242424] pt-3 pb-[13px]">
          <div className="pb-3 border-b border-[#303030] flex items-center justify-between pl-[14px] pr-[13px]">
            <div className="flex items-center gap-[5px]">
              <img src="/images/icons/bullhorn.svg" alt="" />
              <span className="text-xs font-semibold leading-[15px]">
                29.06.25 в 12:19
              </span>
            </div>

            <span className="text-xs font-semibold leading-[15px] text-[#FF9462]">
              Без ответа
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
              <div className="bg-[#303030] rounded-15 h-[50px] flex pl-3 justify-center flex-col max-w-[135px] w-full">
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
        {/* 3 */}
        <div className="rounded-[20px] bg-[#242424] pt-3 pb-[13px]">
          <div className="pb-3 border-b border-[#303030] flex items-center justify-between pl-[14px] pr-[13px]">
            <div className="flex items-center gap-[5px]">
              <img src="/images/icons/bullhorn.svg" alt="" />
              <span className="text-xs font-semibold leading-[15px]">
                29.06.25 в 12:19
              </span>
            </div>

            <span className="text-xs font-semibold leading-[15px]">Принят</span>
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
              <div className="bg-[#303030] rounded-15 h-[50px] flex pl-3 justify-center flex-col max-w-[135px] w-full">
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
        {/* 4 */}
        <div className="rounded-[20px] bg-[#242424] pt-3 pb-[13px]">
          <div className="pb-3 border-b border-[#303030] flex items-center justify-between pl-[14px] pr-[13px]">
            <div className="flex items-center gap-[5px]">
              <img src="/images/icons/bullhorn.svg" alt="" />
              <span className="text-xs font-semibold leading-[15px]">
                29.06.25 в 12:19
              </span>
            </div>
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
              <div className="bg-[#303030] rounded-15 h-[50px] flex pl-3 justify-center flex-col max-w-[135px] w-full">
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
        {/* 5 */}
        <div className="rounded-[20px] bg-[#242424] pt-3 pb-[13px]">
          <div className="pb-3 border-b border-[#303030] flex items-center justify-between pl-[14px] pr-[13px]">
            <div className="flex items-center gap-[5px]">
              <img src="/images/icons/bullhorn.svg" alt="" />
              <span className="text-xs font-semibold leading-[15px]">
                29.06.25 в 12:19
              </span>
            </div>

            <span className="text-xs font-semibold leading-[15px] text-[#FF9462]">
              23:59:59
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
                <p className="leading-[17px] font-semibold text-sm text-[#59BFFF]">
                  <span className="text-[#A3A3A3]">Цена:</span> 650₽
                </p>
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
              <div className="bg-[#303030] rounded-15 h-[50px] flex pl-3 justify-center flex-col max-w-[135px] w-full">
                <span className="text-[10px] font-medium block mb-[7px] text-[#A3A3A3] leading-[9px]">
                  Пост
                </span>
                <span className="text-[13px] font-semibold leading-[10px] text-[#468FF5]">
                  Показать
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
