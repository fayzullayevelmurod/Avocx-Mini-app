import Header from './layouts/Header';
import AppRoutes from './routes';
import BottomBar from './layouts/BottomBar';
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();

  // loading sahifasida headerni ko‘rsatmaslik
  const hideHeaderRoutes = ['/loading'];
  return (
    <div className='overflow-hidden pb-[100px]'>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <div className='container pb-5'>
        <AppRoutes />
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
