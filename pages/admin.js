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
} from "@chakra-ui/react";
import React, { useState, Fragment, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reservation from "./reservation"; 
import ReservationEdit from "./reservationedit";

const admin = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
   
    const [actorData, setActorData] = useState(null);
  const [showPage, setShowPage] = useState(false);

  const [showEditPage, setShowEditPage] = useState(false);
  const [reservationData, setReservationData] = useState(false);

  const handleClick = () => {
    setShowEditPage(prevValue => !prevValue);
  };

  const handleEditClick = () => {
    setShowEditPage(true);
  };

  const handleSaveReservation = (updatedData) => {
    setReservationData(updatedData);
    setShowEditPage(false);
  };

  const handleCancelEdit = () => {
    setShowEditPage(false);
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
                                                    <Link href="./reservationdetail">
                                                    <Button
                                                        size="sm"
                                                        colorScheme="blue"
                                                    >
                                                        조회
                                                    </Button>
                                                    </Link>
                                                    
                                                    <Button
                                                        size="sm"
                                                        colorScheme="blue"
                                                        onClick={handleEditClick}
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
       {showEditPage ? (
  <ReservationEdit
    reservationData={reservationData}
    onSave={handleSaveReservation}
    onCancel={handleCancelEdit}
  />
) : (
    null
)}            
                                </Box>
                </Box>
            </Box>
        </div>
    );
};

export default admin;
