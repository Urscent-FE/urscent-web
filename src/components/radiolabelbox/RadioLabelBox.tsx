import React, { useEffect } from 'react';
import styles from './RadioLabelBox.module.scss';

interface IRadoiLabelBoxProps {
  labels: string[];
  group: string;
  keyValue: { [key: string]: boolean };
  setValue: React.Dispatch<React.SetStateAction<object>>;
  unique?: boolean;
}

export const RadioLabelBox: React.FC<IRadoiLabelBoxProps> = ({
  labels,
  group,
  keyValue,
  setValue,
  unique = false,
}) => {
  const handleClickInputLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (unique) {
      setValue(
        labels.reduce((accumulator, keyValue) => {
          if (keyValue === value) {
            return { ...accumulator, [keyValue]: !checked };
          }
          return { ...accumulator, [keyValue]: false };
        }, {}),
      );
    } else {
      setValue((prev) => ({ ...prev, [value]: checked }));
    }
  };

  useEffect(() => {
    setValue(
      labels.reduce((accumulator, keyValue) => {
        return { ...accumulator, [keyValue]: false };
      }, {}),
    );
  }, []);

  return (
    <div className={`${styles.flex} ${styles.inside}`}>
      {Object.entries(keyValue).map(([label, checked]) => (
        <div key={label} className={`${styles.flex} ${styles.contentBox}`}>
          <input
            type='checkbox'
            id={label}
            name={group}
            value={label}
            onInput={handleClickInputLabel}
            {...(unique ? { readOnly: true, checked: checked } : {})}
          />
          <label htmlFor={label}>{label}</label>
        </div>
      ))}
    </div>
  );
};
