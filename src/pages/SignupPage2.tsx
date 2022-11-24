import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AirBlock } from '@/components/airblock/AirBlock';
import { InputBox } from '@/components/inputbox/InputBox';
import { LabelBox } from '@/components/labelbox/labelBox';
import { CheckBox } from '@/components/checkbox/CheckBox';
import styles from './SignupPage.module.scss';

export const SignupPage2 = () => {
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [agree, setAgree] = useState(false);

  const [idFail, setIdFail] = useState('');
  const [pwFail, setPwFail] = useState('');
  const [pw2Fail, setPw2Fail] = useState('');
  const [emailFail, setEmailFail] = useState('계정 분실 시 본인인증 정보로 활용됩니다.');
  const [btnActivate, setBtnActivate] = useState(false);

  const regexId = /^[a-z0-9](?=.*[a-z])(?=.*\d)[a-z0-9]{4,10}$/; // 2,3개씩 차이남
  const regexPw =
    /^[a-z0-9#?!@$%^&*-](?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])[a-z0-9#?!@$%^&*-]{8,18}$/;
  const regexEmail = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  const idCheck = id && regexId.test(id);
  const pwCheck = password && regexPw.test(password);
  const emailCheck = email && regexEmail.test(email);
  console.log(password);
  console.log(password2);
  console.log(password === password2);

  const validate = () => {
    if (!idCheck) {
      setIdFail('아이디는 영문소문자, 숫자 6-12자만 가능합니다.');
      return false;
    }
    setIdFail('');
    if (!pwCheck) {
      setPwFail('비밀번호는 영문소문자, 숫자, 특수문자 10-20자만 가능합니다.');
      return false;
    }
    setPwFail('');
    if (password !== password2) {
      setPw2Fail('비밀번호가 일치하지 않습니다.');
      return false;
    }
    setPw2Fail('');

    if (!emailCheck) {
      setEmailFail('이메일은 aaaa@bbbb.cc형식입니다.');
      return false;
    }
    setEmailFail('계정 분실 시 본인인증 정보로 활용됩니다.');

    validChecking();
  };

  const validChecking = () => {
    console.log(`id : ${idCheck}, email : ${emailCheck}, agree: ${agree}`);
    console.log(`agree : ${agree}`);

    const checking = idCheck && emailCheck && agree;
    if (checking) {
      setBtnActivate(true);
      onSubmit();
    }
    setBtnActivate(false);
  };

  // console.log(`btnActivate: ${btnActivate}`);
  console.log(`agree : ${agree}`);

  const onSubmit = () => {
    console.log(onSubmit);
  };

  const handleClickGender = (clickedGender: string) => {
    if (gender && gender === clickedGender) {
      return setGender('');
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
        inputValidate={validate}
      />
      {idFail ? <span className={styles.signUpinfo}>{idFail}</span> : ''}

      <AirBlock height={1} />
      <InputBox
        label='비밀번호'
        placeholder='영문소문자, 숫자, 특수문자 10-20자 이내'
        type='password'
        autoComplete='current-password'
        setValue={setPassword}
        required
        inputValidate={validate}
      />
      {pwFail ? <span className={styles.signUpinfo}>{pwFail}</span> : ''}

      <InputBox
        placeholder='비밀번호 재입력'
        type='password'
        autoComplete='current-password'
        setValue={setPassword2}
        required
        inputValidate={validate}
      />
      {pw2Fail ? <span className={styles.signUpinfo}>{pw2Fail}</span> : ''}

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
        inputValidate={validate}
      />
      <div className={styles.signUpinfo}>{emailFail}</div>
      <AirBlock height={4} />
      <div className={styles.privacyPolicy}>
        <CheckBox
          label='개인정보 수집 및 이용 동의 (필수)'
          type='square'
          checked={agree}
          setChecked={setAgree}
          inputValidate={validChecking}
        />
        <Link to='/' className={styles.privacyPolicyDetail}>
          자세히
        </Link>
      </div>
      <AirBlock height={3.5} />
      {/* 추후에 조건 변경 필요 validation to form */}
      <button
        className={`commonButton ${
          btnActivate ? styles.signupButtonActivation : styles.signupButtonDeActivation
        }`}>
        회원가입
      </button>
    </div>
  );
};
