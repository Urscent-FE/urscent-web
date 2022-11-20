import React from 'react';

export const SearchIcon: React.FC<IconProps> = ({ fill = '#333333' }) => {
  return (
    <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03324 14.1334 2.75 10.0833 2.75C6.03324 2.75 2.75 6.03324 2.75 10.0833C2.75 14.1334 6.03324 17.4167 10.0833 17.4167Z'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.25 19.25L15.2625 15.2625'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

interface IconProps {
  fill?: string;
}
