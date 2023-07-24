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
                {/*예약자 검색 박스*/}
                <Box
                    mr={1}
                    w="45%"
                    mt={5}
                    fontSize="md"
                    borderRadius={15}
                    border="1px solid dodgerblue"
                    p={4}
                >
                    <Box align="center" justify="center">
                        <Flex>
                            <Text w="25%">이름: &nbsp;</Text>
                            <Input mb={2} w="full" name="name" type="text" />
                        </Flex>

                        <Flex>
                            <Text w="25%">선택: &nbsp;</Text>

                            <Select mb={2} w="full" name="student">
                                <option>모두</option>
                                <option>재학생</option>
                                <option>외부인</option>
                            </Select>
                        </Flex>

                        <Flex>
                            <Text w="25%">학번: &nbsp;</Text>
                            <Input mb={2} w="full" name="name" type="text" />
                        </Flex>

                        <Flex>
                            <Text w="25%">학과: &nbsp;</Text>
                            <Input mb={2} w="full" name="name" type="text" />
                        </Flex>

                        <Flex>
                            <Text w="25%">전화번호: &nbsp;</Text>
                            <Input mb={5} w="full" name="name" type="text" />
                        </Flex>

                        <Button colorScheme="blue" /*onClick={() => search()}*/>
                            검색
                        </Button>
                    </Box>
                </Box>

                {/*공연 예약 현황 박스*/}
                <Box
                    mr={1}
                    w="55%"
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
            </Flex>

            {/*예약자 리스트 박스*/}
            <Box
                overflowX="auto"
                h="200px"
                whiteSpace="nowrap"
                px="32px"
                mt={10}
                fontSize="md"
                borderRadius={10}
                border="1px solid dodgerblue"
                p={4}
            >
                <TableContainer>
                    <Table size="sm">
                        <Thead>
                            <Tr>
                                <Th>예약번호</Th>
                                <Th>이름</Th>
                                <Th>학생여부</Th>
                                <Th>전화번호</Th>
                                <Th>예약날짜</Th>
                                <Th>관리</Th>
                            </Tr>
                        </Thead>

                        {/*예약자 확인*/}
                        <Tbody>
                            <Tr>
                                <Td>20200371</Td>
                                <Td>김준서</Td>
                                <Td>재학생</Td>
                                <Td>010-7704-5971</Td>
                                <Td>2023-07-05</Td>
                                <Td>
                                    <Button size="xs" colorScheme="blue" mr={1}>
                                        수정
                                    </Button>
                                    <Button size="xs" colorScheme="blue">
                                        삭제
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>20200371</Td>
                                <Td>박지환</Td>
                                <Td>재학생</Td>
                                <Td>010-7704-5971</Td>
                                <Td>2023-07-05</Td>
                                <Td>
                                    <Button size="xs" colorScheme="blue" mr={1}>
                                        수정
                                    </Button>
                                    <Button size="xs" colorScheme="blue">
                                        삭제
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>20200371</Td>
                                <Td>김민경</Td>
                                <Td>재학생</Td>
                                <Td>010-7704-5971</Td>
                                <Td>2023-07-05</Td>
                                <Td>
                                    <Button size="xs" colorScheme="blue" mr={1}>
                                        수정
                                    </Button>
                                    <Button size="xs" colorScheme="blue">
                                        삭제
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>20200371</Td>
                                <Td>최인서</Td>
                                <Td>재학생</Td>
                                <Td>010-7704-5971</Td>
                                <Td>2023-07-05</Td>
                                <Td>
                                    <Button size="xs" colorScheme="blue" mr={1}>
                                        수정
                                    </Button>
                                    <Button size="xs" colorScheme="blue">
                                        삭제
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>20200371</Td>
                                <Td>윤태성</Td>
                                <Td>재학생</Td>
                                <Td>010-7704-5971</Td>
                                <Td>2023-07-05</Td>
                                <Td>
                                    <Button size="xs" colorScheme="blue" mr={1}>
                                        수정
                                    </Button>
                                    <Button size="xs" colorScheme="blue">
                                        삭제
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>20200371</Td>
                                <Td>채준혁</Td>
                                <Td>외부인</Td>
                                <Td>010-7704-5971</Td>
                                <Td>2023-07-05</Td>
                                <Td>
                                    <Button size="xs" colorScheme="blue" mr={1}>
                                        수정
                                    </Button>
                                    <Button size="xs" colorScheme="blue">
                                        삭제
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>20200371</Td>
                                <Td>이준혁</Td>
                                <Td>외부인</Td>
                                <Td>010-7704-5971</Td>
                                <Td>2023-07-05</Td>
                                <Td>
                                    <Button size="xs" colorScheme="blue" mr={1}>
                                        수정
                                    </Button>
                                    <Button size="xs" colorScheme="blue">
                                        삭제
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>20200371</Td>
                                <Td>전민혁</Td>
                                <Td>외부인</Td>
                                <Td>010-7704-5971</Td>
                                <Td>2023-07-05</Td>
                                <Td>
                                    <Button size="xs" colorScheme="blue" mr={1}>
                                        수정
                                    </Button>
                                    <Button size="xs" colorScheme="blue">
                                        삭제
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>20200371</Td>
                                <Td>전채린</Td>
                                <Td>외부인</Td>
                                <Td>010-7704-5971</Td>
                                <Td>2023-07-05</Td>
                                <Td>
                                    <Button size="xs" colorScheme="blue" mr={1}>
                                        수정
                                    </Button>
                                    <Button size="xs" colorScheme="blue">
                                        삭제
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};
export default reservationcheck;
