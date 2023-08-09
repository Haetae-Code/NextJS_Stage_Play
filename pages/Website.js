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
      <Text style={titleStyle}>{title}</Text>
      <Text fontSize="20px">{roles}</Text>
      {children}
    </VStack>
    <br />
  </Box>
);

const Service = () => {
  const [creditsVisible, setCreditsVisible] = useState(false);
  const [showTitlePrompt, setShowTitlePrompt] = useState(false); // 초기에는 false로 설정

  const creditsContent = [
    <VStack spacing="20px" margin="20px">
      <CustomCredit title="Manager" roles="(각 부서별 역할 적는 곳)">
        <Text fontSize="30px">
          <a href="">채준혁</a>
        </Text>
        <Text mt="5px" fontSize="20px">"너무 재미있어요"</Text>
      </CustomCredit>

      <CustomCredit title="Front" roles="(각 부서별 역할 적는 곳)">
        <Text fontSize="30px">
          <a href="https://github.com/wwmmIIll">김준서</a>
        </Text>
        <Text mt="5px" fontSize="20px">"재밌노"</Text>
        <Text fontSize="30px">
          <a href="">박지환</a>
        </Text>
        <Text mt="5px" fontSize="20px">"너무 재미있어요"</Text>
        <Text fontSize="30px">
          <a href="">김민경</a>
        </Text>
        <Text mt="5px" fontSize="20px">"너무 재미있어요"</Text>
      </CustomCredit>

      <CustomCredit title="DB" roles="(각 부서별 역할 적는 곳)">
        <Text fontSize="30px">
          <a href="">채준혁</a>
        </Text>
        <Text mt="5px" fontSize="20px">"내용"</Text>
        <Text fontSize="30px">
          <a href="">윤태성</a>
        </Text>
        <Text mt="5px" fontSize="20px">"내용"</Text>
        <Text fontSize="30px">
          <a href="">최인서</a>
        </Text>
        <Text mt="5px" fontSize="20px">"내용"</Text>
      </CustomCredit>

      <CustomCredit title="Server" roles="(각 부서별 역할 적는 곳)">
        <Text fontSize="30px">
          <a href="">이준혁</a>
        </Text>
        <Text mt="5px" fontSize="20px">"내용"</Text>
      </CustomCredit>
    </VStack>,
  ];
  const [currentCredit, cycleCredits] = useCycle(...creditsContent);

  useEffect(() => {
    setTimeout(() => {
      setCreditsVisible(true);
    }, 3000); // 3초 뒤에 VStack 내용이 나타나도록 지연

    // 모든 크레딧 컨텐츠가 출력된 후에 제목 클릭 프롬프트를 보여줍니다.
    setTimeout(() => {
      setShowTitlePrompt(true);
    }, 3000 + (creditsContent.length * 10000)); // 3초 뒤에 + (크레딧 개수 * 10초)

    // 크레딧 컨텐츠가 모두 출력된 후에 정지하도록 합니다.
    setTimeout(() => {
      setCreditsVisible(false);
    }, 3000 + (creditsContent.length * 10000) + 10000); // 3초 뒤에 + (크레딧 개수 * 10초) + 10초
  }, []);

  const loopCredits = () => {
    if (!creditsVisible) return null;

    return (
      <AnimatePresence>
        <motion.div
          key={currentCredit?.key || ""}
          initial={{ y: 0 }}
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
              fontSize="3xl"
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
        {/* 내용이 다 나온 후에 "제목을 클릭하세요." 문구가 나오도록 조건 추가 */}
        {showTitlePrompt && !creditsVisible && (
          <Text fontSize="20px" mt="20px" color="white">
            Stage_play를 클릭하세요.
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default Service;