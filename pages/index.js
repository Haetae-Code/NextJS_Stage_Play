//import NextLink from "next/link";
import {
    Container,
    Heading,
    Box,
    Button,
    Flex,
    Text,
    CardBody,
    CardFooter,
    CardHeader,
    Stack,
    Card,
    Image,
    Divider,
} from "@chakra-ui/react";
//import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import React, { useState, Fragment } from "react";
import ImageSlider from "../components/MainImageSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page = () => {
    const [, /*sliderIndex*/ setSliderIndex] = useState(0);

    const handleSliderChange = (index) => {
        setSliderIndex(index);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        afterChange: (index) => handleSliderChange(index),
    };

    //뮤지컬학과 데이터
    const dataMusical = [
        {
            image: "https://www.m-i.kr/news/photo/202101/784601_561474_542.jpg",
            title: "오페라의 유령",
            description: "04월 18일(화) 온라인, 강남구",
        },
        {
            image: "https://www.kgnews.co.kr/data/photos/20220728/art_16578463029062_e1b76e.jpg",
            title: "마틸다",
            description: "04월 18일(화) 온라인, 강남구",
        },
        {
            image: "https://image.yes24.com/images/chyes24/froala/0/44431/26305.jpg0",
            title: "문스토리",
            description: "04월 18일(화) 온라인, 강남구",
        },
        {
            image: "https://newsimg.sedaily.com/2018/10/22/1S60FSQK8D_1.jpg",
            title: "그날들",
            description: "04월 18일(화) 온라인, 강남구",
        },
        {
            image: "https://img.newspim.com/news/2018/11/01/1811011558557240.jpg",
            title: "젠틀맨스가이드-사랑과 살인편",
            description: "04월 18일(화) 온라인, 강남구",
        },
    ];
    //영화과 데이터
    const dataMovie = [
        {
            image: "https://www.m-i.kr/news/photo/202101/784601_561474_542.jpg",
            title: "오페라의 유령",
            description: "04월 18일(화) 온라인, 강남구",
        },
        {
            image: "https://www.kgnews.co.kr/data/photos/20220728/art_16578463029062_e1b76e.jpg",
            title: "마틸다",
            description: "04월 18일(화) 온라인, 강남구",
        },
        {
            image: "https://image.yes24.com/images/chyes24/froala/0/44431/26305.jpg0",
            title: "문스토리",
            description: "04월 18일(화) 온라인, 강남구",
        },
        {
            image: "https://newsimg.sedaily.com/2018/10/22/1S60FSQK8D_1.jpg",
            title: "그날들",
            description: "04월 18일(화) 온라인, 강남구",
        },
        {
            image: "https://img.newspim.com/news/2018/11/01/1811011558557240.jpg",
            title: "젠틀맨스가이드-사랑과 살인편",
            description: "04월 18일(화) 온라인, 강남구",
        },
    ];

    return (
        <div>
            <Fragment>
                <Container maxWidth="100%">
                    <div>&nbsp;</div>

                    <ImageSlider></ImageSlider>
                    <Container pt={3} maxWidth="100%">
                        <Box flexGrow={1} display={"flex"}>
                            <Heading
                                size="2xl"
                                as="h1"
                                variant="page-title"
                                mt="100px"
                            >
                                새로운 행사들을 여기서 한 눈에 봐요 &#x1F600;
                            </Heading>
                        </Box>
                    </Container>
                </Container>

                <Divider mt={8} mb={8} />
                {/*뮤지컬과 행사 슬라이더 */}
                <Box display="flex">
                    <p style={{ fontSize: "40px", fontWeight: "bold" }}>
                        뮤지컬과
                    </p>
                    <Stack direction="row" h="80px" p={4}>
                        <Divider orientation="vertical" />
                        <Text>
                            우리 학교 뮤지컬과 학생들의 공연들이에요 &#x2B50;
                        </Text>
                    </Stack>
                </Box>

                <p>&nbsp;</p>

                <Slider {...settings}>
                    {dataMusical.map((item, index) => (
                        <Box key={index} px={3}>
                            <Card
                                maxW="sm"
                                borderWidth="0"
                                borderRadius="lg"
                                overflow="hidden"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: "300px", height: "350px" }}
                                />
                                <CardHeader>
                                    <Text
                                        fontSize="xl"
                                        fontWeight="bold"
                                        ml={5}
                                        mt={2}
                                        style={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            width: "80%",
                                        }}
                                    >
                                        {item.title}
                                    </Text>
                                </CardHeader>
                                <CardBody h="100px">
                                    <Text fontSize="md">
                                        {item.description}
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Button colorScheme="blue">예매하기</Button>
                                </CardFooter>
                            </Card>
                        </Box>
                    ))}
                </Slider>

                {/*영화과 행사 슬라이더 */}

                <print>&nbsp;</print>
                <Divider mt={8} mb={8} />
                <div style={{ position: "center" }}>
                    <Box display="flex">
                        <p style={{ fontSize: "40px", fontWeight: "bold" }}>
                            영화과
                        </p>
                        <Stack direction="row" h="80px" p={4}>
                            <Divider orientation="vertical" />
                            <Text>
                                우리 학교 영화과 학생들의 공연은 어떨까요?
                                &#x1F606;
                            </Text>
                        </Stack>
                    </Box>
                    <p>&nbsp;</p>

                    <Slider {...settings}>
                        {dataMovie.map((item, index) => (
                            <Box key={index} px={3}>
                                <Card
                                    maxW="sm"
                                    borderWidth="0"
                                    borderRadius="lg"
                                    overflow="hidden"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: "300px",
                                            height: "350px",
                                        }}
                                    />
                                    <CardHeader>
                                        <Text
                                            fontSize="xl"
                                            fontWeight="bold"
                                            ml={5}
                                            mt={2}
                                            style={{
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                width: "80%",
                                            }}
                                        >
                                            {item.title}
                                        </Text>
                                    </CardHeader>
                                    <CardBody>
                                        <Text fontSize="md">
                                            {item.description}
                                        </Text>
                                    </CardBody>
                                    <CardFooter>
                                        <Button colorScheme="blue">
                                            예매하기
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Box>
                        ))}
                    </Slider>
                </div>
            </Fragment>
        </div>
    );
};

export default Page;
