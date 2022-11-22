import { useState } from 'react';
import { CheckBox } from '@/components/checkbox/CheckBox';
import styles from './LoginPage.module.scss';
import kakao from '@/assets/svg/kakao.svg';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const [autoLogin, setAutoLogin] = useState(false);
  const [keepLogin, setKeepLogin] = useState(false);

  return (
    <div>
      <label className={styles.label}>아이디</label>
      <input
        type='text'
        className={styles.input}
        placeholder='영문소문자, 숫자 6-12자 이내'
        autoComplete='username'
      />
      <label className={styles.label}>비밀번호</label>
      <input
        type='password'
        className={styles.input}
        placeholder='영문소문자, 숫자, 특수문자 10-20자 이내'
        autoComplete='current-password'
      />
      <div className={styles.checkboxList}>
        <CheckBox label='자동 로그인' checked={autoLogin} setChecked={setAutoLogin} />
        <CheckBox label='로그인 상태 유지' checked={keepLogin} setChecked={setKeepLogin} />
      </div>
      <button type='submit' className={`${styles.commonButton} ${styles.loginButton}`}>
        로그인
      </button>
      <span className={styles.or}>또는</span>
      <button type='submit' className={`${styles.commonButton} ${styles.kakaoButton}`}>
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
