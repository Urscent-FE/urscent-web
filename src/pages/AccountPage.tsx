import { Outlet } from 'react-router-dom';

export const AccountPage = () => {
  return (
    <div>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <Outlet />
      </div>
    </div>
  );
};
