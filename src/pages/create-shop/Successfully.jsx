import Button from "../../components/Button";

const Successfully = () => {
  return (
    <div className='text-center pt-2'>
      <img className='mx-auto' src='/images/successfully.png' alt='' />
      <h3 className='text-[30px] italic font-semibold'>Успешно!</h3>
      <p className='text-[17px] leading-full mb-5 mt-1'>
        Ваш магазин создается, после создания он появится в «Мои магазины», и вы
        сможете добавить свои первые товары и продавать!
      </p>
      <Button className="h-[58px]">Продолжить</Button>
    </div>
  );
};

export default Successfully;
