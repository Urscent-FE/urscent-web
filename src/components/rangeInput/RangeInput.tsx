import React from 'react';
import styles from './RangeInput.module.scss';

interface IRadoiLabelBoxProps {
  labels: string[];
  keyValue: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const RangeInput: React.FC<IRadoiLabelBoxProps> = ({ labels, keyValue, setValue }) => {
  const max = labels.length - 1;
  // styles.label의 width의 px 값을 필요로 합니다.
  const labelWidth = 89.6;
  // styles.labelbox의 gap의 px 값을 필요로 합니다.
  const gapWidth = 11.2;
  // 미세하게 맞지 않는 input range의 길이를 조절할 px 값 입니다.
  const correctionValue = 3;

  const rangeInputWidth = (labelWidth + gapWidth + correctionValue) * max;

  const handleClickInputLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value);
  };
  return (
    <div className={`${styles.flex} ${styles.inside}`}>
      <div className={`${styles.contentBox}`}>
        <input
          className={`${styles.rangeInput}`}
          style={{ width: `${rangeInputWidth}px` }}
          type='range'
          onChange={handleClickInputLabel}
          max={max}
          step='1'
          value={keyValue}
        />
        <div className={`${styles.flex} ${styles.labelbox}`}>
          {labels.map((label, index) => (
            <div
              key={label}
              className={`${styles.label}`}
              onClick={() => {
                setValue(index);
              }}>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
