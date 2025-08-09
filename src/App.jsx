import Header from "./layouts/Header";
import AppRoutes from "./routes";
import BottomBar from "./layouts/BottomBar";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const hideHeaderRoutes = ["/loading"];
  const hideBottomBarRoutes = ["/loading"];

  return (
    <div className="overflow-hidden pb-[100px]">
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <div className="container pb-5">
        <AppRoutes />
      </div>
      {!hideBottomBarRoutes.includes(location.pathname) && <BottomBar />}
    </div>
  );
}

export default App;
