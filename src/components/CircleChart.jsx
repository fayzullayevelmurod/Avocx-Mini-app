import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { id: "ID-123456", name: "Название товара", value: 400, color: "#00C49F" },
  { id: "ID-123456", name: "Название товара", value: 300, color: "#9BFF00" },
  { id: "ID-123456", name: "Название товара", value: 300, color: "#FF8042" },
  { id: "ID-123456", name: "Название товара", value: 200, color: "#0088FE" },
  { id: "ID-123456", name: "Название товара", value: 200, color: "#C154FF" },
];

export const CircleChart = () => {
  return (
    <div className="bg-[#303030] rounded-[20px]  p-[10px]">
      <h2 className="text-center text-15 font-semibold mb-[10px]">Лучшие товары</h2>
      <div className="flex items-center justify-center gap-[10px]">
        {/* Donut chart */}
        <div className="circle-chart">
          <ResponsiveContainer width={100} height={100}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={50}
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend on the right */}
        <div className="flex flex-col gap-0.5">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-xs font-semibold">00%</span>
              <span className=" text-xs font-semibold">
                {item.id}. {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
