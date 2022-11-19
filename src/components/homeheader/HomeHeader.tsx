import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './HomeHeader.module.scss';
import HomeLogo from '../../assets/svg/home-logo.svg';
import { GuestMenu } from '../guestmenu/GuestMenu';
import { SearchInput } from '../searchinput/SearchInput';
import { UserMenu } from '../usermenu/UserMenu';

export const HomeHeader: React.FC<IHomeHeaderProps> = ({ userLogin }) => {
  const [searchText, setSearchText] = useState('');

  const requestSearch = () => {
    console.log(searchText);
  };

  return (
    <header className={styles.header}>
      <div className={`content-box ${styles.headerbox}`}>
        <Link to='/'>
          <img className={styles.logo} src={HomeLogo} />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink
                to='/notes'
                className={({ isActive }) => {
                  return isActive ? 'selected' : '';
                }}>
                Notes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/perfume-brand'
                className={({ isActive }) => {
                  return isActive ? 'selected' : '';
                }}>
                Perfume Brand
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          {userLogin ? <UserMenu /> : <GuestMenu />}
          <SearchInput onInput={setSearchText} onSearch={requestSearch} />
        </div>
      </div>
    </header>
  );
};

interface IHomeHeaderProps {
  userLogin: boolean;
}
