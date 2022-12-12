import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AirBlock } from '@/components/airblock/AirBlock';
import { InputBox } from '@/components/inputbox/InputBox';
import { LabelBox } from '@/components/labelbox/LabelBox';
import { CheckBox } from '@/components/checkbox/CheckBox';
import styles from './SignupPage.module.scss';

export const SignupPage = () => {
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [agree, setAgree] = useState(false);

  const regexPw = /^[a-z0-9#?!@$%^&*-]{10,20}$/;
  const regexEmail = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  const idCheck = regexEmail.test(id);
  const pwCheck = regexPw.test(password);
  const emailCheck = regexEmail.test(email);

  const idValid = useMemo(() => {
    if (id && !idCheck) {
      return false;
    }
    return true;
  }, [id]);

  const pwValid = useMemo(() => {
    if (password && !pwCheck) {
      return false;
    }
    return true;
  }, [password]);

  const pw2Valid = useMemo(() => {
    if (password !== password2) {
      return false;
    }
    return true;
  }, [password2]);

  const emailValid = useMemo(() => {
    if (email && !emailCheck) {
      return false;
    }
    return true;
  }, [email]);

  const validChecking = useMemo(() => {
    if ('' !== id && idValid && '' !== password && pwValid && pw2Valid && emailValid && agree) {
      return true;
    }
    return false;
  }, [id, password, password2, email, agree]);

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

  const inputUpperCaseCheck = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const regExp = /[^a-z0-9#?!@$%^&*-]/g;
    const input = event.currentTarget;
    if (regExp.test(input.value)) {
      input.value = input.value.replace(regExp, '');
    }
  };

  return (
    <div>
      <InputBox
        label='아이디'
        placeholder='영문소문자, 숫자 6-12자 이내'
        autoComplete='username'
        setValue={setID}
        required
      />
      {idValid ? '' : <span className={styles.signUpinfo}>아이디는 이메일 형식입니다.</span>}

      <AirBlock height={1} />
      <InputBox
        label='비밀번호'
        placeholder='영문소문자, 숫자, 특수문자 10-20자 이내'
        type='password'
        autoComplete='current-password'
        setValue={setPassword}
        required
        maxLength={20}
        inputUpperCaseCheck={inputUpperCaseCheck}
      />
      {pwValid ? (
        ''
      ) : (
        <span className={styles.signUpinfo}>
          비밀번호는 영문소문자, 숫자, 특수문자 10-20자만 가능합니다.
        </span>
      )}

      <InputBox
        placeholder='비밀번호 재입력'
        type='password'
        autoComplete='current-password'
        setValue={setPassword2}
        required
      />
      {pw2Valid ? '' : <span className={styles.signUpinfo}>비밀번호가 일치하지 않습니다.</span>}

      <AirBlock height={2.5} />
      <InputBox
        label='출생 연도'
        placeholder='YYYY'
        type='text'
        setValue={setBirthYear}
        maxLength={4}
      />
      <AirBlock height={1} />
      <LabelBox label='성별' />
      <div className={styles.genderBox}>
        <div
          className={'male' === gender ? styles.checking : ''}
          onClick={() => handleClickGender('male')}>
          남성
        </div>
        <div
          className={'female' === gender ? styles.checking : ''}
          onClick={() => handleClickGender('female')}>
          여성
        </div>
      </div>
      <AirBlock height={1.5} />
      <InputBox
        label='Email'
        placeholder='이메일 주소를 입력하세요.'
        type='email'
        setValue={setEmail}
        required
      />
      <div className={styles.signUpinfo}>계정 분실 시 본인인증 정보로 활용됩니다.</div>
      <AirBlock height={4} />
      <div className={styles.privacyPolicy}>
        <CheckBox
          label='개인정보 수집 및 이용 동의 (필수)'
          type='square'
          checked={agree}
          setChecked={setAgree}
        />
        <Link to='/' className={styles.privacyPolicyDetail}>
          자세히
        </Link>
      </div>
      <AirBlock height={3.5} />
      {/* 추후에 조건 변경 필요 validation to form */}
      <button
        className={`commonButton ${
          validChecking ? styles.signupButtonActivation : styles.signupButtonDeActivation
        }`}
        onClick={onSubmit}>
        회원가입
      </button>
    </div>
  );
};
