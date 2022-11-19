import { Link } from 'react-router-dom';
import styles from './GuestMenu.module.scss';

export const GuestMenu = () => {
  return (
    <ul className={styles.guesetMenu}>
      <li>
        <Link to='account/login'>LOGIN</Link>
      </li>
      <li>
        <Link to='account/sign-up'>회원가입</Link>
      </li>
    </ul>
  );
};
