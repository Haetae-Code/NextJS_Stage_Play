import { useEffect, useState } from "react";
import { Text, Box, Divider, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

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
  // Repeat the creditsContent array three times
  const repeatedCreditsContent = [...creditsContent, ...creditsContent, ...creditsContent];

  const [currentCreditIndex, setCurrentCreditIndex] = useState(0);

  useEffect(() => {
    if (creditsVisible) {
      const autoScroll = setInterval(() => {
        setCurrentCreditIndex((prevIndex) => {
          // Calculate the next index based on the number of sections (12 in this case, 3 repetitions x 4 sections)
          const nextIndex = (prevIndex + 1) % 12;

          // Get the height of the container
          const containerHeight = document.getElementById("creditsContainer").clientHeight;

          // Calculate the height of each section based on the number of sections (12 in this case)
          const sectionHeight = containerHeight / 12;

          // If the next section is about to exit the view, reset to the first section
          if ((nextIndex + 1) * sectionHeight >= containerHeight) {
            return 0;
          } else {
            return nextIndex;
          }
        });
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
      <Box id="creditsContainer" height="80vh" overflow="hidden">
        <AnimatePresence custom={currentCreditIndex}>
          <motion.div
            key={currentCreditIndex}
            initial={{ y: "0%" }}
            animate={{ y: `${25 * -currentCreditIndex}%` }} // Use a negative value here
            exit={{ y: "-100%" }} // Use a negative value here
            transition={{ duration: 5, ease: "linear" }}
          >
            {repeatedCreditsContent[currentCreditIndex]}
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default service;
