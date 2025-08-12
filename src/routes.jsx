// routes.jsx
import { Routes, Route } from 'react-router-dom';
import { MapPage } from './pages/MapPage';
import MyShops from './pages/MyShops';
import MyShopsTwo from './pages/MyShopsTwo';
import Step from './pages/create-shop/Step';
import StoreManagement from './pages/StoreManagement';
import StoreManagementTwo from './pages/StoreManagementTwo';
import ProductCard from './pages/ProductCard';
import ProductCardTwo from './pages/ProductCardTwo';
import Basket from './pages/Basket';
import MyOrders from './pages/MyOrders';
import Announcement from './pages/Announcement';
import AnnouncementTwo from './pages/AnnouncementTwo';
import CreateAd from './pages/CreateAd';
import CreateAdTwo from './pages/CreateAdTwo';
import CreateAdSuccess from './pages/CreateAdSuccess';
import Shops from './pages/Shops';
import Home from './pages/Home';
import Loading from './pages/Loading';
import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome';
import { MyShopNotFound } from './pages/MyShopNotFound';
import { ProductsMyStores } from './components/ProductsMyStores';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MapPage />} />
      <Route path='/shops' element={<Shops />} />
      <Route path='/home' element={<Home />} />
      <Route path='/my-shops' element={<MyShops />} />
      <Route path='/my-shops-two' element={<MyShopsTwo />} />
      <Route path='/create-shop' element={<Step />} />
      <Route path='/store-management' element={<StoreManagement />} />
      <Route path='/store-management-2' element={<StoreManagementTwo />} />
      <Route path='/product-card' element={<ProductCard />} />
      <Route path='/product-card-two' element={<ProductCardTwo />} />
      <Route path='/basket' element={<Basket />} />
      <Route path='/my-orders' element={<MyOrders />} />
      <Route path='/announcement' element={<Announcement />} />
      <Route path='/announcement-two' element={<AnnouncementTwo />} />
      <Route path='/create-ad' element={<CreateAd />} />
      <Route path='/create-ad-two' element={<CreateAdTwo />} />
      <Route path='/create-ad-success' element={<CreateAdSuccess />} />
      <Route path='/loading' element={<Loading />} />
      <Route path='/not-found' element={<NotFound />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/my-shop-not-found' element={<MyShopNotFound />} />
      <Route path='/products-my-stores' element={<ProductsMyStores />} />
    </Routes>
  );
};
export default AppRoutes;
