export const Search = ({ className }) => {
  return (
    <div
      className={`relative  bg-[#272727] h-[46px] w-full rounded-[20px] ${className}`}
    >
      <svg
        className="absolute top-1/2 -translate-y-1/2 left-4"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9346 10.958C11.2051 10.6894 11.6386 10.6894 11.9092 10.958L13.6973 12.4014H13.7285C14.0903 12.767 14.0903 13.3599 13.7285 13.7256C13.3668 14.0912 12.7807 14.0911 12.4189 13.7256L10.9346 12.0254C10.7943 11.8841 10.7158 11.6914 10.7158 11.4912C10.7159 11.2911 10.7943 11.0993 10.9346 10.958ZM6.00391 0C7.5963 0 9.12398 0.639288 10.25 1.77734C11.376 2.91548 12.0088 4.45977 12.0088 6.06934C12.0085 9.42086 9.31986 12.1377 6.00391 12.1377C2.68816 12.1375 0.00025444 9.42071 0 6.06934C0 2.71774 2.688 0.000239679 6.00391 0Z"
          fill="#A3A3A3"
        />
      </svg>

      <input
        className="w-full ml-1 h-full bg-transparent pl-8 placeholder:text-[#707070] text-sm"
        type="text"
        placeholder="Искать.."
      />
    </div>
  );
};
