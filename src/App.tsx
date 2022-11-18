import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MyLogo from './assets/svg/my-page.svg';
import { HomePage } from './pages/HomePage';
import { RecoilRoot } from 'recoil';

export const App: React.FC = () => {
  const test = 'b';
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div>
          <h1>hello{test}</h1>
          <img src={MyLogo} />
        </div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/notes' element={<Notes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/perfumer' element={<Perfumer />} />
        <Route path='/perfume-brand' element={<PerfumeBrand />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/my-page' element={<MyPage />} />
        <Route path='/my-like-list' element={<MyLikeList />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} /> */}
          <Route path='/*' element={<Navigate replace to='/' />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};
