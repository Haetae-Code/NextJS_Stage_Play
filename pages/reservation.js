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
        <Container >
            <Heading py={10}> 제목: 럭키 채준혁.ver</Heading>
            <Container >
            <Flex>
                <Box w="100%">
                    <Image
                        src='https://bit.ly/dan-abramov' alt='Dan Abramov'
                        rounded="1rem"
                        shadow="2xl"
                        w="100%"
                        display="block"
                    />
                </Box>
                <Box>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                            <Thead>
                                <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td isNumeric>25.4</Td>
                                </Tr>
                                <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td isNumeric>30.48</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                            <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                            </Tr>
                            </Tfoot>
                            </Table>
                        </TableContainer>
                </Box>
            </Flex>
            </Container>
            <Tabs py={20}>
                <TabList>
                    <Tab>공연 정보</Tab>                       <Tab>캐스팅 정보</Tab>
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