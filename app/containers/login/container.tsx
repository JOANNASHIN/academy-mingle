import Link from 'next/link';
import style from './style';

const container = () => {
  return (
    <div css={style} className="login">
      <form className="login__form">
        <legend>로그인</legend>
        <fieldset>
          <label className="login__form__input">
            <input type="text" placeholder="이메일 주소 또는 전화번호" />
          </label>
          <label className="login__form__input">
            <input type="password" placeholder="비밀번호" />
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
