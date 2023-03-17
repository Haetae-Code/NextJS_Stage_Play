import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Flex,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,

} from '@chakra-ui/react'
//import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
//import ImageSlider from '../components/MainImageSlider'
import React from 'react'
import { auto } from '@popperjs/core'


const Page = () => {
    return (
        <Container m={0}>
            <Heading py={10}> 제목: 럭키 채준혁.ver</Heading>
            <Container>
            <Flex w={800}>
                <Box>
                    <Image
                        src='https://bit.ly/dan-abramov' alt='Dan Abramov'
                        rounded="1rem"
                        shadow="2xl"
                        width={400}
                        height={400}
                        display="block"
                    />
                </Box>
                <Box ml={10}>
                <TableContainer mt={20}>
                    <Table variant='simple'>
                            <Tbody>
                                <Tr>
                                <Td>공연 장소</Td>
                                <Td>홍성캠퍼스</Td>
                                </Tr>
                                <Tr>
                                <Td>공연 기간</Td>
                                <Td>2023/03/17~2023/03/20</Td>
                                </Tr>
                                <Tr>
                                <Td>공연 시간</Td>
                                <Td>170분</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                <Th>가격</Th>
                                <Th>A석 5000원</Th>
                                </Tr>
                            </Tfoot>
                    </Table>
                </TableContainer>
                </Box>
            </Flex>
            </Container>
            <Tabs py={20}>
                <TabList>
                    <Tab>공연 정보</Tab>                       
                    <Tab>캐스팅 정보</Tab>
                    <Tab>관람 후기</Tab>
                    <Tab>Q & A</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div>알빠노</div>
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
        </Container>    
    )
}

export default Page