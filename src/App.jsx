import Header from './layouts/Header';
import AppRoutes from './routes';

function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <div className='container'>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
