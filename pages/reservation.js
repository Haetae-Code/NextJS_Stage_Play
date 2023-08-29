import {
    Heading,
    Box,
    Flex,
    Image,
    Table,
    Thead,
    Tbody,
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
import React, { useState, useEffect } from "react";
import KakaoMap from "../components/kakaomap";

const Page = () => {
    const [actors, setActors] = useState([]);
    const [Performance, setPerformance] = useState([]);

    useEffect(() => {
        fetch("/api/actors")
            .then((response) => response.json())
            .then((data) => setActors(data));

        fetch("/api/Performance")
            .then((response) => response.json())
            .then((data) => setPerformance(data));
    }, []);

    return (
        <Box>
            {Performance.slice(0, 1).map((PerformanceItem) => (
                <Box key={PerformanceItem.id}> {/* Add a key for mapping */}
                    <Stack py={5}>
                        <Flex>
                            <Button colorScheme="blue" size="xs">
                                현재상영중
                            </Button>
                            <Button colorScheme="red" size="xs">
                                D-100
                            </Button>
                        </Flex>
                        <Heading size={"xl"}>
                            제목:{PerformanceItem.title}
                        </Heading>
                    </Stack>

                    <Flex justify={"start"} alignItems={"center"} flexDirection={["column", "row"]}>
                        <Box mb={[10, 0]} mr={[0, 10]}>
                            <Image src="https://bit.ly/dan-abramov" alt="No image" shadow="2xl" display="block" />
                        </Box>
                        <Stack>
                            <Box>
                                <TableContainer>
                                    <Table variant="simple" size={["sm", "md"]}>
                                        <Tbody>
                                            <Tr>
                                                <Td>공연 장소</Td>
                                                <Td>{PerformanceItem.location}</Td>
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
                                    <Button w={"100%"} size={["sm", "md"]} border="2px" colorScheme="blue">
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
                        <TabPanel>
                            <Table mt={10}>
                                <Thead>
                                    <Tr>
                                        <Th fontSize={"x-large"}>공연 장소</Th>
                                    </Tr>
                                </Thead>
                            </Table>
                            {/* ... (중략) ... */}
                            <Box pt={10}>
                                <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                            </Box>
                            <Table>
                                {/* ... (중략) ... */}
                            </Table>
                        </TabPanel>

                        <TabPanel py={10}>
                            <Stack>
                                {actors.slice(0, 1).map((actor) => (
                                    <Flex key={actor.id}>
                                        <Image src="https://bit.ly/dan-abramov" alt="Actor image" borderRadius="full" boxSize="100px" />
                                        <TableContainer>
                                            <Table variant="simple">
                                                <Tbody>
                                                    <Tr>
                                                        <Th>이름</Th>
                                                        <Td>{actor.name}</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Th>학과</Th>
                                                        <Td>{actor.department}</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Th>소개</Th>
                                                        <Td>{actor.introduction}</Td>
                                                    </Tr>
                                                </Tbody>
                                            </Table>
                                        </TableContainer>
                                    </Flex>
                                ))}
                            </Stack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    );
};

export default Page;
 