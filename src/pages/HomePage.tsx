import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HomeFooter } from '@/components/homefooter/HomeFooter';
import { HomeHeader } from '@/components/homeheader/HomeHeader';
import { Pagenation } from '@/components/pagenation/Pagenation';

export const HomePage = () => {
  const [userLogin, setUserLogin] = useState(false);
  const [pagenation, setPagenation] = useState(1);
  return (
    <div className='init-wrapper'>
      <HomeHeader userLogin={userLogin} />
      <div className='init-body'>
        <main>
          <Pagenation
            maxPage={49}
            currentPage={pagenation}
            setCurrentPage={setPagenation}
            visiblePageCount={10}
          />
          <Outlet />
        </main>
        <HomeFooter />
      </div>
    </div>
  );
};
