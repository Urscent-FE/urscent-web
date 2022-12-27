import { useMemo, useState } from 'react';
import { CheckBox } from '@/components/checkbox/CheckBox';
import { Link } from 'react-router-dom';
import { InputBox } from '@/components/inputbox/InputBox';
import { UrscentLogo } from '@/assets/icons/UrscentLogo';
import { AirBlock } from '@/components/airblock/AirBlock';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [autoLogin, setAutoLogin] = useState(false);
  const [keepLogin, setKeepLogin] = useState(false);

  const regexPw = /^[a-z0-9#?!@$%^&*-]{10,20}$/;
  const regexEmail = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  const idMessage = useMemo(() => {
    if (!email || regexEmail.test(email)) {
      return '';
    }
    return '이메일 주소를 확인해주세요!';
  }, [email]);

  const pwMessage = useMemo(() => {
    if (!password || regexPw.test(password)) {
      return '';
    }
    return '비밀번호를 확인해주세요!';
  }, [password]);

  const inputUpperCaseCheck = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const regExp = /[^a-z0-9#?!@$%^&*-]/g;
    const input = event.currentTarget;
    if (regExp.test(input.value)) {
      input.value = input.value.replace(regExp, '');
    }
  };

  const idAndPwMatching = useMemo(() => {
    // 아이디 및 비밀번호 정보가 있는지 확인
    return true;
  }, [password]);

  return (
    <div className='pb-24 h-full'>
      <div className='text-4xl text-center mb-20 font-medium mt-20'>로그인</div>
      <Link className='mb-20 flex justify-center' to='/'>
        <UrscentLogo height={40} />
      </Link>
      <InputBox
        placeholder='이메일'
        autoComplete='username'
        setValue={setEmail}
        message={idMessage}
      />
      <InputBox
        placeholder='비밀번호'
        type='password'
        autoComplete='current-password'
        setValue={setPassword}
        message={pwMessage}
      />
      <div className='flex gap-9 pl-[2px]'>
        <CheckBox label='자동로그인' checked={autoLogin} setChecked={setAutoLogin} />
        <CheckBox label='이메일 저장' checked={keepLogin} setChecked={setKeepLogin} />
      </div>
      <button className='w-[400px] h-[63px] bg-[#9859E7] text-xl text-[#F5F5F5] shadow-default rounded-[20px] mt-12 hover:bg-[#4A484B] duration-400'>
        로그인
      </button>
      <div className='w-[105px] border-defaulthalf mx-auto mt-12 border-2' />
      <button className='w-[400px] h-[63px] bg-[#9859E7] text-xl text-[#F5F5F5] shadow-default rounded-[20px] mt-12 hover:bg-[#4A484B] duration-400'>
        카카오 로그인
      </button>
      <div className='mt-12 ml-[38px] flex items-center justify-center'>
        <Link to='/account/sign-up' className='text-xl text-[#888] hover:text-[#333] duration-400'>
          회원가입
        </Link>
        <div className='w-[6px] h-[6px] bg-[#9768D1] rounded-lg mt-[2px] mx-5' />
        <Link to='/account/pwfound' className='text-xl text-[#888] hover:text-[#333] duration-400'>
          비밀번호 찾기
        </Link>
      </div>
      <AirBlock height={3.5} />
    </div>
  );
};
