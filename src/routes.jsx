import { Route, Routes } from "react-router-dom";
import { Loading, MapPage, SlideWindow } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      {/* finished pages */}
      <Route path="/" element={<MapPage />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/slide-window" element={<SlideWindow />} />
    </Routes>
  );
};
export default AppRoutes;
