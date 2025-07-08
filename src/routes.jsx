// routes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import { MapPage } from './pages/MapPage';
import MyShops from './pages/MyShops';
import MyShopsTwo from './pages/MyShopsTwo';
import Step from './pages/create-shop/Step';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MapPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/my-shops' element={<MyShops />} />
      <Route path='/my-shops-two' element={<MyShopsTwo />} />
      <Route path='/create-shop' element={<Step />} />
    </Routes>
  );
};
export default AppRoutes;
