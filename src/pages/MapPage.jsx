import { Link } from 'react-router-dom';

export const MapPage = () => {
  return (
    <div className='space-y-5 text-3xl'>
      <Link className='text-primary block underline' to='/home'>Home</Link>
      <Link className='text-primary block underline' to='/my-shops'>Мои магазины</Link>
      <Link className='text-primary block underline' to='/my-shops-two'>Мои магазины 2</Link>
    </div>
  );
};
