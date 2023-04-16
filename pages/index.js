import NextLink from "next/link";
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
    CardBody,
    CardFooter,
    CardHeader,
    Stack,
    Card,
    Image,
    Divider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    VStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
//import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import React, { useState, Fragment } from "react";
import ImageSlider from "../components/MainImageSlider";

const Page = () => {
    const [value, setValue] = useState(50);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const [language, setLanguage] = useState("English");

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    }

    return (
        <div>
            <Fragment>
            <Container maxWidth="100%">
                <ImageSlider></ImageSlider>
                <Container pt={3} maxWidth="100%">
                    <Box flexGrow={1} display={"flex"}>
                        <Heading as="h1" variant="page-title">
                            Test h1 this is the maxW test
                        </Heading>
                        <p>Developer test page</p>
                        <p>Stage Play</p>
                        <p>welcome</p>
                    </Box>
                </Container>
            </Container>

            <Box position="relative">
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
                        <Text
                            fontSize="xs"
                            fontWeight="bold"
                            textAlign="center"
                        >
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
            <print>&nbsp;</print>
                <p>뮤지컬과</p>
                <div style={{position:"center"}}>
                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill,minmax(200px,1fr))'>
            <Card maxW='sm'>
              <Image
              
           borderRadius='sm'
            src='http://placekitten.com/201/300'
            alt='캣츠' />
            <CardBody>캣츠</CardBody>
            <CardFooter> <Stack  align='center'> 
        <Button  colorScheme='blue' variant='outline'>
          예약하기
         </Button>
        </Stack></CardFooter>
            </Card>
            <Card maxW='sm'>
              <Image
           borderRadius='sm'
            src='http://placekitten.com/201/300'
            alt='캣츠' />
            <CardBody>aa</CardBody>
            </Card>
            <Card maxW='sm'>
              <Image
           borderRadius='sm'
            src='http://placekitten.com/201/300'
            alt='캣츠' />
            <CardBody>aa</CardBody>
            </Card>
            <Card maxW='sm'>
              <Image
           borderRadius='sm'
            src='http://placekitten.com/201/300'
            alt='캣츠' />
            <CardBody>aa</CardBody>
            </Card>
            
            </SimpleGrid>
            </div>
            <print>&nbsp;</print>

            <div style={{position:"center"}}>
                <p>영화과</p>
                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill,minmax(200px,1fr))'>
            <Card maxW='sm'>
              <Image
           borderRadius='sm'
            src='http://placekitten.com/201/300'
            alt='캣츠' />
            <CardBody>aa</CardBody>
            <CardFooter> <Stack  align='center'> 
        <Button  colorScheme='blue' variant='outline'>
          예약하기
         </Button>
        </Stack></CardFooter>
            </Card>
            <Card maxW='sm'>
              <Image
           borderRadius='sm'
            src='http://placekitten.com/201/300'
            alt='캣츠' />
            <CardBody>aa</CardBody>
            </Card>
            <Card maxW='sm'>
              <Image
           borderRadius='sm'
            src='http://placekitten.com/201/300'
            alt='캣츠' />
            <CardBody>aa</CardBody>
            </Card>
            <Card maxW='sm'>
              <Image
           borderRadius='sm'
            src='http://placekitten.com/201/300'
            alt='캣츠' />
            <CardBody>aa</CardBody>
            </Card>
           
            </SimpleGrid>

           
            </div>
        </Fragment>
        <Box>
        <Divider mt={8} mb={8} />
        </Box>
        <div>&nbsp;</div>
        <Box>
        <Text ml={150} fontSize="xl" fontWeight="bold">
        공지사항 &nbsp;&nbsp;&nbsp;&nbsp;     : &nbsp;&nbsp;&nbsp;&nbsp; 우천으로 인한 행사 일정 변경 안내
        </Text>

        </Box>
                <div>&nbsp;</div>
        <Box>
            <Divider mt={8} mb={8} />
            <Flex>
                
                <Box>
                    <Text ml={150} fontSize="xl" fontWeight="bold">
                        회사 소개
                    </Text>
                </Box>
                
                <Box>
                    <Text ml={150} fontSize="xl" fontWeight="bold">
                        서비스 소개
                    </Text>
                </Box>

                <Box>
                    <Text ml={150} fontSize="xl" fontWeight="bold">
                        자주 묻는 질문
                    </Text>
                </Box>

                <Box>
                    <Text ml={150} fontSize="xl" fontWeight="bold">
                        채용
                    </Text>
                </Box>
            </Flex>
            
            <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }} 
          >
                <Menu>
                    <MenuButton as={Button}>
                        {language}
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => handleLanguageChange("English")}>English</MenuItem>
                        <MenuItem onClick={() => handleLanguageChange("한국어")}>한국어</MenuItem>
                    </MenuList>
                </Menu>       
            </Stack>            
        </Box>
        </div>       
    );
};

export default Page;
