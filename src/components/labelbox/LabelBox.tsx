import React from 'react';
import styles from './LabelBox.module.scss';

interface ICheckBoxProps {
  label: string;
  required?: boolean;
}

export const LabelBox: React.FC<ICheckBoxProps> = ({ label = '', required }) => {
  return (
    <label className={styles.label}>
      {label}
      {required ? <div className={styles.required} /> : ''}
    </label>
  );
};
