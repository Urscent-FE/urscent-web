import React from 'react';

interface ICheckBoxProps {
  label: string;
}

export const LabelBox: React.FC<ICheckBoxProps> = ({ label = '' }) => {
  return <label className='text-xl font-medium text-[#191919] ml-2 mb-2'>{label}</label>;
};
