
import { useEffect, useState } from "react";
import { Text, Box, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const titleStyle = {
  fontSize: "50px",
  fontWeight: "bold",
  marginRight: "20px",
  textAlign: "left",
};

const CustomCredit = ({ title, roles, children }) => (
  <Box>
    <VStack spacing="20px" margin="20px">
      <Text style={{ ...titleStyle, color: "white" }}>{title}</Text>
      <Text fontSize="20px" color="white">{roles}</Text>
      {children}
    </VStack>
    <br />
  </Box>
);

const Service = () => {
  const [creditsVisible, setCreditsVisible] = useState(false);
  const [showTitlePrompt, setShowTitlePrompt] = useState(false);

  const creditsContent = [
    <VStack spacing="20px" margin="20px">
      <CustomCredit title="Manager" roles="(각 부서별 역할 적는 곳)">
        <Text fontSize="30px" color="white">채준혁</Text>
        <Text mt="5px" fontSize="20px" color="white">"너무 재미있어요"</Text>
      </CustomCredit>

      <CustomCredit title="Front" roles="(각 부서별 역할 적는 곳)">
      <Text fontSize="30px" color="white">김준서</Text>
        <Text mt="5px" fontSize="20px" color="white">"재밌노"</Text>
        <Text fontSize="30px" color="white">박지환</Text>
        <Text mt="5px" fontSize="20px" color="white">"너무 재미있어요"</Text>
        <Text fontSize="30px" color="white">김민경</Text>
        <Text mt="5px" fontSize="20px" color="white">"너무 재미있어요"</Text>
      </CustomCredit>

      <CustomCredit title="DB" roles="(각 부서별 역할 적는 곳)">
      <Text fontSize="30px" color="white">채준혁</Text>
        <Text mt="5px" fontSize="20px" color="white">"내용"</Text>
        <Text fontSize="30px" color="white">윤태성</Text>
        <Text mt="5px" fontSize="20px" color="white">"내용"</Text>
        <Text fontSize="30px" color="white">최인서</Text>
        <Text mt="5px" fontSize="20px" color="white">"내용"</Text>
      </CustomCredit>

      <CustomCredit title="Server" roles="(각 부서별 역할 적는 곳)">
        <Text fontSize="30px" color="white">이준혁</Text>
        <Text mt="5px" fontSize="20px" color="white">"내용"</Text>        
      </CustomCredit>  
    </VStack>,
  ];
  const [currentCredit, cycleCredits] = useCycle(...creditsContent);

  useEffect(() => {
    setTimeout(() => {
      setCreditsVisible(true);
    }); // 1초 후에 크레딧을 표시하도록 수정

    setTimeout(() => {
      setShowTitlePrompt(true);
    },(creditsContent.length * 15000));

    setTimeout(() => {
      setCreditsVisible(false);
    },(creditsContent.length * 15000));

    setTimeout(() => {
      // 크레딧 컨텐츠가 모두 출력된 후 1초 뒤에 service.js 페이지로 이동
      window.location.href = "./service"; // 원하는 페이지 경로로 수정
    },(creditsContent.length * 15000) + 1000); // 1초 뒤에 이동
  }, []);

  const loopCredits = () => {
    if (!creditsVisible) return null;

    return (
      <AnimatePresence>
        {/* 크레딧 컨텐츠가 아래에서부터 시작하도록 "initial" 속성을 추가 */}
        <motion.div
          key={currentCredit?.key || ""}
          initial={{ y: "100%" }}
          animate={{ y: "-100%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 15, ease: "linear" }}
        >
          {currentCredit}
        </motion.div>
      </AnimatePresence>
    );
  };

  const handleTitleClick = () => {
    setShowTitlePrompt(false);
    // 페이지 이동 코드 추가
    window.location.href = "./service"; // 원하는 페이지 경로로 수정
  };

  return (
    <Box
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor="black"
      color="white"
      overflow="hidden"
    >
      <Box height="80vh" overflow="hidden" textAlign="center">
        <motion.div
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          position="relative"
        >
          <a href="./service" style={{ textDecoration: "none" }}>
            <Text
              fontSize="4xl"
              position="absolute"
              top="20px"
              left="20px"
              zIndex="1"
              color="white"
              onClick={handleTitleClick}
            >
              Stage_play
            </Text>
          </a>
          {loopCredits()}
        </motion.div>
      </Box>
    </Box>
  );
};

export default Service;