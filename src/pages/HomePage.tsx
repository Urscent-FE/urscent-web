import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HomeFooter } from '@/components/homefooter/HomeFooter';
import { HomeHeader } from '@/components/homeheader/HomeHeader';
import { RadioLabelBox } from '@/components/radiolabelbox/RadioLabelBox';
import { RangeInput } from '@/components/rangeInput/RangeInput';

export const HomePage = () => {
  const [userLogin, setUserLogin] = useState(false);
  const [genderRadio, setGenderRadio] = useState({});
  const [range, setRange] = useState(0);
  const [range2, setRange2] = useState(0);

  useEffect(() => {
    console.log(range, range2);
  }, [range, range2]);

  useEffect(() => {
    console.log(genderRadio);
  }, [genderRadio]);

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
        <RangeInput
          labels={['very short', 'short', 'moderate', 'long', 'very long']}
          keyValue={range}
          setValue={setRange}
        />
        <RangeInput
          labels={['은은한', '보통의', '진한', '매우 진한']}
          keyValue={range2}
          setValue={setRange2}
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
