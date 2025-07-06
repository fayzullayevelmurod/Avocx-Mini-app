const Search = () => {
  return (
    <div className='relative bg-charcoal h-[46px] w-full rounded-2xl'>
      <img
        className='absolute top-1/2 -translate-y-1/2 left-4'
        src='/images/icons/search.svg'
        alt='search'
      />
      <input
        className='w-full h-full bg-transparent pl-8 placeholder:text-iron text-sm'
        type='text'
        placeholder='Поиск..'
      />
    </div>
  );
};
export default Search;
