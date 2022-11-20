import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './Loginpage';
import { SignupPage } from './SignupPage';

export const AccountPage = () => {
  return (
    <div>
      <h1>logo</h1>
      <Routes>
        <Route path='/account/login' element={<LoginPage />} />
        <Route path='/account/sign-up' element={<SignupPage />} />
      </Routes>
    </div>
  );
};
