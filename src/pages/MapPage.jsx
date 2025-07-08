import { Link } from 'react-router-dom';

export const MapPage = () => {
  const routes = [
    { path: '/home', label: 'Home' },
    { path: '/my-shops', label: 'My Shops' },
    { path: '/my-shops-two', label: 'My Shops 2' },
    { path: '/create-shop', label: 'Create Shop' },
    { path: '/store-management', label: 'Store Management' },
    { path: '/store-management-2', label: 'Store Management 2' },
    { path: '/product-card', label: 'Product Card' },
    { path: '/product-card-two', label: 'Product Card 2' },
    { path: '/shops', label: 'Shops' },
    { path: '/basket', label: 'Basket' },
    { path: '/my-orders', label: 'My Orders' },
    { path: '/announcement', label: 'Announcement' },
    { path: '/announcement-two', label: 'Announcement 2' },
    { path: '/create-ad', label: 'Create Ad' },
    { path: '/create-ad-two', label: 'Create Ad 2' },
    { path: '/create-ad-success', label: 'Create Ad Success' },
  ];

  return (
    <div className='space-y-5 text-3xl'>
      {routes.map((route, index) => (
        <Link
          key={index}
          className='text-primary block underline'
          to={route.path}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};
