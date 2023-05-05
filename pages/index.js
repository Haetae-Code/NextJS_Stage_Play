import NextLink from "next/link";
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    Flex,
    Text,
    CardBody,
    CardFooter,
    CardHeader,
    Stack,
    Card,
    Image,
    Divider,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from "@chakra-ui/react";
//import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import React, { useState, Fragment } from "react";
import ImageSlider from "../components/MainImageSlider";

const Page = () => {
    

    

    return (
        <div>
        <Fragment>
            <Container maxWidth="100%">
                <div>&nbsp;</div>
                
                <ImageSlider></ImageSlider>
                <Container pt={3} maxWidth="100%">
                    <Box flexGrow={1} display={"flex"}>
                    
                        <Heading size="2xl" as="h1" variant="page-title" mt="100px">
                         새로운 행사들을 여기서 한 눈에 봐요 &#x1F600;                     
                        </Heading>
                        
                    </Box>
                    
                </Container>
                
            </Container>
            <Divider mt={8} mb={8} />
        {/*뮤지컬과 행사 슬라이더 */}
            <Box display="flex">
            <p style={{fontSize: '40px', fontWeight: 'bold'}}>뮤지컬과</p>
            <Stack direction='row' h='80px' p={4}>
            <Divider orientation='vertical' />
            <Text>우리 학교 뮤지컬과 학생들의 공연들이에요 &#x2B50;</Text>
            </Stack>
            </Box>
            
            <p>&nbsp;</p>
            <div style={{position:"center"}}>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill,minmax(300px,1fr))'>              
                
                <Card maxW='sm'>              
                <Image
                borderRadius='sm'
                src='https://img.newspim.com/news/2018/11/01/1811011558557240.jpg'
                alt='젠' />
                <CardBody>04월 18일(화) 온라인, 강남구 <br/></CardBody>
                <Text fontSize="xl" fontWeight="bold" ml={5}>젠틀맨스 가이드 - 사랑과 살인편</Text>
                <Text fontSize="xl" fontWeight="bold" mt={1} mb={0} ml={5}>
                    12,000원
                </Text>
                <CardFooter> 
                    <Stack  align='center'> 
                        <Button  colorScheme='blue' variant='outline'>
                            예약하기
                        </Button>
                    </Stack>
                    <StatGroup ml={20}>
                        <Stat>
                        <StatLabel>예매율</StatLabel>
                        <StatNumber>45%</StatNumber>
                        <StatHelpText>
                        <StatArrow type='increase' />
                            10.00%
                        </StatHelpText>
                        </Stat>
                        
                    </StatGroup>
                </CardFooter>
                </Card>
                <Card maxW='sm'>
                <Image
                    borderRadius='sm'
                    src='data:image/png;base64,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'
                    alt='캣츠' />
                    <CardBody>04월 18일(화) 온라인, 강남구 <br/></CardBody>
                    <Text fontSize="xl" fontWeight="bold" ml={5}>캣츠</Text>
                    <Text fontSize="xl" fontWeight="bold" mt={1} mb={0} ml={5}>9,000원</Text>
                    <CardFooter> 
                        <Stack  align='center'> 
                            <Button  colorScheme='blue' variant='outline'>
                                예약하기
                            </Button>
                        </Stack>
                        <StatGroup ml={20}>
                            <Stat>
                                <StatLabel>예매율</StatLabel>
                                <StatNumber>20%</StatNumber>
                                <StatHelpText>
                                <StatArrow type='decrease' />
                                    9.05%
                                </StatHelpText>
                            </Stat>
                    </StatGroup>
                    </CardFooter>
                </Card>
                <Card maxW='sm'>
                <Image
                    borderRadius='sm'
                    src='data:image/jpeg;base64,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'
                    alt='캣츠' />
                    <CardBody>04월 18일(화) 온라인, 강남구 <br/></CardBody>
                    <Text fontSize="xl" fontWeight="bold" ml={5}>빨래</Text>
                    <Text fontSize="xl" fontWeight="bold" mt={1} mb={0} ml={5}>
                    13,000원
                    </Text>
                    <CardFooter> 
                        <Stack  align='center'> 
                            <Button  colorScheme='blue' variant='outline'>
                                예약하기
                            </Button>
                        </Stack>
                        <StatGroup ml={20}>
                            <Stat>
                                <StatLabel>예매율</StatLabel>
                                <StatNumber>24%</StatNumber>
                                <StatHelpText>
                                <StatArrow type='increase' />
                                    2.05%
                                </StatHelpText>
                            </Stat>
                    </StatGroup>
                    </CardFooter>
                </Card>
                
                <Card maxW='sm'>
                <Image
                    borderRadius='sm'
                    src='data:image/jpeg;base64,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'
                    alt='캣츠' />
                    <CardBody>04월 18일(화) 온라인, 강남구 <br/></CardBody>
                    <Text fontSize="xl" fontWeight="bold" ml={5}>해적</Text>
                    <Text fontSize="xl" fontWeight="bold" mt={1} mb={0} ml={5}>
                    15,000원
                    </Text>
                    <CardFooter>
                        <Stack  align='center'> 
                            <Button  colorScheme='blue' variant='outline'>
                                예약하기
                            </Button>
                        </Stack>
                        <StatGroup ml={20}>
                            <Stat>
                                <StatLabel>예매율</StatLabel>
                                <StatNumber>20%</StatNumber>
                                <StatHelpText>
                                <StatArrow type='increase' />
                                    9.05%
                                </StatHelpText>
                            </Stat>
                    </StatGroup>
                    </CardFooter>
                </Card>
                
            </SimpleGrid>



        {/*영화과 행사 슬라이더 */}
        </div>
            <print>&nbsp;</print>
            <Divider mt={8} mb={8} />
            <div style={{position:"center"}}>
                <Box display="flex">
                <p style={{fontSize: '40px', fontWeight: 'bold'}}>영화과</p>
                <Stack direction='row' h='80px' p={4}>
                <Divider orientation='vertical' />
                <Text>우리 학교 영화과 학생들의 공연은 어떨까요? &#x1F606;</Text>
                </Stack>
                </Box>
                <p>&nbsp;</p>
                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill,minmax(300px,1fr))'>
            <Card maxW='sm'>
              <Image
                borderRadius='sm'
                src='https://www.m-i.kr/news/photo/202101/784601_561474_542.jpg'
                alt='캣츠' />
                <CardBody>04월 18일(화) 온라인, 강남구 <br/></CardBody>
                <Text fontSize="xl" fontWeight="bold" ml={5}>팬텀</Text>
                <Text fontSize="xl" fontWeight="bold" mt={1} mb={0} ml={5}>
                    12,000원
                </Text>
                <CardFooter>
                    <Stack  align='center'> 
                        <Button  colorScheme='blue' variant='outline'>
                            예약하기
                        </Button>
                    </Stack>
                    <StatGroup ml={20}>
                            <Stat>
                                <StatLabel>예매율</StatLabel>
                                <StatNumber>10%</StatNumber>
                                <StatHelpText>
                                <StatArrow type='decrease' />
                                    9.55%
                                </StatHelpText>
                            </Stat>
                    </StatGroup>
                </CardFooter>
            </Card>

            <Card maxW='sm'>
              <Image
                borderRadius='sm'
                src='https://image.yes24.com/images/chyes24/froala/0/44431/26305.jpg'
                alt='캣츠' />
                <CardBody>04월 18일(화) 온라인, 강남구 <br/></CardBody>
                <Text fontSize="xl" fontWeight="bold" ml={5}>문스토리</Text>
                <Text fontSize="xl" fontWeight="bold" mt={1} mb={0} ml={5}>
                    15,000원
                </Text>
                <CardFooter>
                    <Stack  align='center' display="flex"> 
                        <Button  colorScheme='blue' variant='outline'>
                            예약하기
                        </Button>

                    
                    </Stack>
                    <StatGroup ml={20}>
                            <Stat>
                                <StatLabel>예매율</StatLabel>
                                <StatNumber>20%</StatNumber>
                                <StatHelpText>
                                <StatArrow type='decrease' />
                                    9.05%
                                </StatHelpText>
                            </Stat>
                    </StatGroup>
                </CardFooter>
            </Card>

           <Card maxW='sm'>
              <Image
                borderRadius='sm'
                src='https://www.kgnews.co.kr/data/photos/20220728/art_16578463029062_e1b76e.jpg'
                alt='캣츠' />
                <CardBody>04월 18일(화) 온라인, 강남구 <br/></CardBody>
                <Text fontSize="xl" fontWeight="bold" ml={5}>마틸다</Text>
                <Text fontSize="xl" fontWeight="bold" mt={1} mb={0} ml={5}>
                    18,000원
                </Text>
                <CardFooter>
                    <Stack  align='center'> 
                        <Button  colorScheme='blue' variant='outline'>
                            예약하기
                        </Button>
                    </Stack>
                    <StatGroup ml={20}>
                            <Stat>
                                <StatLabel>예매율</StatLabel>
                                <StatNumber>20%</StatNumber>
                                <StatHelpText>
                                <StatArrow type='decrease' />
                                    9.05%
                                </StatHelpText>
                            </Stat>
                    </StatGroup>
                </CardFooter>
            </Card>

            <Card maxW='sm'>
              <Image
                borderRadius='sm'
                src='https://newsimg.sedaily.com/2018/10/22/1S60FSQK8D_1.jpg'
                alt='캣츠' />
                <CardBody>04월 18일(화) 온라인, 강남구 <br/></CardBody>
                <Text fontSize="xl" fontWeight="bold" ml={5}>그날들</Text>
                <Text fontSize="xl" fontWeight="bold" mt={1} mb={0} ml={5}>
                    20,000원
                </Text>
                <CardFooter>
                    <Stack  align='center'> 
                        <Button  colorScheme='blue' variant='outline'>
                            예약하기
                        </Button>
                    </Stack>
                    <StatGroup ml={20}>
                            <Stat>
                                <StatLabel>예매율</StatLabel>
                                <StatNumber>60%</StatNumber>
                                <StatHelpText>
                                <StatArrow type='increase' />
                                    40.50%
                                </StatHelpText>
                            </Stat>
                    </StatGroup>
                </CardFooter>
            </Card>
           
            </SimpleGrid>

           
            </div>
            
        </Fragment>
        
        </div>
        
    );
};

export default Page;
