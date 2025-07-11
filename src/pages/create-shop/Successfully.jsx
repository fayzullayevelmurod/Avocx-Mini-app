import Button from "../../components/Button";

const Successfully = () => {
  return (
    <div className='text-center mt-7'>
      <img className='mx-auto w-[207px] h-[207px]' src='/gif/4.gif' alt='' />
      <h3 className='text-[30px] italic font-semibold mt-[13px]'>Успешно!</h3>
      <p className='text-[17px] leading-full mb-5 mt-3'>
        Ваш магазин создается, после создания он появится в «Мои магазины», и вы
        сможете добавить свои первые товары и продавать!
      </p>
      <Button className="h-[58px]">Продолжить</Button>
    </div>
  );
};

export default Successfully;
