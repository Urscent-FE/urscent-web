import React, { forwardRef } from 'react';
import { LabelBox } from '@/components/labelbox/labelBox';
import styles from './InputBox.module.scss';

interface ICheckBoxProps {
  label?: string;
  placeholder: string;
  type?: 'email' | 'password' | 'text' | 'number';
  autoComplete?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean;
  maxLength?: number;
  inputRegexCheck?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const InputBox = forwardRef<HTMLInputElement, ICheckBoxProps>(
  (
    {
      label = '',
      placeholder,
      type = 'text',
      autoComplete = 'off',
      setValue,
      required,
      maxLength,
      inputRegexCheck,
    },
    ref,
  ) => {
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setValue(value);
    };
    return (
      <>
        {label ? <LabelBox label={label} required={required} /> : ''}
        <input
          ref={ref}
          type={type}
          className={styles.input}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onInput={handleInput}
          maxLength={maxLength}
          onKeyUp={inputRegexCheck}
        />
      </>
    );
  },
);
