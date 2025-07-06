// routes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import { MapPage } from './pages/MapPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MapPage />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
};
export default AppRoutes;
