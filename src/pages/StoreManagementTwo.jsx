import Button from '../components/Button';
import CardUI from '../components/CardUI';
import {
  CategoryForm,
  DropDown,
  Select,
  SelectedBox,
  UploadFile,
} from '../components/Form';
import Title from '../components/Title';

const StoreManagementTwo = () => {

  return (
    <div>
      <div className='relative'>
        <button className='w-10 absolute top-1/2 left-0 -translate-y-1/2'>
          <img src='/images/icons/prev-arrow.svg' alt='previous step' />
        </button>
        <Title label='Управление магазином' />
      </div>
      <p className='text-center text-[17px] mb-6'>
        Можно добавить, переименовать и удалить, при удалении, существующий
        товар сделает шаг назад по категориям.
      </p>
      <CardUI>
        <DropDown className='space-y-[7px]' isOpen={true}>
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
        <div className='pt-4 space-y-[7px]'>
          <Button>Сохранить изменения</Button>
          <UploadFile />
        </div>
      </CardUI>
    </div>
  );
};

export default StoreManagementTwo;
