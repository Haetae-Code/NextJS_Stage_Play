import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from '@chakra-ui/react'
//import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import React, {useState, Fragment} from 'react'
import ImageSlider from '../components/MainImageSlider'


const Page = () => {
    const [value, setValue] = useState(50);

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    
    
    
    return (
      <>
      <Box>
            <Container maxWidth='100%'>
                <ImageSlider></ImageSlider>
                    <Container  pt={3} maxWidth='100%'>
                        <Box flexGrow={1} display={'flex'}>
                         <Heading as="h1" variant="page-title">
                            Test h1 this is the maxW test
                         </Heading>
                         <p>Developer test page</p>
                         <p>Stage Play</p>
                         <p>welcome</p>
                        </Box>
                    </Container>
            </Container>  

            <Box position = "relative">
                <Slider
                    value={value}
                    onChange={handleChange}
                    min={0}
                    max={100}
                    step={1}
                    colorScheme="blue"                
                >
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                        position="absolute"
                        top="-8px"
                        width="16px"
                        height="16px"
                        borderRadius="full"
                        bg="white"
                        boxShadow="md"
                    >
                        <Text fontSize="xs" fontWeight="bold" textAlign="center">
                            {value}
                        </Text>
                    </SliderThumb>
                </Slider>
                <Box 
                    position="absolute"
                    top="-24px"
                    left={`${(value / 100) * 100}%`}
                    transform="translateX(-50%)"
                    borderRadius="full"
                    bg="white"
                    boxShadow="md"
                    width="24px"
                    height="24px"
                />
            </Box>
        </Box>
        <Box mx={200}>
                    <Flex justifyContent="space-between">
                    <div>왼쪽</div>
                    <div>오른쪽</div>
                    </Flex>
        </Box>
        </>
      )
}

export default Page