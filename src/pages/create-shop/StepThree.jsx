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
    <CardUI className='space-y-[5px] !rounded-[30px]'>
      <Select className='border text-white border-iron' options={options} />
      <Select className='border text-white border-iron' options={options1} />
      <Select className='border text-white border-iron' options={options2} />
      <Select className='border text-white border-iron' options={options3} />
      <Button onClick={onNext}>Далее</Button>
    </CardUI>
  );
};

export default StepThree;
