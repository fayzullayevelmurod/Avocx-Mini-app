import { useState } from "react";
import { Footer, Header } from "../layouts";
import { Button, Checkbox } from "../components";

export const SettingUpDetails = () => {
  const [check, setCheck] = useState(false);
  const [cards, setCards] = useState([
    { number: "1234 5678 9101 1121", bank: "Т-банк" },
    { number: "", bank: "" },
    { number: "", bank: "" },
  ]);

  const [phones, setPhones] = useState([
    { number: "", bank: "" },
    { number: "", bank: "" },
  ]);

  // --- 🔸 CARD FORMAT: faqat raqam + formatlash ---
  const formatCard = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 16); // faqat raqamlar
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim(); // har 4 raqamdan keyin bo‘sh joy
  };

  // --- 🔸 PHONE FORMAT: +7 999 999 99 99 ---
  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, ""); // raqamdan boshqa belgilarni o‘chirish
    let formatted = "+7 ";
    if (digits.startsWith("7")) {
      const d = digits.slice(1);
      formatted += d
        .replace(/(\d{3})(\d{3})(\d{2})(\d{2}).*/, "$1 $2 $3 $4")
        .trim();
    } else {
      formatted += digits
        .replace(/(\d{3})(\d{3})(\d{2})(\d{2}).*/, "$1 $2 $3 $4")
        .trim();
    }
    return formatted.slice(0, 16);
  };

  const handleChange = (arr, setArr, index, field, formatter) => (e) => {
    const value = formatter ? formatter(e.target.value) : e.target.value;
    const copy = [...arr];
    copy[index][field] = value;
    setArr(copy);
  };

  const handleDelete = (arr, setArr, index) => {
    const copy = [...arr];
    copy[index] = { number: "", bank: "" };
    setArr(copy);
  };

  const renderInputs = (data, setData, isCard = true) =>
    data.map((item, index) => (
      <div
        key={index}
        className="bg-[#242424] rounded-15 py-[16px] px-[14px] h-[50px] flex gap-1 items-center"
      >
        <div className="flex items-center gap-[13px]">
          <img
            src={
              isCard
                ? "/images/icons/card-pay-white.svg"
                : "/images/icons/mobile-phone.svg"
            }
            alt=""
            className={isCard ? "" : "filter invert brightness-0"}
          />

          <input
            className="bg-transparent placeholder:text-[#464646] outline-none"
            style={{
              width: isCard ? (item.number ? "136px" : "172px") : "128px",
            }}
            type="text"
            inputMode="numeric"
            placeholder={isCard ? "0000 0000 0000 0000" : "+7 999 999 99 99"}
            value={item.number}
            onChange={handleChange(
              data,
              setData,
              index,
              "number",
              isCard ? formatCard : formatPhone
            )}
          />
        </div>

        <div className="w-[2px] bg-[#59BFFF] h-full"></div>

        <input
          className="bg-transparent placeholder:text-[#464646] outline-none"
          style={{
            width: "90px",
          }}
          type="text"
          placeholder="банка"
          value={item.bank}
          onChange={handleChange(data, setData, index, "bank")}
        />

        {(item.number || item.bank) && (
          <button
            className="ml-auto"
            onClick={() => handleDelete(data, setData, index)}
          >
            <img src="/images/icons/trash.svg" alt="trash" />
          </button>
        )}
      </div>
    ));

  return (
    <>
      <div className="pb-[200px]">
        <div>
          <Header title="Мои реквизиты" settingBtn={true} />

          <h3 className="text-center max-w-[302px] mx-auto mb-3 leading-[18px] text-15 font-bold">
            Введите свои реквизиты, для приёма оплат за рекламу.
          </h3>

          <h3 className="text-15 font-semibold text-center mb-3 leading-[16px]">
            Банковские карты
          </h3>
          <div className="space-y-[7px]">
            {renderInputs(cards, setCards, true)}
          </div>

          <h3 className="text-center text-15 font-bold my-3 leading-4">
            Номер телефона (СБП)
          </h3>
          <div className="space-y-[7px]">
            {renderInputs(phones, setPhones, false)}
          </div>
          <div className="flex gap-[6px] mt-4">
            <div className="mt-0.5">
              <Checkbox checked={check} onChange={() => setCheck(!check)} />
            </div>
            <p className="text-xs text-[#A3A3A3] font-semibold max-w-[381px]">
              Я подтверждаю, что: <br /> 1. Указанные мной реквизиты принадлежат
              мне и исправны для перевода на них денежных средств. <br /> 2.
              Указаны достоверно. <br /> 3. Я не использую реквизиты третих лиц
              для приёма оплат. <br /> 4. Понимаю и принимаю всю ответственность
              на себя за не правильно указанные мною данные.
            </p>
          </div>
        </div>
      </div>
      <Footer btn="Сохранить" />
    </>
  );
};
