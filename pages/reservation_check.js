import {
    Progress,
    Image,
    Box,
    Button,
    Flex,
    Input,
    Select,
    Text,
    Heading,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Stack,
} from "@chakra-ui/react";

const ReservationCheck = () => {
    return (
        <Box>
            <Heading mt={5}>예약자 리스트</Heading>

            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
                <Box mr={{ base: 0, md: 1 }} w={{ base: '100%', md: '61%' }} mt={5} fontSize="md" borderRadius={15} border="1px solid dodgerblue" p={4}>
                    <Flex>
                        <Image w="50%" h="100%" src="https://bit.ly/dan-abramov" alt="Dan Abramov" mr={5} />
                        <Stack justify="space-between">
                            <Box>
                                <Flex>
                                    <Text>예약 현황 &nbsp;</Text>
                                    <Text>80</Text>
                                    <Text>/</Text>
                                    <Text>100</Text>
                                </Flex>
                                <Progress value={80} />
                            </Box>
                            <Text>공연 제목:</Text>
                            <Text>공연 장소:</Text>
                            <Text>공연 날짜:</Text>
                            <Text>공연 시간:</Text>
                        </Stack>
                    </Flex>
                </Box>
                <Box mr={{ base: 0, md: 1 }} w={{ base: '100%', md: '39%' }} mt={5} fontSize="md" borderRadius={15} border="1px solid dodgerblue" p={4}>
                    <Box align="center" justify="center">
                        <Flex mt={5}>
                            <Text w="30%">이름: &nbsp;</Text>
                            <Input mb={3} w="full" name="name" type="text" />
                        </Flex>
                        <Flex>
                            <Text w="30%">학번: &nbsp;</Text>
                            <Input mb={3} w="full" name="name" type="text" />
                        </Flex>
                        <Flex >
                            <Text w="30%">학과: &nbsp;</Text>
                            <Select mb={3} w="full" name="student">
                                <option>모두</option>
                            </Select>
                        </Flex>
                        <Flex>
                            <Text w="30%">전화번호: &nbsp;</Text>
                            <Input mb={3} w="full" name="name" type="text" />
                        </Flex>
                        <Button colorScheme="blue">검색</Button>
                    </Box>
                </Box>
            </Flex>

            <Flex direction={{ base: 'column', md: 'row' }}>
                <Stack mt={{ base: 5, md: 0 }} mr={{ base: 0, md: 1 }} w={{ base: '100%', md: '61%' }}>
                    <Box mt={10}><Text>재학생</Text></Box>
                    <Box overflowX="auto" h="200px" whiteSpace="nowrap" px="32px" fontSize="md" borderRadius={10} border="1px solid dodgerblue" p={1}>
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
                            <Tbody>
                                // 재학생 예약자 데이터를 이 위치에 추가하세요.
                            </Tbody>
                        </Table>
                    </Box>
                </Stack>
                <Stack mt={{ base: 5, md: 0 }} w={{ base: '100%', md: '39%' }}>
                    <Box mt={10}><Text>외부인</Text></Box>
                    <Box overflowX="auto" h="200px" whiteSpace="nowrap" px="32px" fontSize="md" borderRadius={10} border="1px solid dodgerblue" p={1}>
                        <Table size='sm'>
                            <Thead>
                                <Tr>
                                    <Th>이름</Th>
                                    <Th>전화번호</Th>
                                    <Th>관리</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                // 외부인 예약자 데이터를 이 위치에 추가하세요.
                            </Tbody>
                        </Table>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    );
};

export default ReservationCheck;
