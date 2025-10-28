import "swiper/css";
import "swiper/css/navigation";
export const Categories = ({ categories }) => {
  return (
    <div className="flex gap-[3px] overflow-x-auto no-scrollbar px-3 w-[calc(100%_+_24px)] -ml-3">
      {categories.map((item) => (
        <div className="bg-[#283134] rounded-xl min-w-[124px] max-w-[124px] h-[42px] flex items-center justify-center text-[#B8EDBE] text-xs font-bold">
          {item.label}
        </div>
      ))}
    </div>
  );
};
