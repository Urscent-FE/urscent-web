import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AirBlock } from '@/components/airblock/AirBlock';
import { InputBox } from '@/components/inputbox/InputBox';
import { LabelBox } from '@/components/labelbox/LabelBox';
import { CheckBox } from '@/components/checkbox/CheckBox';
import { UrscentLogo } from '@/assets/icons/UrscentLogo';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');
  const [agree, setAgree] = useState(false);

  const regexPw = /^[a-z0-9#?!@$%^&*-]{10,20}$/;
  const regexEmail = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  const emailMessage = useMemo(() => {
    if (!email || regexEmail.test(email)) {
      return '';
    }
    return '이메일 주소를 확인해주세요!';
  }, [email]);

  const pwMessage = useMemo(() => {
    if (!password && !password2) {
      return '';
    }
    if (!regexPw.test(password)) {
      return '비밀번호를 확인해주세요!';
    }
    if (password !== password2) {
      return '비밀번호가 일치하지 않습니다.';
    }
    return '';
  }, [password, password2]);

  const validChecking = useMemo(() => {
    if ('' !== password && pwMessage && emailMessage && agree) {
      return true;
    }
    return false;
  }, [password, password2, email, agree]);

  const onSubmit = () => {
    if (validChecking) {
      console.log('onSubmit');
    }
  };

  const handleClickGender = (clickedGender: string) => {
    if (gender && gender === clickedGender) {
      return setGender('');
    }
    setGender(clickedGender);
  };

  return (
    <div className='pb-24 h-full'>
      <div className='text-4xl text-center mb-20 font-medium mt-20'>회원가입</div>
      <Link className='mb-20 flex justify-center' to='/'>
        <UrscentLogo height={40} />
      </Link>

      <InputBox
        label='이메일'
        placeholder='이메일을입력해주세요'
        autoComplete='username'
        setValue={setEmail}
        message={emailMessage}
      />
      <InputBox
        label='비밀번호'
        placeholder='영문소문자, 숫자, 특수문자 10~20자 이내'
        type='password'
        autoComplete='current-password'
        setValue={setPassword}
        maxLength={20}
        second
      />
      <InputBox
        placeholder='비밀번호 재입력'
        type='password'
        autoComplete='current-password'
        setValue={setPassword2}
        message={pwMessage}
      />
      <InputBox
        label='닉네임'
        placeholder='사용하실 닉네임을 입력해주세요'
        type='text'
        setValue={setNickname}
      />
      <InputBox
        label='출생 연도'
        placeholder='YYYY'
        type='text'
        setValue={setBirthYear}
        maxLength={4}
      />
      <LabelBox label='성별' />
      <div className='mb-14 flex gap-10'>
        <button
          // className='male' === gender ? styles.checking : ''
          className={
            ('male' === gender ? 'bg-[#4A484B]' : 'bg-[#9859E7]') +
            ' w-[180px] h-[63px] bg-[#9859E7] text-xl text-[#F5F5F5] shadow-default rounded-[20px] hover:bg-[#4A484B] duration-400'
          }
          onClick={() => handleClickGender('male')}>
          남성
        </button>
        <button
          className={
            ('female' === gender ? 'bg-[#4A484B]' : 'bg-[#9859E7]') +
            ' w-[180px] h-[63px] bg-[#9859E7] text-xl text-[#F5F5F5] shadow-default rounded-[20px] hover:bg-[#4A484B] duration-400'
          }
          onClick={() => handleClickGender('female')}>
          여성
        </button>
      </div>

      <div className='flex items-center justify-between mb-14'>
        <CheckBox
          label='개인정보 수집 및 이용 동의 (필수)'
          labelGap='pl-2.5'
          checked={agree}
          setChecked={setAgree}
        />
        <Link to='/' className='text-[#333333] opacity-50 text-xl'>
          자세히
        </Link>
      </div>

      <button
        onClick={onSubmit}
        className='w-[400px] h-[63px] bg-[#9859E7] text-xl text-[#F5F5F5] shadow-default rounded-[20px] mt-12 hover:bg-[#4A484B] duration-400'>
        회원가입
      </button>
      <AirBlock height={3.5} />
    </div>
  );
};
