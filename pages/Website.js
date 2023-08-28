import { useEffect, useState } from "react";
import { Text, Box, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const titleStyle = {
  fontSize: "50px",
  fontWeight: "bold",
  marginRight: "20px",
  textAlign: "left",
};

// Custom component to display each credit
const CustomCredit = ({ title, roles, children }) => (
  <Box>
    <VStack spacing="20px" margin="20px">
      <Text style={{ ...titleStyle, color: "white" }}>{title}</Text>
      <Text fontSize="20px" color="white">{roles}</Text>
      {children}
    </VStack>
  </Box>
);

const Service = () => {
  const [creditsVisible, setCreditsVisible] = useState(false);
  const [showTitlePrompt, setShowTitlePrompt] = useState(false);

  // Array of credits content
  const creditsContent = [
    <VStack spacing="20px" margin="20px">
      {/* ... (reduced for brevity) */}
    </VStack>,
  ];

  const [currentCredit, cycleCredits] = useCycle(...creditsContent);

  // Handle the animation and redirection sequence
  useEffect(() => {
    const timeDuration = 1000 + (creditsContent.length * 20000);

    setTimeout(() => setCreditsVisible(true), 1000);
    setTimeout(() => setShowTitlePrompt(true), timeDuration);
    setTimeout(() => setCreditsVisible(false), timeDuration + 10000);
    setTimeout(() => window.location.href = "./service", timeDuration + 1000);

  }, []);

  const loopCredits = () => {
    if (!creditsVisible) return null;

    return (
      <AnimatePresence>
        <motion.div
          key={currentCredit?.key || ""}
          initial={{ y: "100%" }}
          animate={{ y: "-100%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 20, ease: "linear" }}
        >
          {currentCredit}
        </motion.div>
      </AnimatePresence>
    );
  };

  // Handle the title click event
  const handleTitleClick = () => {
    setShowTitlePrompt(false);
    window.location.href = "./service";
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
