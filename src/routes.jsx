import { Route, Routes } from "react-router-dom";
import { AdvertisingAccount, AdvertisingExchange, CartProducts, ChannelSettings, Home, Loading, MapPage, Notifications, Settings, SlideWindow, Wallet } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      {/* finished pages */}
      <Route path="/" element={<MapPage />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/slide-window" element={<SlideWindow />} />
      <Route path="/home" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/cart-products" element={<CartProducts />} />
      <Route path="/advertising-exchange" element={<AdvertisingExchange  />} />
      <Route path="/advertising-account" element={<AdvertisingAccount  />} />
      <Route path="/channel-settings" element={<ChannelSettings  />} />



    </Routes>
  );
};
export default AppRoutes;
