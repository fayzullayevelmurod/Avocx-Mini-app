import { useEffect, useRef, useState } from "react";
import {
  Button,
  InputForm,
  SelectChannel,
  SelectTime,
  Sort,
} from "../components";
import { CustomSelect } from "../components/CustomSelect";
import { Footer, Header } from "../layouts";
import { CategoriesModal, LetsModal } from "../components/modals";

const categoryOptions2 = [
  "Счастье Сейчас",
  "Счастье Сейчас 2",
  "Счастье Сейчас 3",
];

const options = ["Фикс", "CPM", "ПДП"];

export const CreatingExchange = () => {
  const [openModal, setOpenModal] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleOpen = (modalName) => setOpenModal(modalName);
  const handleClose = () => setOpenModal(null);

  // X bosilganda kategoriyani o‘chirish
  const handleRemoveCategory = (cat) => {
    setSelectedCategories((prev) => prev.filter((item) => item !== cat));
  };

  return (
    <>
      <div className="pb-[250px]">
        <Header title="Создание объявления" settingBtn={true} />
        <h3 className="text-center font-bold text-15 leading-[18px] mb-[11px]">
          Выберите канал
        </h3>
        <SelectChannel
          label="Канал"
          icon={true}
          iconPath="/images/icons/stars.svg"
          options={categoryOptions2}
          className="item-width h-[54px]"
        />
        <h3 className="text-center font-semibold text-15 leading-[12px] mt-[13px] mb-3">
          Выберите нишу вашего канала
        </h3>

        {/* Категория tanlash paneli */}
        <div className="p-[10px] bg-[#242424] rounded-15 pl-[14px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[7px]">
              <img src="/images/icons/category-2.svg" alt="" />
              <span>Категория:</span>
            </div>
            <Button
              onClick={() => handleOpen("category-modal")}
              className="!w-[129px] !h-[30px] rounded-[8px] text-xs"
            >
              Выбрать
            </Button>
          </div>
          {/* 🔽 Agar tanlangan kategoriya yo‘q bo‘lsa, "Не выбрано" chiqadi */}
          {selectedCategories.length === 0 ? null : (
            <div className="flex flex-wrap gap-1 mt-[7px]">
              {selectedCategories.map((cat) => (
                <div
                  key={cat}
                  className="p-[10px] h-[30px] text-[#59BFFF] flex items-center gap-2 text-[10px] font-medium bg-[#262E38] rounded-[10px] w-fit"
                >
                  <span>{cat}</span>
                  <button onClick={() => handleRemoveCategory(cat)}>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4999 15.4999L8.5 8.5M8.5 8.5L1.5 1.5M8.5 8.5L15.5 1.5M8.5 8.5L1.5 15.5"
                        stroke="#59BFFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <h3 className="text-center font-semibold text-15 leading-[12px] my-3">
          Укажите формат, условия и цену.
        </h3>
        <div className="space-y-2 mb-[7px]">
          <div className="flex divide-x divide-[#303030]">
            <div className="flex-1 relative bg-[#1C1C1C] max-w-[132px]">
              <span className="text-[13px] pl-3 mb-[5px] absolute top-[10px]">
                Формат
              </span>
              <SplitInput />
            </div>
            <div className="flex-1 relative bg-[#1C1C1C] !max-w-[110px]">
              <Sort
                label={null}
                icon={false}
                options={options}
                className="h-[55px] !rounded-none"
              />
            </div>
            <div className="flex-1 min-w-0 relative">
              <span className="text-[13px] pl-[10px] mb-[5px] absolute top-[10px]">
                Цена
              </span>
              <InputForm placeHolder="0" className="!rounded-l-none" />
            </div>
            <div className="bg-[#242424] w-[50px] h-[56px] border-none ml-1 rounded-15 flex items-center justify-center">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.751 5.35742C12.9105 5.35742 13.0555 5.42732 13.1699 5.54492C13.2765 5.67048 13.33 5.82647 13.3145 5.99121C13.3145 6.04561 12.8881 11.4373 12.6445 13.707C12.492 15.0998 11.5939 15.9455 10.2471 15.9688C9.21168 15.9919 8.19963 16 7.20312 16C6.14499 16 5.10992 15.992 4.10547 15.9688C2.8039 15.9375 1.90545 15.0766 1.76074 13.707C1.51021 11.4293 1.09176 6.04561 1.08398 5.99121C1.07624 5.82646 1.12899 5.67049 1.23633 5.54492C1.34214 5.42737 1.49503 5.35742 1.65527 5.35742H12.751ZM8.85156 0C9.55873 0 10.1911 0.493383 10.374 1.19727L10.5039 1.78125C10.6097 2.25723 11.0225 2.5947 11.4971 2.59473H13.8301C14.1411 2.59494 14.4004 2.85298 14.4004 3.18164V3.48535C14.4004 3.80602 14.1411 4.07302 13.8301 4.07324H0.571289C0.259294 4.07324 0 3.80615 0 3.48535V3.18164C0 2.85284 0.259294 2.59473 0.571289 2.59473H2.90332C3.37715 2.59473 3.78989 2.25742 3.89648 1.78223L4.01855 1.23633C4.20849 0.493498 4.83312 0.000168159 5.54785 0H8.85156Z"
                  fill="#464646"
                />
              </svg>
            </div>
          </div>
          <div className="flex divide-x divide-[#303030]">
            <div className="flex-1 relative bg-[#1C1C1C] max-w-[132px]">
              <span className="text-[13px] pl-3 mb-[5px] absolute top-[10px]">
                Формат
              </span>
              <SplitInput defaultFirst="1" defaultSecond="24" />
            </div>
            <div className="flex-1 relative bg-[#1C1C1C] !max-w-[110px]">
              <Sort
                label={null}
                icon={false}
                options={options}
                className="h-[55px] !rounded-none"
              />
            </div>
            <div className="flex-1 min-w-0 relative">
              <span className="text-[13px] pl-[10px] mb-[5px] absolute top-[10px]">
                Цена
              </span>
              <InputForm
                placeHolder="0"
                className="!rounded-l-none"
                value={3500}
              />
            </div>
            <div className="bg-[#242424] w-[50px] h-[56px] border-none ml-1 rounded-15 flex items-center justify-center">
              <img src="/images/icons/trash.svg" alt="" />
            </div>
          </div>
        </div>
        <Button type="lightGray">
          <img
            className="filter invert brightness-0"
            src="/images/icons/plus-btn.svg"
            alt=""
          />
          <span>Добавить формат</span>
        </Button>
        <p className="text-[11px] font-normal text-[#B1B1B1] mt-[7px] mb-3">
          <span className="text-base-white">Формат это</span> — то, сколько и
          как будет размещена ваша реклама, на примере «1 / 24»: «1» - это час в
          топе канале без перекрытия, затем «24» часа в ленте канала.
        </p>
        <h3 className="text-center font-semibold text-15 leading-[12px] my-3">
          Дни для рекламных публикаций:
        </h3>
        <div className="space-y-[7px] mb-[7px]">
          <SelectTime className="pb-[12px]" />
          <SelectTime className="pb-[12px]" deleteItem={true} />
        </div>
        <Button type="lightGray">
          <img
            className="filter invert brightness-0"
            src="/images/icons/plus-btn.svg"
            alt=""
          />
          <span>Добавить ещё время</span>
        </Button>
        {/* <div className="border-t border-[#242424] pt-3 w-[calc(100%_+_26px)] -ml-[13px] px-[13px] mt-3">
          <Button onClick={() => handleOpen("lets-modal")}>
            <img src="/images/icons/plus-btn.svg" alt="" />
            <span>Создать</span>
          </Button>
        </div> */}
      </div>

      <LetsModal isOpen={openModal === "lets-modal"} onClose={handleClose} />
      <CategoriesModal
        isOpen={openModal === "category-modal"}
        onClose={handleClose}
        onApply={(selected) => {
          setSelectedCategories(selected);
          handleClose();
        }}
        defaultSelected={selectedCategories}
      />
      <Footer
        btn="Создать"
        onClick={() => handleOpen("lets-modal")}
        btnIcon="/images/icons/plus-btn.svg"
      />
    </>
  );
};

const SplitInput = ({ defaultFirst = "", defaultSecond = "" }) => {
  const [first, setFirst] = useState(defaultFirst);
  const [second, setSecond] = useState(defaultSecond);

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  // 🔥 Props orqali kelgan qiymatlar o‘zgarsa — inputlarni yangilash
  useEffect(() => {
    setFirst(defaultFirst);
    setSecond(defaultSecond);
  }, [defaultFirst, defaultSecond]);

  const handleFirstChange = (e) => {
    const val = e.target.value;
    if (/^\d?$/.test(val)) {
      setFirst(val);
      if (val.length === 1 && secondInputRef.current) {
        secondInputRef.current.focus();
      }
    }
  };

  const handleSecondChange = (e) => {
    const val = e.target.value;
    if (/^\d{0,3}$/.test(val)) {
      setSecond(val);
      if (val.length === 0 && firstInputRef.current) {
        firstInputRef.current.focus();
        setFirst("");
      }
    }
  };

  return (
    <div className="flex items-center bg-[#242424] rounded-l-15 h-[55px] pt-[17px]">
      <input
        ref={firstInputRef}
        className="w-[20px] placeholder:text-[#464646] text-base-white pl-3 bg-transparent outline-none text-15 text-center"
        type="text"
        value={first}
        onChange={handleFirstChange}
        placeholder="1"
      />
      <span className="text-white text-sm ml-1">/</span>
      <input
        ref={secondInputRef}
        className="w-[40px] pl-[7px] placeholder:text-[#464646] text-left text-base-white bg-transparent outline-none text-15"
        type="text"
        value={second}
        onChange={handleSecondChange}
        placeholder="24"
      />
    </div>
  );
};
