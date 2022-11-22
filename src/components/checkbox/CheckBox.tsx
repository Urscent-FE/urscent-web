import styles from './CheckBox.module.scss';

interface ICheckBoxProps {
  label: string;
  type?: 'cicle' | 'square';
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CheckBox: React.FC<ICheckBoxProps> = ({
  label,
  type = 'cicle',
  checked,
  setChecked,
}) => {
  const handleCheckClick = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className={styles.customCheckBox} onClick={handleCheckClick}>
      <input type='checkbox' />
      <div
        className={`${styles.checkButton} ${'cicle' === type ? styles.circle : styles.square} ${
          checked ? styles.checked : ''
        }`}>
        <div className={styles.checkMark}>
          <div className={styles.checkMark_stem} />
          <div className={styles.checkMark_kick} />
        </div>
      </div>
      <label className={styles.checkboxLabel}>{label}</label>
    </div>
  );
};
