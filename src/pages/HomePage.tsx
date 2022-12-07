import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HomeFooter } from '@/components/homefooter/HomeFooter';
import { HomeHeader } from '@/components/homeheader/HomeHeader';
import { RadioLabelBox } from '@/components/radiolabelbox/RadioLabelBox';

export const HomePage = () => {
  const [userLogin, setUserLogin] = useState(false);
  const [genderRadio, setGenderRadio] = useState({});

  return (
    <div className='init-wrapper'>
      <HomeHeader userLogin={userLogin} />
      <div className='init-body'>
        <RadioLabelBox
          labels={['남자', '여자', '남여공용']}
          group='gender'
          keyValue={genderRadio}
          setValue={setGenderRadio}
          unique
        />
        <main>
          <Pagenation
            maxPage={49}
            currentPage={pagenation}
            setCurrentPage={setPagenation}
            visiblePageCount={7}
          />
          <Outlet />
        </main>
        <HomeFooter />
      </div>
    </div>
  );
};
