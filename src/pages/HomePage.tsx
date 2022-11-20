import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeFooter } from '@/components/homefooter/HomeFooter';
import { HomeHeader } from '@/components/homeheader/HomeHeader';
import { NotesPage } from './NotesPage';
import { PerfumeBrandPage } from './PerfumeBrandPage';

export const HomePage = () => {
  const [userLogin, setUserLogin] = useState(false);
  return (
    <div className='init-wrapper'>
      <HomeHeader userLogin={userLogin} />
      <div className='init-body'>
        <main>
          <Routes>
            <Route path='/notes' element={<NotesPage />} />
            <Route path='/perfume-brand' element={<PerfumeBrandPage />} />
          </Routes>
        </main>
        <HomeFooter />
      </div>
    </div>
  );
};
