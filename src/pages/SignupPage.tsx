import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AirBlock } from '@/components/airblock/AirBlock';
import { InputBox } from '@/components/inputbox/InputBox';
import { LabelBox } from '@/components/labelbox/LabelBox';
import { CheckBox } from '@/components/checkbox/CheckBox';
import { UrscentLogo } from '@/assets/icons/UrscentLogo';
import { signup } from '@/apis/auth';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthyear, setBirthYear] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | ''>('');
  const [agree, setAgree] = useState(false);

  const regexPw = /^[a-z0-9#?!@$%^&*-]{10,20}$/;
  const regexEmail = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  const navigate = useNavigate();

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
    if (password !== password2 && password2) {
      return '비밀번호가 일치하지 않습니다.';
    }
    return '';
  }, [password, password2]);

  const handleClickGender = (clickedGender: '' | 'male' | 'female') => {
    if (gender && gender === clickedGender) {
      return setGender('');
    }
    setGender(clickedGender);
  };

  const onClickSignupButton = async () => {
    if (
      email &&
      !emailMessage &&
      !pwMessage &&
      password &&
      gender &&
      nickname &&
      birthyear &&
      agree
      // 혹은 각 값에 따른 if로 나누어 ref 로 연결되게 하는 방법
    ) {
      const result = await signup({ email, password, name: nickname, birthyear });
      if (result) {
        // 회원가입 성공 모달과 함께 로그인 페이지로 이동이 필요
        navigate('/');
      }
    }
  };
  // width를 full로 가지는 차일드 부모나 감싸는 컴포넌트 하나의 너비만 정하면됨
  return (
    <div className='pb-24 h-full flex flex-col items-center'>
      <div className='text-title mb-[45px] font-medium mt-20'>회원가입</div>
      <Link className='mb-[45px] flex justify-center' to='/'>
        <UrscentLogo height={40} />
      </Link>

      <InputBox
        label='이메일'
        placeholder='이메일을입력해주세요'
        autoComplete='username'
        value={email}
        setValue={setEmail}
        message={emailMessage}
      />
      <InputBox
        label='비밀번호'
        placeholder='영문소문자, 숫자, 특수문자 10~20자 이내'
        type='password'
        autoComplete='current-password'
        value={password}
        setValue={setPassword}
        maxLength={20}
        second
      />
      <InputBox
        placeholder='비밀번호 재입력'
        type='password'
        autoComplete='current-password'
        value={password2}
        setValue={setPassword2}
        message={pwMessage}
      />
      <InputBox
        label='닉네임'
        placeholder='사용하실 닉네임을 입력해주세요'
        type='text'
        value={nickname}
        setValue={setNickname}
      />
      <InputBox
        label='출생 연도'
        placeholder='YYYY'
        type='number'
        maxLength={4}
        value={birthyear}
        setValue={setBirthYear}
      />
      <div className='mb-[45px] w-[330px]'>
        <LabelBox label='성별' />
        <div className='flex justify-between font-normal pr-[2px]'>
          <button
            className={
              ('male' === gender ? 'bg-[#4A484B]' : 'bg-[#9859E7]') +
              ' w-[141px] h-[57px] bg-[#9859E7] text-xl text-[#F5F5F5] shadow-default rounded-[20px] hover:bg-[#4A484B] duration-400'
            }
            onClick={() => handleClickGender('male')}>
            MALE
          </button>
          <button
            className={
              ('female' === gender ? 'bg-[#4A484B]' : 'bg-[#9859E7]') +
              ' w-[141px] h-[57px] bg-[#9859E7] text-xl text-[#F5F5F5] shadow-default rounded-[20px] hover:bg-[#4A484B] duration-400'
            }
            onClick={() => handleClickGender('female')}>
            FEMALE
          </button>
        </div>
      </div>

      <div className='flex items-center justify-around mb-[45px] w-[330px]'>
        <CheckBox
          label='개인정보 수집 및 이용 동의 (필수)'
          labelGap='pl-2.5'
          checked={agree}
          setChecked={setAgree}
        />
        <Link to='/' className='text-[#333333] opacity-50 text-base'>
          자세히
        </Link>
      </div>

      <button
        onClick={onClickSignupButton}
        className='w-[330px] h-[57px] bg-[#9859E7] text-xl shrink-0 text-[#F5F5F5] shadow-default rounded-[20px] hover:bg-[#4A484B] duration-400'>
        회원가입
      </button>
      <AirBlock height={3.5} />
    </div>
  );
};
