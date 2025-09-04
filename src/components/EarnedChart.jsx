import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";



export const EarnedChart = ({title, data, subTitle}) => {
  return (
    <div className="bg-[#303030] rounded-[20px] p-[10px]  px-0">
      {/* Title */}
      <h2 className="text-15 font-medium mb-1 text-center text-[#FFFFFF]">
        {title} <span className="text-[#00D79A]">{subTitle}</span>
      </h2>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={200}>
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
            stroke="#00D79A"
            strokeWidth={3}
            dot={{ r: 5, fill: "#00D79A" }}
            activeDot={{ r: 7, fill: "#00D79A" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
