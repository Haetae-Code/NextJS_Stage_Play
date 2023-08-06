import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AuthContext } from '../components/AuthProvider';

const LoginPage = () => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => { //나중에 백엔 서버랑 디비랑 로컬 사용자 캐시 인증해서 로그인 상태 확인하고 로그인 일정 시간 유지 시키는 작업 필요함
    e.preventDefault();    
    const validEmail = '1234@naver.com';
    const validPassword = '1234';
    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
      router.push('/admin');
    } else {
      console.log('로그인 실패');
    }
  };

  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form" onSubmit={handleLogin}>
              <span className="login100-form-title p-b-26">
                CWU&nbsp;&nbsp;STAGE&nbsp;&nbsp;PLAY
              </span>
              <span className="login100-form-title p-b-48">
                <img src="/asset/image/cwulogo.png" width="200" height="200" alt="Logo" />
                <i className="icon-class-name"></i> {/* 아이콘 클래스 이름 추가 */}
              </span>

              <div className="wrap-input100 validate-input" data-validate="잘못된 이메일">
                <input
                  className="input100"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input100" data-placeholder="이메일"></span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="비밀번호 입력">
                <span className="btn-show-pass">
                  <i className="zmdi zmdi-eye"></i>
                </span>
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input100" data-placeholder="비밀번호"></span>
              </div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn" type="submit">
                    로그인
                  </button>
                </div>
              </div>

              <div className="text-center p-t-115">
                <a className="txt2" href="#">
                  회원가입
                </a>

                <br />
                <br />

                <a className="txt2" href="#">
                  비밀번호를 잊어버리셨나요?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1"></div>
      <script src="/login_func/vendor/jquery/jquery-3.2.1.min.js"></script>
      <script src="/login_func/vendor/animsition/js/animsition.min.js"></script>
      <script src="/login_func/vendor/bootstrap/js/popper.js"></script>
      <script src="/login_func/vendor/bootstrap/js/bootstrap.min.js"></script>
      <script src="/login_func/vendor/select2/select2.min.js"></script>
      <script src="/login_func/vendor/daterangepicker/moment.min.js"></script>
      <script src="/login_func/endor/daterangepicker/daterangepicker.js"></script>
      <script src="/login_func/vendor/countdowntime/countdowntime.js"></script>
      <script src="/login_func/js/main.js"></script>
    </div>
  );
};

export default LoginPage;
