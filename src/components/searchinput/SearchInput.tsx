import React from 'react';
import { SearchIcon } from '@/assets/icons/SearchIcon';

export const SearchInput: React.FC<ISearchInputProps> = ({ onInput, onSearch }) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onInput(value);
  };

  const handleKeypress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if ('Enter' === event.key) {
      onSearch();
    }
  };

  const handleOnClickButton = () => {
    onSearch();
  };

  return (
    <div className='relative'>
      {/* <input
        type='text'
        className={styles.searchInput}
        placeholder='찾고 싶은 향수가 있으신가요?'
        maxLength={30}
        onInput={handleInput}
        onKeyPress={handleKeypress}
      /> */}
      <button className='mt-[1px]' onClick={handleOnClickButton}>
        <SearchIcon />
      </button>
    </div>
  );
};

interface ISearchInputProps {
  onInput: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}
