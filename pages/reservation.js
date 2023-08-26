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
import KakaoMap from "../components/kakaomap";
//import { auto } from "@popperjs/core";

const Page = (actorData) => {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetch("/api/actors")
            .then((response) => response.json())
            .then((data) => setActors(data))
            .catch((error) => console.error(error));
    }, []);

    const [Performance, setPerformance] = useState([]);

    useEffect(() => {
        fetch("/api/Performance")
            .then((response) => response.json())
            .then((data) => setPerformance(data))
            .catch((error) => console.error(error));
    }, []);

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
                        <Box mb={[10, 0]} mr={[0, 10]}>
                            <Image
                                src="https://bit.ly/dan-abramov"
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
                                                <Td>
                                                    {PerformanceItem.location}
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td>공연 기간</Td>
                                                <Stack>
                                                <Td>2023/03/17 13시, 17시</Td>
                                                <Td>2023/03/18 13시, 17시</Td>
                                                </Stack>
                                            </Tr>
                                            <Tr>
                                                <Td>공연 시간</Td>
                                                <Td>170분</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box>
                            <Box>
                                <Link href="./reservationdetail">
                                    <Button
                                        w={"100%"}
                                        size={["sm", "md"]}
                                        border="2px"
                                        colorScheme="blue"
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
                    <TabList>
                        <Tab>공연 정보</Tab>
                        <Tab>캐스팅 정보</Tab>
                    </TabList>

                    <TabPanels>

                        {/* 공연 정보 */}
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
                                        <Td>홍주문화회관</Td>
                                    </Tr>
                                    <Tr>
                                        <Td w={20}>주소</Td>
                                        <Td>충남 홍성군 홍성읍 내포로 164</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                            
                            <Box py={10}>
                                {/* <Image
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                /> */}
                                {/* 카카오맵 */}
                                {/* <kakaomap></kakaomap> */}
                                <KakaoMap></KakaoMap>
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
                            <Box pt={10}>
                                <Image
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                />
                            </Box>
                                                    {/* 주의 사항 */}
                        <Table>
                                <Thead>
                                    <Tr>
                                        <Th fontSize={"x-large"}>주의 사항</Th>
                                    </Tr>
                                </Thead>
                            </Table>
                            <Table>
                                <Tbody>
                                    <Tr>
                                        
                                        <Td>주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항주의 사항</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TabPanel>

                        {/* 캐스팅 정보 */}
                        <TabPanel py={10}>
                            <Stack>
                                <Box py={10}>
                                    {actors.slice(0, 1).map((actor) => (
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
                                                            <Th>
                                                                {actor.name}
                                                            </Th>
                                                        </Tr>
                                                        <Tr>
                                                            <Th>학과</Th>
                                                            <Th>
                                                                {
                                                                    actor.department
                                                                }
                                                            </Th>
                                                        </Tr>
                                                        <Tr>
                                                            <Th>소개</Th>
                                                            <Th>
                                                                {
                                                                    actor.introduction
                                                                }
                                                            </Th>
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
