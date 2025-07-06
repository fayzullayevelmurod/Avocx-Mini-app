// routes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
};
export default AppRoutes;
