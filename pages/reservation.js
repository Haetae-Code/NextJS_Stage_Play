import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Flex,
  Image,
  Table,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react'
//import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
//import ImageSlider from '../components/MainImageSlider'
import React from 'react'
import { auto } from '@popperjs/core'


const Page = () => {
    return (
        <Container w="100%" mr={auto} ml={auto}>
            <Flex>
                
            </Flex>
            <Heading py={10}> 제목: 럭키 채준혁.ver</Heading>
            <Box w="100%">
            <Image
                        src='https://bit.ly/dan-abramov' alt='Dan Abramov'
                        rounded="1rem"
                        shadow="2xl"
                        w="100%"
                        display="block"
            />
            </Box>
            <Flex h={{ base: "auto", md: "100vh" }} py={10}
            direction={{ base: "column-reverse", md: "row" }}>
                <VStack w="full" h="full" p={0} spacing={0} alignItems="flex-start">

                    <Tabs>
                        <TabList>
                            <Tab>공연 정보</Tab>
                            <Tab>캐스팅 정보</Tab>
                            <Tab>관람 후기</Tab>
                            <Tab>Q & A</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                            <div><Table variant='simple'>
                                <Tbody>
                                    <Tr>
                                        <Td>공연 장소</Td>
                                        <Td>청운대학교 홍성캠퍼스 (444호)</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>공연 기간</Td>
                                        <Td>2023/03/06 ~ 2023/03/07</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>공연 시간</Td>
                                        <Td>12:00 ~ 14:00</Td>
                                    </Tr>
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                    <Th>가격</Th>
                                    <Th>1000만원</Th>
                                    </Tr>
                                </Tfoot>
                            </Table></div>
                            </TabPanel>
                            <TabPanel>
                                <div>채준혁</div>
                            </TabPanel>
                            <TabPanel>
                                <div>잘생겼다</div>
                            </TabPanel>
                            <TabPanel>
                                <div>질문있어요</div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </VStack>
            </Flex>
        </Container>    
    )
}

export default Page