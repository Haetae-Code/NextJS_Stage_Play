import {
    Progress,
    CardFooter,
    CardBody,
    Image,
    CardHeader,
    Card,
    Box,
    Button,
    Container,
    Flex,
    Input,
    Select,
    Text,
    Heading,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Tfoot,
    Stack,
} from "@chakra-ui/react";

const reservationcheck = () => {
    return (
        <Box>
            <Heading>예약자 리스트</Heading>
            <Flex justify={"space-between"}>

                {/*공연 예약 현황 박스*/}
                <Box
                    mr={1}
                    w="61%"
                    mt={5}
                    fontSize="md"
                    borderRadius={15}
                    border="1px solid dodgerblue"
                    p={4}
                >
                    <Flex>
                        <Image
                            w="50%"
                            h="100%"
                            src="https://bit.ly/dan-abramov"
                            alt="Dan Abramov"
                            mr={5}
                        ></Image>
                        <Stack justify={"space-between"}>
                            <Box>
                                {/* 예약현황 백분율 */}
                                <Flex>
                                    <Text>예약 현황 &nbsp;</Text>
                                    <Text>80</Text>
                                    <Text>/</Text>
                                    <Text>100</Text>
                                </Flex>
                                <Progress value={80} />
                            </Box>

                            {/* 공연설명 */}
                            <Text>공연 제목:</Text>
                            <Text>공연 장소:</Text>
                            <Text>공연 날짜:</Text>
                            <Text>공연 시간:</Text>
                        </Stack>
                    </Flex>
                </Box>

                {/*예약자 검색 박스*/}
                <Box mr={1} w="39%" mt={5} fontSize="md" borderRadius={15} border="1px solid dodgerblue" p={4}>

                    <Box align="center" justify="center">

                        <Flex mt={5}>
                            <Text w="30%">
                                이름: &nbsp;
                            </Text>
                            <Input mb={3} w="full" name="name" type="text" />
                        </Flex>

                        <Flex>
                            <Text w="30%">
                                학번: &nbsp;
                            </Text>
                            <Input mb={3} w="full" name="name" type="text" />
                        </Flex>

                        <Flex >
                            <Text w="30%">
                                학과: &nbsp;
                            </Text>

                            <Select mb={3} w="full" name="student">
                                <option>모두</option>
                                <option>간호학과</option>
                                <option>공연기획경영학과</option>
                                <option>뮤지컬학과</option>
                                <option>미디어커뮤니케이션학과</option>
                                <option>방송영화영상학과</option>
                                <option>스포츠과학과</option>
                            </Select>
                        </Flex>

                        <Flex>
                            <Text w="30%">
                                전화번호: &nbsp;
                            </Text>
                            <Input mb={3} w="full" name="name" type="text" />
                        </Flex>

                        <Button colorScheme="blue" /*onClick={() => search()}*/>검색</Button>
                    </Box>
                </Box>
            </Flex>

            {/*예약자 리스트 박스*/}
            <Flex>
                <Stack mt={5} mr={1} w="61%">
                    <Box><Text >재학생</Text></Box>
                    <Box overflowX="auto"
                        h="200px"
                        whiteSpace="nowrap"
                        px="32px"
                        mt={10}
                        fontSize="md"
                        borderRadius={10}
                        border="1px solid dodgerblue"
                        p={1}

                        w="auto">
                        <TableContainer>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>이름</Th>
                                        <Th>학번</Th>
                                        <Th>학과</Th>
                                        <Th>전화번호</Th>
                                        <Th>관리</Th>
                                    </Tr>
                                </Thead>

                                {/*예약자 확인*/}
                                <Tbody>
                                    <Tr>
                                        <Td>김준서</Td>
                                        <Td>20210371</Td>
                                        <Td>컴퓨터공학과</Td>
                                        <Td>010-7704-5971</Td>
                                        <Td><Button size="xs" colorScheme="blue" mr={1}>수정</Button><Button size="xs" colorScheme="blue">삭제</Button></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>박지환</Td>
                                        <Td>20200371</Td>
                                        <Td>컴퓨터공학과</Td>
                                        <Td>010-7704-5971</Td>
                                        <Td><Button size="xs" colorScheme="blue" mr={1}>수정</Button><Button size="xs" colorScheme="blue">삭제</Button></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>김민경</Td>
                                        <Td>20210371</Td>
                                        <Td>컴퓨터공학과</Td>
                                        <Td>010-7704-5971</Td>
                                        <Td><Button size="xs" colorScheme="blue" mr={1}>수정</Button><Button size="xs" colorScheme="blue">삭제</Button></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>최인서</Td>
                                        <Td>20210371</Td>
                                        <Td>컴퓨터공학과</Td>
                                        <Td>010-7704-5971</Td>
                                        <Td><Button size="xs" colorScheme="blue" mr={1}>수정</Button><Button size="xs" colorScheme="blue">삭제</Button></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>윤태성</Td>
                                        <Td>20210371</Td>
                                        <Td>컴퓨터공학과</Td>
                                        <Td>010-7704-5971</Td>
                                        <Td><Button size="xs" colorScheme="blue" mr={1}>수정</Button><Button size="xs" colorScheme="blue">삭제</Button></Td>
                                    </Tr>
                                </Tbody>

                            </Table>
                        </TableContainer>
                    </Box>
                </Stack>
                <Stack mt={5} w="39%">
                    <Box><Text >외부인</Text></Box>
                    <Box overflowX="auto"
                        h="200px"
                        whiteSpace="nowrap"
                        px="32px"
                        mt={10}
                        fontSize="md"
                        borderRadius={10}
                        border="1px solid dodgerblue"
                        p={1}
                    >
                        <TableContainer>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>이름</Th>
                                        <Th>전화번호</Th>
                                        <Th>관리</Th>
                                    </Tr>
                                </Thead>

                                {/*예약자 확인*/}
                                <Tbody>
                                    <Tr>
                                        <Td>채준혁</Td>
                                        <Td>010-7704-5971</Td>
                                        <Td><Button size="xs" colorScheme="blue" mr={1}>수정</Button><Button size="xs" colorScheme="blue">삭제</Button></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>이준혁</Td>
                                        <Td>010-7704-5971</Td>
                                        <Td><Button size="xs" colorScheme="blue" mr={1}>수정</Button><Button size="xs" colorScheme="blue">삭제</Button></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>전민혁</Td>
                                        <Td>010-7704-5971</Td>
                                        <Td><Button size="xs" colorScheme="blue" mr={1}>수정</Button><Button size="xs" colorScheme="blue">삭제</Button></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>전채린</Td>
                                        <Td>010-7704-5971</Td>
                                        <Td><Button size="xs" colorScheme="blue" mr={1}>수정</Button><Button size="xs" colorScheme="blue">삭제</Button></Td>
                                    </Tr>
                                </Tbody>

                            </Table>
                        </TableContainer>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    );
};
export default reservationcheck;
