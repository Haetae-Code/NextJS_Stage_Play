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
        slidesToShow: 5,
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
            <Box>
                {/* 관리자 사이드바 */}
                <Flex as="nav" direction= "column" align="center" justify="space-between">
                    <Flex align="center" mr={5}/>   
                    <Flex align="center" direction="column">
                        <Text mb={3}mt={8}>관리자 메뉴</Text>
                        <Button mb={3}>공연 관리</Button>
                        <Button mb={3}>예약자 확인</Button>
                        <Button mb={3}>Link 3</Button>
                    </Flex>
                </Flex>     
            </Box>
            
            <Box h="100vh" borderWidth="1px" borderColor="inherit" marginLeft="50px"/>
            
            {/* 2번 박스(관리자 페이지/편집 공간) */}
            <Box width="100%">
                {/* 관리자 페이지 */}
                <Box mt="30px" width="100%" display="flex">
                    {/* 등록 공연 목록/공연 추가 */}
                    
                    {/* 등록 공연 목록 */}
                    <Box width="70%" border="1px solid">
                      현재 공연 목록을 조회하고, 편집할 수 있는 공간이에요.
                      <Text mt="30px">등록 공연</Text>
                        {/* 슬라이드 들어가는 부분*/}

                    </Box>

                    {/* 공연 추가 */}
                    <Box width="30%" border="1px solid" >
                        공연 관리
                    </Box>
                </Box>


                {/* 편집 공간 */}
                <Box mt="30px" border="1px solid" >
                    ss
                </Box>
            </Box>
            
        </div>  
    );
}

export default admin;