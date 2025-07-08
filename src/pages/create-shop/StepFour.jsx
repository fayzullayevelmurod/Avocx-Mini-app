import Button from '../../components/Button';
import CardUI from '../../components/CardUI';
import { TextareaForm } from '../../components/Form';

const StepFour = ({onNext}) => {
  return (
    <>
      <h3 className='text-xl text-center leading-[100%]'>
        Напишите ключевые слова, для улучшения поиска вашего магазина и товаров
        пользователями.
      </h3>
      <p className='text-center mb-[10px] mt-5 text-15 text-[#888888] leading-[100%]'>
        Слова в едином числе, которые реально относятся к вашей нише.
      </p>
      <CardUI className='space-y-[14px]'>
        <TextareaForm placeHolder='Палатка, термос, поход — от 10 слов. ' />
        <Button onClick={onNext}>Далее</Button>
      </CardUI>
    </>
  );
};

export default StepFour;
