import { Route, Routes } from "react-router-dom";
import { AddingProduct, AdvertisingAccount, AdvertisingExchange, CartProducts, ChannelSettings, Home, Loading, ManagementCharacteristics, MapPage, MyAds, MyShops, Notifications, Settings, SlideWindow, StoreManagement, StoreManagementTwo, Wallet } from "./pages";
import { AddingProductTwo } from "./pages/AddingProductTwo";

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
      <Route path="/my-ads" element={<MyAds  />} />
      <Route path="/my-shops" element={<MyShops  />} />
      <Route path="/store-management" element={<StoreManagement  />} />
      <Route path="/store-management-two" element={<StoreManagementTwo  />} />
      <Route path="/management-characteristics" element={<ManagementCharacteristics  />} />
      <Route path="/adding-product" element={<AddingProduct  />} />
      <Route path="/adding-product-two" element={<AddingProductTwo  />} />

    </Routes>
  );
};
export default AppRoutes;
