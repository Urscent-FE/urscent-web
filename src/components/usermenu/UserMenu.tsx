import { Link } from 'react-router-dom';
import { LikeIcon } from '@/assets/icons/LikeIcon';
import { AccountIcon } from '@/assets/icons/AccountIcon';
import styles from './UserMenu.module.scss';

export const UserMenu = () => {
  const logOut = () => {
    console.log('Logout 처리');
    // 처리 이후에 200이면 / 로 이동하는 것이 좋을 것 같음
    // 에러면 로그아웃 에러에대한 정보 표시
  };

  return (
    <ul className={styles.userMenuBox}>
      <li onClick={logOut}>
        <Link to='/'>로그아웃</Link>
      </li>
      <li>
        {/* 좋아하는 리스트, 계정 정보 home에 nesting 되는지 새로운 layout 인지 확인 /like */}
        <Link to='/'>
          <LikeIcon />
        </Link>
      </li>
      <li>
        <Link to='/'>
          <AccountIcon />
        </Link>
      </li>
    </ul>
  );
};
