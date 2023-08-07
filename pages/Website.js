import { useEffect, useState } from "react";
import {
  Text,
  Box,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

// 커스텀 크레딧 컴포넌트
const CustomCredit = ({ title, roles, children }) => (
  <>
    <Stack direction="row" h="80px">
      <Text fontSize="50px" fontWeight="bold" mr="20px">{title}</Text>
      <Divider orientation="vertical" />
      <Text fontSize="20px"><br/>{roles}</Text>
    </Stack>
    {children}
    <br />
    <br />
  </>
);

const service = () => {
  const [creditsVisible, setCreditsVisible] = useState(false);

  useEffect(() => {
    // 5초 뒤에 크레딧을 보이도록 설정
    const timeout = setTimeout(() => {
      setCreditsVisible(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  // 각 부서별 크레딧 정보
  const creditsContent = [
    <CustomCredit title="Manager" roles="(각 부서별 역할 적는 곳)">
      <Text fontSize="30px">채준혁</Text>
      <Text mt="5px" fontSize="20px">너무 재미있어요</Text>
    </CustomCredit>,

    <CustomCredit title="Front" roles="(각 부서별 역할 적는 곳)">
      <Text fontSize="30px"><a href="https://github.com/wwmmIIll">김준서</a></Text>
      <Text mt="5px" fontSize="20px">재밌노</Text>
      <Text fontSize="30px">박지환</Text>
      <Text mt="5px" fontSize="20px">너무 재미있어요</Text>
      <Text fontSize="30px">김민경</Text>
      <Text mt="5px" fontSize="20px">너무 재미있어요</Text>
    </CustomCredit>,

    // 이하 생략 (Backend, DB, Server에 대한 크레딧 정보 추가)
  ];

  const [currentCredit, cycleCredits] = useCycle(...creditsContent);

  // 크레딧을 자동으로 변경하기 위한 useEffect
  useEffect(() => {
    if (creditsVisible) {
      const autoCycle = setInterval(() => {
        cycleCredits();
      }, 5000); // 5초마다 크레딧 변경
      return () => clearInterval(autoCycle);
    }
  }, [creditsVisible, cycleCredits]);

  return (
    <Box
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor="black"
      color="white"
    >
      <AnimatePresence>
        {creditsVisible && (
          <motion.div
            key={currentCredit.key}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {currentCredit}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default service;
