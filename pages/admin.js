//import NextLink from "next/link";
import {
    Text,
    Button,
    Box,
    Flex,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Image,
    Link,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Stack,
    Heading,
    TableContainer,
    Tfoot
} from "@chakra-ui/react";
import React, { useState, Fragment, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KakaoMap from "../components/kakaomap";

const admin = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [showCode, setShowCode] = useState(false);

    const handleEditButtonClick = () => {
      setShowCode(!showCode);
    };



    const handleSliderChange = (index) => {
        setSliderIndex(index);
    };
  

    useEffect(() => {
        // 뷰포트 크기 변화 감지하여 slidesToShow 값 업데이트
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 960) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        afterChange: (index) => handleSliderChange(index),
    };

    //뮤지컬학과 데이터
    const dataMusical = [
        {
            image: "https://www.m-i.kr/news/photo/202101/784601_561474_542.jpg",
            title: "오페라의 유령",
            data: "04월 18일(화) 온라인,강남구",
        },
        {
            image: "https://www.kgnews.co.kr/data/photos/20220728/art_16578463029062_e1b76e.jpg",
            title: "마틸다",
            data: "04월 18일(화) 온라인,강남구",
        },
        {
            image: "https://image.yes24.com/images/chyes24/froala/0/44431/26305.jpg0",
            title: "문스토리",
            data: "04월 18일(화) 온라인,강남구",
        },
        {
            image: "https://newsimg.sedaily.com/2018/10/22/1S60FSQK8D_1.jpg",
            title: "그날들",
            data: "04월 18일(화) 온라인,강남구",
        },
        {
            image: "https://img.newspim.com/news/2018/11/01/1811011558557240.jpg",
            title: "젠틀맨스가이드-사랑과 살인편",
            data: "04월 18일(화) 온라인,강남구",
        },
    ];

    const actorData = [
        {
          image: "https://bit.ly/dan-abramov",
          name: "채준혁",
          department: "컴퓨터공학과",
          intro: "컴공 체육부",
        },
        {
          image: "https://bit.ly/dan-abramov",
          name: "김준서",
          department: "컴퓨터공학과",
          intro: "컴공 홍보부",
        },
        {
          image: "https://bit.ly/dan-abramov",
          name: "전민혁",
          department: "컴퓨터공학과",
          intro: "스터디 에이스",
        },
        {
          image: "https://bit.ly/dan-abramov",
          name: "최인서",
          department: "컴퓨터공학과",
          intro: "최인서맨",
        },
      ];
    
    return (
        <div style={{ display: "flex" }}>
            {/* 1번 박스(관리자 사이드바/관리자페이지) */}
            <Box flex="1" borderRight="2px solid" borderColor="inherit">
                {/* 관리자 사이드바 */}

                <Flex
                    as="nav"
                    direction="column"
                    align="center"
                    justify="space-between"
                >
                    <Flex align="center" mr={5} />
                    <Flex mr="20px" align="center" direction="column">
                        <Text mb={3} mt={8}>
                            관리자 메뉴
                        </Text>
                        <Button mb={3}>예약자 확인</Button>
                        <Link color="inactiveColor" href="/actor">
                            <Button mb={3}>배우 관리</Button>
                        </Link>
                    </Flex>
                </Flex>
            </Box>

            {/* 2번 박스(관리자 페이지/편집 공간) */}
            <Box w="80%">
                {/* 관리자 페이지 */}
                <Box ml="60px" mt="30px" width="100%">
                    현재 공연 목록을 조회하고, 편집할 수 있는 공간이에요.
                    <br />
                    <br />
                    <Text fontSize="40px" mb="30px">
                        등록 공연
                    </Text>
                </Box>
                <Box
                    ml="50px"
                    display="flex"
                    border="1px solid"
                    borderColor="inherit"
                >
                    {/* 등록 공연 목록/공연 추가 */}

                    {/* 등록 공연 목록 */}

                    <Box ml="30px" w="100%">
                        <Box ml="30px">
                            <Box w="90%" height="100%">
                                {" "}
                                {/* 카드 슬라이더의 높이를 100%로 설정 */}
                                <Slider
                                    {...settings}
                                    style={{ height: "100%" }}
                                >
                                    {dataMusical.map((item, index) => (
                                        <Box
                                            key={index}
                                            px={10}
                                            style={{
                                                width: "150px",
                                                maxHeight: "80%",
                                                overflow: "hidden",
                                                height: "auto",
                                            }}
                                        >
                                            <Card
                                                maxH="md"
                                                height="lg"
                                                borderRadius="sm"
                                                overflow="hidden"
                                                style={{ width: "100%" }}
                                            >
                                                <CardHeader>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        style={{
                                                            width: "100%",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                </CardHeader>
                                                <CardBody overflow="hidden">
                                                    <Text
                                                        fontSize="sm"
                                                        fontWeight="bold"
                                                        mt={2}
                                                        style={{
                                                            whiteSpace:
                                                                "normal",
                                                            width: "100%",
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                    <Text
                                                        fontSize="sm"
                                                        style={{
                                                            whiteSpace:
                                                                "normal",
                                                            overflow: "hidden",
                                                            textOverflow:
                                                                "ellipsis",
                                                            width: "100%",
                                                        }}
                                                    >
                                                        {item.data}
                                                    </Text>
                                                </CardBody>
                                                <CardFooter
                                                    display="flex"
                                                    justifyContent="space-between"
                                                    style={{
                                                        whiteSpace: "normal",
                                                    }}
                                                >
                                                    <Button
                                                        size="sm"
                                                        colorScheme="blue"
                                                    >
                                                        조회
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        colorScheme="blue"
                                                        onClick={handleEditButtonClick}
                                                    >
                                                        수정
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </Box>
                                    ))}
                                </Slider>
                            </Box>
                        </Box>
                    </Box>

                    {/* 공연 추가 */}
                </Box>
                <Box ml="30px" w="100%">
                    <Text
                        fontSize="20px"
                        mt="50px"
                        mb="30px"
                        textAlign="center"
                    >
                        공연 관리
                    </Text>
                    <Flex align="center" direction="column">
                        <Button mb={3}>공연 추가</Button>
                        <Button mb={3}>공연 삭제</Button>
                    </Flex>
                </Box>

                {/* 편집 공간 */}
                <Box
                    
                    flex="1"
                    ml="50px"
                    mt="80px"
                    border="1px solid"
                    borderColor="inherit"
                    overflow="auto"
                >
                    <Text>하단에 출력됩니다!</Text>
                    <Box py={10} ml="30px">
                    {showCode && (
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
                <Heading size={"xl"}>
                    제목:이젠 제목이 길어도 괜찮아요
                </Heading>
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
                                        <Th>A석-5000원 B석-3000원</Th>
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
                                    <Td>홍주문화회관</Td>
                                </Tr>
                                <Tr>
                                    <Td w={20}>주소</Td>
                                    <Td>충남 홍성군 홍성읍 내포로 164</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Box py={10}>
                           
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
                           
                        {actorData.map((item, index) => (
              <Box key={index} mb={4} display="flex" alignItems="center">
                <Image
                  src={item.image}
                  alt={item.name}
                  borderRadius="full"
                  boxSize="100px"
                  mr={4}
                />
                <Box>
                  <TableContainer>
                    <Table variant="simple">
                      <Tfoot>
                        <Tr>
                          <Th>이름</Th>
                          <Th>{item.name}</Th>
                        </Tr>
                        <Tr>
                          <Th>학과</Th>
                          <Th>{item.department}</Th>
                        </Tr>
                        <Tr>
                          <Th>소개</Th>
                          <Th>{item.intro}</Th>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            ))}
                        </Stack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    </Box>
        )}
                                </Box>
                </Box>
            </Box>
        </div>
    );
};

export default admin;
