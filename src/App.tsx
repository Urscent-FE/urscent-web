import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { AccountPage } from '@/pages/AccountPage';
import { RecoilRoot } from 'recoil';
import { NotesPage } from '@/pages/NotesPage';
import { PerfumeBrandPage } from '@/pages/PerfumeBrandPage';
import { LoginPage } from '@/pages/LoginPage';
import { SignupPage } from '@/pages/SignupPage';
import { FoundAccountPage } from './pages/FoundAccountPage';

export const App: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/account' element={<AccountPage />}>
            <Route path='/account/login' element={<LoginPage />} />
            <Route path='/account/sign-up' element={<SignupPage />} />
            <Route path='/account/pwfound' element={<FoundAccountPage />} />
          </Route>
          <Route path='/' element={<HomePage />}>
            <Route path='/notes' element={<NotesPage />} />
            <Route path='/perfume-brand' element={<PerfumeBrandPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};
