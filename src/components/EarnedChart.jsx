import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export const EarnedChart = ({ title, data, subTitle, subTitle2, title2, subTitle3, title3 }) => {
  return (
    <div className="bg-charcoal rounded-15 p-[10px] pt-3 px-0">
      {/* Title */}
      <h2 className="text-xs font-semibold mb-1 text-center leading-[9px]">
        {title} <span className="text-green">{subTitle}</span>
      </h2>
      <div className="flex items-center gap-0.5 justify-center">
        <h3 className="font-semibold leading-[9px] mt-[5px] text-center text-[10px]">
          {title2} <span className="text-[#E679FF]">{subTitle2}</span>
        </h3>
        <h3 className="font-semibold leading-[9px] mt-[5px] text-center text-[10px]">
          {title3} <span className="text-[#E679FF]">{subTitle3}</span>
        </h3>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={168}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: -15, bottom: 0 }}
        >
          <XAxis dataKey="date" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f1f1f",
              border: "none",
              color: "#fff",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#52E063"
            strokeWidth={3}
            dot={{ r: 5, fill: "#52E063" }}
            activeDot={{ r: 7, fill: "#52E063" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
