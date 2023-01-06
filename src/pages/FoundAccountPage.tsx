import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { InputBox } from '@/components/inputbox/InputBox';
import { UrscentLogo } from '@/assets/icons/UrscentLogo';
import { AirBlock } from '@/components/airblock/AirBlock';

export const FoundAccountPage = () => {
  const [email, setEmail] = useState('');

  const regexEmail = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  const idMessage = useMemo(() => {
    if (!email || regexEmail.test(email)) {
      return '';
    }
    return '이메일 주소를 확인해주세요!';
  }, [email]);

  return (
    <div className='pb-24 h-full flex flex-col items-center'>
      <div className='text-4xl text-center mb-20 font-medium mt-20'>비밀번호 찾기</div>
      <Link className='mb-20 flex justify-center' to='/'>
        <UrscentLogo height={40} />
      </Link>
      <p className='pt-6 text-xl text-center mb-16'>
        비밀번호 확인 링크를 받으실
        <br />
        이메일 주소를 입력해주세요.
      </p>
      <InputBox
        placeholder='이메일'
        autoComplete='username'
        value={email}
        setValue={setEmail}
        message={idMessage}
      />
      <button className='shrink-0 w-[330px] h-[57px] bg-[#9859E7] text-xl text-[#F5F5F5] shadow-default rounded-[20px] mt-2 hover:bg-[#4A484B] duration-400'>
        전송하기
      </button>
      <div className='mt-16 flex justify-center items-center'>
        <svg
          width='27'
          height='20'
          viewBox='0 0 27 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M9.79032 20L0.5 10.4681L2.28341 8.6383L9.79032 16.3404L25.7166 0L27.5 1.82979L9.79032 20Z'
            fill='#191919'
          />
        </svg>
        <p className='text-xl ml-[28px] hover:text-[#000]'>전송 완료!</p>
      </div>
      <AirBlock height={3.5} />
    </div>
  );
};
