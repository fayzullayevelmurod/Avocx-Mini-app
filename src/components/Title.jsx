const Title = ({ label, className }) => {
  return (
    <h1
      className={`${className} text-center text-[17px] font-semibold leading-[100%] my-4`}
    >
      {label}
    </h1>
  );
};
export default Title;
