import { Button, Sort } from "../components";
import { Header } from "../layouts";

const categoryOptions2 = [
  "Счастье Сейчас",
  "Счастье Сейчас 2",
  "Счастье Сейчас 3",
];

export const AnnouncementsExchange = () => {
  return (
    <div className="h-[calc(100vh_-_120px)] flex flex-col justify-between overflow-y-auto overflow-x-hidden">
      <div>
        <Header title="Кабинет" settingBtn={true} />
        <h3 className="text-center font-bold text-15 leading-[18px] mb-[11px]">
          Выберите канал
        </h3>
        <Sort
          label="Канал"
          icon={true}
          iconPath="/images/icons/stars.svg"
          options={categoryOptions2}
          className="item-width h-[54px]"
        />
      </div>
      <div className="my-4">
        <img
          className="w-[150px] mx-auto mb-3  h-[150px]"
          src="/gif/not-found.gif"
          alt=""
        />
        <p className="text-[#A3A3A3] font-semibold text-center max-w-[347px] mx-auto">
          Объявление для этого канала ещё не создано, чтобы получать рекламные
          заказы, создайте его.
        </p>
      </div>
      <div className="border-t border-[#242424] pt-3">
        <Button>
          <img src="/images/icons/plus-btn.svg" alt="" />
          <span>Создать объявление</span>
        </Button>
      </div>
    </div>
  );
};
