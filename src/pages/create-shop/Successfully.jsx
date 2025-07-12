import Button from "../../components/Button";

const Successfully = () => {
  return (
    <div className='text-center mt-[21px]'>
      <img className='mx-auto w-[207px] h-[207px]' src='/gif/4.gif' alt='' />
      <h3 className='text-[30px] italic font-semibold mt-6'>Успешно!</h3>
      <p className='text-[17px] leading-full mb-[34px] mt-5'>
        Ваш магазин создается, после создания он появится в «Мои магазины»
      </p>
      <Button className="!w-[284px] mx-auto !rounded-[20px]">Ок</Button>
    </div>
  );
};

export default Successfully;
