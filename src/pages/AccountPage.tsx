import { Outlet } from 'react-router-dom';
import styles from './AccountPage.module.scss';
import HomeLogo from '@/assets/svg/home-logo.svg';
import { Link } from 'react-router-dom';

export const AccountPage = () => {
  return (
    <div>
      <div className={styles.accountBox}>
        <Link to='/'>
          <img className={styles.logo} src={HomeLogo} />
        </Link>
        <Outlet />
      </div>
      {/* <div>hi</div> */}
    </div>
  );
};
