import { Box, IconButton,Text } from '@chakra-ui/react';

import { animateScroll as scroll } from 'react-scroll';

const TopButton = () => {
  const handleClick = () => {
    scroll.scrollToTop({ smooth: true });
  };

  return (
    <Box position="fixed" bottom="2rem" right="2rem">
      <IconButton
        
        size="lg"
        aria-label="Scroll to top"
        onClick={handleClick}
      ><Text>Top</Text></IconButton>
    </Box>
  );
};

export default TopButton;