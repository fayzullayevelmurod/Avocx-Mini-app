// routes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MapPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/my-shops' element={<MyShops />} />
      <Route path='/my-shops-two' element={<MyShopsTwo />} />
      <Route path='/create-shop' element={<Step />} />
      <Route path='/store-management' element={<StoreManagement />} />
      <Route path='/store-management-2' element={<StoreManagementTwo />} />
      <Route path='/product-card' element={<ProductCard />} />
      <Route path='/product-card-two' element={<ProductCardTwo />} />
      <Route path='/basket' element={<Basket />} />
      <Route path='/my-orders' element={<MyOrders />} />

    </Routes>
  );
};
export default AppRoutes;
