import { Route, Routes } from "react-router-dom";
import { Home, Loading, MapPage, SlideWindow } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      {/* finished pages */}
      <Route path="/" element={<MapPage />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/slide-window" element={<SlideWindow />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
export default AppRoutes;
