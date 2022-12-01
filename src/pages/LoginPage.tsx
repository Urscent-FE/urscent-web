import { useMemo, useState } from 'react';
import styles from './LoginPage.module.scss';
import kakao from '@/assets/svg/kakao.svg';
import { CheckBox } from '@/components/checkbox/CheckBox';
import { Link } from 'react-router-dom';
import { InputBox } from '@/components/inputbox/InputBox';

export const LoginPage = () => {
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');

  const [autoLogin, setAutoLogin] = useState(false);
  const [keepLogin, setKeepLogin] = useState(false);

  const regexPw = /^[a-z0-9#?!@$%^&*-]{10,20}$/;
  const regexEmail = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  const idCheck = regexEmail.test(id);
  const pwCheck = regexPw.test(password);

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

  const validChecking = useMemo(() => {
    if ('' !== id && idValid && '' !== password && pwValid) {
      return true;
    }
    return false;
  }, [id, password]);

  const inputUpperCaseCheck = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const regExp = /[^a-z0-9#?!@$%^&*-]/g;
    const input = event.currentTarget;
    if (regExp.test(input.value)) {
      input.value = input.value.replace(regExp, '');
    }
  };

  const onSubmit = () => {
    if (validChecking) {
      console.log('onSubmit');
    }
  };

  const idAndPwMatching = useMemo(() => {
    // 아이디 및 비밀번호 정보가 있는지 확인
    return true;
  }, [password]);

  return (
    <div>
      <InputBox
        label='아이디'
        placeholder='영문소문자, 숫자 6-12자 이내'
        autoComplete='username'
        setValue={setID}
      />
      {idValid ? '' : <span className={styles.loginInfo}>아이디는 이메일 형식입니다.</span>}

      <InputBox
        label='비밀번호'
        placeholder='영문소문자, 숫자, 특수문자 10-20자 이내'
        type='password'
        autoComplete='current-password'
        setValue={setPassword}
        inputUpperCaseCheck={inputUpperCaseCheck}
      />
      {pwValid ? (
        ''
      ) : (
        <span className={styles.loginInfo}>
          비밀번호는 영문소문자, 숫자, 특수문자 10-20자만 가능합니다.
        </span>
      )}
      {idAndPwMatching ? (
        ''
      ) : (
        <span className={styles.loginInfo}>입력하신 아이디와 비밀번호가 일치하지 않습니다. </span>
      )}
      <div className={styles.checkboxList}>
        <CheckBox label='자동 로그인' checked={autoLogin} setChecked={setAutoLogin} />
        <CheckBox label='로그인 상태 유지' checked={keepLogin} setChecked={setKeepLogin} />
      </div>
      <button className={`commonButton ${styles.loginButton}`}>로그인</button>
      <span className={styles.or}>또는</span>
      <button className={`commonButton ${styles.kakaoButton}`}>
        <img src={kakao} />
        카카오 로그인
      </button>
      <div className={styles.findAccount}>
        <Link to='/'>아이디 찾기</Link>
        <span>|</span>
        <Link to='/'>비밀번호 찾기</Link>
      </div>
      <div className={styles.signUp}>
        아직 회원이 아니신가요?
        <Link to='/account/sign-up' className={styles.bold}>
          회원가입
        </Link>
      </div>
    </div>
  );
};
