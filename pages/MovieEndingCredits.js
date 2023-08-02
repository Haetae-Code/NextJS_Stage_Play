import { useEffect, useState } from "react";
import { Text, Box, Divider, VStack } from "@chakra-ui/react";
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
      <Divider />
      <Text fontSize="20px">{roles}</Text>
      {children}
    </VStack>
    <br />
  </Box>
);

const service = () => {
  const [creditsVisible, setCreditsVisible] = useState(true);

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
  const [currentCreditIndex, setCurrentCreditIndex] = useState(0);

  useEffect(() => {
    if (creditsVisible) {
      const autoScroll = setInterval(() => {
        setCurrentCreditIndex((prevIndex) => (prevIndex + 1) % creditsContent.length);
      }, 5000); // 5초마다 크레딧 변경

      return () => clearInterval(autoScroll);
    }
  }, [creditsVisible]);

  useEffect(() => {
    if (!creditsVisible) {
      // If creditsVisible is false, show credits again after 2 seconds
      const timeout = setTimeout(() => {
        setCreditsVisible(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [creditsVisible]);

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
      <Box height="80vh" overflow="hidden">
        <AnimatePresence custom={currentCreditIndex}>
          <motion.div
            key={currentCreditIndex}
            initial={{ y: "0%" }}
            animate={{ y: "-25%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
          >
            {creditsContent[currentCreditIndex]}
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default service;
