import { Button, Sort } from "../components";
import { Footer, Header } from "../layouts";

const categoryOptions2 = [
  "Счастье Сейчас",
  "Счастье Сейчас 2",
  "Счастье Сейчас 3",
];

export const AnnouncementsExchange = () => {
  return (
    <>
      <div className="h-[calc(100vh_-_151px)] relative overflow-y-auto overflow-x-hidden">
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
        <div className="mb-4 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[347px] mt-[80px]">
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
      </div>
      <Footer btn="Создать объявление" btnIcon="/images/icons/plus-btn.svg" btnOnClick={() => {}} />
    </>
  );
};
