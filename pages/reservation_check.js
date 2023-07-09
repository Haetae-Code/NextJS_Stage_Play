import { CardFooter, CardBody, Image, CardHeader, Card, Box, Button, Container, Flex, Input, Select, Text, Heading, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot } from "@chakra-ui/react";
import { max } from "date-fns";
import React, { useState, Fragment, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reservation from "./reservation"; 


const reservationcheck = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    const [actorData, setActorData] = useState(null);
    const [showPage, setShowPage] = useState(false);

    const handleClick = () => {
        setShowPage(true);
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

    return (
        <Box>
            <Heading >예약자 리스트</Heading>
            <Flex justify={"space-between"}>

                {/*예약자 검색 박스*/}
                <Box mr={1} w="55%" mt={5} fontSize="md" borderRadius={15} border="1px solid dodgerblue" p={4}>

                    <Box align="center" justify="center">

                        <Flex >
                            <Text mt={1}>
                                이름: &nbsp;
                            </Text>
                            <Input name="name" type="text" ml={10} placeholder="김준서" />
                        </Flex>

                        <Flex >
                            <Text mt={1}>
                                선택: &nbsp;
                            </Text>

                            <Select name="student" ml={10}>
                                <option>없음</option>
                                <option>재학생</option>
                                <option>외부인</option>
                            </Select>
                        </Flex>


                        <Flex>
                            <Text w={85} mt={1}>
                                전화번호: &nbsp;
                            </Text>
                            <Input name="name" type="text" ml={3} placeholder="010-xxxx-xxxx" />
                        </Flex>

                        <Button colorScheme="blue" /*onClick={() => search()}*/>검색</Button>
                    </Box>
                </Box>

                {/*공연 예약 현황 박스*/}
                <Box  ml={1} w="45%" mt={5} fontSize="md" borderRadius={15} border="1px solid dodgerblue" p={4}>
                    
                        {/* 등록 공연 목록 */}
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
                                                <Text fontSize="sm">15</Text>
                                                <Text fontSize="sm">/</Text>
                                                <Text fontSize="sm">30</Text>
                                            </CardFooter>
                                        </Card>
                                    </Box>
                                ))}
                            </Slider>
                        </Box>

            </Flex>

            {/*예약자 리스트 박스*/}
            <Box mt={20} fontSize="md" borderRadius={15} border="1px solid dodgerblue" p={4}>
                <TableContainer>
                    <Table size='sm'>
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

                        <Tbody>
                            <Tr>
                                <Td>20200371</Td>
                                <Td>김준서</Td>
                                <Td>외부인</Td>
                                <Td>010-7704-5971</Td>
                                <Td>2023-07-05</Td>
                                <Td><Button size="xs" colorScheme="blue" mr={1}>수정</Button><Button size="xs" colorScheme="blue">삭제</Button></Td>
                            </Tr>
                        </Tbody>

                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}
export default reservationcheck;
