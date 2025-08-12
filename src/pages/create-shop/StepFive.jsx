import Button from '../../components/Button';
import CardUI from '../../components/CardUI';
import {
  CategoryForm,
  DropDown,
  SelectedBox,
  UploadFile,
} from '../../components/Form';

const StepFive = ({ onNext }) => {
  return (
    <div>
      <h3 className='text-xl text-center leading-[112%] mb-[21px]'>
        Создайте категории и к ним подкатегории, для удобной сортировки в вашем
        магазине.
      </h3>
      <CardUI className='space-y-[6px] !rounded-[30px] !pt-3'>
        <CategoryForm />
        <DropDown className='space-y-[7px]' label='Готовые решения'>
          <div className='pl-8'>
            <SelectedBox />
          </div>
          <div className='pl-[69px]'>
            <CategoryForm
              label='Подподкатегория'
              icon='/images/icons/plus-2.svg'
            />
          </div>
          <div className='pl-8'>
            <CategoryForm
              label='Подкатегория'
              icon='/images/icons/plus-2.svg'
            />
          </div>
          <CategoryForm />
          <div className='w-[356px]'></div>
        </DropDown>
        <div className='pt-3 space-y-[10px]'>
          <Button onClick={onNext}>Далее</Button>
          <UploadFile />
        </div>
      </CardUI>
    </div>
  );
};

export default StepFive;
