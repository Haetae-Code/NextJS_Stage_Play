//import NextLink from "next/link";
import { useRouter } from 'next/router';
import { AuthContext } from '../components/AuthProvider';
import NextLink from 'next/link';

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
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Admin = () => {
    const router = useRouter();

    const handleCheckPage = (performance_key, selectedDate, selectedTime) => {
        let time_key = searchtime_key(performance_key, selectedDate, selectedTime);
        router.push({
          pathname: '/reservation_check',
          query: { performance_key, selectedDate, selectedTime, time_key }
        });
      };
    const handleEditPage = (performance_key, selectedDate, selectedTime) => {
        let time_key = searchtime_key(performance_key, selectedDate, selectedTime);
        router.push({
          pathname: '/reservation_edit',
          query: { performance_key, selectedDate, selectedTime, time_key }
        });
      };
    const handleDel = (performance_key, view_date, view_time) => {
        const confirmDelete = window.confirm("정말로 삭제 하시겠습니까?");
        if (confirmDelete) {
            const handleDelete = (performance_key, view_date, view_time) => {
                const time_key = searchtime_key(performance_key, 
                                                electedDate, selectedTime);
                fetch(`/api/ReservationEdit`, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(performance_key, 
                                        view_date, view_time, 
                                        time_key),
                })
                  .then(() => {
                    window.alert("삭제되었습니다");
                  })
                  .catch((error) => console.error(error));
              };
        }
      }
    
    const { isLoggedIn } = useContext(AuthContext);
    {/*const [showComponent, setShowComponent] = useState(false);*/}

    const [sliderIndex, setSliderIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    {/*const [actorData, setActorData] = useState(null);
const [showPage, setShowPage] = useState(false);*/}

    {/*const [showEditPage, setShowEditPage] = useState(false);
const [reservationData, setReservationData] = useState(false);*/}

    const [Performance, setPerformance] = useState([]);
    useEffect(() => {
        fetch("/api/Performance")
            .then((response) => response.json())
            .then((data) => setPerformance(data))
            .catch((error) => console.error(error));
    }, []);

    const [Times, setTimes] = useState([]);
    useEffect(() => {
        fetch("/api/Times")
            .then((response) => response.json())
            .then((data) => setTimes(data))
            .catch((error) => console.error(error));
    }, []);

    for (let i = 0; i < Times.length; i++) {
        // view_date 파싱
        const dateRegex = /^(\d{4}-\d{2}-\d{2})/;
        const matchedDay = Times[i].view_date.match(dateRegex);
        Times[i].view_date = matchedDay[1];
    }  

    //공연 조회
    const { isOpen: isViewModalOpen, onOpen: onViewModalOpen, onClose: onViewModalClose } = useDisclosure();
    //공연 수정
    const { isOpen: isEditModalOpen, onOpen: onEditModalOpen, onClose: onEditModalClose } = useDisclosure();
    //공연 삭제
    const { isOpen: isDelModalOpen, onOpen: onDelModalOpen, onClose: onDelModalClose } = useDisclosure();

    const [selectedPerformance, setSelectedPerformance] = useState(null);
    {/*const [selectedPerformanceTimes, setSelectedPerformanceTimes] = useState([]);*/}

    const onViewModal = (performanceId) => {
        setSelectedPerformance(performanceId)
        onViewModalOpen();
    };

    const onEditModal = (performanceId) => {
        setSelectedPerformance(performanceId)
        onEditModalOpen();
    };

    const onDelModal = (performanceId) => {
        setSelectedPerformance(performanceId)
        onEditModalOpen();
    };

    useEffect(() => {
        // 로그인 상태를 체크하여 로그인하지 않은 경우 login 페이지로 리다이렉트
        //나중에 로컬+서버 각각 쿠키 캐시 코드에서 사용자 로그인 상태 확인, 유지 하는걸로 바꿔야함. 안그럼 해킹 쏘 퍼킹 이지 해짐. 유가릿? 디스이즈 저스트 뽈 테스트. 근데 캐시 로직은 누가 짜려나 히히
        if (!isLoggedIn) {
            router.push('/login');
        }
    }, [isLoggedIn, router]);

    {/*const handleClick = () => {
        setShowEditPage((prevValue) => !prevValue);
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
    };*/}

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
    const dataMusical = Performance.map((PerformanceItem) => ({
        id: PerformanceItem.performance_key,
        image: PerformanceItem.img_url,
        title: PerformanceItem.title,
        description: PerformanceItem.address + PerformanceItem.location,
    }));

    const searchtime_key = (performance_key, selectedDate, selectedTime) => {
        const result = Times
        .filter(item =>
            item.performance_key === performance_key &&
            item.view_date === selectedDate &&
            item.view_time === selectedTime
        )
        .map(item => item.time_key);

        return result;
    }

    const performanceTimesByDate = {};

    Times.forEach((time) => {
        const performanceId = time.performance_key;
        const date = time.view_date;

        if (!performanceTimesByDate[performanceId]) {
            performanceTimesByDate[performanceId] = {};
        }

        if (!performanceTimesByDate[performanceId][date]) {
            performanceTimesByDate[performanceId][date] = [];
        }

        performanceTimesByDate[performanceId][date].push(time.view_time);
    });

    return (
        <div>
            {isLoggedIn ? (
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
                            <Box mt="-40px" mr="60px" mb="10px" align="right">
                                <Link color="inactiveColor" href="./reservation_add"><Button>공연 추가</Button></Link>
                            </Box>
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
                                                                onClick={() => onViewModal(item.id)}
                                                            >
                                                                조회
                                                            </Button>


                                                            <Modal isOpen={isViewModalOpen} onClose={onViewModalClose}>
                                                                <ModalOverlay
                                                                    bg='transparent'
                                                                    backdropFilter='blur(10px)'
                                                                />
                                                                <ModalContent
                                                                    display="flex"

                                                                    maxW="1200px"
                                                                    height="800px"
                                                                >
                                                                    <ModalHeader>공연 정보</ModalHeader>
                                                                    <ModalCloseButton />
                                                                    <ModalBody>
                                                                        <Text fontWeight='bold' mb='1rem'>
                                                                            여기서 확인해보세요.
                                                                        </Text>
                                                                        <Box>
                                                                            <Flex>
                                                                                <Image
                                                                                    src={dataMusical.find(item => item.id === selectedPerformance)?.image}
                                                                                    style={{
                                                                                        width: "20%",
                                                                                        objectFit: "cover",
                                                                                    }}
                                                                                    alt='NO IMAGE'
                                                                                />
                                                                                <Box ml="30px">
                                                                                    {dataMusical.filter((item) => item.id === selectedPerformance).map((item) => (
                                                                                        <React.Fragment key={item.id}>
                                                                                            <Text fontSize="30px">{item.title}</Text>
                                                                                            {Object.keys(performanceTimesByDate[selectedPerformance]).map((date) => (
                                                                                                <Box key={date}>
                                                                                                    <Text fontSize="30px">{date}</Text>
                                                                                                    <Flex flexWrap="wrap" mt="10px">
                                                                                                        {performanceTimesByDate[selectedPerformance][date].map((time) => (
                                                                                                            <Link
                                                                                                                key={time}
                                                                                                                color="inactiveColor"
                                                                                                                onClick={() => handleCheckPage(selectedPerformance, date, time)}
                                                                                                            >
                                                                                                                <Button ml="10px" mt="10px">
                                                                                                                    {time}
                                                                                                                </Button>
                                                                                                            </Link>
                                                                                                        ))}
                                                                                                    </Flex>
                                                                                                </Box>
                                                                                            ))}
                                                                                        </React.Fragment>
                                                                                    ))}
                                                                                </Box>
                                                                            </Flex>
                                                                            <Flex>

                                                                            </Flex>
                                                                        </Box>


                                                                    </ModalBody>

                                                                    <ModalFooter>
                                                                        <Button mr={3} onClick={onViewModalClose} >
                                                                            닫기
                                                                        </Button>

                                                                    </ModalFooter>
                                                                </ModalContent>

                                                            </Modal>

                                                            <Button
                                                                size="sm"
                                                                colorScheme="blue"
                                                                onClick={() => onEditModal(item.id)}
                                                                ml="10px"
                                                                mr="10px"
                                                            >
                                                                수정
                                                            </Button>
                                                            <Modal isOpen={isEditModalOpen} onClose={onEditModalClose}>
                                                                <ModalOverlay
                                                                    bg='transparent'
                                                                    backdropFilter='blur(10px)'
                                                                />
                                                                <ModalContent
                                                                    display="flex"

                                                                    maxW="1200px"
                                                                    height="800px"
                                                                >
                                                                    <ModalHeader>공연 정보</ModalHeader>
                                                                    <ModalCloseButton />
                                                                    <ModalBody>
                                                                        <Text fontWeight='bold' mb='1rem'>
                                                                            여기서 확인해보세요.
                                                                        </Text>
                                                                        <Box>
                                                                            <Flex>
                                                                                <Image
                                                                                    src={dataMusical.find(item => item.id === selectedPerformance)?.image}
                                                                                    style={{
                                                                                        width: "20%",
                                                                                        objectFit: "cover",
                                                                                    }}
                                                                                    alt='NO IMAGE'
                                                                                />
                                                                                <Box ml="30px">
                                                                                    {dataMusical.filter((item) => item.id === selectedPerformance).map((item) => (
                                                                                        <React.Fragment key={item.id}>
                                                                                            <Text fontSize="30px">{item.title}</Text>
                                                                                            {Object.keys(performanceTimesByDate[selectedPerformance]).map((date) => (
                                                                                                <Box key={date}>
                                                                                                    <Text fontSize="30px">{date}</Text>
                                                                                                    <Flex flexWrap="wrap" mt="10px">
                                                                                                        {performanceTimesByDate[selectedPerformance][date].map((time) => (
                                                                                                            <Link
                                                                                                                key={time}
                                                                                                                color="inactiveColor"
                                                                                                                onClick={() => handleEditPage(selectedPerformance, date, time)}                                                                                                          
                                                                                                            >
                                                                                                                <Button ml="10px" mt="10px">
                                                                                                                    {time}
                                                                                                                </Button>
                                                                                                            </Link>
                                                                                                        ))}
                                                                                                    </Flex>
                                                                                                </Box>
                                                                                            ))}
                                                                                        </React.Fragment>
                                                                                    ))}
                                                                                </Box>

                                                                            </Flex>
                                                                            <Flex>

                                                                            </Flex>
                                                                        </Box>


                                                                    </ModalBody>

                                                                    <ModalFooter>
                                                                        <Button mr={3} onClick={onEditModalClose}>
                                                                            닫기
                                                                        </Button>

                                                                    </ModalFooter>
                                                                </ModalContent>

                                                            </Modal>


                                                            <Button
                                                                size="sm"
                                                                colorScheme="blue"
                                                                onClick={() => onDelModal(item.id)}
                                                            >
                                                                삭제
                                                            </Button>
                                                            <Modal isOpen={isDelModalOpen} onClose={onDelModalClose}>
                                                                <ModalOverlay
                                                                    bg='transparent'
                                                                    backdropFilter='blur(10px)'
                                                                />
                                                                <ModalContent
                                                                    display="flex"

                                                                    maxW="1200px"
                                                                    height="800px"
                                                                >
                                                                    <ModalHeader>삭제 공연 정보</ModalHeader>
                                                                    <ModalCloseButton />
                                                                    <ModalBody>
                                                                        <Text fontWeight='bold' mb='1rem'>
                                                                            삭제하길 원하는 시간대를 선택해주세요, 일괄 삭제를 원하시면 우측 버튼을 눌러주세요.
                                                                            <Button ml="100px">일괄 삭제</Button>
                                                                        </Text>
                                                                        <Box>
                                                                            <Flex>
                                                                                <Image
                                                                                    src={dataMusical.find(item => item.id === selectedPerformance)?.image}
                                                                                    style={{
                                                                                        width: "20%",
                                                                                        objectFit: "cover",
                                                                                    }}
                                                                                    alt='NO IMAGE'
                                                                                />
                                                                                <Box ml="30px">
                                                                                    {dataMusical.filter((item) => item.id === selectedPerformance).map((item) => (
                                                                                        <React.Fragment key={item.id}>
                                                                                            <Text fontSize="30px">{item.title}</Text>
                                                                                            {Object.keys(performanceTimesByDate[selectedPerformance]).map((date) => (
                                                                                                <Box key={date}>
                                                                                                    <Text fontSize="30px">{date}</Text>
                                                                                                    <Flex flexWrap="wrap" mt="10px">
                                                                                                        {performanceTimesByDate[selectedPerformance][date].map((time) => (
                                                                                                            <Link
                                                                                                                key={time}
                                                                                                                color="inactiveColor"
                                                                                                                //onClick={() => handleDel(selectedPerformance, date, time)}
                                                                                                            >
                                                                                                                <Button ml="10px" mt="10px">
                                                                                                                    {time}
                                                                                                                </Button>
                                                                                                            </Link>
                                                                                                        ))}
                                                                                                    </Flex>
                                                                                                </Box>
                                                                                            ))}
                                                                                        </React.Fragment>
                                                                                    ))}
                                                                                </Box>

                                                                            </Flex>
                                                                            <Flex>

                                                                            </Flex>
                                                                        </Box>
                                                                    </ModalBody>

                                                                    <ModalFooter>
                                                                        <Button mr={3} onClick={onEditModalClose}>
                                                                            닫기
                                                                        </Button>

                                                                    </ModalFooter>
                                                                </ModalContent>

                                                            </Modal>
                                                        </CardFooter>
                                                    </Card>
                                                </Box>
                                            ))}
                                        </Slider>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </div>
            ) : (
                <div>
                    <Box>
                        <Text fontSize="20px" mt="50px" mb="30px" textAlign="center">
                            로그인이 필요한 페이지입니다.
                        </Text>
                        <Button as={NextLink} href="/login" mb={3}>
                            로그인 페이지로 이동
                        </Button>
                    </Box>
                </div>
            )}
        </div>
    );
};

export default Admin;
