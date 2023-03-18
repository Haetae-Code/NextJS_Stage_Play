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
  Button,
  VStack,
  Stack

} from '@chakra-ui/react'
//import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
//import ImageSlider from '../components/MainImageSlider'
import React from 'react'
import { auto } from '@popperjs/core'

const Page = () => {
    return (
        <Container ml={40}>
            <Stack spacing={3} direction='row' align='center'>
                <Heading py={10}> 제목: 공연 제목</Heading>
                <Button colorScheme='blue' size='xs'>
                현재상영중
                </Button>
                <Button colorScheme='blue' size='xs'>
                예매중
                </Button>
                <Button colorScheme='red' size='xs'>
                D-100
                </Button>
            </Stack>
            <Container>
            <Flex w={800}>
                <Box>
                    <Image
                        src='https://bit.ly/dan-abramov' alt='Dan Abramov'
                        shadow="2xl"
                        w={300}
                        h={400}
                        display="block"
                    />
                </Box>
                <VStack>
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
                <Box>
                    <Button mt={20} 
                    width='320px' 
                    border='2px' 
                    colorScheme='blue'> 
                    예매하기 
                    </Button>
                </Box>
                </VStack>
            </Flex>
            </Container>
            <Tabs w={'max-content'} py={20}>
                <TabList>
                    <Tab>공연 정보</Tab>                       
                    <Tab>캐스팅 정보</Tab>
                    <Tab>관람 후기</Tab>
                    <Tab>Q & A</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div>정보정보정보정보정보정보정보정보정보정보정보정보정보</div>
                    </TabPanel>
                    <TabPanel>
                        <div>정보정보정보정보정보정보정보정보정보정보정보정보정보</div>
                    </TabPanel>
                    <TabPanel>
                        <div>후기후기후기후기후기후기후기후기후기후기후기후기후기</div>
                    </TabPanel>
                    <TabPanel>
                        <div>질문질문질문질문질문질문질문질문질문질문질문질문질문</div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>    
    )
}

export default Page