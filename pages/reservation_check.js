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
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState,useEffect } from 'react'

const ReservationCheck = () => {
    const router = useRouter();
    const { performance_key, date, time } = router.query;
    const [Performance, setPerformance] = useState([]);
    useEffect(() => {
        fetch(`/api/Performance/${performance_key}`)
            .then((response) => response.json())
            .then((data) => setPerformance(data))
            .catch((error) => console.error(error));
    }, [performance_key]);
    
    const [Audience, setAudience] = useState([]);
    useEffect(() => {
        fetch("/api/audience")
            .then((response) => response.json())
            .then((data) => setAudience(data))
            .catch((error) => console.error(error));
    }, [performance_key, date, time]);
    
    const [Student, setStudent] = useState([]);
    const [Outsider, setOutsider] = useState([]);
    //split Audience
    for(let i=0; i < Audience.length; i++)
    {
        if (Audience[i].student_key != NULL)
            setStudent(Audience[i]);
        else if (Audience[i].student_key == NULL)
            setOutsider(Audience[i]);
    }

    return (
        <Box>
            <Heading mt={5}>예약자 리스트</Heading>
            <Flex direction={{ base: 'column', md: 'row' }} justify={"space-between"}>

                {/*공연 예약 현황 박스*/}
                <Box
                    mr={{ base: 0, md: 1 }}
                    w={{ base: '100%', md: '61%' }}
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
                            src="https://nextstagefolder1.s3.ap-northeast-2.amazonaws.com/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg"
                            alt="Dan Abramov"
                            mr={5}
                        ></Image>
                        <Stack justify={"space-between"}>
                            <Box>
                                {/* 예약현황 백분율 */}
                                <Flex>
                                    <Text>예약 현황 &nbsp;</Text>
                                    <Text>{Audience.length}</Text>
                                    <Text>/</Text>
                                    <Text>100</Text>
                                </Flex>
                                <Progress value={Audience.length} />
                            </Box>

                            {/* 공연설명 */}
                            {Performance.map((PerformanceItem) => (
                            <>
                            <Text>공연 제목: {PerformanceItem.title}</Text>
                            <Text>공연 장소: {PerformanceItem.address} {PerformanceItem.location}</Text>
                            <Text>공연 날짜: {date}</Text>
                            <Text>공연 시간: {time}</Text>
                            </>
                            ))}
                        </Stack>
                    </Flex>
                </Box>

                {/*예약자 검색 박스*/}
                <Box
                    mr={{ base: 0, md: 1 }}
                    w={{ base: '100%', md: '39%' }}
                    mt={5}
                    fontSize="md"
                    borderRadius={15}
                    border="1px solid dodgerblue"
                    p={4}
                >

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
            <Flex direction={{ base: 'column', md: 'row' }}>
                <Stack mt={{ base: 5, md: 0 }} mr={{ base: 0, md: 1 }} w={{ base: '100%', md: '61%' }}>
                    <Box mt={10}><Text >재학생</Text></Box>
                    <Box
                        overflowX="auto"
                        h="200px"
                        whiteSpace="nowrap"
                        px="32px"
                        fontSize="md"
                        borderRadius={10}
                        border="1px solid dodgerblue"
                        p={1}
                        w="auto"
                    >
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

                                {/*재학생 예약자 확인*/}
                                {Student.map((StudentItem) => (
                                <Tbody>
                                    <Tr>
                                        <Td>{StudentItem.name}</Td>
                                        <Td>{StudentItem.id}</Td>
                                        <Td>{StudentItem.department}</Td>
                                        <Td>{StudentItem.phone_number}</Td>
                                        <Td><Button size="xs" colorScheme="blue" mr={1}>수정</Button><Button size="xs" colorScheme="blue">삭제</Button></Td>
                                    </Tr>
                                </Tbody>
                                ))}
                            </Table>
                        </TableContainer>
                    </Box>
                </Stack>
                <Stack mt={{ base: 5, md: 0 }}
                    w={{ base: '100%', md: '39%' }}
                >
                    <Box mt={10}><Text >외부인</Text></Box>
                    <Box
                        overflowX="auto"
                        h="200px"
                        whiteSpace="nowrap"
                        px="32px"

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

                                {/*외부인 예약자 확인*/}
                                {Outsider.map((OutsiderItem) => (
                                <Tbody>
                                    <Tr>
                                        <Td>{OutsiderItem.name}</Td>
                                        <Td>{OutsiderItem.phone_number}</Td>
                                        <Td><Button size="xs" colorScheme="blue" mr={1}>수정</Button><Button size="xs" colorScheme="blue">삭제</Button></Td>
                                    </Tr>
                                </Tbody>
                                ))}
                            </Table>
                        </TableContainer>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    );
};
export default ReservationCheck;
