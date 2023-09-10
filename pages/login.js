import { Box, Button, Text, FormControl, FormLabel, Input, InputGroup, InputRightElement, Icon} from "@chakra-ui/react";
import { useState, useContext } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { AuthContext } from '../components/AuthProvider';

const LoginPage = () => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

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
              <Text className="login100-form-title p-b-26">
                CWU STAGE PLAY
              </Text>
              <span className="login100-form-title p-b-48">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img src="https://nextstagefolder1.s3.ap-northeast-2.amazonaws.com/cwulogo.png" width="200" height="200" alt="Logo" />
                </Box>
                <i className="icon-class-name"></i> {/* 아이콘 클래스 이름 추가 */}
              </span>
              {/* 이메일 입력 */}
              <FormControl className="wrap-input100" isInvalid={false} isRequired>
                <FormLabel color={"black"} htmlFor="email">이메일</FormLabel>
                <Input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input100"
                  border={"none"}
                />
                {/* 오류 메시지가 필요한 경우 */}
                {/*<FormErrorMessage>이메일 틀렸다!</FormErrorMessage>*/}
              </FormControl>

              {/* 비밀번호 입력 */}
              <FormControl className="wrap-input100" id="password" isRequired>
                <FormLabel color={"black"}>비밀번호</FormLabel>
                <InputGroup>
                  <Input
                    color={"black"}
                    type={showPassword ? 'text' : 'password'}
                    name="pass"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    border={"none"}
                  />
                  <InputRightElement>
                  {/* 눌렀을때 비밀번호 보이게 */}
                    <Icon
                      color={"black"}
                      as={showPassword ? FiEye : FiEyeOff}
                      className="zmdi zmdi-eye"
                      onClick={handlePasswordToggle}
                      cursor={"pointer"}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <Button colorScheme="blue" color={"white"} className="login100-form-btn" type="submit">
                    로그인
                  </Button>
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
