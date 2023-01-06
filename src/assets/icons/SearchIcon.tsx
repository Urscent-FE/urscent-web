import React from 'react';

export const SearchIcon: React.FC<IconProps> = ({ fill = '#9859E7' }) => {
  return (
    <svg
      width='37.8'
      height='28.8'
      viewBox='0 0 51 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M28.245 18.6667C28.245 24.1896 23.7678 28.6667 18.245 28.6667C12.7221 28.6667 8.245 24.1896 8.245 18.6667C8.245 13.1439 12.7221 8.66675 18.245 8.66675C23.7678 8.66675 28.245 13.1439 28.245 18.6667ZM31.1008 31.2654C27.8339 34.5987 23.281 36.6667 18.245 36.6667C8.30387 36.6667 0.244995 28.6079 0.244995 18.6667C0.244995 8.72562 8.30387 0.666748 18.245 0.666748C28.1861 0.666748 36.245 8.72562 36.245 18.6667C36.245 20.687 35.9122 22.6294 35.2984 24.4423L48.8259 31.821C50.7653 32.8788 51.4799 35.3086 50.4221 37.2479C49.3642 39.1873 46.9345 39.902 44.9951 38.8441L31.1008 31.2654Z'
        fill={fill}
      />
    </svg>
  );
};

interface IconProps {
  fill?: string;
}
