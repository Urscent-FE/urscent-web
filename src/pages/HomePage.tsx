import { DefaultButton } from '../components/DefaultButton';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../store/SampleAtom';

export const HomePage = () => {
  const getRecoilValue = useRecoilValue(isDarkAtom);
  return (
    <div>
      <h1>Home {getRecoilValue}</h1>
      <DefaultButton />
    </div>
  );
};
