import { Button, SelectChannel, Sort } from "../components";
import { MyTable } from "../components/Table";
import { Footer, Header } from "../layouts";

const categoryOptions3 = [
  "Счастье Сейчас",
  "Счастье Сейчас 2",
  "Счастье Сейчас 3",
];
const columns = [
  { accessorKey: "date", header: "Когда" },
  { accessorKey: "channel", header: "Площадка" },
  { accessorKey: "price", header: "Цена" },
  {
    accessorKey: "avgPrice",
    header: "Ср. цена за подписчика",
    id: "rightFixed",
  },
];

const data = [
  {
    date: "29.06.25 в 12:19",
    channel: "Название канала",
    price: "650Р",
    avgPrice: "21,6Р",
  },
  {
    date: "29.06.25 в 12:19",
    channel: "Название канала",
    price: "650Р",
    avgPrice: "21,6Р",
  },
  {
    date: "29.06.25 в 12:19",
    channel: "Название канала",
    price: "650Р",
    avgPrice: "21,6Р",
  },
  {
    date: "29.06.25 в 12:19",
    channel: "Название канала",
    price: "650Р",
    avgPrice: "21,6Р",
  },
  {
    date: "29.06.25 в 12:19",
    channel: "Название канала",
    price: "650Р",
    avgPrice: "21,6Р",
  },
  {
    date: "29.06.25 в 12:19",
    channel: "Название канала",
    price: "650Р",
    avgPrice: "21,6Р",
  },
  {
    date: "29.06.25 в 12:19",
    channel: "Название канала",
    price: "650Р",
    avgPrice: "21,6Р",
  },

  // ...
];

export const MyCreatedAds = () => {
  return (
    <>
      <div>
        <Header
          search={true}
          action="Создать"
          settingBtn={true}
          actionIcon="/images/icons/blue-plus.svg"
        />
        <SelectChannel
          label="Канал"
          icon={true}
          iconPath="/images/icons/stars.svg"
          options={categoryOptions3}
          className="item-width !h-[54px]"
        />
        <div className="bg-[#242424] rounded-15 p-[14px]  mt-2 mb-[7px]">
          <h4 className="text-15 font-bold leading-[18px] text-center leading-[18px]">
            Всего привлечено: <span className="text-[#468FF5]">13456</span>
          </h4>
          <div className="flex items-center gap-[23px] mt-[10px] justify-center">
            <div className="flex items-center gap-[3px] ">
              <img src="/images/icons/check-user.svg" alt="" />
              <p className="text-xs font-semibold leading-[10px]">
                Осталось: <span className="text-[#468FF5]">13456</span>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <img src="/images/icons/check-wallet.svg" alt="" />
              <p className="text-xs font-semibold leading-[10px]">
                Затраты(₽): <span className="text-[#468FF5]">500000</span>
              </p>
            </div>
          </div>
          <Button className="!bg-[#303030] !h-10 mt-[15px] !rounded-[12px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.45284 0.712664C5.8276 -0.237556 7.1724 -0.237554 7.54716 0.712666L8.70851 3.65732C8.82293 3.94743 9.05257 4.17707 9.34268 4.29148L12.2873 5.45284C13.2376 5.8276 13.2376 7.1724 12.2873 7.54716L9.34268 8.70851C9.05257 8.82293 8.82293 9.05257 8.70851 9.34268L7.54716 12.2873C7.1724 13.2376 5.8276 13.2376 5.45284 12.2873L4.29148 9.34268C4.17707 9.05257 3.94743 8.82293 3.65732 8.70851L0.712664 7.54716C-0.237556 7.1724 -0.237554 5.8276 0.712666 5.45284L3.65732 4.29148C3.94743 4.17707 4.17707 3.94743 4.29148 3.65732L5.45284 0.712664Z"
                fill="#468FF5"
              />
              <path
                d="M14.9245 11.3916C15.1305 10.8695 15.8695 10.8695 16.0755 11.3916L16.9761 13.6753C17.039 13.8348 17.1652 13.961 17.3247 14.0239L19.6084 14.9245C20.1305 15.1305 20.1305 15.8695 19.6084 16.0755L17.3247 16.9761C17.1652 17.039 17.039 17.1652 16.9761 17.3247L16.0755 19.6084C15.8695 20.1305 15.1305 20.1305 14.9245 19.6084L14.0239 17.3247C13.961 17.1652 13.8348 17.039 13.6753 16.9761L11.3916 16.0755C10.8695 15.8695 10.8695 15.1305 11.3916 14.9245L13.6753 14.0239C13.8348 13.961 13.961 13.8348 14.0239 13.6753L14.9245 11.3916Z"
                fill="#468FF5"
              />
            </svg>

            <span className="text-[#468FF5]  text-xs">Сделать анализ</span>
          </Button>
        </div>

        {/* table */}
        <MyTable data={data} columns={columns} />
      </div>
      <Footer />
    </>
  );
};
