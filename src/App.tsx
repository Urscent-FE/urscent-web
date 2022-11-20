import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AccountPage } from './pages/AccountPage';
import { RecoilRoot } from 'recoil';
import { NotesPage } from './pages/NotesPage';
import { PerfumeBrandPage } from './pages/PerfumeBrandPage';
import { LoginPage } from './pages/Loginpage';
import { SignupPage } from './pages/SignupPage';

const routesConfig = [
  {
    element: <AccountPage />,
    children: [
      {
        path: '/account',
        element: <AccountPage />,
        children: [
          {
            path: '/account/login',
            element: <LoginPage />,
          },
          {
            path: '/account/sign-up',
            element: <SignupPage />,
          },
        ],
      },
    ],
  },
  {
    element: <HomePage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            path: '/notes',
            element: <NotesPage />,
          },
          {
            path: '/perfume-brand',
            element: <PerfumeBrandPage />,
          },
        ],
      },
    ],
  },
];

export const App: React.FC = () => {
  const router = createBrowserRouter(routesConfig);
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
};
