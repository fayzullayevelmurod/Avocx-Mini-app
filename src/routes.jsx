import { Route, Routes } from "react-router-dom";
import {
  AddingProduct,
  AdvertisingAccount,
  AdvertisingExchange,
  AnnouncementsExchange,
  BuyerAdvertisingOrders,
  BuyerAdvertisingOrdersThree,
  BuyerAdvertisingOrdersTwo,
  CartProducts,
  ChannelSettings,
  CreateShop,
  CreatingExchange,
  Exchange,
  Home,
  Loading,
  ManagementCharacteristics,
  MapPage,
  MarketplaceProducts,
  MyAds,
  MyAdsExchange,
  MyShop,
  MyShops,
  Notifications,
  ProductCardPage,
  ProductsMyStores,
  Settings,
  SettingUpDetails,
  ShoppingCartAdvertising,
  ShopView,
  SlideWindow,
  StoreManagement,
  StoreManagementTwo,
  Wallet,
} from "./pages";
import { AddingProductTwo } from "./pages/AddingProductTwo";
import { MarketplaceStores } from "./pages/MarketplaceStores";
import { CreatingAdvertisingPost } from "./pages/CreatingAdvertisingPost";

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

      {/* finished pages */}
      <Route path="/loading" element={<Loading />} />
      <Route path="/slide-window" element={<SlideWindow />} />
      <Route path="/home" element={<Home />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/cart-products" element={<CartProducts />} />
      <Route path="/advertising-exchange" element={<AdvertisingExchange />} />
      <Route path="/advertising-account" element={<AdvertisingAccount />} />
      <Route path="/channel-settings" element={<ChannelSettings />} />
      <Route path="/my-ads" element={<MyAds />} />
      <Route path="/my-shops" element={<MyShops />} />
      <Route path="/store-management" element={<StoreManagement />} />
      <Route path="/store-management-two" element={<StoreManagementTwo />} />
      <Route
        path="/management-characteristics"
        element={<ManagementCharacteristics />}
      />
      <Route path="/adding-product" element={<AddingProduct />} />
      <Route path="/adding-product-two" element={<AddingProductTwo />} />
      <Route path="/my-shop" element={<MyShop />} />
      <Route path="/marketplace-stores" element={<MarketplaceStores />} />
      <Route path="/marketplace-products" element={<MarketplaceProducts />} />
      <Route path="/shop-view" element={<ShopView />} />
      <Route path="/product-card" element={<ProductCardPage />} />
      <Route path="/create-shop" element={<CreateShop />} />
      <Route path="/products-my-stores" element={<ProductsMyStores />} />
    </Routes>
  );
};
export default AppRoutes;
