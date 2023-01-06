import { useEffect, useMemo, useState } from 'react';
import { CheckBox } from '@/components/checkbox/CheckBox';
import { Link } from 'react-router-dom';
import { InputBox } from '@/components/inputbox/InputBox';
import { UrscentLogo } from '@/assets/icons/UrscentLogo';
import { AirBlock } from '@/components/airblock/AirBlock';
import { login } from '@/apis/auth';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [autoLogin, setAutoLogin] = useState(false);
  const [keepEmail, setKeepEmail] = useState(false);

  const regexPw = /^[a-z0-9#?!@$%^&*-]{10,20}$/;
  const regexEmail = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  const navigate = useNavigate();

  const idMessage = useMemo(() => {
    if (!email || regexEmail.test(email)) {
      return '';
    }
    return '정확한 이메일 주소를 입력해주세요!';
  }, [email]);

  const pwMessage = useMemo(() => {
    if (!password || regexPw.test(password)) {
      return '';
    }
    return '비밀번호를 확인해주세요!';
  }, [password]);

  const onClickLoginButton = async () => {
    if (!idMessage && !pwMessage) {
      const result = await login({ email, password });
      if (result) {
        if (keepEmail) {
          await localStorage.setItem('email', email);
        } else {
          localStorage.removeItem('email');
        }
        if (autoLogin) {
          await localStorage.setItem('token', result.token);
          await localStorage.setItem('user', JSON.stringify(result.user));
        } else {
          await sessionStorage.setItem('token', result.token);
          await sessionStorage.setItem('user', JSON.stringify(result.user));
        }
        navigate('/');
      } else {
        // 실패처리 => 회원 정보를 찾지 못했다 ...
      }
    }
  };

  useEffect(() => {
    (async () => {
      const userEmail = await localStorage.getItem('email');
      if (userEmail) {
        setEmail(userEmail);
        setKeepEmail(true);
      }
    })();
  }, []);

  return (
    <div className='pb-24 h-full flex flex-col items-center'>
      <div className='text-title mb-[45px] font-medium mt-20'>로그인</div>
      <Link className='mb-[45px] flex justify-center' to='/'>
        <UrscentLogo width={225.9} height={35} />
      </Link>
      <InputBox
        placeholder='이메일'
        autoComplete='username'
        value={email}
        setValue={setEmail}
        message={idMessage}
      />
      <InputBox
        placeholder='비밀번호'
        type='password'
        autoComplete='current-password'
        value={password}
        setValue={setPassword}
        message={pwMessage}
      />
      <div className='flex w-[330px] justify-between pt-2 pl-3 pr-4'>
        <CheckBox
          label='자동로그인'
          labelGap='pl-4'
          checked={autoLogin}
          setChecked={setAutoLogin}
        />
        <CheckBox
          label='이메일 저장'
          labelGap='pl-4'
          checked={keepEmail}
          setChecked={setKeepEmail}
        />
      </div>
      <button
        className='shrink-0 w-[330px] h-[57px] bg-[#9859E7] text-xl text-[#F5F5F5] shadow-default rounded-[20px] mt-12 hover:bg-[#4A484B] duration-400'
        onClick={onClickLoginButton}>
        로그인
      </button>
      <div className='w-[105px] border-defaulthalf mt-12 border-2' />
      <button className='shrink-0 w-[330px] h-[57px] bg-[#9859E7] text-xl text-[#F5F5F5] shadow-default rounded-[20px] mt-12 hover:bg-[#4A484B] duration-400'>
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
