import Button from '../../components/Button';
import CardUI from '../../components/CardUI';
import { Select } from '../../components/Form';

const StepThree = ({onNext}) => {
  const options = [
    { value: 'sell', label: 'Процесс оплаты' },
    { value: 'buy', label: 'Я покупаю' },
    { value: 'rent', label: 'Я арендаю' },
  ];

  const options1 = [
    { value: 'sell1', label: 'Способы оплаты' },
    { value: 'buy', label: 'Я покупаю' },
    { value: 'rent', label: 'Я арендаю' },
  ];

  const options2 = [
    { value: 'sell2', label: 'Способы доставки товаров' },
    { value: 'buy', label: 'Я покупаю' },
    { value: 'rent', label: 'Я арендаю' },
  ];

  const options3 = [
    { value: 'sell2', label: 'Возврат' },
    { value: 'buy', label: 'Я покупаю' },
    { value: 'rent', label: 'Я арендаю' },
  ];

  return (
    <CardUI className='space-y-2'>
      <Select options={options} />
      <Select options={options1} />
      <Select options={options2} />
      <Select options={options3} />
      <Button onClick={onNext}>Далее</Button>
    </CardUI>
  );
};

export default StepThree;
