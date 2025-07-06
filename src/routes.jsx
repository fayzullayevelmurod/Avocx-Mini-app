// routes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import { MapPage } from './pages/MapPage';
import MyShops from './pages/MyShops';
import MyShopsTwo from './pages/MyShopsTwo';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MapPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/my-shops' element={<MyShops />} />
      <Route path='/my-shops-two' element={<MyShopsTwo />} />
    </Routes>
  );
};
export default AppRoutes;
