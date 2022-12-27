import React, { forwardRef } from 'react';
import { LabelBox } from '@/components/labelbox/LabelBox';

interface ICheckBoxProps {
  label?: string;
  placeholder: string;
  type?: 'email' | 'password' | 'text' | 'number';
  autoComplete?: string;
  message?: string;
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
      setValue,
      maxLength,
      message,
      second = false,
    },
    ref,
  ) => {
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setValue(value);
    };
    return (
      <>
        {label ? <LabelBox label={label} /> : ''}
        {/* {"w-full flex-grow lg:flex lg:items-center lg:w-auto " + (expanded ? 'block' : 'hidden')} */}
        <div className={'relative ' + (second ? '' : 'mb-4')}>
          <input
            ref={ref}
            type={type}
            className={
              'w-[400px] h-[63px]  text-xl px-6 shadow-default rounded-[20px] placeholder:text-[#CFCFCF] focus:outline-none focus:shadow-inputfocus transition-shadow duration-400 ' +
              ('password' === type ? 'font-hk' : '')
            }
            placeholder={placeholder}
            autoComplete={autoComplete}
            onInput={handleInput}
            maxLength={maxLength}
          />
          {'password' === type && (
            <>
              <div className='absolute w-[358px] h-4 bg-white  top-0 left-5' />
              <div className='absolute w-[358px] h-[15px] top-12 left-5 bg-white' />
            </>
          )}
        </div>
        {second ? (
          <div className='h-4' />
        ) : (
          <div className='h-9 text-[#FF0000] flex ml-1'>
            {message && (
              <>
                <div className='w-1 h-1 bg-[#FF0000] rounded-lg mt-[10px] mx-2' />
                <span className='text-sm'>{message}</span>
              </>
            )}
          </div>
        )}
      </>
    );
  },
);
