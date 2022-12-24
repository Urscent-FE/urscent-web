import { Outlet } from 'react-router-dom';
import styles from './AccountPage.module.scss';
import { UrscentLogo } from '@/assets/icons/UrscentLogo';
import { Link } from 'react-router-dom';

export const AccountPage = () => {
  return (
    <div>
      <div className={styles.accountBox}>
        <Link to='/'>
          <UrscentLogo />
        </Link>
        <Outlet />
      </div>
      {/* <div>hi</div> */}
    </div>
  );
};
