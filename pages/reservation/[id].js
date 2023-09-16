//import NextLink from "next/link"; //공연 정보에 공연 테이블 다 넣기, 외부인 재학생 구분 필요 X
import {
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
    TableContainer,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Button,
    Stack,
    Link,
} from "@chakra-ui/react";
//import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
//import ImageSlider from '../components/MainImageSlider'
import React, { useState, useEffect } from "react";
import KakaoMap from "../../components/kakaomap";
import { useRouter } from "next/router";
//import { auto } from "@popperjs/core";

const Page = () => {
    const router = useRouter();
    const { id } = router.query;
    const handleReservationdetail = (id) => {
        router.push(`/reservationdetail/${id}`);
    };

    const [actors, setActors] = useState([]);
    useEffect(() => {
        fetch(`/api/actors/${id}`)
            .then((response) => response.json())
            .then((data) => setActors(data))
            .catch((error) => console.error(error));
    }, [id]);


    const [Performance, setPerformance] = useState([]);
    useEffect(() => {
        fetch(`/api/Performance/${id}`)
            .then((response) => response.json())
            .then((data) => setPerformance(data))
            .catch((error) => console.error(error));
    }, [id]);

    const [Times, setTimes] = useState([]);
    useEffect(() => {
        fetch(`/api/Times/${id}`)
            .then((response) => response.json())
            .then((data) => setTimes(data))
            .catch((error) => console.error(error));
    }, [id]);
    
    for (let i = 0; i < Times.length; i++) {
        const dateRegex = /^(\d{4}-\d{2}-\d{2})/;
        const matchedDay = Times[i].view_date.match(dateRegex);
        Times[i].view_date = matchedDay[1];

        const timeParts = Times[i].view_time.split(':');
        const hour = parseInt(timeParts[0], 10);
        const minute = timeParts.length > 1 ? parseInt(timeParts[1], 10) : "00";
        Times[i].view_time = `${hour}시 ${minute}분`;
      }    

    // Group performance times by date
    const groupedTimes = Times.reduce((acc, time) => {
        const date = time.view_date;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(time.view_time);
        return acc;
    }, {});

    return (
        <Box>
            {Performance.slice(0, 1).map((PerformanceItem) => (
                <Box>
                    <Stack py={5}>
                        <Flex>
                            <Button colorScheme="blue" size="xs">
                                {" "}
                                현재상영중{" "}
                            </Button>
                            <Button colorScheme="red" size="xs">
                                {" "}
                                D-100{" "}
                            </Button>
                        </Flex>
                        <Heading size={"xl"}>
                            제목:{PerformanceItem.title}
                        </Heading>
                    </Stack>

                    <Flex
                        justify={"start"}
                        alignItems={"center"}
                        flexDirection={["column", "row"]}
                    >
                        <Box mb={[10, 0]} mr={[0, 10]} w={300} h={400}>
                            <Image
                                src={PerformanceItem.img_url}
                                alt="No image"
                                shadow="2xl"
                                display="block"
                            />
                        </Box>
                        <Stack>
                            <Box>
                                <TableContainer>
                                    <Table variant="simple" size={["sm", "md"]}>
                                        <Tbody>
                                            <Tr>
                                                <Td>공연 장소</Td>
                                                <Td>{PerformanceItem.address + '  ' + PerformanceItem.location}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>공연 기간</Td>
                                                <Td>
                                                    {Object.entries(groupedTimes).map(([date, times]) => (
                                                        <Box key={date}>
                                                            <strong>{date}</strong>: {times.join(', ')}
                                                        </Box>
                                                    ))}
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td>공연 시간</Td>
                                                <Td>{PerformanceItem.run_time}분</Td>
                                            </Tr>
                                        </Tbody>

                                    </Table>
                                </TableContainer>
                            </Box>
                            <Box>
                                <Link>
                                    <Button
                                        w={"100%"}
                                        size={["sm", "md"]}
                                        border="2px"
                                        colorScheme="blue"
                                        onClick={() => handleReservationdetail(id)}
                                    >
                                        {" "}
                                        예매하기
                                    </Button>
                                </Link>
                            </Box>
                        </Stack>
                    </Flex>
                </Box>
            ))}

            <Box>
                <Tabs align="center" pt={"20"}>
                    {/* 공연 정보 */}
                    <TabList>
                        <Tab>공연 정보</Tab>
                        <Tab>캐스팅 정보</Tab>
                    </TabList>
                    <TabPanels>
                        {Performance.slice(0, 1).map((PerformanceItem) => (
                            <TabPanel>
                                {/* 공연 장소 */}
                                <Table mt={10}>
                                    <Thead>
                                        <Tr>
                                            <Th fontSize={"x-large"}>공연 장소</Th>
                                        </Tr>
                                    </Thead>
                                </Table>
                                <Table>

                                    <Tbody>
                                        <Tr>
                                            <Td w={20}>장소</Td>
                                            <Td>{PerformanceItem.location}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td w={20}>주소</Td>
                                            <Td>{PerformanceItem.address}</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                                <Box py={10}>
                                    {/* <Image
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                /> */}
                                    <KakaoMap value={PerformanceItem.address}></KakaoMap>
                                </Box>

                                {/* 공연 소개 */}
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th fontSize={"x-large"}>한 줄 소개</Th>
                                        </Tr>
                                    </Thead>
                                </Table>
                                <Table>
                                    <Tbody>
                                        <Tr>
                                            <Td>한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개한 줄 소개</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>

                                {/* 포스터 위치 */}
                                <Table mt={10}>
                                    <Thead>
                                        <Tr>
                                            <Th fontSize={"x-large"}>
                                                포스터 위치
                                            </Th>
                                        </Tr>
                                    </Thead>
                                </Table>
                                <Box pt={10} w={300} h={400}>
                                    <Image
                                    
                                        src={PerformanceItem.img_url}
                                        alt="Dan Abramov"
                                    />
                                </Box>

                                {/* 주의 사항 */}
                                <Table mt={10}>
                                    <Thead>
                                        <Tr>
                                            <Th fontSize={"x-large"}>주의 사항</Th>
                                        </Tr>
                                    </Thead>
                                </Table>
                                <Table>
                                    <Tbody>
                                        <Tr>

                                            <Td>{PerformanceItem.rules}</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TabPanel>
                        ))}

                        {/* 캐스팅 정보 */}
                        <TabPanel py={10}>
                            <Stack>
                                <Box py={10}>
                                    {actors.map((actor) => (
                                        <Flex>
                                            <Image
                                                src="https://bit.ly/dan-abramov"
                                                alt="No image"
                                                borderRadius="full"
                                                boxSize="100px"
                                            />
                                            <TableContainer>
                                                <Table variant="simple">
                                                    <Tfoot>
                                                        <Tr>
                                                            <Th>이름</Th>
                                                            <Th>{actor.name}</Th>
                                                        </Tr>
                                                        <Tr>
                                                            <Th>학과</Th>
                                                            <Th>{actor.department}</Th>
                                                        </Tr>
                                                        <Tr>
                                                            <Th>소개</Th>
                                                            <Th>{actor.introduction}</Th>
                                                        </Tr>
                                                    </Tfoot>
                                                </Table>
                                            </TableContainer>
                                        </Flex>
                                    ))}
                                </Box>
                            </Stack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    );
};

export default Page;
