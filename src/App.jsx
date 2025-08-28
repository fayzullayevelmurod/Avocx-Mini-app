import { useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import { Header, Footer } from "./layouts";

export const App = () => {
  const location = useLocation();

  const hideBottomBarRoutes = ["/loading"];

  return (
    <div className="overflow-hidden pb-[100px]">
      <div className="container pb-5">
        <AppRoutes />
      </div>
      {!hideBottomBarRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};
