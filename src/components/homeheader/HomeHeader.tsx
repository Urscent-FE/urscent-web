import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GuestMenu } from '../guestmenu/GuestMenu';
import { SearchInput } from '../searchinput/SearchInput';
import { UserMenu } from '../usermenu/UserMenu';
import { UrscentLogo } from '@/assets/icons/UrscentLogo';

export const HomeHeader: React.FC<IHomeHeaderProps> = ({ userLogin }) => {
  const [searchText, setSearchText] = useState('');

  const requestSearch = () => {
    console.log(searchText);
  };

  const whenTabActive = (isActive: boolean): string => {
    if (isActive) {
      return 'text-[#9859E7]';
    }
    return 'text-[#191919]';
  };

  return (
    <header className='w-full h-28 mb-2 px-16 border-b border-b-[#9859E7] border-opacity-30 flex justify-center'>
      <div className='w-full max-w-7xl flex justify-between items-center'>
        <Link to='/'>
          <UrscentLogo width={195} height={30} />
        </Link>
        <nav className='w-full'>
          <ul className='flex text-lg font-bold'>
            <li className='ml-10'>
              <NavLink to='/notes' className={({ isActive }) => whenTabActive(isActive)}>
                NOTES
              </NavLink>
            </li>
            <li className='ml-10'>
              <NavLink to='/perfume-brand' className={({ isActive }) => whenTabActive(isActive)}>
                BRAND
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className='flex w-full justify-end items-center'>
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
