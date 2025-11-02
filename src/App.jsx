import AppRoutes from "./routes";
import { Footer } from "./layouts";

export const App = () => {
  return (
    <div className="overflow-hidden bg-[#1C1C1C]">
      <div className="container">
        <AppRoutes />
      </div>
    </div>
  );
};
