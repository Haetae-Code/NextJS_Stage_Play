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
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import React, { useState } from "react";
import KakaoMap from "../components/kakaomap";

const Page = () => {
  //const [title, setTitle] = useState("제목");

  const [state, setState] = useState({
    title: "제목",
    location: "101호 대강당",
    period:"2023/03/17~2023/03/20",
    time: "171분",
    price:"A석-5000원 B석-3000원",
    InfoLocation:"홍주문화회관",
    address:"충남 홍성군 홍성읍 내포로 164",
  });
  
  const handleStateChange = (field, value) => {
    setState(prevState => ({ ...prevState, [field]: value }));
  };

  const handleSaveReservation = () => {
    // 이후 실제 db와 연결해서 확인
    window.alert('저장되었습니다.');
  };
  
  return (
      <Box>
          <Box>
              <Stack py={5}>
                  <Flex>
                      <Button colorScheme="blue" size="xs">
                          {" "}
                          현재상영중{" "}
                      </Button>
                      <Button colorScheme="blue" size="xs">
                          {" "}
                          예매중{" "}
                      </Button>
                      <Button colorScheme="red" size="xs">
                          {" "}
                          D-100{" "}
                      </Button>
                  </Flex>
                  <Editable defaultValue={state.title} onChange={(value) => handleStateChange('title', value)}>
                    <EditablePreview fontSize="xl"  border="1px solid" p={2} borderRadius="md"/>
                     <EditableInput  border="1px solid" p={2} borderRadius="md"/>
                    </Editable>
              </Stack>
              <Flex
                    justify={"center"}
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
                                            <Td><Editable defaultValue={state.location} onChange={(value) => handleStateChange('location', value)}>
                                              <EditablePreview  border="1px solid" p={2} borderRadius="md"/>
                                                <EditableInput  border="1px solid" p={2} borderRadius="md"/>
                                                  </Editable></Td>
                                        </Tr>
                                        <Tr>
                                            <Td>공연 기간</Td>
                                            <Td><Editable defaultValue={state.period} onChange={(value) => handleStateChange('period', value)}>
                                              <EditablePreview   border="1px solid" p={2} borderRadius="md"/>
                                                <EditableInput border="1px solid" p={2} borderRadius="md"/>
                                                  </Editable></Td>
                                        </Tr>
                                        <Tr>
                                            <Td>공연 시간</Td>
                                            <Td><Editable defaultValue={state.time} onChange={(value) => handleStateChange('time', value)}>
                                              <EditablePreview  border="1px solid" p={2} borderRadius="md"/>
                                                <EditableInput  border="1px solid" p={2} borderRadius="md"/>
                                                  </Editable></Td>
                                        </Tr>
                                    </Tbody>
                                    <Tfoot>
                                        <Tr>
                                            <Th>가격</Th>
                                            <Th><Editable defaultValue={state.price} onChange={(value) => handleStateChange('price', value)}>
                                              <EditablePreview  border="1px solid" p={2} borderRadius="md"/>
                                                <EditableInput  border="1px solid" p={2} borderRadius="md"/>
                                                  </Editable>
</Th>
                                        </Tr>
                                    </Tfoot>
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

            <Box>
                <Tabs align="center" pt={"20"}>
                    <TabList>
                        <Tab>공연 정보</Tab>
                        <Tab>캐스팅 정보</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Table>
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
                                        <Td><Editable defaultValue={state. InfoLocation} onChange={(value) => handleStateChange(' InfoLocation', value)}>
                                              <EditablePreview  border="1px solid" p={2} borderRadius="md"/>
                                                <EditableInput  border="1px solid" p={2} borderRadius="md"/>
                                                  </Editable></Td>
                                    </Tr>
                                    <Tr>
                                        <Td w={20}>주소</Td>
                                        <Td><Editable defaultValue={state. address} onChange={(value) => handleStateChange('address', value)}>
                                              <EditablePreview  border="1px solid" p={2} borderRadius="md"/>
                                                <EditableInput  border="1px solid" p={2} borderRadius="md"/>
                                                  </Editable></Td>
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

                            <Table>
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
                        </TabPanel>

                        <TabPanel py={10}>
                            <Stack>
                                <Box py={10}>
                                
                           
                                </Box>

                                <Box py={10}>
                              
                                </Box>

                                <Box py={10}>
                              
                                </Box>

                                <Box py={10}>
                               
                                </Box>
                            </Stack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Button size="sm" onClick={handleSaveReservation}>저장</Button>
          </Box>
      </Box>
  );
};

export default Page;
