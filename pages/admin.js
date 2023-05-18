//import NextLink from "next/link";
import {
    Text,
    Button,
    Divider,
    Box,
    Flex,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Image,

} from "@chakra-ui/react";
import React, { useState, Fragment,} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const admin = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const handleSliderChange = (index) => {
        setSliderIndex(index);
      };
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        afterChange: (index) => handleSliderChange(index),
      };
    //뮤지컬학과 데이터
    const dataMusical = [
        {
            image: 'https://www.m-i.kr/news/photo/202101/784601_561474_542.jpg',
            title: '오페라의 유령',
            description: '04월 18일(화) 온라인, 강남구'
          },
          {
            image: 'https://www.kgnews.co.kr/data/photos/20220728/art_16578463029062_e1b76e.jpg',
            title: '마틸다',
            description: '04월 18일(화) 온라인, 강남구'
          },
          {
            image: 'https://image.yes24.com/images/chyes24/froala/0/44431/26305.jpg0',
            title: '문스토리',
            description: '04월 18일(화) 온라인, 강남구'
          },
          {
            image: 'https://newsimg.sedaily.com/2018/10/22/1S60FSQK8D_1.jpg',
            title: '그날들',
            description: '04월 18일(화) 온라인, 강남구'
          },
          {
            image: 'https://img.newspim.com/news/2018/11/01/1811011558557240.jpg',
            title: '젠틀맨스가이드-사랑과 살인편',
            description: '04월 18일(화) 온라인, 강남구'
          }
     
        ];

    return (
        
        
        <div style={{display: 'flex'}}>

            {/* 1번 박스(관리자 사이드바/관리자페이지) */}
            <Box flex="1" borderRight="2px solid" borderColor="inherit">
                {/* 관리자 사이드바 */}
                
                  <Flex as="nav" direction= "column" align="center" justify="space-between">
                      <Flex align="center" mr={5}/>   
                      <Flex mr="20px"align="center" direction="column">
                          <Text mb={3}mt={8}>관리자 메뉴</Text>
                          <Button mb={3}>예약자 확인</Button>
                          <Button mb={3}>배우 관리</Button>
                      </Flex>
                  </Flex>
                
                     
            </Box>
            
            
            
            {/* 2번 박스(관리자 페이지/편집 공간) */}
            <Box w="80%">
                {/* 관리자 페이지 */}
                <Box  ml="60px" mt="30px" width="100%">
                  현재 공연 목록을 조회하고, 편집할 수 있는 공간이에요.
                      <br/>
                      <br/>
                      <Text fontSize="40px" mb="30px">등록 공연</Text> 
                      
                </Box>
                <Box ml="50px" display="flex" border="1px solid" borderColor="inherit">
                    {/* 등록 공연 목록/공연 추가 */}
                    
                    
                    {/* 등록 공연 목록 */}
                    
                    <Box ml="30px" w="60%" >
                    
                      <Box >
                        <Box w="90%">
                        <Slider {...settings}>
                        {dataMusical.map((item, index) => (
                          <Box key={index} px={10}>
                            <Card maxW="xl" maxH="lg" borderWidth="0" borderRadius="sm" overflow="hidden">
                              <Image mt="30px" mx="auto" src={item.image} alt={item.title} style={{ width: '150px', height: '200px'}}/>
                              <CardHeader>
                                <Text fontSize="sm" fontWeight="bold"  mt={2} style={{whiteSpace: 'nowrap', textoverflow: 'ellipsis', width: '80%'}}>
                                 {item.title}
                                </Text>
                              </CardHeader>
                              <CardBody h="60px">
                                <Text fontSize="md">{item.description}</Text>
                              </CardBody>
                              <CardFooter>
                              <Button colorScheme="blue">예매하기</Button>
                              </CardFooter>
                            </Card>
                          </Box>
                          ))}
                        </Slider>
                        </Box>    
                      </Box>
                      
                    </Box>

                    {/* 공연 추가 */}
                    <Box mt="150px" w="40%" h="100%"  >
                        <Text fontSize="50px" mt="50px" mb="30px" textAlign="center">공연 관리</Text>
                        <Flex align="center" direction="column">
                        
                        <Button mb={3}>공연 추가</Button>
                        <Button mb={3}>공연 삭제</Button>
                      </Flex>
                        
                    </Box>
                </Box>
                
               
                {/* 편집 공간 */}
                <Box  flex="1" ml="50px" mt="80px" border="1px solid" borderColor="inherit" overflow="auto" >
                <Text>하단에 출력됩니다!</Text>
                </Box>
            </Box>
            
        </div>  
    );
}

export default admin;