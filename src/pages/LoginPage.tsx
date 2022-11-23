import { useState } from 'react';
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

  return (
    <div>
      <InputBox
        label='아이디'
        placeholder='영문소문자, 숫자 6-12자 이내'
        autoComplete='username'
        setValue={setID}
      />
      <InputBox
        label='비밀번호'
        placeholder='영문소문자, 숫자, 특수문자 10-20자 이내'
        type='password'
        autoComplete='current-password'
        setValue={setPassword}
      />
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
