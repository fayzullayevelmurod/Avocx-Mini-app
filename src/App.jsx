import Header from './layouts/Header';
import AppRoutes from './routes';
import BottomBar from './layouts/BottomBar';
function App() {
  return (
    <div className='overflow-hidden pb-[100px]'>
      <Header />
      <div className='container pb-5'>
        <AppRoutes />
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
