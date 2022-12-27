import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HomeFooter } from '@/components/homefooter/HomeFooter';
import { HomeHeader } from '@/components/homeheader/HomeHeader';

export const HomePage = () => {
  const [userLogin, setUserLogin] = useState(false);

  return (
    <div className='init-wrapper'>
      <HomeHeader userLogin={userLogin} />
      <div className='init-body'>
        <main>
          <Outlet />
        </main>
        <HomeFooter />
      </div>
    </div>
  );
};
