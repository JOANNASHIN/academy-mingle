import Link from 'next/link';
import style from './style';
import Input from '@/components/ui/Input/Input';
import { ChangeEvent, useState } from 'react';

const ShowPwIcon = (props: { flag: boolean }) => {
  const { flag } = props;

  if (flag) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path
          fillRule="evenodd"
          d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
    </svg>
  );
};

const container = () => {
  const [id, setId] = useState<string>('');
  const [idError, setIdError] = useState<boolean>(false);
  const [idErrorMsg, setIdErrorMsg] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [pwError, setPwError] = useState<boolean>(false);
  const [pwErrorMsg, setPwErrorMsg] = useState<string>('');
  const [showPw, setShowPw] = useState<boolean>(true);

  const validator = (regex: RegExp, value: any) => {
    return new RegExp(regex).test(value);
  };

  const handleValue = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    if (type === 'id') {
      setId(e.target.value);
      setIdError(!validator(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, e.target.value));
      if (!validator(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, e.target.value)) {
        setIdErrorMsg('올바른 이메일 또는 전화번호를 작성해주세요');
      }
    } else if (type === 'pw') {
      setPw(e.target.value);
    }
  };

  return (
    <div css={style} className="login">
      <form className="login__form">
        <legend>로그인</legend>
        <fieldset>
          <label className="login__form__input">
            {/* <input type="text" placeholder="이메일 주소 또는 전화번호" /> */}
            <Input value={id} placeholder="이메일 주소 또는 전화번호" onChange={e => handleValue(e, 'id')} />
            {idError && <span className="login__form__error">{idErrorMsg}</span>}
          </label>
          <label className="login__form__input">
            {/* <input type="password" placeholder="비밀번호" /> */}
            <Input
              type={!showPw ? 'text' : 'password'}
              value={pw}
              placeholder="비밀번호"
              onChange={e => handleValue(e, 'pw')}
              addAfter={
                <button type="button" className="login__form__show-pw" onClick={() => setShowPw(!showPw)}>
                  <ShowPwIcon flag={showPw} />
                </button>
              }
            />
            {pwError && <span className="login__form__error">{pwErrorMsg}</span>}
          </label>

          <button type="submit" className="login__form__submit">
            로그인
          </button>

          <div className="login__footer">
            <div className="login__footer__division">
              <label className="login__footer__save-id">
                <input type="checkbox" />
                <span>로그인 정보 저장</span>
              </label>
            </div>
            {/* <div className="login__footer__division">
              <p className="login__footer__text">
                회원가입
                <Link href="/join" className="login__footer__join">
                  지금 가입하세요.
                </Link>
              </p>
            </div> */}
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default container;
