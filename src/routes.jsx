// routes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import { MapPage } from './pages/MapPage';
import MyShops from './pages/MyShops';
import MyShopsTwo from './pages/MyShopsTwo';
import Step from './pages/create-shop/Step';
import StoreManagement from './pages/StoreManagement';
import StoreManagementTwo from './pages/StoreManagementTwo';

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
    </Routes>
  );
};
export default AppRoutes;
