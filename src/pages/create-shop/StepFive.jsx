import Button from '../../components/Button';
import CardUI from '../../components/CardUI';
import { CategoryForm, Select, UploadFile } from '../../components/Form';

const StepFive = ({onNext}) => {
  const options = [
    { value: 'sell', label: 'Готовые решения' },
    { value: 'buy', label: 'Я покупаю2' },
    { value: 'rent', label: 'Я арендаю3' },
  ];

  return (
    <div>
      <h3 className='text-xl text-center leading-[100%] mb-[30px]'>
        Создайте категории и к ним подкатегории, для удобной сортировки в вашем
        магазине.
      </h3>
      <CardUI className='space-y-[6px]'>
        <CategoryForm />
        <Select options={options} />
        <div className='pt-3 space-y-[6px]'>
          <Button onClick={onNext}>Далее</Button>
          <UploadFile />
        </div>
      </CardUI>
    </div>
  );
};

export default StepFive;
