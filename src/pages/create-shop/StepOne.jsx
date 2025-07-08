import Button from '../../components/Button';
import CardUI from '../../components/CardUI';
import {
  InputForm,
  Select,
  TextareaForm,
  UploadImg,
} from '../../components/Form';

const StepOne = ({ onNext }) => {
  const options = [
    { value: 'sell', label: 'Я продаю' },
    { value: 'buy', label: 'Я покупаю' },
    { value: 'rent', label: 'Я арендаю' },
  ];

  const options1 = [
    { value: 'sell1', label: 'В какой нише ваши товары' },
    { value: 'buy', label: 'Я покупаю' },
    { value: 'rent', label: 'Я арендаю' },
  ];

  const options2 = [
    { value: 'sell2', label: 'Закрытый или Открытый магазин' },
    { value: 'buy', label: 'Я покупаю' },
    { value: 'rent', label: 'Я арендаю' },
  ];

  return (
    <div>
      <CardUI className='space-y-2'>
        <InputForm placeHolder='| Название магазина' />
        <TextareaForm placeHolder='| Напишите краткое описание магазина, до 100 симолов.' />
        <Select options={options} />
        <Select options={options1} />
        <Select options={options2} />
        <InputForm placeHolder='| Название кнопки магазина (кратко)' />
        <UploadImg label='Добавьте логотип магазина' />
        <UploadImg label='Добавьте баннер магазина' />
        <Button onClick={onNext}>Далее</Button>
      </CardUI>
    </div>
  );
};

export default StepOne;
