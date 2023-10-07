import { Box, Button, Text, FormControl, FormLabel, Input, InputGroup, InputRightElement, Icon, Script, Flex} from "@chakra-ui/react";
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
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.100"
      p={4}
    >
    <Box
      p="4"
      bg="white"
      borderRadius="10px"
      overflow="hidden"
      padding="77px 55px 33px 55px"
      boxShadow="0 5px 10px 0px rgba(0, 0, 0, 0.1)"
      mozBoxShadow="0 5px 10px 0px rgba(0, 0, 0, 0.1)"
      webkitBoxShadow="0 5px 10px 0px rgba(0, 0, 0, 0.1)"
      oBoxShadow="0 5px 10px 0px rgba(0, 0, 0, 0.1)"
      msBoxShadow="0 5px 10px 0px rgba(0, 0, 0, 0.1)"
      maxW="390px"
      margin="auto"
    >
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form" onSubmit={handleLogin}>
              <Text className="login100-form-title p-b-26"
                display="block"
                fontFamily="Poppins-Bold"
                fontSize="30px"
                color="#333333"
                lineHeight="1.2"
                textAlign="center">
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
                  <Button colorScheme="blue"
                    color="white"
                    className="login100-form-btn"
                    type="submit"
                    fontFamily="Poppins-Medium"
                    fontSize="15px"
                    lineHeight="1.2"
                    textTransform="uppercase"
                    display={{
                      base: "block",
                      md: "-webkit-box",
                      lg: "-webkit-flex",
                      xl: "-moz-box",
                      "2xl": "-ms-flexbox",
                    }}
                    justifyContent="center"
                    alignItems="center"
                    padding="0 20px"
                    width="100%"
                    height="50px">
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
      {/* <Script src="/login_func/vendor/jquery/jquery-3.2.1.min.js" async defer/>
      <Script src="/login_func/vendor/animsition/js/animsition.min.js"/>
      <Script src="/login_func/vendor/bootstrap/js/popper.js"/>
      <Script src="/login_func/vendor/bootstrap/js/bootstrap.min.js"/>
      <Script src="/login_func/vendor/select2/select2.min.js"/>
      <Script src="/login_func/vendor/daterangepicker/moment.min.js"/>
      <Script src="/login_func/endor/daterangepicker/daterangepicker.js"/>
      <Script src="/login_func/vendor/countdowntime/countdowntime.js"/>
      <Script src="/login_func/js/main.js"/> */}
    </div>
    </Box>
    </Flex>
  );
};



export default LoginPage;
