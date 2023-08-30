import React, { useState, useEffect } from "react";
import {
    Container,
    Heading,
    Box,
    Button,
    Text,
    CardBody,
    CardHeader,
    Stack,
    Card,
    Image,
    Divider,
    useBreakpointValue,
    Flex,
    Center,
} from "@chakra-ui/react";
import ImageSlider from "../components/MainImageSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";

const Page = () => {
    const [_, setSliderIndex] = useState(0);
    const router = useRouter();

    const handleReservation = (id) => {
        router.push(`/reservation/${id}`);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 }),
        slidesToScroll: useBreakpointValue({ base: 1, sm: 1, md: 1, lg: 1 }),
        afterChange: (index) => setSliderIndex(index),
    };

    const [Performance, setPerformance] = useState([]);

    useEffect(() => {
        fetch("/api/Performance")
            .then((response) => response.json())
            .then((data) => setPerformance(data))
            .catch((error) => console.error(error));
    }, []);

    const generateData = (PerformanceItem) => ({
        id: PerformanceItem.performance_key,
        image: PerformanceItem.img_url,
        title: PerformanceItem.title,
        description: PerformanceItem.location,
    });

    const dataMusical = Performance.map(generateData);
    const dataMovie = Performance.map(generateData);

    return (
        <Box>
            <Box>
                <ImageSlider />
                <Box maxWidth="100%">
                    <Box flexGrow={1} display={"flex"}>
                        <Heading  as="h1" variant="page-title" mt="100px">
                            새로운 행사들을 여기서 한 눈에 봐요 &#x1F600;
                        </Heading>
                    </Box>
                </Box>

                <Divider mt={8} mb={8} />

                {/* 뮤지컬과 */}
                <Flex mb={3}>
                    <Box w={110}>
                        <Text fontSize= "2xl" fontWeight="bold">
                            뮤지컬과
                        </Text>
                    </Box>
                    <Box mt={2}>
                        <Text >뮤지컬과 학생들의 공연들이에요 &#x2B50;</Text>
                    </Box>
                </Flex>
                
                <Box mb={20} mx={5}>
                <Slider {...settings}>
                    {dataMusical.map((item, index) => (
                        <Box key={index} px={3}>
                            <Card maxW="sm" h="550px" borderWidth="0" borderRadius="lg" overflow="hidden">
                                <Box w={{ base: "100%" }} h="320px">
                                    <Image src={item.image} alt={item.title} w="100%" h="100%" />
                                </Box>
                                <CardHeader h="30px" mb={5}>
                                    <Text fontSize="xl" fontWeight="bold" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", width: "80%" }}>
                                        {item.title}
                                    </Text>
                                </CardHeader>
                                <CardBody h="160px">
                                    <Text fontSize="md">{item.description}</Text>
                                </CardBody>
                                <Button colorScheme="blue" onClick={() => handleReservation(item.id)} h="40px">
                                    예매하기
                                </Button>
                            </Card>
                        </Box>
                    ))}
                </Slider>
                </Box>
                
                {/* 영화과 */}
                <Flex mb={3}>
                    <Box w={100}>
                        <Text fontSize= "2xl" fontWeight="bold">
                            영화과
                        </Text>
                    </Box>
                    <Box mt={3}>
                        <Text textAlign={"center"}>영화과 학생들의 공연은 어떨까요? &#x1F606;</Text>
                    </Box>
                </Flex>

                <Box mb={10} mx={5}>
                <Slider {...settings}>
                    {dataMovie.map((item, index) => (
                        <Box key={index} px={3}>
                            <Card maxW="sm" h="550px" borderWidth="0" borderRadius="lg" overflow="hidden">
                                <Box w={{ base: "100%" }} h="320px">
                                    <Image src={item.image} alt={item.title} w="100%" h="100%" />
                                </Box>
                                <CardHeader h="30px" mb={5}>
                                    <Text fontSize="xl" fontWeight="bold" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", width: "80%" }}>
                                        {item.title}
                                    </Text>
                                </CardHeader>
                                <CardBody h="160px">
                                    <Text fontSize="md">{item.description}</Text>
                                </CardBody>
                                <Button colorScheme="blue" onClick={() => handleReservation(item.id)} h="40px">
                                    예매하기
                                </Button>
                            </Card>
                        </Box>
                    ))}
                </Slider>
                </Box>
            </Box>
        </Box>
    );
};

export default Page;
