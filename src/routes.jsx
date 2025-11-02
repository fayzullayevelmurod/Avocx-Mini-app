import { Route, Routes } from "react-router-dom";
import {
  AnnouncementsExchange,
  BuyerAdvertisingOrders,
  BuyerAdvertisingOrdersThree,
  BuyerAdvertisingOrdersTwo,
  CreatingExchange,
  Exchange,
  MyAdsExchange,
  MyCreatedAds,
  Settings,
  SettingUpDetails,
  ShoppingCartAdvertising,
} from "./pages";
import { CreatingAdvertisingPost } from "./pages/CreatingAdvertisingPost";
import { MapPage } from "./pages/MapPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MapPage />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route
        path="/announcements-exchange"
        element={<AnnouncementsExchange />}
      />
      <Route path="/setting-up-details" element={<SettingUpDetails />} />
      <Route path="/creating-exchange" element={<CreatingExchange />} />
      <Route path="/my-ads-exchange" element={<MyAdsExchange />} />
      <Route
        path="/buyer-advertising-orders"
        element={<BuyerAdvertisingOrders />}
      />
      <Route
        path="/creating-advertising-post"
        element={<CreatingAdvertisingPost />}
      />
      <Route
        path="/shopping-cart-advertising"
        element={<ShoppingCartAdvertising />}
      />
      <Route
        path="/buyer-advertising-orders-two"
        element={<BuyerAdvertisingOrdersTwo />}
      />
      <Route
        path="/buyer-advertising-orders-three"
        element={<BuyerAdvertisingOrdersThree />}
      />
      <Route path="/my-created-ads" element={<MyCreatedAds />} />
    </Routes>
  );
};
export default AppRoutes;
