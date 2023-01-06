import React, { forwardRef, useState } from 'react';
import { LabelBox } from '@/components/labelbox/LabelBox';

interface ICheckBoxProps {
  label?: string;
  placeholder: string;
  type?: 'email' | 'password' | 'text' | 'number';
  autoComplete?: string;
  message?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  maxLength?: number;
  second?: boolean;
}

export const InputBox = forwardRef<HTMLInputElement, ICheckBoxProps>(
  (
    {
      label = '',
      placeholder,
      type = 'text',
      autoComplete = 'off',
      value,
      setValue,
      maxLength,
      message,
      second = false,
    },
    ref,
  ) => {
    const [capslock, setCapslock] = useState('');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      let value = event.target.value;
      if ('number' === type) {
        value = value.slice(0, Number(maxLength));
      }
      setValue(value);
    };

    const checkCapsLock = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.getModifierState('CapsLock')) {
        setCapslock('CapsLock이 활성화 되어있습니다.');
        return;
      }
      setCapslock('');
    };
    return (
      <div>
        {label ? <LabelBox label={label} /> : ''}
        <div className='relative'>
          <input
            ref={ref}
            type={type}
            className={
              'w-[330px] h-[57px] text-base px-6 shadow-default rounded-[20px] placeholder:text-[#CFCFCF] focus:outline-none focus:shadow-inputfocus transition-shadow duration-400 ' +
              ('password' === type ? 'font-hk' : '')
            }
            value={value}
            placeholder={placeholder}
            autoComplete={autoComplete}
            onKeyPress={checkCapsLock}
            onInput={handleInput}
            maxLength={maxLength}
          />
          {'password' === type && (
            <>
              <div className='absolute w-[286px] h-4 bg-white top-0 left-6' />
              <div className='absolute w-[286px] h-[13px] bg-white top-11 left-5' />
            </>
          )}
          {second ? (
            <div className='h-4' />
          ) : (
            <div className='h-9 text-[#FF0000] flex ml-2 pt-3.5 mb-[2px]'>
              {(message || capslock) && (
                <>
                  <div className='w-1 h-1 bg-[#FF0000] rounded-lg mt-2 mx-2' />
                  <span className='text-little'>{capslock ? capslock : message}</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    );
  },
);
