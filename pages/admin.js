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
    Divider,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReservationEdit from "./reservation_edit";


const admin = () => {
    const router = useRouter();
    const handleReservaation_Add = (id) => {
        router.push(`/reservation_add`);
    };
    const { isLoggedIn } = useContext(AuthContext);
    const [showComponent, setShowComponent] = useState(false);

    const [sliderIndex, setSliderIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    const [actorData, setActorData] = useState(null);
    const [showPage, setShowPage] = useState(false);

    const [showEditPage, setShowEditPage] = useState(false);
    const [reservationData, setReservationData] = useState(false);

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
            .then((data) => setPerformance(data))
            .catch((error) => console.error(error));
    }, []);

    for (let i = 0; i < Times.length; i++) {
        // view_day 파싱
        const dateRegex = /^(\d{4}-\d{2}-\d{2})/;
        const matchedDay = Times[i].view_date.match(dateRegex);
        Times[i].view_date = matchedDay[1];
    }



    //공연 조회
    const { isOpen: isViewModalOpen, onOpen: onViewModalOpen, onClose: onViewModalClose } = useDisclosure();
    //공연 수정
    const { isOpen: isEditModalOpen, onOpen: onEditModalOpen, onClose: onEditModalClose } = useDisclosure();
    //공연 삭제
    const { isOpen: isDelModalOpen, onOpen: onDelModalOpen, onClose: onDelModalClose} = useDisclosure();

    const [selectedPerformance, setSelectedPerformance] = useState(null);
    
    const groupData = (performanceId) => {
        const finditem = dataMusical.find(item => item.id === performanceId);
        setSelectedPerformance(finditem);
    }

    const onViewModal = (performanceId) => {
        groupData(performanceId)
        onViewModalOpen();
    };

    const onEditModal = (performanceId) => {
        groupData(performanceId)
        onEditModalOpen();
    };

    const onDelModal = (performanceId) => {
        groupData(performanceId)
        onEditModalOpen();
    };

    useEffect(() => {
        // 로그인 상태를 체크하여 로그인하지 않은 경우 login 페이지로 리다이렉트
        //나중에 로컬+서버 각각 쿠키 캐시 코드에서 사용자 로그인 상태 확인, 유지 하는걸로 바꿔야함. 안그럼 해킹 쏘 퍼킹 이지 해짐. 유가릿? 디스이즈 저스트 뽈 테스트. 근데 캐시 로직은 누가 짜려나 히히
        if (!isLoggedIn) {
          router.push('/login');
        }
      }, [isLoggedIn, router]);

    // useEffect(() => { //컴포먼트 연결 지연 테스트코드
    // const timer = setTimeout(() => {
    //     setShowComponent(true);
    // }, 500);

    // return () => clearTimeout(timer);
    // }, []);

    const handleClick = () => {
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
    const dataMusical = Performance.map((PerformanceItem) => ({
        id: PerformanceItem.performance_key,
        image: PerformanceItem.img_url,
        title: PerformanceItem.title,
        description: PerformanceItem.address + PerformanceItem.location,
    }));

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
                    <Link color="inactiveColor" href="./reservationadd"><Button>공연 추가</Button></Link>
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
                                                                <ModalCloseButton/>
                                                                <ModalBody>
                                                                    <Text fontWeight='bold' mb='1rem'>
                                                                        여기서 확인해보세요.
                                                                    </Text>
                                                                    <Box>
                                                                    <Flex>
                                                                        <Image src={selectedPerformance.img_url} 
                                                                        style={{
                                                                            width: "20%",
                                                                            objectFit: "cover",
                                                                        }}/>
                                                                        <Box ml="30px">
                                                                            {selectedPerformance && (
                                                                                <>
                                                                                    <Text fontSize="30px">{selectedPerformance.title}</Text>
                                                                                    {Times.filter(Times.performance_key === selectedPerformance.performance_key).map((Dtime) => (
                                                                                        <Box key={Dtime.view_date}>
                                                                                                <Text fontSize="30px">{Dtime.view_date}</Text>
                                                                                                <Flex flexWrap="wrap" mt="10px">
                                                                                                    {Dtime.filter(Dtime.view_date === Times.view_date).map((time) => (
                                                                                                    <Link key={time} color="inactiveColor" href="./reservation_check">
                                                                                                        <Button ml="10px" mt="10px">
                                                                                                            {time.view_time}
                                                                                                        </Button>
                                                                                                    </Link>
                                                                                                    ))}
                                                                                                </Flex>
                                                                                        </Box>
                                                                                    ))}
                                                                                </>
                                                                            )}
                                                                        </Box>
                                                                    </Flex>
                                                                    <Flex>
                                                                        
                                                                    </Flex>
                                                                    </Box>
                                                                    
                                                                    
                                                                </ModalBody>

                                                                <ModalFooter>
                                                                    <Button mr={3} onClick={() => onViewModal(item.id)} >
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
                                                                <ModalCloseButton/>
                                                                <ModalBody>
                                                                    <Text fontWeight='bold' mb='1rem'>
                                                                        여기서 확인해보세요.
                                                                    </Text>
                                                                    <Box>
                                                                    <Flex>
                                                                        <Image src={selectedPerformance.img_url} 
                                                                        style={{
                                                                            width: "20%",
                                                                            objectFit: "cover",
                                                                        }}/>
                                                                        <Box ml="30px">
                                                                            {selectedPerformance && (
                                                                                <>
                                                                                <Box>
                                                                                <Text fontSize="30px">{selectedPerformance.title}</Text>
                                                                                {Times.filter(Times.performance_key === selectedPerformance.performance_key).map((time) => (
                                                                                    <Box key={Dtime.view_date}>
                                                                                        <Link key={time} color="inactiveColor"><Button ml="20px">{time.view_time}</Button></Link>
                                                                                    </Box>
                                                                                ))}
                                                                                <br/>
                                                                                </Box>
                                                                                </>
                                                                            )}
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
                                                                <ModalCloseButton/>
                                                                <ModalBody>
                                                                    <Text fontWeight='bold' mb='1rem'>
                                                                        삭제하길 원하는 시간대를 선택해주세요, 일괄 삭제를 원하시면 우측 버튼을 눌러주세요.
                                                                        <Button ml="100px">일괄 삭제</Button>
                                                                    </Text>
                                                                    <Box>
                                                                    <Flex>
                                                                        <Image src={selectedPerformance.img_url} 
                                                                        style={{
                                                                            width: "20%",
                                                                            objectFit: "cover",
                                                                        }}/>
                                                                        <Box ml="30px">
                                                                            {selectedPerformance && (
                                                                            <Box>
                                                                                <Text fontSize="30px">{selectedPerformance.title}</Text>
                                                                                {Times.filter(Times.performance_key === selectedPerformance.performance_key).map((Dtime) => (
                                                                                <Link key={time} color="inactiveColor" href="./reservation_edit">
                                                                                    <Button ml="20px">{Dtime.view_time}</Button>
                                                                                </Link>
                                                                                ))}
                                                                                <br/>
                                                                            </Box>
                                                                            )}
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

export default admin;
