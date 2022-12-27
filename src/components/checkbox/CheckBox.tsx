interface ICheckBoxProps {
  label: string;
  labelGap?: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CheckBox: React.FC<ICheckBoxProps> = ({
  label,
  labelGap = 'pl-7',
  checked,
  setChecked,
}) => {
  const handleCheckClick = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className='relative flex items-center' onClick={handleCheckClick}>
      <input type='checkbox' className='invisible absolute' />
      <div className='w-[26px] h-[26px] border-2 border-[#CFCFCF] rounded-full'>
        {checked && <div className='bg-radial-gradient w-6 h-6 absolute left-[1px] top-[2px]' />}
      </div>
      <label className={labelGap + ' text-[#333] text-xl'}>{label}</label>
    </div>
  );
};
