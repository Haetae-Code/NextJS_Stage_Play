import NextLink from 'next/link' //공연 정보에 공연 테이블 다 넣기, 외부인 재학생 구분 필요 X
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
  HStack,
  Stack,
  Center,
} from '@chakra-ui/react'
//import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
//import ImageSlider from '../components/MainImageSlider'
import React from 'react'
import { auto } from '@popperjs/core'

const Page = () => {
    return (
            <Box>
                <Box>
                    <Stack py={5}>
                        <Flex>
                        <Button colorScheme='blue' size='xs'> 현재상영중 </Button>
                        <Button colorScheme='blue' size='xs'> 예매중 </Button>
                        <Button colorScheme='red' size='xs'> D-100 </Button>
                        </Flex>
                        <Heading size={'xl'} >제목:이젠 제목이 길어도 괜찮아요</Heading>
                    </Stack>

                    <Flex justify={'center'} alignItems={'center'} flexDirection={['column', 'row']}>
                        <Box mb={[10, 0]} mr={[0, 10]}>
                            <Image src='https://bit.ly/dan-abramov' alt='No image' shadow="2xl" display="block"/>
                        </Box>
                        <Stack>
                            <Box>
                                <TableContainer>
                                    <Table variant='simple' size={['sm', 'md']}>
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
                                        <Th>A석-5000원   B석-3000원</Th>
                                        </Tr>
                                        </Tfoot>
                                    </Table>
                                </TableContainer>
                            </Box>
                            <Box> 
                                <Button w={'100%'} size={['sm', 'md']} border='2px' colorScheme='blue'> 예매하기</Button>
                            </Box>
                        </Stack>
                    </Flex>
                </Box>

                <Box>
                    <Tabs align='center' pt={'20'}>
                        <TabList>
                        <Tab>공연 정보</Tab>                       
                        <Tab>캐스팅 정보</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                            <Table>
                                <Thead>
                                    <Tr>
                                        <Th fontSize={'x-large'}>공연 장소</Th>
                                    </Tr>
                                </Thead>
                            </Table>
                            <Table>
                                <Tbody>
                                    <Tr>
                                    <Td w={20}>장소</Td>
                                    <Td>홍주문화회관</Td>
                                    </Tr>
                                    <Tr>
                                    <Td w={20}>주소</Td>
                                    <Td>충남 홍성군 홍성읍 내포로 164</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                            <Box py={10}>
                                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                            </Box>

                            <Table>
                                <Thead>
                                    <Tr>
                                        <Th fontSize={'x-large'}>포스터 위치</Th>
                                    </Tr>
                                </Thead>
                            </Table>
                            <Box pt={10}>
                                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                            </Box>
                            </TabPanel>

                            <TabPanel py={10}>
                                <Stack>
                                <Box py={10}>
                                    <Flex>
                                        <Image src='https://bit.ly/dan-abramov' alt='No image' borderRadius='full' boxSize='100px' />
                                        <TableContainer>
                                            <Table variant='simple'>
                                                <Tfoot>
                                                    <Tr>
                                                    <Th>이름</Th>
                                                    <Th>채준혁</Th>
                                                    </Tr>
                                                    <Tr>
                                                    <Th>학과</Th>
                                                    <Th>컴퓨터공학과</Th>
                                                    </Tr>
                                                    <Tr>
                                                    <Th>소개</Th>
                                                    <Th>컴공 체육부</Th>
                                                    </Tr>
                                                </Tfoot>
                                            </Table>
                                        </TableContainer>
                                    </Flex>
                                </Box>

                                <Box py={10}>
                                    <Flex>
                                        <Image src='https://bit.ly/dan-abramov' alt='No image' borderRadius='full' boxSize='100px' />
                                        <TableContainer>
                                            <Table variant='simple'>
                                                <Tfoot>
                                                    <Tr>
                                                    <Th>이름</Th>
                                                    <Th>김준서</Th>
                                                    </Tr>
                                                    <Tr>
                                                    <Th>학과</Th>
                                                    <Th>컴퓨터공학과</Th>
                                                    </Tr>
                                                    <Tr>
                                                    <Th>소개</Th>
                                                    <Th>컴공 홍보부</Th>
                                                    </Tr>
                                                </Tfoot>
                                            </Table>
                                        </TableContainer>
                                    </Flex>
                                </Box>

                                <Box py={10}>
                                    <Flex>
                                        <Image src='https://bit.ly/dan-abramov' alt='No image' borderRadius='full' boxSize='100px' />
                                        <TableContainer>
                                            <Table variant='simple'>
                                                <Tfoot>
                                                    <Tr>
                                                    <Th>이름</Th>
                                                    <Th>전민혁혁</Th>
                                                    </Tr>
                                                    <Tr>
                                                    <Th>학과</Th>
                                                    <Th>컴퓨터공학과</Th>
                                                    </Tr>
                                                    <Tr>
                                                    <Th>소개</Th>
                                                    <Th>스터디 에이스</Th>
                                                    </Tr>
                                                </Tfoot>
                                            </Table>
                                        </TableContainer>
                                    </Flex>
                                </Box>

                                <Box py={10}>
                                    <Flex>
                                        <Image src='https://bit.ly/dan-abramov' alt='No image' borderRadius='full' boxSize='100px' />
                                        <TableContainer>
                                            <Table variant='simple'>
                                                <Tfoot>
                                                    <Tr>
                                                    <Th>이름</Th>
                                                    <Th>최인서</Th>
                                                    </Tr>
                                                    <Tr>
                                                    <Th>학과</Th>
                                                    <Th>컴퓨터공학과</Th>
                                                    </Tr>
                                                    <Tr>
                                                    <Th>소개</Th>
                                                    <Th>최인서맨</Th>
                                                    </Tr>
                                                </Tfoot>
                                            </Table>
                                        </TableContainer>
                                    </Flex>
                                </Box>
                                </Stack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>  
                </Box>
            </Box> 
    )
}

export default Page