import Button from "../../components/Button";
import CardUI from "../../components/CardUI";
import { TextareaForm } from "../../components/Form";

const StepFour = ({ onNext }) => {
  return (
    <>
      <h3 className="text-xl text-center leading-[116%] w-[97%] mx-auto -mt-1">
        Напишите ключевые слова, для улучшения поиска вашего магазина и товаров
        пользователями.
      </h3>
      <p className="text-center mb-[22px] mt-[15px] text-15 text-[#888888] w-[93%] mx-auto leading-[110%]">
       Слова в едином числе, которые реально относятся к вашей нише.
      </p>
      <CardUI className="space-y-3 !pt-[11px] !pl-3 !pr-[10px]  !rounded-[30px]">
        <TextareaForm placeHolder="Палатка, термос, поход — от 10 слов. " />
        <Button onClick={onNext}>Далее</Button>
      </CardUI>
    </>
  );
};

export default StepFour;
